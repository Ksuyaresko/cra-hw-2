import React from "react";
import './header.css'

export default function Header() {
    const link = (title, href) => (<a href={href} className='header__link'>{title}</a>)
    return (
        <header className="header">
            {link('Почта', '#')}
            {link('Картинки', '#')}
        </header>
    );
}