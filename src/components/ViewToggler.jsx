import React, { Component } from 'react';

class ViewToggler extends Component {

    state = {
        showContent: false
    }

    handleClick = () => {
        this.setState(currentState => {
            return {showContent: !currentState.showContent}
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} >Show/Hide</button>
                {this.state.showContent && this.props.children}
            </div>
        );
    }
}

export default ViewToggler;