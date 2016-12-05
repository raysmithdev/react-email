var React = require('react');
var ReactDOM = require('react-dom');

var EmailList = function(props) {
	console.dir(props);
	var emails = Object.keys(props.emails).map(function(emailId, index) {
		var thisemail = props.emails[emailId];
		return (
			<EmailItem from={thisemail.from} to={thisemail.to} subject={thisemail.title} key={thisemail.id} mailboxname={props.mailboxname} onMailClick={props.onMailClick} />
		);
	});
	
    return (
			<main>
				<div id="content">
					<div id="inner">
						<table>
							<tbody>
							<tr><th>from</th><th>title</th></tr>
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
		<tr onClick={props.onMailClick}><td>{props.from}</td><td>{props.subject}</td></tr>
	);
}

module.exports = EmailList;