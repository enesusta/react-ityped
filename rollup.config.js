import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import json from '@rollup/plugin-json';
import { terser } from "rollup-plugin-terser";

const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json'];

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    babel({
      babelrc: false,
      presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
      extensions: EXTENSIONS,
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    commonjs({
      include: 'node_modules/ityped/**'
    }),
    resolve({
      extensions: ['.jsx', '.js'],
      preferBuiltins: false
    }),
    json({ compact: true }),
    terser()
  ],
  external: ['react', 'react-dom']
};
