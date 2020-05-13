export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ebbcb6866e83cf2f2bda41a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-t23v94gp',
                  apiId: '7f6eb6ac-89e5-4ab8-a9bf-195e7f0df44d'
                },
                {
                  buildHookId: '5ebbcb68873ac037b8d05f74',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-3md1vkdt',
                  apiId: '1aec8149-9b9b-4410-a2d3-85523fa34976'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mettema/sanity-nextjs-landing-pages-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-3md1vkdt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
