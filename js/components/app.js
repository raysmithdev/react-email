var React = require('react');

var App = function(props) {
    return (
        <div>
            <h1>
                Mail
            </h1>
            <div>
                {props.children}
            </div>
        </div>
    );
};

module.exports = App;