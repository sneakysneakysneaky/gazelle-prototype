const {History} = ReactRouter;

export default React.createClass({
    mixins: [History],
    getInitialState() {
        return {
            error: false
        }
    },
    handleSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value;
        let username = this.refs.username.value;
        let password = this.refs.password.value;

        Accounts.createUser({
            email: email,
            username: username,
            password: password
        }, this.createUserCallback);
    },
    createUserCallback(err) {
        if (err) {
            this.setState({error: true});
        }
    },
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label><input ref="email" placeholder="email" type="email"/></label><br />
                <label><input ref="username" placeholder="username"/></label> <br />
                <label><input ref="password" placeholder="password" type="password"/></label><br />
                <button type="submit">Register</button>
                {this.state.error && (
                <p>Bad login information</p>
                    )}
            </form>
        )
    }
});
