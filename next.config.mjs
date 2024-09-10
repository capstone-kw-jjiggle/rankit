import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**', // 모든 GitHub 사용자 프로필 이미지에 대해 허용
      },
    ],
    domains: ['github.com'], // 이미지를 가져올 수 있는 도메인을 추가
  },
};

export default withVanillaExtract(nextConfig);
