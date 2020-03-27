import React from 'react'
import Header from './Nav/Header'
import Footer from './Nav/Footer'
import ContentIndex from './Nav/ContentIndex'
import { Tabs  } from 'antd'
import SkeletonComp from '../pages/SkeletonComp'
import News from '../pages/Berita/News'



function LayoutIndex() {
  const {TabPane} = Tabs
  const callBack= (key) => {
    console.log(key)
  }
    return (
        <div style={{backgroundColor: '#dee3e2'}}>
          {/* <Header/> */}
          <Tabs defaultActiveKey='1' onChange={callBack} style={{border:'none'}}>
            <TabPane tab='Pantau' key='1'>
              <ContentIndex />
            </TabPane>
            <TabPane tab='DataViz' key='2'>
              <SkeletonComp />
            </TabPane>
            <TabPane tab='Hotline' key='3'>
              <SkeletonComp />
            </TabPane>
            <TabPane tab='Berita' key='4'>
              <News />
            </TabPane>
          </Tabs>
          
          
          <Footer />
        </div>
    )
}

export default LayoutIndex
