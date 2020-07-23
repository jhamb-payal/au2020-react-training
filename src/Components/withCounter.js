import React from 'react';

const withCounter = (WrappedComponent, number) => {
    class WithCounter extends React.Component {
        constructor(){
            super()
            this.state = {
                count:0
            }
        }
    
        handleCounter = () =>{
            this.setState((prevState) => ({count : prevState.count+number}))
        }
        render(){
            return <WrappedComponent count = {this.state.count} handleCounter = {this.handleCounter} />
        }
        
    }
    return WithCounter
}

export default withCounter