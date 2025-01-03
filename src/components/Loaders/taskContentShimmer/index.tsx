import React from 'react';
import styles from './taskContentShimmer.module.scss';

const TaskContentShimmer = () => (

    <div >
        <div className={`${styles.br} ${styles.animate} ${styles.mainTitle}`} id={styles.mainTitle} />

        <div className={`${styles.flexContainer} `}>
            <div id={styles.leftContainer}>
                <div className={`${styles.card} ${styles.br} ${styles.animate}`} data-testid="shimmer-card">
                </div>

                <div className={`${styles.card} ${styles.br} ${styles.customCardHeight} ${styles.animate}`} data-testid="shimmer-card">
                </div>

                <div className={`${styles.card} ${styles.br}`} data-testid="shimmer-card">
                    <div className={`${styles.title} ${styles.br} ${styles.animate}`} />
                    <div className={`${styles.comment} ${styles.br} ${styles.animate}`} />
                    <div className={`${styles.comment} ${styles.br} ${styles.animate}`} />
                    <div className={`${styles.comment} ${styles.br} ${styles.animate}`} />
                    <div className={`${styles.comment} ${styles.br} ${styles.animate}`} />
                    <div className={`${styles.comment} ${styles.br} ${styles.animate}`} />
                    <div className={`${styles.comment} ${styles.br} ${styles.animate}`} />
                </div>

                <div className={`${styles.card} ${styles.br} ${styles.animate}`} data-testid="shimmer-card">
                </div>
            </div>

            <aside>
                <div className={`${styles.card} ${styles.br} ${styles.customCardHeight} ${styles.animate}`} data-testid="shimmer-card">
                </div>

                <div className={`${styles.card} ${styles.br} ${styles.customCardHeight} ${styles.animate}`} data-testid="shimmer-card">
                </div>

                <div className={`${styles.card} ${styles.br} ${styles.animate}`} data-testid="shimmer-card">
                </div>
            </aside>
        </div>
    </div>
);
export default TaskContentShimmer;
