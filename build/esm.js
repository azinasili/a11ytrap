import build from './build';

export default Object.assign(build, {
  input: 'src/a11ytrap.js',
  output: Object.assign(build.output, {
    file: 'dist/a11ytrap.esm.js',
    format: 'es',
  }),
});
