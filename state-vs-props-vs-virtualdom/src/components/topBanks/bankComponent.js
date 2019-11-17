import React from 'react';

const BankComponent = (props) => {
    return (<div>
        <h3>Bank Name: {props.children}, Founded: {props.founded}, Total Employee: {props.totalEmployee}</h3>
    </div>);
}

export default BankComponent;