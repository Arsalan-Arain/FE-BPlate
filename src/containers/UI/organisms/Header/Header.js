import React from "react";
import Text from '../../atoms/Text/Text';
import ProfileBtn from '../../molecules/ProfileBtn/ProfileBtn';
import css from './Header.module.css';

function Header() {
    return (
        <div className={css.HeaderStyle}>
            <Text variant="h2">FE - Boilerplate</Text>
            <ProfileBtn />
        </div>
    )
}

export default Header;