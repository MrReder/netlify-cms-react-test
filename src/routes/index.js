import { Main } from "../pages/main";
import { Posts } from "../pages/posts";
import { Gallery } from "../pages/gallery";
import { Contacts } from "../pages/contacts";
import { ContactTest } from "../pages/contact-test";


export const AppRoutes = [
    {
        path: '/',
        exact: true,
        component: Main
    },
    {
        path: '/posts',
        component: Posts
    },
    {
        path: '/gallery',
        component: Gallery
    },
    {
        path: '/contacts',
        component: Contacts
    },
    {
        path: '/contacts/contact-test',
        exact: true,
        component: ContactTest
    }
];