const {Link} = ReactRouter;

export default React.createClass({
    render() {
        return (
            <div>
                Welcome
                <br />
                <Link to="/login">Login</Link>
                <br />
                <Link to="/sign-up">Sign up</Link>
            </div>
        )
    }
});
