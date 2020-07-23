import React from 'react';

class Message extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props);
        this.state ={
            message:'Hello Visitor',
            count:0
        }
    }
    handleClick = () => {
        //this.state.message = 'Thanku for subscribing';
        console.log("Button clicked", this.state.message)
        this.setState({message:'Thanku for subscribing'});
    }

    // increment = () => {
    //     //this.setState({count:this.state.count + 1},()=> console.log(this.state.count))
    //     this.setState((prevState) => ({count:prevState.count +1}))
    // }
    increment(){
        this.setState({count:this.state.count + 1})
    }
    incrementFive = () => {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render(){
    return <React.Fragment><h1>{this.state.message}</h1>
    <h2>{this.state.count}</h2>
    <button onClick = {() => this.increment()}>increment</button>
        <button onClick= {() => this.handleClick()}>Subscribe</button>
        </React.Fragment>
    }
}

export default Message