import React, {Component} from 'react';

const withDetails = (View) => {
    return class extends Component{
        render(){
            return <View {...this.props}/>;
        }
    }
};

export default withDetails;