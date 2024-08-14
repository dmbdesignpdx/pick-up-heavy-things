/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizeCss: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
