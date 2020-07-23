import React from 'react';
import withcounter from './withCounter';

class ClickedComponent extends React.Component{
    render(){
        return <div><button onClick = {() => this.props.handleCounter()}>Counter</button>
        <h2>Click me {this.props.count}</h2>
        </div>
    }
}

export default withcounter(ClickedComponent,5)