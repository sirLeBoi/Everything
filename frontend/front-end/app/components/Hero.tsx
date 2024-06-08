import React from 'react'
import styles from '../style';
import { homePagePhoto } from '../assets';


const Hero = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${homePagePhoto.src})` }}>

      <div
        className="h-full bg-black bg-opacity-70 flex items-center justify-center absolute top-0"
        style={{ left: '50.67%', width: '28%' }} // Fixed width for the ribbon
      >
        <div className=" flex flex-col absolute p-4" style={{ top: '15%', bottom: '20%' }}>
          <div>
          <h2 className={`${styles.heading2} mb-0 leading-tight`} style={{ marginBottom: '0', lineHeight: '1.4' }}>ברוכים הבאים לבר</h2>
      <h1 className={`${styles.heading1} mt-0 leading-tight`} style={{ marginTop: '0', lineHeight: '1' }}>הכל מהברמנים לברמנים</h1>
      <h2 className={`${styles.heading2} mb-0 leading-tight`} style={{ marginBottom: '0', lineHeight: '1.4' }}>איך מכינים דאקירי</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero