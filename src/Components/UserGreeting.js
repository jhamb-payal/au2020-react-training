import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  toggle = () => {
      this.setState((prevState) => ({isLoggedIn:!prevState.isLoggedIn}))
  }
//   #if-else approach
  render() {
    if (this.state.isLoggedIn) {
      return <React.Fragment><h1>Welcome Visitor</h1>
      <button onClick ={() => this.toggle()}>Subscribe</button></React.Fragment>
    } else {
      return <React.Fragment><div>Thanku for subscribing</div>
      <button onClick ={() => this.toggle()}>Subscribe</button></React.Fragment>
    }
  }

  // #element-variables approach
  // render() {
  //   let message
  //   if (this.state.isLoggedIn) {
  //     message = <div>Welcome Vishwas</div>
  //   } else {
  //     message = <div>Welcome Guest</div>
  //   }
  //   return <div>{message}</div>
  // }

  // #ternary-operator-approach
  // render() {
  //   return this.state.isLoggedIn ? (
  //     <div>Welcome Vishwas</div>
  //   ) : (
  //     <div>Welcome Guest</div>
  //   )
  // }

  // #short-circuit-operator-approach
//   render() {
//     return this.state.isLoggedIn && <div>Welcome Vishwas</div>
//   }
}

export default UserGreeting
