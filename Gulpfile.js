/*
Copyright 2017 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var gulp = require('gulp');
var closureCompiler = require('gulp-closure-compiler');

gulp.task('default', ['build']);

gulp.task('build', function() {
  return gulp.src([
      'src/**/*.js',
    ])
    .pipe(closureCompiler({
      compilerPath: './node_modules/google-closure-compiler/compiler.jar',
      fileName: 'trustedtypes.build.js',
      compilerFlags: {
        compilation_level: 'ADVANCED_OPTIMIZATIONS',
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT5',
        output_wrapper: '(function(){%output%}).call(window);',
        jscomp_warning: ["missingProperties", "visibility"],
        jscomp_error: [
          "missingProvide",
          "missingRequire",
          "accessControls",
          "ambiguousFunctionDecl",
          "checkDebuggerStatement",
          "checkTypes",
          "checkVars",
          "const",
          "constantProperty",
          "duplicate",
          "externsValidation",
          "es5Strict",
          "fileoverviewTags",
          "globalThis",
          "invalidCasts",
          "missingProperties",
          "nonStandardJsDocs",
          "strictModuleDepCheck",
          "suspiciousCode",
          "undefinedNames",
          "undefinedVars",
          "unknownDefines",
          "uselessCode",
          "visibility",
        ]
      }
    }))
    .pipe(gulp.dest('dist'));
});
