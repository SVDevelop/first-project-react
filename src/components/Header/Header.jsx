import React from "react";
import s from"./Header.module.css";

const Header = () => { 
    return ( <header className={s.header}>
        <img src="https://avatars.mds.yandex.net/i?id=0663c7fca5ed75c97d0100964cf4179131ae649d-7593439-images-thumbs&n=13" alt = "PlayStation Logo"/>
    </header>
    );
};

export default Header;