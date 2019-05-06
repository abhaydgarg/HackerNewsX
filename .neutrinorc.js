module.exports = {
  options: {
    output: 'docs',
  },
  use: [
    ['@neutrinojs/react', {
      html: {
        title: 'HackerNewsX',
        minify: {
          useShortDoctype: true,
          keepClosingSlash: true,
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        googleAnalytics: googleAnalytics(),
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
        headHtmlSnippet: headHtmlSnippet(),
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

function googleAnalytics () {
  if (process.env.NODE_ENV === 'development') {
    return undefined;
  }
  return {
    trackingId: 'UA-137847359-1',
    pageViewOnLoad: true
  }
}

function headHtmlSnippet () {
  if (process.env.NODE_ENV === 'development') {
    return undefined;
  }
  return `<script> window.addEventListener('hashchange', function (event) { if (typeof ga !== 'undefined') { ga('set', 'page', location.pathname + location.hash); ga('send', 'pageview'); } }); </script>`;
}
