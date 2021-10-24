import React from 'react'
import '../Viewers/Viewers.css'

function Viewers() {
    return (
        <container>
           <div className='row' >
               <img className='viewer-img' src="\Disney Plus\images\viewers-disney.png" alt="" />
           </div>
           <div className='row' >
               <img className='viewer-img' src="\Disney Plus\images\viewers-pixar.png" alt="" />
           </div>
           <div className='row' >
               <img className='viewer-img' src="\Disney Plus\images\viewers-marvel.png" alt="" />
           </div>
           <div className='row' >
               <img className='viewer-img' src="\Disney Plus\images\viewers-starwars.png" alt="" />
           </div>
           <div className='row' >
               <img className='viewer-img' src="\Disney Plus\images\viewers-national.png" alt="" />
           </div>
        </container>
    )
}

export default Viewers
