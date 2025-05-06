import gulp from 'gulp';
import babel from 'gulp-babel';

//GLOBAL
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import replace from 'gulp-replace';
import newer from 'gulp-newer';
import browserSync from 'browser-sync';
import clean from 'gulp-clean';
import fs from 'fs';
import versionNumber from 'gulp-version-number';
import zip from 'gulp-zip';
import gulpIf from 'gulp-if';

//HTML
import fileInclude from 'gulp-file-include';
import typograf from 'gulp-typograf';

//SASS
import * as dartsass from 'sass';
import gulpsass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import bulkSass from 'gulp-sass-glob-use-forward';
import groupMedia from 'gulp-group-css-media-queries';
import csso from 'gulp-csso';

const sass = gulpsass(dartsass);

//JS
import webpack from 'webpack-stream';
import TerserPlugin from 'terser-webpack-plugin';

//IMAGES
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
import avif from 'gulp-avif';
import webp from 'gulp-webp';
import imageminWebp from 'imagemin-webp';
import svgsprite from 'gulp-svg-sprite';

//FONTS
import fonter from 'gulp-fonter-fix';
import ttf2woff2 from 'gulp-ttf2woff2';

import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = './src/';
const buildFolder = './build/';
const docsFolder = './docs/';

const isModeP = process.argv.includes('--docs');
const imgMinify = process.argv.includes('--imgmin');
const isModeD = !isModeP;
const destFolder = isModeP ? docsFolder : buildFolder;

// TUMBLERS
const svgHtml = true; // Также нужно вкл или выкл коммент в index.html
const imgAvif = false;
const imgWebp = true;
const imgMin = imgMinify ? true : false;
const typography = false;

const plumberNotify = (title) => {
  return {
    errorHandler: notify.onError({
      title: title,
      message: 'Error <%= error.message %>',
      sound: false,
    }),
  };
};

gulp.task('zip:src', function () {
  return gulp
    .src([`./**/*.zip`, `!${rootFolder}-build.zip`, `!${rootFolder}-prod.zip`])
    .pipe(clean({ force: true }))

    .pipe(
      gulp.src([
        `./**/*.*`,
        `!./node_modules/**/*.*`,
        `!./package-lock.json`,
        `!./build/**/*.*`,
        `!./prod/**/*.*`,
      ])
    )
    .pipe(plumber(plumberNotify('ZIP:src')))
    .pipe(zip(`${rootFolder}-src.zip`))
    .pipe(gulp.dest('./'));
});

gulp.task('zip:build', function () {
  return gulp
    .src([`./**/*.zip`, `!${rootFolder}-src.zip`, `!${rootFolder}-prod.zip`])
    .pipe(clean({ force: true }))

    .pipe(gulp.src(`${buildFolder}**/*.*`))
    .pipe(plumber(plumberNotify('ZIP:build')))
    .pipe(zip(`${rootFolder}.zip`))
    .pipe(gulp.dest('./'));
});

gulp.task('zip:docs', function () {
  return gulp
    .src([`./**/*.zip`, `!${rootFolder}-src.zip`, `!${rootFolder}-build.zip`])
    .pipe(clean({ force: true }))

    .pipe(gulp.src(`${docsFolder}**/*.*`))
    .pipe(plumber(plumberNotify('ZIP:docs')))
    .pipe(zip(`${rootFolder}-docs.zip`))
    .pipe(gulp.dest('./'));
});

gulp.task('clean', function (done) {
  if (fs.existsSync(`${docsFolder}`)) {
    return gulp.src(`${docsFolder}`, { read: false }).pipe(clean({ force: true }));
  }
  if (!isModeP) {
    if (fs.existsSync(`${buildFolder}`)) {
      return gulp.src(`${buildFolder}`, { read: false }).pipe(clean({ force: true }));
    }
  }
  done();
});

gulp.task('html', function () {
  return gulp
    .src([
      `${srcFolder}html/**/*.html`,
      `!${srcFolder}html/blocks/*.html`,
      `!${srcFolder}html/elements/*.html`,
    ])
    .pipe(plumber(plumberNotify('HTML')))
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(
      replace(
        /(?<=src=|href=|srcset=)(['"])(\.(\.)?\/)*(img|images|fonts|css|scss|sass|js|files|audio|video)(\/[^\/'"]+(\/))?([^'"]*)\1/gi,
        '$1./$4$5$7$1'
      )
    )
    .pipe(
      gulpIf(
        typography,
        typograf({
          locale: ['ru', 'en-US'],
          htmlEntity: { type: 'digit' },
          safeTags: [
            ['<\\?php', '\\?>'],
            ['<no-typography>', '</no-typography>'],
          ],
        })
      )
    )
    .pipe(
      versionNumber({
        value: '%MD5%',
        append: {
          key: '_v',
          cover: 0,
          to: ['css', 'js'],
        },
        output: {
          file: 'version.json',
        },
      })
    )
    .pipe(gulp.dest(`${destFolder}`))
    .pipe(browserSync.stream());
});

gulp.task('styles', function () {
  return gulp
    .src(`${srcFolder}scss/*.scss`)
    .pipe(plumber(plumberNotify('SCSS')))
    .pipe(bulkSass())
    .pipe(sass())
    .pipe(groupMedia())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      replace(
        /(['"]?)(\.\.\/)+(img|images|fonts|css|scss|sass|js|files|audio|video)(\/[^\/'"]+(\/))?([^'"]*)\1/gi,
        '$1$2$3$4$6$1'
      )
    )
    .pipe(gulpIf(isModeP, csso()))
    .pipe(gulp.dest(`${destFolder}css/`))
    .pipe(browserSync.stream());
});

import jsPages from './src/js/_jsPages.js';

gulp.task('js', function () {
  return gulp
    .src(`${srcFolder}js/*.js`)
    .pipe(newer(`${buildFolder}js`))
    .pipe(plumber(plumberNotify('JS')))
    .pipe(babel())
    .pipe(
      webpack({
        // mode: isModeP ? 'production' : 'development',
        mode: isModeP ? 'production' : 'none',
        entry: jsPages,
        output: {
          filename: '[name].js',
        },
        module: {
          rules: [
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },
          ],
        },
        optimization: {
          minimize: isModeP,
          minimizer: [
            new TerserPlugin({
              extractComments: false,
              terserOptions: {
                format: {
                  comments: false,
                },
              },
            }),
          ],
          splitChunks: {
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'libs',
                chunks: 'all',
              },
            },
          },
        },
      })
    )
    .pipe(gulp.dest(`${destFolder}js/`))
    .pipe(browserSync.stream());
});

gulp.task('images', function () {
  const imgSrc = [`${srcFolder}images/**/*.*`, `!${srcFolder}images/sprite/**/*.*`];
  return gulp
    .src(imgSrc)

    .pipe(gulpIf(imgAvif, newer(`${destFolder}images`)))
    .pipe(gulpIf(imgAvif, avif({ quality: 85 }))) // 75
    .pipe(gulpIf(imgAvif, gulp.dest(`${destFolder}images`)))
    .pipe(gulpIf(imgAvif, gulp.src(imgSrc)))

    .pipe(gulpIf(imgWebp, newer(`${destFolder}images`)))
    .pipe(gulpIf(imgWebp, webp()))
    .pipe(gulpIf(imgWebp, gulp.dest(`${destFolder}images`)))
    .pipe(gulpIf(imgWebp, gulp.src(imgSrc)))

    .pipe(gulpIf(imgMin, newer(`${destFolder}images`)))
    .pipe(
      gulpIf(
        imgMin,
        imagemin(
          [
            gifsicle({ interlaced: true }),
            mozjpeg({ quality: 90, progressive: true }), // 75
            optipng({ optimizationLevel: 3 }), // 5
            imageminWebp({ quality: 90 }), // 85
          ],
          { verbose: true }
        )
      )
    )
    .pipe(gulp.dest(`${destFolder}images`))
    .pipe(browserSync.stream());
});

gulp.task('svg', function () {
  return gulp
    .src(`${srcFolder}images/sprite/**/*.svg`)
    .pipe(plumber(plumberNotify('SVG:dev')))
    .pipe(
      svgsprite({
        mode: {
          symbol: {
            sprite: svgHtml ? '../sprite.html' : '../sprite.svg',
            inline: svgHtml ? svgHtml : !svgHtml,
          },
        },
        shape: {
          transform: [
            {
              svgo: {
                js2svg: { indent: 4, pretty: true },
                plugins: [
                  {
                    name: 'removeAttrs',
                    params: {
                      attrs: '(fill|stroke)',
                    },
                  },
                ],
              },
            },
          ],
        },
      })
    )
    .pipe(svgHtml ? gulp.dest(`${srcFolder}html/blocks/`) : gulp.dest(`${destFolder}images/`));
});

gulp.task('cleanSvg', function (done) {
  if (fs.existsSync(`${srcFolder}html/blocks/sprite.html`)) {
    return gulp
      .src(`${srcFolder}html/blocks/sprite.html`, { read: false })
      .pipe(clean({ force: true }));
  }
  done();
});

gulp.task('otfToTtf', () => {
  // Ищем файлы шрифтов .otf
  return (
    gulp
      .src(`${srcFolder}fonts/*.otf`, {})
      // Конвертируем в .ttf
      .pipe(
        fonter({
          formats: ['ttf'],
        })
      )
      // Выгружаем в исходную папку
      .pipe(gulp.dest(`${srcFolder}fonts/`))
      .pipe(
        plumber(
          notify.onError({
            title: 'FONTS',
            message: 'Error: <%= error.message %>. File: <%= file.relative %>!',
          })
        )
      )
  );
});

gulp.task('ttfToWoff', () => {
  // Ищем файлы шрифтов .ttf
  return (
    gulp
      .src(`${srcFolder}fonts/*.ttf`, {})
      // Конвертируем в .woff
      .pipe(
        fonter({
          formats: ['woff'],
        })
      )
      // Выгружаем в папку с результатом
      .pipe(gulp.dest(`${destFolder}fonts/`))
      // Ищем файлы шрифтов .ttf
      .pipe(gulp.src(`${srcFolder}fonts/*.ttf`))
      // Конвертируем в .woff2
      .pipe(ttf2woff2())
      // Выгружаем в папку с результатом
      .pipe(gulp.dest(`${destFolder}fonts/`))
      .pipe(
        plumber(
          notify.onError({
            title: 'FONTS',
            message: 'Error: <%= error.message %>',
          })
        )
      )
  );
});

gulp.task('fontsStyle', () => {
  // Файл стилей подключения шрифтов
  let fontsFile = `${srcFolder}scss/bases/_fontsAutoGen.scss`;
  // Проверяем существуют ли файлы шрифтов
  fs.readdir(`${buildFolder}fonts/`, function (err, fontsFiles) {
    if (fontsFiles) {
      // Проверяем существует ли файл стилей для подключения шрифтов

      // Если файла нет, создаем его
      fs.writeFile(fontsFile, '', cb);
      let newFileOnly;
      for (var i = 0; i < fontsFiles.length; i++) {
        // Записываем подключения шрифтов в файл стилей
        let fontFileName = fontsFiles[i].split('.')[0];
        if (newFileOnly !== fontFileName) {
          let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
          let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
          if (fontWeight.toLowerCase() === 'thin') {
            fontWeight = 100;
          } else if (fontWeight.toLowerCase() === 'extralight') {
            fontWeight = 200;
          } else if (fontWeight.toLowerCase() === 'light') {
            fontWeight = 300;
          } else if (fontWeight.toLowerCase() === 'medium') {
            fontWeight = 500;
          } else if (fontWeight.toLowerCase() === 'semibold') {
            fontWeight = 600;
          } else if (fontWeight.toLowerCase() === 'bold') {
            fontWeight = 700;
          } else if (
            fontWeight.toLowerCase() === 'extrabold' ||
            fontWeight.toLowerCase() === 'heavy'
          ) {
            fontWeight = 800;
          } else if (fontWeight.toLowerCase() === 'black') {
            fontWeight = 900;
          } else {
            fontWeight = 400;
          }
          fs.appendFile(
            fontsFile,
            `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`,
            cb
          );
          newFileOnly = fontFileName;
        }
      }
    }
  });

  return gulp.src(`${srcFolder}`);
  function cb() {}
});

gulp.task('files', function () {
  return gulp
    .src([`${srcFolder}files/**/*.*`])
    .pipe(gulp.dest(`${destFolder}`))
    .pipe(browserSync.stream());
});

gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: destFolder,
    },
    browser: 'google chrome',
    notify: false,
    port: 3000,
    ghostMode: {
      clicks: false,
      forms: false,
      location: false,
      scroll: false,
    },
  });
});

gulp.task('watch', function () {
  gulp.watch(`${srcFolder}scss/**/*.scss`, gulp.parallel('styles'));
  gulp
    .watch([`${srcFolder}html/**/*.html`, `${srcFolder}html/**/*.json`], gulp.parallel('html'))
    .on('change', browserSync.reload);
  gulp.watch(`${srcFolder}images/**/*.*`, gulp.parallel('images', 'svg'));
  gulp.watch(`${srcFolder}js/**/*.js`, gulp.parallel('js'));
  gulp.watch(`${srcFolder}files/**/*`, gulp.parallel('files'));
});

gulp.task('fonts', gulp.series('otfToTtf', 'ttfToWoff', 'fontsStyle'));

gulp.task(
  'default',
  gulp.series(
    'clean',
    'fonts',
    gulp.series('cleanSvg', 'svg'),
    gulp.series('html', 'styles', 'files', 'js', 'images'),
    // gulp.parallel('html', 'styles', 'js', 'images', 'files'),
    gulp.parallel('server', 'watch')
  )
);
gulp.task(
  'build',
  gulp.series(
    'clean',
    'fonts',
    gulp.series('cleanSvg', 'svg'),
    gulp.parallel('html', 'styles', 'js', 'images', 'files')
  )
);

gulp.task('zipsrc', gulp.parallel('zip:src'));

gulp.task('zipbuild', gulp.parallel('zip:build'));

gulp.task('zipdocs', gulp.series('zip:docs'));
