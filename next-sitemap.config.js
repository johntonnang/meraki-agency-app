/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.meraki-agency.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/login/',
          '/register/',
          '/user/',
          '/temp/',
          '/private/',
          '/secret/',
          '/*.pdf$',
          '/*.doc$',
          '/*.zip$',
        ],
      },
    ],
    additionalSitemaps: ['https://www.meraki-agency.vercel.app/sitemap.xml'],
  },
};
