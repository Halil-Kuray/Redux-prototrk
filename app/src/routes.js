import Home from './views/Home'
import About from './views/About'
import Profile from './views/Profile'

export const routes =[
    {
        path: '/',
        exact: true,
        component: Home,
        auth: false
    },
    {
        path: '/about',
        exact: true,
        component: About,
        auth: false
    },
    {
        path: '/profile',
        exact: true,
        component: Profile,
        auth: true
    }
]