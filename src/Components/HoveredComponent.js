import React from 'react';
import withCounter from './withCounter'
class HoveredComponent extends React.Component{
    render(){
        return <div>
            <h2 onMouseOver= {() => this.props.handleCounter()}>Hover over me</h2>
            <p>{this.props.count}</p>
            </div>
    }
}

export default withCounter(HoveredComponent, 10)