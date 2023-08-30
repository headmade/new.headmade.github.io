import React, { ReactNode } from "react";
import style from './CarouselCard.module.scss'

const CarouselCard = ({
    children = [],
}: {
    children?: ReactNode
}) => {

    return (
        <div>
            <div className={style.top}></div>
            <div className={style.content}>{children}</div>
            <div className={style.bottom}></div>
        </div>
    )
}

export default CarouselCard;