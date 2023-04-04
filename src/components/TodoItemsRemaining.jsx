import React from "react";

export default function TodoItemsRemaining(props)
{
    const {remaining} = props;
    return (
        <span>{remaining()} items remaining</span>
    );
}