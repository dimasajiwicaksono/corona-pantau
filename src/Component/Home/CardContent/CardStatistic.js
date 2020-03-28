import React, {Component} from 'react'
import { Card, Statistic, Col, Row, Spin } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'
import styles from './styles.module.css'
import {Typography} from 'antd';
import { layout, convertDate } from '../../Utils/helper'

const { Text, Title } = Typography

export default class CardStatistic extends Component {
    render() {
        const {dataIndonesia, loading, data} = this.props
        const date = data ? data.attributes && !loading ? convertDate(data.attributes.Last_Update) : <Spin /> : 'Something Wrong'
        return (
            <div>
                <Card className={styles.cardStat}>
                <Title level={2}>Statistik data Corona di Indonesia</Title>
                <Title level={4} style={{marginBottom:'1.5em', marginTop:'0.5em'}}> Updated: {date} </Title>
                <Row>
                    <Col {...layout}>{CardStat({status:'positif', dataIndonesia, loading})}</Col>
                    <Col {...layout}>{CardStat({status:'sembuh', dataIndonesia, loading})}</Col>
                    <Col {...layout}>{CardStat({status:'meninggal' , dataIndonesia, loading})}</Col>
                </Row>
                <Text> NB * : persen menunjukan perbandingan hari ini dengan kemarin,
                ** : perbandingan orang sembuh/meninggal dengan orang terkonfirmasi</Text>
                </Card>
                
            </div>
        )
    }
}



function CardStat({status, dataIndonesia, loading}) {
    const data = dataIndonesia !== undefined ? dataIndonesia[0] : ''
    const today = {
        positif: data !== undefined ? parseInt(data.positif.replace(',','')) : null,
        sembuh : data !== undefined ? parseInt(data.sembuh.replace(',','')) : null,
        meninggal: data !== undefined ? parseInt(data.meninggal.replace(',','')) : null,
    }
    const yesterday = { name: "Indonesia", positif:  1046, sembuh: 46, meninggal: 87 }
    const persen = {
        positif : data !== undefined ? ((today.positif - yesterday.positif )/ today.positif )* 100 : '',
        sembuh : data !== undefined ? today.sembuh/today.positif*100 : '',
        meninggal : data !== undefined ? today.meninggal/today.positif*100 :'',
    }

    return (
        <>
            <Card className={styles.cardStatCount}>
                <Row gutter={12}>
                    <Col span={12} >
                        <Title>
                            {
                                status === 'positif' ? today.positif !== '' && !loading? today.positif : <Spin /> :
                                status === 'sembuh' ? today.sembuh !== ''  && !loading? today.sembuh : <Spin /> :
                                status === 'meninggal' ? today.meninggal !== '' && !loading? today.meninggal : <Spin /> : 
                                null 
                            }
                        </Title>
                        <Text>ORANG </Text>
                    </Col>
                    <Col span={12}>
                        <Statistic
                            title= {
                                status === 'positif' ? 'KONFIRMASI POSITIF *' :
                                status === 'sembuh' ? 'SEMBUH **' :
                                status === 'meninggal' ? 'MENINGGAL**' : null
                            }
                            value={
                                status === 'positif' ? persen.positif !== '' ? persen.positif: 0:
                                status === 'sembuh' ? persen.sembuh !== '' ? persen.sembuh: 0:
                                status === 'meninggal' ? persen.meninggal !== '' ? persen.meninggal: 0 : null}
                            precision={1}
                            valueStyle={{ color: '#d63447', fontSize: '2em' }}
                            prefix={status=== 'positif' ? <ArrowUpOutlined /> : null}
                            suffix="%"
                        />
                    </Col>
                </Row>
            </Card>
        </>
    )
}



