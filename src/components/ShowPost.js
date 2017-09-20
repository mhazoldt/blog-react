import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import { withRouter } from 'react-router'

class ShowPost extends Component {
    constructor(props) {
        super()
        this.state = {posts: []}
        console.log(props.match.params.id)
        this.currentPost = props.match.params.id
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
        .then(function(response) {
            return response.json()
        })
        .then((data) => {
          console.log(data)


          let postHtml = []

          postHtml = data.map((post, idx) => {
            if(post._id === this.currentPost) {
              return (
                <div className="m-4 p-4 mx-auto" key={idx}>
                  
                  <div className="card-title mx-auto"><h5><u>{post.title}</u></h5></div>
                  <div className="card-text"><blockquote>{post.blog}</blockquote></div>
                  <div className="card-subtitle text-muted">by: {post.name}</div>
                  
                </div>
              )
            } else {
              return ''
            }
            
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
          <a onClick={() => {window.history.back()}} className="card-link text-primary">Back</a>
        </div>
      );
    }
}

export default withRouter(ShowPost);