import React from 'react';
import axios from 'axios';
class GetList extends React.Component {

    constructor(props){
        super(props)
        this.state={
            posts:[],
            errorLog:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.setState({posts:response.data}))
        .catch(error => this.setState({errorLog:'Error'}))
    }

    render(){
        const { posts, errorLog } = this.state
        console.log(posts)
        return <div>
            list of Posts
            {posts.length? posts.map(post => <div key= {post.id}>{post.title}</div>) : null}
            {errorLog? <div>{errorLog}</div>: null}
        </div>
    }
}

export default GetList