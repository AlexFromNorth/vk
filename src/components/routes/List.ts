import Layout from "../layout/Layout";
import Auth from "../pages/auth/Auth";
import Friends from "../pages/friends/Friends";
import Home from "../pages/home/Home";
import Conversation from "../pages/messages/Conversation";
import Messages from "../pages/messages/Messages";
import Profile from "../pages/profile/Profile";



export const routes = [
    {
        path: '/',
        exact: true,
        element: Home,
        auth: true,
    },
    {
        path: '/profile/',
        exact: false,
        element: Profile,
        auth: true,
    },
    {
        path: '/profile/:id',
        exact: false,
        element: Profile,
        auth: true,
    },
    {
        path: '/messages',
        exact: true,
        element: Messages,
        auth: true,
    },
    {
        path: '/message/:id',
        exact: false,
        element: Conversation,
        auth: true,
    },
    {
        path: '/friends',
        exact: false,
        element: Friends,
        auth: true,
    },
    {
        path: '/auth',
        exact: true,
        element: Auth,
        auth: false,
    },
]