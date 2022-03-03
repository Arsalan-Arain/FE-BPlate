import React from "react";
import css from './ProfileImage.module.css';

function profileImage({ imgSrc }) {
    return <img src={imgSrc} alt="avatar" className={css.imageStyle} />
}

export default profileImage;