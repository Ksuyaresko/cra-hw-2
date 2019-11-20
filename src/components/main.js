import React from "react";
import './main.css'

export default function Main() {
    let [value, setValue] = React.useState('');
    const handleInput = (event) => {
        if(event.target.value.match(/^[a-zA-Z0-9 ]*$/g)) setValue(event.target.value)
    }
    return (
        <main className='main'>
            <a href='#'>
                <img src='/google.png'/>
            </a>
            <div className='search'>
                <svg className='search__icon' focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                <input
                    className='search__input'
                    value={value}
                    onInput={handleInput}/>
            </div>
            <div className='search__btns'>
                <button className='search__btn'>Поиск в гугл</button>
                <button className='search__btn'>Мне повезет!</button>
            </div>
        </main>
    )
}