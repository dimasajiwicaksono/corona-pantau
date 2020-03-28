import React, { useEffect, useState } from 'react'
import CardContent from '../CardContent/CardContent'
import { Row, Col, Select } from 'antd'
import styles from './styles.module.css'
import { layout } from '../../Utils/helper'
import Axios from 'axios'
import CardStatistic from '../CardContent/CardStatistic'



const ContentIndex= ()=> {
    const [loading, setLoading ] = useState(false)
    const [isLoading, setIsLoading ] = useState(false)
    const [data, setData] = useState({})
    const [country, setCountry] = useState([])
    const [dataCountry, setDataCountry] = useState([])
    const [selectCountry/*, setSelectCountry*/] = useState('Indonesia')
    const [dataProvinsi, setDataProvinsi] = useState([])
    const [dataIndonesia, setDataIndonesia] = useState({})
    const [selectProvinsi, setSelectProvinsi] = useState('DKI Jakarta')
    const { Option } = Select
useEffect(() => {
    const fetchData = async () => {
        setLoading(true)
        const res = await Axios.get('https://api.kawalcorona.com/indonesia/provinsi/').catch(err => console.log(err))
        const getProvinsi = async res => {
            const initArray = []
            await res.map(item => {
                initArray.push(item.attributes.Provinsi)
                return true
            })
            setDataProvinsi(initArray)
        }
        let obj = res.data.find(item => item.attributes.Provinsi === selectProvinsi); //SEARCH BY SELECT
        setData(obj)
        getProvinsi(res.data)
        setLoading(false)
    }
    fetchData()
}, [selectProvinsi])

useEffect(() => {
    const fetchDataIndonesia = async () => {
        setIsLoading(true)
        const {data} = await Axios.get('https://api.kawalcorona.com/indonesia/').catch(err => console.log(err))
        const res = await Axios.get('https://api.kawalcorona.com/').catch(err => console.log(err))
        const getDataIndonesia = async () => {
            setDataIndonesia(data)
            const initArray=[]
            await res.data.map(item => {
                initArray.push(item.attributes.Country_Region)
                return true
            })
            setDataCountry(initArray)
        }
        let objCountry = res.data.find(item => item.attributes.Country_Region === selectCountry)
        getDataIndonesia()
        setIsLoading(false)
        setCountry(objCountry)
    }
    fetchDataIndonesia()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])



    return (
        
        <div className={styles.content}>
            <h1>PANTAU COVID-19</h1>
            {/* <h3>DATA LIVE CORONA INDONESIA</h3> */}
                <Select 
                    showSearch
                    data={dataProvinsi}
                    value={loading ? 'Loading...' : selectProvinsi}
                    onChange={value => setSelectProvinsi(value)}
                    className={styles.select}>
                        {dataProvinsi.map((item, index) => {
                            return (
                                <Option value={item} key={index}>{item}</Option>
                            )
                        })}
                </Select>
                    <Row>
                        <Col {...layout}> 
                            <CardContent status="positif" 
                                kasusPositif={data && data.attributes ? data.attributes.Kasus_Posi : ''} 
                                loading={loading}/> </Col>
                        <Col {...layout}> 
                            <CardContent status="sembuh" 
                                kasusSembuh={data && data.attributes ? data.attributes.Kasus_Semb : ''} 
                                loading={loading}/> </Col>
                        <Col {...layout}> 
                            <CardContent status="meninggal"
                                kasusMeninggal={data && data.attributes ? data.attributes.Kasus_Meni : ''} 
                                loading={loading}/> </Col>
                    </Row> 
            <CardStatistic dataIndonesia={dataIndonesia} loading={isLoading} data ={country} dataCountry={dataCountry}/>
        </div>
    )
}

export default ContentIndex
