import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        images: []
    }

    componentDidMount(){
        fetch("https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=viHdwWKblSrtfyVMndIIOOw3KpvVP8jQ")
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                images: json.data.slice(0,3)
            })
        })
    }

    handleSubmit = (e,search) => {
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=viHdwWKblSrtfyVMndIIOOw3KpvVP8jQ`)
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                images: json.data.slice(0,3)
            })
        })
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.images}/>
                <GifSearch handleSubmit={this.handleSubmit}/>
            </div>
        );
    }

}

export default GifListContainer;