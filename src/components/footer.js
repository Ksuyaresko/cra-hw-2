import React from "react";
import './footer.css'
export default function Footer() {
    const link = (href, title) => (
        <a href={href}>{title}</a>
    )
    return (
        <footer className='footer'>
            <div className='footer__item'>
                {link('#', 'Реклама')}
                {link('#', 'Для бизнеса')}
                {link('#', 'Всё о Google')}
                {link('#', 'Как работает Google Поиск')}
            </div>
            <div className='footer__item'>
                {link('#', 'Конфиденциальность')}
                {link('#', 'Условия')}
                {link('#', 'Настройки')}
            </div>
        </footer>
    )
}