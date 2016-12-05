var React = require('react');
var ReactDOM = require('react-dom');

var MailboxListContainer = require('./mailboxlist-container.js');

var App = function(props) {
    return (
	    <div id="all-the-stuff">
		<header id="mail-header">
			<div className="inner">
				<div id="mail-controls">
					<form id="new-mail"><input type="submit" value="New Mail" disabled /></form>
					<form id="search"><input type="text" name="search" disabled /><input type="submit" value="Go" disabled /></form>
				</div>

			</div>
		</header>
		<div id="wrapper">
              {props.children}
              <MailboxListContainer selectedMailbox={props.params.mailboxname} />
		</div>
		<footer id="footer">
			<span id="footer-title">Corvid - A Fascinating mail client</span>
		</footer>
		</div>
    );
};

module.exports = App;