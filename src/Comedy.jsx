import React from 'react';
import Sdata  from './Sdata';
import Card from './Card';

const Comedy = ()=>{
    return (
        <Card 
            key={Sdata[0].id}
            imagesrc = {Sdata[0].imagesrc}
            title = {Sdata[0].title}
            sname = {Sdata[0].sname}
            link = {Sdata[0].link}
        />
    );
}
export default Comedy;