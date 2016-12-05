require('babel-polyfill');


var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;

var App = require('./components/app');
var EmailListContainer = require('./components/emaillist-container');
//var EmailList = require('./components/');
//var EmailHeaderContainer = require('./components/');
//var EmailHeader = require('./components/');
//var EmailContainer = require('./components/');
//var Email = require('./components/');

var NoMailboxSelected = function(props) {
	return (
			<main>
				<div id="content">
					<div id="inner">
						<h2 className="no-selection">No mailbox selectedd</h2>
					</div>
				</div>
			</main>

	)
}


var routes = (
    <Router history={hashHistory}> 
        <Route path="/" component={App}>
          <IndexRoute component={NoMailboxSelected} />
          <Route path="mbox/:mailbox-name" component={EmailListContainer} /> 
          <Route path="*" component={NoMailboxSelected} />
       </Route>
    </Router>
); 



document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
}); 