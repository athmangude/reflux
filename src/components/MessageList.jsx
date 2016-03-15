import React from 'react';
import Message from './Message';

import mui from 'material-ui';

var {Card, List} = mui;

class MessageList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                'Hello there! How are you?',
                'I am doing great! How are you doing?',
                'All is well. What are you upto these days?',
                'Haha! I left the country. I live abroad now :0'
            ]
        };
    }

    render() {
        var messageNodes = this.state.messages.map((message) => {
            return (
                <Message message={message} />
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
