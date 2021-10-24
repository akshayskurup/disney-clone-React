import React from 'react'
import '../NavBar/NavBar.css'
function NavBar() {
    return (
        <div className='NavBar'>
            <div className="logo">
                <a href="/yu"><img src="\Disney Plus\images\logo.svg" alt="" /></a>
            </div>
            <div className="NavMenu">
                <a className='home' href="google.com"><img className='home-img' src="\Disney Plus\images\home-icon.svg" alt="" />HOME</a>
                <a className='search' href="google2.com"><img className='search-img' src="\Disney Plus\images\search-icon.svg" alt="" />SEARCH</a>
                <a className='watchlist' href="google3.com"><img className='watchlist-img' src="\Disney Plus\images\watchlist-icon.svg" alt="" />WATCHLIST</a>
                <a className='originals' href="google3.com"><img className='originals-img' src="\Disney Plus\images\original-icon.svg" alt="" />ORIGINALS</a>
                <a className='movie' href="google3.com"><img className='movie-img' src="\Disney Plus\images\movie-icon.svg" alt="" />MOVIE</a>
                <a className='series' href="google3.com"><img className='series-img' src="\Disney Plus\images\series-icon.svg" alt="" />SERIES</a>
                <img className='profile-icon' src="\Disney Plus\images\profile.png" alt="" />
            </div>
           
        </div>
        
    )
}

export default NavBar