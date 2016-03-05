var React = require('react'),
    ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render: function () {
        return (
            <div>Hello Pebbs!</div>
        )
    }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);
