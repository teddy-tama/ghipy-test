import React, { useState, useEffect } from 'react'
import axios from 'axios'

function IronManGiphy() {

    const [ gifs, setGifs ] = useState([])

    function fetchIronMan() {
        axios({
            method: 'GET',
            url: 'https://api.giphy.com/v1/gifs/search',
            params: {
                api_key: 'oh8q01YsX36GyJqbzddrAqqvf7dEiVrM',
                q: 'iron-man',
                limit: 9
            }
        })
            .then(({data}) => {
                setGifs(data.data)
            })
    }

    useEffect(() => {
        fetchIronMan()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row d-flex">
                    <h1 className="my-5">IRON MAN GIPHY</h1>
                    {
                        gifs.map(gif => (
                            <div className="col-12 col-md-6 col-lg-4 w-400 w-md-150 w-lg-75 h-250 h-md-125 h-lg-75 card-body">
                                <img className="rounded-3" style={{ objectFit: 'cover', width: '100%', height: '240px' }} src={gif.images.downsized_large.url} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default IronManGiphy
