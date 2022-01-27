import React from "react";
import css from './Text.module.css';

const variantsMapping = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p"
};

function text({ variant, children }) {
    const Component = variant ? variantsMapping[variant] : "p";
    return <Component className={css.TextStyle}>{children}</Component>;
}

export default text;