import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 150 }}>
                    <h1>WELCOME TO YOUR GIPHY</h1>
                </div>
                <div>
                    <img src="https://cdn.worldvectorlogo.com/logos/giphy-logo.svg" alt="" width="500" height="250" className="rounded-pill px-5 mt-5 shadow" />
                </div>
                <div className="mt-5">
                    <Link to="/iron-man-giphy" className="fs-3">IRON MAN GIPHY</Link>
                </div>
                <div className="mt-4">
                    <Link to="/search-your-giphy" className="fs-3">SEARCH YOUR GIPHY</Link>
                </div>
            </div>
        </>
    )
}

export default Home
