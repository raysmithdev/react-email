var React = require('react');
var ReactDOM = require('react-dom');

var MailboxList = require('./mailboxlist.js');

var MailboxListContainer = React.createClass({
	 getInitialState: function() {
        return {
            mailboxes: ["inbox", "spam"]
        }
    },
    render: function() {
        return <MailboxList mailboxes={this.state.mailboxes} selectedMailbox={this.props.selectedMailbox} />
    }
});

module.exports = MailboxListContainer;