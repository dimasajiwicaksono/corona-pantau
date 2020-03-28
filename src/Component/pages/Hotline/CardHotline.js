import React from 'react'
import { Card, Avatar } from 'antd'
import styles from '../styles.module.css'
// import SkeletonComp from '../SkeletonComp'

function cardHotline({name, img, tlp}) {
    const { Meta } = Card
    return (
        <div>
            {/* <SkeletonComp /> */}
            <Card 
                className={styles.cardHotline} 
                hoverable
            >
                <Avatar
                    src={img}
                    style={{verticalAlign:'center', textAlign:'center', marginBottom:'1em'}}
                    size={64}
                />
                <Meta
                    title= {tlp} 
                    description={name.toUpperCase()} />
            </Card>
        </div>
    )
}

export default cardHotline
