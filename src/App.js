import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
	fetchFirst(url) {
    var that = this;
    if (url) {
      fetch('https://www.reddit.com/r/' + url + '.json').then(function (response) {
        return response.json();
      }).then(function (result) {
        //console.log(result.data.children);
        that.setState({ posts: result.data.children, lastPostName: result.data.children[result.data.children.length - 1].data.name });
        alert(that.state.posts[0]);
      });
    }
  }  
  componentDidMount() {
      this.fetchFirst("react");
  }
  render() {
    return (
      <div className="App">
				<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React AJAX Example</h1>
        </header>
        <p className="App-intro">
          <ul>
            {this.state.posts.map(post =>
              <li key={post.id}>{post.title}</li>
            )}
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
