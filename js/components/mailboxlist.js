var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Link = router.Link;

var MailboxList = function(props) {
	var mailboxes = [];
    let boxeslen = props.mailboxes.length;
    for (var i=0; i<boxeslen; i++) {
	    var selected=false;
	    if (props.selectedMailbox === props.mailboxes[i]) {
		    selected=true;
	    }
         mailboxes.push(<MailboxItem mailboxname={props.mailboxes[i]} key={i} selected={selected} />);
    }

    return (
	    	<nav id="mailboxes">
				<div className="inner">
					<ul>
						{mailboxes}
					</ul>
				</div>
			</nav>
    );
};

var MailboxItem = function (props) {
	if (props.selected) {
		return (
			<li ><Link to={'/' + props.mailboxname}><b>{props.mailboxname}</b></Link></li>
		)
	} else {
	return (
		<li ><Link to={'/' + props.mailboxname}>{props.mailboxname}</Link></li>
	);

	}
}

module.exports = MailboxList;