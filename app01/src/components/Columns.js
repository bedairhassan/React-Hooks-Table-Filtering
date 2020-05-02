import React from 'react'

function Columns({ headers }) {
    return (

        <React.Fragment>
            <tr>
                {
                    headers.map(head => <th>{head}</th>)
                }
            </tr>
        </React.Fragment>
    )
}

export default Columns
