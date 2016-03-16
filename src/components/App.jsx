import React, { Component } from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

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
                <div style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    maxWidth: 1200,
                    width: '100%',
                    margin: '30px auto 30px'
                }}>
                    <ChannelList />
                    <MessageList />
                </div>
                <MessageBox />
            </div>
        );
    }
}

export default App;
