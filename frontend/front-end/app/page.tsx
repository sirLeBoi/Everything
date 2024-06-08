import Image from 'next/image'
import React from 'react'
import styles from './style';
import { Hero, Info } from './components';


export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">

      <div>
        <Hero />
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.marginY} border-b-4 border-turquoise`}>
        <div className={`${styles.boxWidth}`}>
          <Info />
        </div>
      </div>
    </div>
  )
}
