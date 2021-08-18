import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/vue-gr-model.js',
  output: [
    { file: 'dist/index.js', format: 'cjs', exports: 'default' },
    { file: 'dist/index.min.js', format: 'cjs', plugins: [terser()], exports: 'default' },
    { file: 'dist/index.esm.js', format: 'esm', exports: 'default' }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env']
    })
  ]
};
