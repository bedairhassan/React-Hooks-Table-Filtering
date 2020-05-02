import React from 'react'

function Dropdown({selected,data}) {
    return (

        <React.Fragment>
            <select onChange={(e)=>{selected(e.target.value)}}>
                {
                    data.map(item=><option value={item}>{item}</option>)
                }
            </select>   

        </React.Fragment>
    )
}

export default Dropdown
