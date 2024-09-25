import React, { useState } from 'react';

export default function HooksUseState() {
    const [data, setData] = useState("anjum");

    return (
        <div>
            <h1>This is useState hook</h1>
            <h1> this  data  will update from usestate  hook {data}</h1>
            <button onClick={() => setData("shah")}>
                {
                    data !== 'shah' ?
                        <h1>update</h1>
                        :
                        <h1>revert</h1>
                }
            </button>
        </div>
    );
}
