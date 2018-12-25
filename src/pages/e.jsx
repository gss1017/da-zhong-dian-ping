import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActions from '../actions/userInfo';

class E extends React.Component {

    componentDidMount() {
        this.props.userInfoActions.login({
            name: 'gss',
            city: '深圳'
        });
    }

    render() {
        const {userInfo} = this.props;
        return (
            <div>
                <div>{userInfo.name}</div>
                <div>{userInfo.city}</div>
                <div
                    onClick={() => {
                        this.props.userInfoActions.city({
                            city: 'bjs'
                        });
                    }}
                >
                    click
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userInfoActions: bindActionCreators(userInfoActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(E);
