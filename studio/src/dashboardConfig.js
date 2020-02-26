export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e567f0c98a1b49734afcde8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9wmmgfas',
                  apiId: '8e427c54-2f56-4aed-baae-e33319398f89'
                },
                {
                  buildHookId: '5e567f0d37cdfb8beeab002e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ygygsodw',
                  apiId: '1acbd58a-5581-452b-8d9d-fa200dd768a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TobyDai/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ygygsodw.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
