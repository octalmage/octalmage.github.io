/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    assetPrefix: './',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
    optimizeFonts: false, async rewrites() {
        return [
            {
                source: '/(links|lnk|l)',
                destination: '/',
            },
        ]
    },
    webpack: (config, options) => {
        config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }))

        return config
    },
}

module.exports = nextConfig
