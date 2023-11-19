/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.externals.push("sharp", "canvas", "fs-extra");
		}
		return config;
	},
};

module.exports = nextConfig;
