import React from 'react'
// import Header from './Nav/Header'
import Footer from './Nav/Footer'
import ContentIndex from './Nav/ContentIndex'
import { Tabs  } from 'antd'
import DataViz from '../pages/DataViz'
import News from '../pages/Berita/News'
import Hotline from '../pages/Hotline'
import Edukasi from '../pages/Edukasi'



function LayoutIndex() {
  const {TabPane} = Tabs
  const callBack= (key) => {
    console.log(key)
  }
    return (
      <>
        <div style={{backgroundColor: '#f0f0f0'}} >
          {/* <Header/> */}
          <Tabs defaultActiveKey='1' onChange={callBack} style={{border:'none'}} >
            <TabPane tab='Pantau' key='1'>
              <ContentIndex />
            </TabPane>
            <TabPane tab='DataViz' key='2'>
              <DataViz />
            </TabPane>
            <TabPane tab='Hotline' key='3'>
              <Hotline />
            </TabPane>
            <TabPane tab='Berita' key='4'>
              <News />
            </TabPane>
            <TabPane tab='Edukasi' key='5'>
              <Edukasi />
            </TabPane>
          </Tabs>
        </div>
      
        <Footer />

      </>
    )
}

export default LayoutIndex
