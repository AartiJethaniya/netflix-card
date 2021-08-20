import React from 'react';

const Images = (props) => {
    return (
        <img src = {props.imagesrc} alt = "Serial Poster" className = "card_img" />
    );
};

export default Images;