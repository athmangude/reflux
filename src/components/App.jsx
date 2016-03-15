import React, { Component } from 'react';
import MessageList from './MessageList.jsx';

import AppBar from 'material-ui/lib/app-bar';

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MyCustomTheme from './../MaterialTheme.js';

class App extends Component {
    constructor(){
        super();
    }

    //the key passed through context must be called "muiTheme"
    static childContextTypes = {
        muiTheme: React.PropTypes.object,
    }

    getChildContext() {
        return {
            muiTheme: getMuiTheme(MyCustomTheme),
        };
    }


    render() {
        return (
            <div>
                <AppBar title="Awesome Chat App" />
                <MessageList />
            </div>
        );
    }
}

export default App;
