var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Link = router.Link;

var Email = function(props) {
    return (
			<main>
				<div id="content">
					<div id="inner">
						<div id="return-link"><Link to={'/' + props.mailboxname}>Return</Link></div>
						<div id="mail-subject">{props.email.title}</div>
						<div id="mail-from">{props.email.from}</div>
						<div id="mail-to">{props.email.to}</div>
						<div id="mail-content">{props.email.content}</div>
					</div>
				</div>
			</main>

    );
};


module.exports = Email;