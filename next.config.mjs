/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [new URL('https://cdn3.iconfinder.com/**')]
    } , 
    reactStrictMode: false
};

export default nextConfig;
