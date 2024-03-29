import React, { Component } from 'react'
import axios from 'axios'
 class HttppostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMsg:''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response,'api');
            this.setState({posts: response.data})
        })
        .catch(error =>{
            console.log(error)
            this.setState({errorMsg: 'Error retrive data'})
        })
    }
  render() {
    const {posts,errorMsg} = this.state
    return (
      <div>
        list
        {posts.length ? posts.map(post =><div key={post.id}>{post.title}</div>): null}
        {errorMsg? <div>{errorMsg}</div>: null}
      </div>
    )
  }
}

export default HttppostList
