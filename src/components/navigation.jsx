import { Link } from "react-router-dom";

const links = [
    {
        to: '/',
        label: 'Main'
    },
    {
        to: '/posts',
        label: 'Posts'
    },
    {
        to: '/gallery',
        label: 'Gallery'
    },
    {
        to: '/contacts',
        label: 'Contacts'
    }
    // {
    //     to: '/contacts/contact-test',
    //     label: 'Contact-test'
    // }
];

export const Navigation = () => (
    <nav className="navigation">
        <div className="navigation">
            {links.map(link => (
                <p key={link.to} className="navigation-item">
                    <Link to={link.to}>{link.label}</Link>
                </p>
            ))}
        </div>
    </nav>
);