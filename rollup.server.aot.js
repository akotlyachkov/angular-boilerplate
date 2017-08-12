import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'client/app/_server/aot.js',
    format: 'iife',
    sourceMap: false,
    treeshake: true,

    plugins: [
        commonjs({include: 'node_modules/rxjs/**'}),
        resolve(),
    ],
    dest: 'client/build/bundle.js',
    onwarn: function (warning) {
        if (warning.code === 'THIS_IS_UNDEFINED')
            return;
        console.error(warning.message);
    }
};