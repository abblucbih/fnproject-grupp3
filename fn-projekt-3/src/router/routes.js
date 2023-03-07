
  const routes = [
    {
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      children: [
        { path: '', component: () => import('pages/Index.vue') },
        { path: 'login', component: () => import('src/pages/login.vue') },
        { path: 'signup', component: () => import('src/pages/signup.vue') },
        { path: 'fish', component: () => import('src/pages/FishPage.vue') },
        { path: 'back', component: () => import('src/pages/Fish.vue') },
        { path: 'sea', component: () => import('src/pages/SeaPage.vue') },
          { path: 'donation', component: () => import('src/pages/Donation.vue') },
        { path: 'bookMarked', component: () => import('src/pages/BookMarked.vue') },

      ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
      path: '/:catchAll(.*)*',
      component: () => import('pages/Error404.vue')
    }
  ]

  export default routes
