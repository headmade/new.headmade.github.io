import React, { ReactNode } from "react";

import styles from './CardProject.module.scss'

const CardProject = ({children = []}: {children?: ReactNode} ) => {
    return (
        <div className={styles.all}>
            <div className={styles.top}></div>
            <div className={styles.middle}>{children}</div>
            <div className={styles.bottom}></div>
        </div>

    )
}

export default CardProject;