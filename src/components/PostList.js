import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';

class PostList extends Component {
    constructor() {
        super()
        this.state = {posts: []}
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
        .then(function(response) {
            return response.json()
        })
        .then((data) => {
          console.log(data)


          let postHtml = []

          postHtml = data.map((post, idx) => {
            return (
              <div className="card m-4 p-4 col-8 mx-auto" key={idx}>
                
                <div className="card-title mx-auto"><h5><u>{post.title}</u></h5></div>
                <div className="card-text"><blockquote>{post.blog}</blockquote></div>
                <div className="card-subtitle text-muted">by: {post.name}</div>
                <a onClick={() => {this.props.history.push("/" + post._id)}} className="card-link text-primary">View</a>
              </div>
            )
          })



          this.setState({posts: postHtml})
        })
        .catch(function(err) {
            console.log(err)
        });
    }
    
    render() {

      return (
        <div>
          {this.state.posts}
        </div>
      );
    }
}

export default PostList;
