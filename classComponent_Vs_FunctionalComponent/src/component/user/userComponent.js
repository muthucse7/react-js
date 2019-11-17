import React, { Component } from 'react';
import UserFunctionalComponent from '../user/userFunctionalComponent';

class UserComponent extends Component {

    render() {
        return (<div className="user_component_section">
            <UserFunctionalComponent age='20'>Megan</UserFunctionalComponent>
            <UserFunctionalComponent age='30'>Cora</UserFunctionalComponent>
            <UserFunctionalComponent age='17'>Peter</UserFunctionalComponent>
        </div>);
    }
}

export default UserComponent;