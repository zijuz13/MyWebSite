const router=new VueRouter({
    routes:[
        {
            path: '/',
            component: sidebar,
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    component: index
                    // name: 'Dashboard',
                    // meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
                },
                {
                    path: 'projects',
                    component: projects
                    // name: 'Dashboard',
                    // meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
                },
                {
                    path: 'blogDisplay',
                    component: blog
                    // name: 'Dashboard',
                    // meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
                },
                {
                    path: 'projectDisplay',
                    component: project
                    // name: 'Dashboard',
                    // meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
                }
            ]
        },
    ]
})
