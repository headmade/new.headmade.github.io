import React from "react";
import Image from "next/image";

import style from './Areas.module.scss'

interface Props {
    // image: Object;
    name: String;
    lineColor: String;
    tech: String;
    pic: any
}

const Areas = (props: Props) => {
    return (
        <div className={style.wrapper}>
            {/* <Image width={100} height={100} alt="icon" src={`${props.image}`} /> */}
            <Image className={style.icon} width={100} height={100} alt="icon" src={props.pic} /> 
            <div className={style.nameBlock}>
                <h2 className={style.headerArea}>{props.name}</h2>
                <div style={{ backgroundColor: `${props.lineColor}` }} className={style.angle}></div>
            </div>
            <p className={style.tech}>{props.tech}</p>
        </div>
    )
}

export default Areas;
