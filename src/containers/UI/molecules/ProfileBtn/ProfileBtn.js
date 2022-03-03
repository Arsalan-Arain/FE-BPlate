import React from "react";
import Text from '../../atoms/Text/Text';
import ProfileImage from '../../atoms/ProfileImage/ProfileImage';
import css from './ProfileBtn.module.css';
import imgSrc from '../../../../assets/images/example-profile.jpg';

function profileBtn(props) {
    return (
        <div className={css.ProfileBtn}>
            <ProfileImage imgSrc={imgSrc}></ProfileImage>
            <Text variant="h4">ERDOGAN</Text>
        </div>
    )
}

export default profileBtn;