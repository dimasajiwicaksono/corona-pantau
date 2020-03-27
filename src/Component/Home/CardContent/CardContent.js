import React from 'react'
import {Col, Card, Row, Typography, Avatar, Spin } from 'antd';
import styles from './styles.module.css'

function CardContent({status, kasusPositif, kasusMeninggal, kasusSembuh, loading}) {
  const { Text } = Typography
  const positif = { img : 'https://image.flaticon.com/icons/svg/1742/1742427.svg', bg:'blue'}
  const sembuh = {img:'https://image.flaticon.com/icons/svg/1742/1742340.svg', bg:'green'}
  const meninggal = {img: 'https://image.flaticon.com/icons/svg/1742/1742348.svg', bg:'red'}
    return (
        <div>
          <Card className={styles.cardBody} style={
              status ==='positif' ? {backgroundColor : positif.bg}: 
              status ==='sembuh' ? {backgroundColor : sembuh.bg} :
              status ==='meninggal' ? {backgroundColor : meninggal.bg} : 
              null}>
            <Row>
              <Col span={18}>
                <Text className={styles.text}> TOTAL </Text>
                <Text className={styles.text}>  {status.toUpperCase()}</Text>
                <h1 className={styles.text}> 
                  {
                    status === 'positif' ? kasusPositif !== '' && !loading ? kasusPositif :<Spin /> :
                    status === 'sembuh' ? kasusSembuh !== '' && !loading? kasusSembuh :<Spin /> :
                    status === 'meninggal' ? kasusMeninggal !== '' && !loading ? kasusMeninggal :<Spin />: 
                    null
                  }
                </h1>
                <Text className={styles.text}> ORANG </Text>
              </Col>
              <Col span={6}> 
                <Avatar src=
                {
                  status === 'positif' ? positif.img :
                  status === 'sembuh' ? sembuh.img :
                  status === 'meninggal' ? meninggal.img : 
                  null
                }
                style={{verticalAlign:'center'}}
                size={64}
                />
              </Col>
            </Row>
          </Card>
        </div>
    )
}



export default CardContent
