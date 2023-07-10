import React from 'react'
import { useState } from "react"



const TrafficLight = () => {
    let [colorRed, setColorRed] = useState(false);
    let [colorYellow, setColorYellow] = useState(false);
    let [colorGreen, setColorGreen] = useState(false);

    return (
        <div>
            <div id="trafficTop"></div>
            <div className="container">
                <div className={`red light ${colorRed ? "glow" : ""}`} onClick={() => {
                    setColorRed(true);
                    setColorYellow(false);
                    setColorGreen(false)
                }}></div>
                <div className={`yellow light ${colorYellow ? "glow" : ""}`} onClick={() => {
                    setColorYellow(true);
                    setColorRed(false);
                    setColorGreen(false)
                }}></div>
                <div className={`green light ${colorGreen ? "glow" : ""}`} onClick={() => {
                    setColorGreen(true);
                    setColorRed(false);
                    setColorYellow(false)
                }}></div>
            </div>
        </div>
    )
}

export default TrafficLight