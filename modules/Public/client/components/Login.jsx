import {Formsy} from 'formsy-react';
const { History } = ReactRouter;

export default React.createClass({
    mixins: [History],
    getInitialState() {
        return {
            error: false
        }
    },
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label><input ref="username" placeholder="username" /></label>
                <label><input ref="pass" placeholder="password"/></label><br />
                <button type="submit">login</button>
                {this.state.error && (
                <p>Bad login information</p>
                    )}
            </form>
        )
    }
});
