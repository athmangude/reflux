import React from 'react';
import Message from './Message';

import mui from 'material-ui';

import Firebase from 'firebase';
import _ from 'lodash';

var {Card, List} = mui;

class MessageList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };

        this.firebaseRef = new Firebase('https://refluxy.firebaseio.com/messages');

        // listening for added events
        this.firebaseRef.on('child_added', (message) => {
            if (this.state.messages[message.key()]) {
                return;
            }

            this.state.messages[message.key()] = message.val();

            this.setState({
                messages: this.state.messages
            });
        });

        // listening for delete events
        this.firebaseRef.on('child_removed', (message) => {
            delete this.state.messages[message.key()];

            this.setState({
                messages: this.state.messages
            });
        });

    }

    render() {
        var messageNodes = _.values(this.state.messages).map((message) => {
            return (
                <Message message={message.message} />
            );
        });

        return (
            <Card style={{
                flexGrow: 2,
                marginLeft: 30
            }}>
                <List>
                    {messageNodes}
                </List>
            </Card>
        );
    }
}

export default MessageList;
