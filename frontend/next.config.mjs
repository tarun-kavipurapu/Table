/** @type {import('next').NextConfig} */
const NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/table",
        permanent: true,
      },
    ];
  },
};
export default NextConfig;
