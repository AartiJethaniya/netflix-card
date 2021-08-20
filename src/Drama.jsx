import React from 'react';
import Sdata  from './Sdata';
import Card from './Card';

const Drama = ()=>{
    return (
        <Card 
            key={Sdata[1].id}
            imagesrc = {Sdata[1].imagesrc}
            title = {Sdata[1].title}
            sname = {Sdata[1].sname}
            link = {Sdata[1].link}
        />
    );
}
export default Drama;