import React from 'react'
import styles from './styles.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <p>Made with love for Indonesia</p>
            <p>Sumber: <a href ="https//:api.kawalcorona.com" >api.kawalcorona.com</a></p>
        </div>
    )
}

export default Footer
