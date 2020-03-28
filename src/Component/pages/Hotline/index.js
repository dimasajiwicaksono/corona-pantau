import React from 'react'
import CardHotline from './CardHotline'
import { Row, Col } from 'antd'
import {dataHotline} from '../Hotline/data'
import styles from '../styles.module.css'

const layout ={
    xs: {span: 24},
    md:{span:6},
    lg:{span:6}
    }

function Hotline() {
    return (
        <div className={styles.Hotline}>
            <Row>
            {
                dataHotline.map(item => {
                    const {id, name, img, tlp} = item
                    return (
                        <Col {...layout} >
                            <CardHotline 
                                key={id}
                                name={name}
                                img={img}
                                tlp={tlp}/>
                        </Col>
                    )
                })
            }
            </Row>
        </div>
    )
}

export default Hotline
