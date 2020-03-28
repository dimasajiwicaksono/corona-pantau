import React, {useEffect, useState} from 'react'
import ChartLine from './ChartLine'
import Axios from 'axios'
import SkeletonComp from '../SkeletonComp'

function DataViz() {
    const [ dataChart, setDataChart ] = useState([])
    const [ loading, setLoading ] = useState(false)


useEffect(() => {
    const fetchData = async () => {
        setLoading(true)
        const res = await Axios.get('https://corona.lmao.ninja/v2/historical/indonesia').catch(err => console.log(err))
        const getData= async res => {
            const obj ={...res.data.timeline.cases}
            const initArray = Object.entries(obj).map(([key, value]) => ({key, value}))
            setDataChart(initArray.splice(45))
        }
        setLoading(false)
        getData(res)
    }
    fetchData()
}, [])

    return (
        <div>
            <h4>Mohon untuk menggunakan mode Lansdscap untuk pengguna Andoid </h4>
            <ChartLine dataChart={dataChart} loading={loading}/>
            <SkeletonComp />
        </div>
    )
}

export default DataViz
