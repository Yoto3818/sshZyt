export default {
    path : '/Film',
    component : () => import('@/views/Film'),
    children:[
        {
            path:'city',
            component : () => import('@/components/City')
        },
        {
            path:'NowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path:'willPlaying',
            component : () => import('@/components/WillPlaying')
        },
        {
            path:'search',
            component : () => import('@/components/Search')
        }
    ]

}