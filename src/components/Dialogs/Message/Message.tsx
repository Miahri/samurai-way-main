import React from "react";

type messageType = {
    message: string
}

export const Message = (props: messageType) => {
    return(
        <div>{props.message}</div>
    )
}