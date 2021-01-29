import React, {Component} from 'react';

class ImageCard extends Comment {
    constructor(props){
        super(props);
        this.states = {
            url: this.props.url,
        }
    }
    render(){
        return (<div>
            Hola soy Image ImageCard
            <img src={this.props.url} alt="image-card"></img>

        </div>)
    }
}