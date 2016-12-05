var React = require('react');
var ReactDOM = require('react-dom');

var EmailList = require('./emaillist.js');

var MBOX = require('../emails');


var EmailListContainer = React.createClass({
	 getInitialState: function() {
		var mboxname = props.params.mailbox-name
		var themails = MBOX[mboxname]
		console.log("themails: ");
		console.dir(themails);
        return {
            emails: themails
        }
    },
    render: function() {
        return <EmailList emails={this.state.emails} />
    }
});

module.exports = EmailListContainer;