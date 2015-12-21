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
        //TODO Should authentication check and redirect be done here?
    },
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
});