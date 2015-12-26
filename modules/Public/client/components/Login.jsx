const { History } = ReactRouter;

export default React.createClass({
    mixins: [History],
    getInitialState() {
        return {
            error: false
        }
    },
    handleSubmit(e) {
        e.preventDefault();

        var username = this.refs.username.value;
        var password = this.refs.password.value;
        Meteor.loginWithPassword(username, password, this.loginCallback);
    },
    loginCallback(err) {
        if (err) {
            this.setState({error: true});
        }
    },
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label><input ref="username" placeholder="username" /></label>
                <label><input ref="password" placeholder="password"/></label><br />
                <button type="submit">login</button>
                {this.state.error && (
                <p>Bad login information</p>
                    )}
            </form>
        )
    }
});
