import React from 'react'
import SkeletonComp from '../SkeletonComp'
import { Card } from 'antd'

function Edukasi() {
    return (
        <div>
        <Card
            style={{backgroundColor:'#f0f0f0', margin: '3em'}}
        cover={
            <>
            <img src='https://akah.desa.id/desa/upload/artikel/sedang_1582720816_CEGAH+VIRUS+CORONA.jpg ' alt='covid'/>
            <img src='https://asset.kompas.com/data/photo/special-page/infographic/22003021539142.jpg' alt='covid19'/>
            </>
        }/>
       <SkeletonComp />
        </div>
    )
}

export default Edukasi
