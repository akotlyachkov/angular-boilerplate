import angular from 'rollup-plugin-angular';
export default {
    entry: 'client/app/index.js',
    format: 'iife',
    dest: 'test/bundle.js',
    plugins: [
        angular(),
        //alias({ rxjs: __dirname + '/node_modules/rxjs-es' }), // rxjs fix (npm install rxjs-es)
        //nodeResolve({ jsnext: true, main: true })
    ]
}