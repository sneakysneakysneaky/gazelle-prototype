export default React.createClass({
    getInitialState() {
        return {
            error: false
        }
    },
    handleSubmit(e) {
        debugger;
    },
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label><input ref="email" placeholder="email" type="email"/></label><br />
                <label><input ref="username" placeholder="username" /></label> <br />
                <label><input ref="password" placeholder="password" type="password"/></label><br />
                <button type="submit">Register</button>
                {this.state.error && (
                <p>Bad login information</p>
                    )}
            </form>
        )
    }
});
