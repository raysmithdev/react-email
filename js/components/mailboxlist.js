var React = require('react');
var ReactDOM = require('react-dom');

var MailboxList = function(props) {
	var mailboxes = [];
    let boxeslen = props.mailboxes.length;
    for (var i=0; i<boxeslen; i++) {
         mailboxes.push(<MailboxItem mailboxname={props.mailboxes[i]} key={i} />);
    }

    return (
	    	<nav id="mailboxes">
				<div className="inner">
					<h3>Mailboxes</h3>
					<ul>
						{mailboxes}
					</ul>
				</div>
			</nav>
    );
};

var MailboxItem = function (props) {
	return (
		<li ><a href="#">{props.mailboxname}</a></li>
	);
}

module.exports = MailboxList;