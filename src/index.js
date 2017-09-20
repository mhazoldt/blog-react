import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

    
ReactDOM.render(
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/new" component={CreatePost} />
                    <Route exact path="/:id" component={ShowPost} />
                    <Route exact path="/" component={PostList} />
                </Switch>
            </App>
        </BrowserRouter> 
    , document.getElementById('root'));
registerServiceWorker();

