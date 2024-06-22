/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    async generateStaticParams() {
        // Example: Fetch data from an API or database to determine which paths to pre-render
        // For simplicity, we can return an empty array since we don't have dynamic data here
        return [];
      },
};

export default nextConfig;
