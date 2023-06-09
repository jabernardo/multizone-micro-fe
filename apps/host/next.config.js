//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

const DOMAIN = process.env.DOMAIN || 'localhost'

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/about',
        destination: `http://${DOMAIN}:3001/about`
      },
      {
        source: '/about/:path*',
        destination: `http://${DOMAIN}:3001/about/:path*`
      }
    ]
  }
};

module.exports = withNx(nextConfig);
