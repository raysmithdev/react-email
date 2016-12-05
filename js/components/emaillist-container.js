var React = require('react');
var ReactDOM = require('react-dom');
import { withRouter } from 'react-router';

var EmailList = require('./emaillist.js');

var MBOX = require('../emails');


var EmailListContainer = React.createClass({
	 getInitialState: function() {
		var mboxname = "inbox";
		var newboxname = this.props.params.mailboxname	
		if (newboxname && newboxname !== mboxname) {
			mboxname = newboxname
		}
		var themails = MBOX[mboxname]
        return {
            emails: themails,
            currentmailbox: mboxname
        }
    },
    componentWillReceiveProps: function(nextProps) {
		var newboxname = this.props.params.mailboxname	
		if (newboxname && newboxname !== this.state.currentmailbox) {
			var themails = MBOX[newboxname]
			this.setState({
				emails: themails,
				currentmailbox: newboxname
			})
		}
  	},
    onMailClick: function(event) {
	    var identifier = event.currentTarget.dataset.id;
		this.props.router.push('/' + this.state.currentmailbox + '/' + identifier);

    },
    render: function() {
        return <EmailList emails={this.state.emails} mailboxname={this.state.mboxname} onMailClick={this.onMailClick} />
    }
});

module.exports = EmailListContainer;