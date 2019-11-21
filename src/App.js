import React from 'react';
import './App.css';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
    const headerLinks = [
        {title: 'Почта', href: '#'},
        {title: 'Картинки', href: '#'}
    ];

    const footerLinks = [
        {title: 'Реклама', href: '#'},
        {title: 'Для бизнеса', href: '#'},
        {title: 'Всё о Google', href: '#'},
        {title: 'Как работает Google Поиск', href: '#'},
        {title: 'Конфиденциальность', href: '#'},
        {title: 'Условия', href: '#'},
        {title: 'Настройки', href: '#'},
    ]
  return (
    <div className="App">
      <Header className="App-header" links={headerLinks}/>
      <Main/>
      <Footer links={footerLinks}/>
    </div>
  );
}

export default App;
