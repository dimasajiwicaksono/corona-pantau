import React from 'react'
import { /*Skeleton,*/ Result } from 'antd'
import styles from './styles.module.css'

function SkeletonComp() {
    return (
        <div className={styles.skeleton}>
            <Result 
                status ='404'
                title ='404'
                subTitle='Sorry, the page coming soon'
            />
        </div>
    )
}

export default SkeletonComp
