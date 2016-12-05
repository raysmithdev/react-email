var React = require('react');
var ReactDOM = require('react-dom');

var Email = require('./email.js');

var MBOX = require('../emails');


var EmailContainer = React.createClass({
	 getInitialState: function() {
		var mboxname = this.props.params.mailboxname	
		var emailId = this.props.params.emailid
		var themail = MBOX[mboxname][emailId]
        return {
            email: themail,
            currentmailbox: mboxname
        }
    },
    componentWillReceiveProps: function(nextProps) {
		var mboxname = this.props.params.mailboxname	
		var emailId = this.props.params.emailid
		var themail = MBOX[mboxname][emailId]
		this.setState({
			email: themail,
			currentmailbox: mboxname
		})
  	},
    onMailClick: function() {
		this.props.router.push('/spam');
    },
    render: function() {
        return <Email email={this.state.email} mailboxname={this.state.currentmailbox} onMailClick={this.onMailClick} />
    }
});

module.exports = EmailContainer;