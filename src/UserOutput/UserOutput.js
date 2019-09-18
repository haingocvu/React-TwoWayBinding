import React from "react";

const userOutput = (props) => {

    const style = {
        backgroundColor: 'white',
        border: "1px solid #eee",
        width: '20%',
        margin: '16px auto'
    }

    return (
        <p style={style}>
            Xin chào {props.userName}
        </p>
    )
}

export default userOutput;