var USER_DATA = {
    name: 'Chris Villarreal',
    username: 'christophior',
    image: 'https://pbs.twimg.com/profile_images/597565924497952768/bBkH8eBe_400x400.jpg'
}

var React = require('react'),
    ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
    render: function () {
        return (
            <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
        )
    }
});

var ProfileName = React.createClass({
    render: function () {
        return (
            <div>{this.props.name}</div>
        )
    }
})

var ProfileLink = React.createClass({
    render: function () {
        return (
            <div>
                <a href={'https://www.github.com/' + this.props.username}>
                    {this.props.username}
                </a>
            </div>
        )
    }
})

var Avatar = React.createClass({
    render: function () {
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username}/>
            </div>
        )
    }
})

ReactDOM.render(
    <Avatar user={USER_DATA} />,
    document.getElementById('app')
);
