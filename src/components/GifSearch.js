import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        search: ''
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.props.handleSubmit(event,this.state.search)}>
                    <input type='text' name="search" onChange={(e) => this.handleChange(e)}/>
                </form>
            </div>
        );
    }
}

export default GifSearch;


/* <GifSearch /> should receive a callback prop from its parent. On a submit event, it should invoke that callback prop with the value of the text input. It is this callback function, defined in <GifListContainer />, that will actually query the API with the text the user has entered. */