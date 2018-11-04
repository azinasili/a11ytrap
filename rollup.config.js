import { eslint } from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify-es';
import license from 'rollup-plugin-license';
import pkg from './package.json';

const banner = `/*!
 * A11yTrap v${pkg.version}
 * (c) 2017-${new Date().getFullYear()} ${pkg.author}
 * MIT License.
 */
`;

export default {
  input: 'src/a11ytrap.js',
  output: [
    {
      banner,
      file: pkg.main,
      format: 'umd',
      name: 'A11yTrap',
    },
    {
      banner,
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    eslint({
      include: '{src,tests}/**/*.js',
      throwOnError: true,
      throwOnWarning: true,
    }),
    babel(),
    uglify(),
    license({
      banner,
    }),
  ],
};
