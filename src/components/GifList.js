import React, { Component } from 'react';

class GifList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.gifs.map(gif => {return <li key={gif.id}><img src={gif.images.original.url} /></li>})}
                </ul>
            </div>
        );
    }
}

export default GifList;