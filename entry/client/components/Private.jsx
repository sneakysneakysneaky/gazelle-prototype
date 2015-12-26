const { History } = ReactRouter;

export default React.createClass({
    mixins: [ReactMeteorData, History],
    getMeteorData: function () {
        return {
            isAuthenticated: Meteor.userId() !== null
        };
    },
    componentWillMount: function () {
        if (!this.data.isAuthenticated) {
            this.history.push('/login');
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (!this.data.isAuthenticated) {
            this.history.push('/login');
        }
    },
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
});