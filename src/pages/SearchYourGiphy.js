import React, { useState } from 'react'
import axios from 'axios'

function SearchYourGiphy() {

    const [ gifs, setGifs ] = useState([])
    const [ query, setQuery ] = useState('')

    async function fetchSearchGif(query) {
        try {
            const { data } = await axios({
                method: 'GET',
                url: 'https://api.giphy.com/v1/gifs/search',
                params: {
                    api_key: 'oh8q01YsX36GyJqbzddrAqqvf7dEiVrM',
                    q: query,
                    limit: 9
                }
            })
                setGifs(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    function handleChange(event) {
        setQuery(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetchSearchGif(query)
    }

    return (
        <div className="container">
            <div className="row d-flex">
                <h1 className="my-5">SEARCH YOUR GIPHY</h1>
                <form onSubmit={handleSubmit} className="row d-flex justify-content-center mb-5">
                    <div className="col-auto">
                        <input onChange={handleChange} className="form-control" placeholder="Search Your Giphy..." />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-danger">Search</button>
                    </div>
                </form>
                {
                    (gifs.length === 0) ? false
                    :
                    gifs.map(gif => (
                        <div className="col-12 col-md-6 col-lg-4 w-400 w-md-150 w-lg-75 h-250 h-md-125 h-lg-75 card-body">
                            <img className="rounded-3" style={{ objectFit: 'cover', width: '100%', height: '240px' }} src={gif.images.fixed_height.url} alt=""  />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchYourGiphy
