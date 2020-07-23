import React, { Component } from 'react';

class Welcome extends Component {
    render(){
    return <h2>welcome to Accolite, {this.props.name}</h2>
    }
}

export default Welcome