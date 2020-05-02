import React from 'react'
import Columns from './Columns'
import Body from './Body'

function Table({data,headers}) {
    return (
        
        <React.Fragment>

            <table>

            <Columns headers={headers}/>
            <Body data={data}/>
                
            </table>

        </React.Fragment>
    )
}

export default Table
