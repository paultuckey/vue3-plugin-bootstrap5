//import vue from 'rollup-plugin-vue';
//import PostCSS from 'rollup-plugin-postcss'
import NodeResolve from '@rollup/plugin-node-resolve'
import commonjs from "rollup-plugin-commonjs";

export default {
    input: 'src/VbPlugin.js',
    output: [
        {
            file: 'dist/vb-plugin.esm.js',
            format: 'es',
        },
        {
            name: 'reforms',
            file: 'dist/vb-plugin.umd.js',
            format: 'umd',
        },
        {
            file: 'dist/vb-plugins.min.js',
            format: 'iife',
        },
    ],
    plugins: [
        NodeResolve(),
        commonjs()//,
        // vue({
        //     cssModulesOptions: {
        //         generateScopedName: '[local]___[hash:base64:5]',
        //     },
        // }),
        //PostCSS()
    ],
    external: ['vue', 'boostrap'],
};