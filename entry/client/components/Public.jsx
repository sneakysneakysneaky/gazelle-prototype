import { Component } from 'react';

export default class Public extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}