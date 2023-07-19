import Layout from "../layout/Layout";
import UserItems from "../layout/sidebar/UserItems";
import Home from "../pages/home/Home";



export const routes = [
    {
        path: '/',
        exact: true,
        element: UserItems,
        auth: true,
    },
    {
        path: '/profile/:id',
        exact: false,
        element: Home,
        auth: true,
    },
    {
        path: '/messages',
        exact: true,
        element: Home,
        auth: true,
    },
    {
        path: '/message/:id',
        exact: false,
        element: Home,
        auth: true,
    },
    {
        path: '/friends/:id',
        exact: false,
        element: Home,
        auth: true,
    },
    {
        path: '/auth',
        exact: true,
        element: Home,
        auth: false,
    },
]