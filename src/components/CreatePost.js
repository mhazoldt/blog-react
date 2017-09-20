import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';


class CreatePost extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      name: '',
      blog: ''
    }

    this.createNewPost = this.createNewPost.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    let state = this.state
    console.log({state})
  }

  createNewPost(e) {
    e.preventDefault()
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(this.state)
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })

    document.querySelector("#title").value = ''
    document.querySelector("#blog").value = ''
    document.querySelector("#name").value = ''

    this.props.history.push('/')

  }



  render() {
    return (
        <div>
          <form onSubmit={this.createNewPost} className="mt-3">
            <label>Title: </label>
            <input name="title" id="title" onChange={this.handleChange} className="form-control" type="text" /><br />
            
            
              <label>Blog: </label>
              <textarea name="blog" id="blog" onChange={this.handleChange} className="form-control" rows="10"></textarea>
            
            <div className="mt-2">
            <label>Name: </label>
            <input name="name" id="name" onChange={this.handleChange} className="form-control" type="text" />
            </div>
            <button className="btn btn-primary mt-3" type="submit">Post</button>
          </form>
        </div>
        
    );
  }
}

export default CreatePost;
