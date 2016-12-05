var React = require('react');
var ReactDOM = require('react-dom');

var MailboxList = require('./mailboxlist.js');

var MailboxListContainer = React.createClass({
	 getInitialState: function() {
		 console.log("MailboxListContainer: State: selectedMailbox: " + this.props.selectedMailbox);
        return {
            mailboxes: ["inbox", "spam"]
        }
    },
    render: function() {
        return <MailboxList mailboxes={this.state.mailboxes} selectedMailbox={this.props.selectedMailbox} />
    }
});

module.exports = MailboxListContainer;