import banner from './banner';
import eslint from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';

export default {
  name: 'A11yTrap',
  output: {
    banner,
  },
  plugins: [
    eslint({
      include: '{src,tests}/**/*.js',
      throwOnError: true,
      throwOnWarning: true,
    }),
    babel({
      plugins: [
        'external-helpers',
        'transform-object-assign',
      ],
    }),
  ],
};
