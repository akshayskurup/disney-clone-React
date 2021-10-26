import React from 'react'
import '../Pages/Details.css'


function Details() {
    return (
        <container-two>
            <div className='background'>
                <img className='bg-image' src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
            </div>
            <div className='title-img'>
                <img className='image-title' src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
            </div>
            <div className="controls">
                <div className='Play-button'>
                <button className="Play-button">
                        <img src="\Disney Plus\images\play-icon-black.png" alt="" />
                        <span style={{color:'black'}}>Play</span>
                    </button>
                </div>
                <div className="Trailer">
                    <button className="Trailer-button">
                        <img src="\Disney Plus\images\play-icon-white.png" alt="" />
                        <span >Trailer</span>
                    </button>
                </div>
                <div className="Add">
                    <button className="Add-button">
                        <span className="Add-span">+</span>
                    </button>
                </div>
                <div className="Group">
                    <button className="Group-button">
                        <img src="\Disney Plus\images\group-icon.png" alt="" />
                    </button>
                </div>
            </div>
        </container-two>
    )
}

export default Details