import React from "react";
import './header.css'

export default function Header(props) {

    const link = (title, href, index) => (<a href={href} className='header__link' key={index}>{title}</a>)

    return (
        <header className="header">
            {props.links.map( (el, index) => (
                link(el.title, el.href, index)
            ))}
        </header>
    );
}