/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Row, Col, Card, Typography, Avatar } from 'antd'
import { layout } from '../../Utils/helper'
import styles from '../styles.module.css'
import SkeletonComp from '../SkeletonComp'

const { Title, Text } = Typography

const WHO = {bg : 'white', img: 'https://cdn.worldvectorlogo.com/logos/who.svg', url :'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'}
const KEMENKES={bg : 'white', img: 'https://pusdatin.kemkes.go.id/layanan/img/logo-195-balitbangkes.png', url:'https://infeksiemerging.kemkes.go.id/'}
const UNICEF = {bg : 'white', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/unicef-5-568649.png', url: 'https://www.unicef.org/indonesia/id/coronavirus'}

function News() {
    return (
        <div>
            <Row style={{justifyContent:'center'}}>
                <Col {...layout} >{CardContentNews({from:'KEMENKES'})}</Col>
                <Col {...layout} >{CardContentNews({from:'WHO'})}</Col>
                <Col {...layout} >{CardContentNews({from:'UNICEF'})}</Col>
                <SkeletonComp />
            </Row>
        </div>
    )
}

function CardContentNews({from}) {
    return (
        <>
            <Card className={styles.cardContentNews} 
                style = {
                    from === 'KEMENKES' ? {backgroundColor: KEMENKES.bg} :
                    from === 'WHO' ? {backgroundColor: WHO.bg} :
                    from === 'UNICEF' ? {backgroundColor: UNICEF.bg} : null
                }
            >
                <Row >
                    <Col span={6}>
                        <Avatar
                            src =
                            {
                                from === 'KEMENKES' ? KEMENKES.img :
                                from === 'WHO' ? WHO.img :
                                from === 'UNICEF' ? UNICEF.img : null
                            }
                            style={{verticalAlign:'center'}}
                            size={64}
                        />
                    </Col>
                    <Col span={18}>
                        <Title level={3}>
                            <a href= 
                            {
                                from === 'KEMENKES' ? KEMENKES.url :
                                from === 'WHO' ? WHO.url:
                                from === 'UNICEF' ? UNICEF.url : null
                            } >
                            {
                                from === 'KEMENKES' ? 'KEMENKES' :
                                from === 'WHO' ? 'WHO':
                                from === 'UNICEF' ? 'UNICEF' : null
                            }
                            </a>
                        </Title>
                        <hr/>
                        <Text>
                        {
                                from === 'KEMENKES' ? 'Media Informasi Resmi Terkini Penyakit Infeksi Emerging' :
                                from === 'WHO' ? 'Coronavirus disease (COVID-19) advice for the public':
                                from === 'UNICEF' ? 'Novel coronavirus (COVID-19): Hal-hal yang perlu Anda ketahui' : null
                            }
                        </Text>
                    </Col>
                </Row>
            </Card>

        </>
    )
}
export default News
