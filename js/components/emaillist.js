var React = require('react');
var ReactDOM = require('react-dom');

var EmailList = function(props) {
	var emails = Object.keys(props.emails).map(function(emailId, index) {
		var thisemail = props.emails[emailId];
		return (
			<EmailItem from={thisemail.from} to={thisemail.to} subject={thisemail.title} key={thisemail.id} mailid={thisemail.id} mailboxname={props.mailboxname} onMailClick={props.onMailClick} />
		);
	});
	
    return (
			<main>
				<div id="content">
					<div id="inner">
						<table>
							<tbody>
							{emails}
							</tbody>
						</table>
					</div>
				</div>
			</main>

    );
};

var EmailItem = function (props) {
	return (
		<tr onClick={props.onMailClick} data-id={props.mailid}><td>{props.from}</td><td>{props.subject}</td></tr>
	);
}

module.exports = EmailList;