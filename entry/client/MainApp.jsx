import { Component } from 'react';
import Helmet from 'react-helmet';

export default class MainApp extends Component {
    render() {
        return (
            <div>
                <Helmet
                    title="Test"
                    meta={[
            { name: 'description', content: 'This is a Todo application!' }
          ]}
                />
                {this.props.children}
            </div>
        );
    }
}