var React = require('react');
var ReactDOM = require('react-dom');
import {browserHistory} from 'react-router';

var EmailList = require('./emaillist.js');

var MBOX = require('../emails');


var EmailListContainer = React.createClass({
	 getInitialState: function() {
		var mboxname = this.props.params.mailboxname
		if (!mboxname) {
			console.log("ERROR: No mailbox name passed.");
			mboxname = "inbox";
		}
		var themails = MBOX[mboxname]
		console.log("themails: ");
		console.dir(themails);
        return {
            emails: themails
        }
    },
    onMailClick: function() {
	    console.log("Click iin th container");
	    console.log("history: ");
		console.dir(browserHistory);
		browserHistory.push('#/spam');

    },
    render: function() {
        return <EmailList emails={this.state.emails} mailboxname={this.state.mboxname} onMailClick={this.onMailClick} />
    }
});

module.exports = EmailListContainer;