/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // This enables static export
    trailingSlash: true,  // Recommended for static exports

    // If you're using image optimization
    images: {
        unoptimized: true,  // Required for static export
    },

    // You can add your custom webpack config here if needed
    webpack: (config) => {
        config.module.rules.push({
            test: /\.json$/,
            type: 'json'
        });
        return config;
    }
};

export default nextConfig;