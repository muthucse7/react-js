import React from 'react';

const UserFunctionalComponent = (props) => {
    return (
        <div>
            <h3>Name: {props.children} | Age: {props.age}</h3>
        </div>
    );
}

export default UserFunctionalComponent;