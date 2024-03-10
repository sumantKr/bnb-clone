import withAntdLess from "next-plugin-antd-less"
/** @type {import('next').NextConfig} */
const nextConfig = withAntdLess({
    // optional: you can modify antd less variables directly here
    modifyVars: { '@primary-color': '#333333' },
    // Or better still you can specify a path to a file 
    // lessVarsFilePath: '/src/styles/variables.less',
    // optional
    lessVarsFilePathAppendToEndOfContent: false,
    // optional https://github.com/webpack-contrib/css-loader#object
    cssLoaderOptions: {},

    // Other Config Here...

    webpack(config) {
        return config;
    },

    // ONLY for Next.js 10, if you use Next.js 11, delete this block
    future: {
        webpack5: true,
    },
});;

export default nextConfig;
