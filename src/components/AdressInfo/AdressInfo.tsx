import React from "react";
import style from './AdressInfo.module.scss'

const AdressInfo = () => {
    return(
        <div className={style.adressInfo}>
        <h1 className={style.header}>ООО &quot;ХЭДМЕЙД&quot;</h1>
        <div className={style.information}>
            <a className={style.mail} href="mailto: ">info@headmade.pro</a>
            <a className={style.phone} href="tel:+7(843)259-99-23">+7(843)259-99-23</a>
            <p className={style.adress}>г. Казань, ул.Карла Маркса, д.5, оф.114</p>
        </div>
        </div>
    )
}

export default AdressInfo;
