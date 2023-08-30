import React from "react";
import style from "./Links.module.scss";
import Link from "next/link";

const Links = () => {
  return (
    <ul className={style.elements}>
      <li className={style.element}>
        <Link href={"/projects"} className={style.link}>
          Проекты
        </Link>
      </li>
      <li className={style.element}>
        <Link href={"/about"} className={style.link}>
          О нас
        </Link>
      </li>
      <li className={style.element}>
        <Link href={"/contacts"} className={style.link}>
          Контакты
        </Link>
      </li>
    </ul>
  );
};

export default Links;
