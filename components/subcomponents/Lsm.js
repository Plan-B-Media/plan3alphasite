import React from 'react'
import styles from '../../styles/Main.module.css'
import Image from 'next/image'
import collect from '../../assets/Images/collect.svg'
import monetize from '../../assets/Images/monetize.svg'


function Lsm() {
  return (
    <div className={styles.minis}>
      <div className={styles.minisRight}>
        <div>
          <ul>
            <li>Lead Scoring </li>
            <li>Data Streaming</li>
            <li>Media Buy</li>
            <li>Algorithm Development</li>
            <li>Oracle Development</li>
            <li>API Development</li>
            <li>Behavior Analysis & Prediction</li>
          </ul>
          <button>Explore ➢</button>
        </div>
        <div>
          <Image height={200} width={200} src={monetize}></Image>
        </div>
      </div>
      <div className={styles.minisLeft}>
        <div>
          <Image height={200} width={200} src={collect}></Image>
        </div>
        <div>
          <ul>
            <li>Wallet Tracking</li>
            <li>On-Chain Analytics</li>
            <li>Data Analytics</li>
            <li>Behavioral Analytics</li>
            <li>Ad Platform</li>
            <li>Airdrops</li>
            <li>Product Analytics</li>
            <li>Performance Analysis</li>
          </ul>
          <button>Explore ➢</button>
        </div>

      </div>
      <div>
        <h1>Lionshare Media <span>Vision</span></h1>
        <p> Lionshare brings product analytics to web3. With a wide net of capabilities, we use behavioral analytics to build unmatched digital experiences that enable you to measure, iterate, and scale your project with a data-driven approach. </p>
      </div>
    </div>
  )
}

export default Lsm