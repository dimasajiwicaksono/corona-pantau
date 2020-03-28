import React from 'react'
import SkeletonComp from '../SkeletonComp'
import { Card } from 'antd'

function Edukasi() {
    return (
        <div>
        <Card
            style={{backgroundColor:'#f0f0f0'}}
        cover={
            <img src='https://akah.desa.id/desa/upload/artikel/sedang_1582720816_CEGAH+VIRUS+CORONA.jpg ' alt='covid'/>
        }/>
       <SkeletonComp />
        </div>
    )
}

export default Edukasi
