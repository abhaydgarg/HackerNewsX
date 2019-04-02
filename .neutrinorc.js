module.exports = {
  options: {
    output: 'docs',
  },
  use: [
    ['@neutrinojs/react', {
      html: {
        title: 'HackerNewsX',
        // googleAnalytics: {
        //   trackingId: '',
        //   pageViewOnLoad: true
        // },
        links: [
          {
            href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
            rel: 'stylesheet'
          },
          {
            href: './static/favicon.png',
            rel: 'icon',
            sizes: '32x32',
            type: 'image/png'
          },
          {
            href: './static/animate.min.css',
            rel: 'stylesheet'
          }
        ],
        scripts: [
          // (process.env.NODE_ENV === 'development' ? { src: 'http://localhost:8097', type: 'text/javascript' } : {}),
        ],
        meta: [
          {
            name: 'author',
            content: 'Abhay Garg'
          },
          {
            name: 'description',
            content: 'Hacker News 10 recent new, top and best stories.'
          },
          {
            name: 'keywords',
            content: 'hacker, news, stories, top, new, best, recent, 10, ten, x'
          }
        ],
      }
    }]
  ]
};

