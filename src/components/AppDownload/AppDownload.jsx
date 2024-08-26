import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='App-Download' id='App-Download'>
        <p>For better Experience <br/>Download Our App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>

      
    </div>
  )
}

export default AppDownload
