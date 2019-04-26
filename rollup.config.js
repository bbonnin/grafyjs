import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/grafy.js',
    output: {
        format: 'iife',
        file: 'dist/grafy.min.js',
        name: 'grafy'
    },
    plugins: [
        commonjs(),
        resolve(),
        babel(),
        terser()
    ]
};