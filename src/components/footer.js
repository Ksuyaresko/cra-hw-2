import React from "react";
import './footer.css'

export default function Footer(props) {

    return (
        <footer className='footer'>
            <div className='footer__item'>
                {props.links
                    .map( (el, index ) => (
                        <a href={el.href} key={index}>{el.title}</a>
                    ))
                    .filter( (el, index) => index <=3 )
                }
            </div>
            <div className='footer__item'>
                {props.links
                    .map( (el, index ) => (
                        <a href={el.href} key={index}>{el.title}</a>
                    ))
                    .filter( (el, index) => index >3 )
                }
            </div>
        </footer>
    )
}