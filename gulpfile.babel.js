import gulp from "gulp";
import ts from "gulp-typescript";
const tsProject = ts.createProject("tsconfig.json");

const routes = {
  typescript: {
    dest: "build"
  }
};

const typescript = () =>
  tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest(routes.typescript.dest));

export const dev = gulp.series(typescript);
