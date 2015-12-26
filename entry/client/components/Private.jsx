const { History } = ReactRouter;
import Header from 'Header/client/components/Header'
//import Footer from 'Footer/client/components/Footer'

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
            <div className='main-container'>
                <Header />
                <div className='main-content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
});