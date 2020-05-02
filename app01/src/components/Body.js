import React from 'react'

function Body({ data }) {
    return (

        <React.Fragment>
            {
                    data.map(({shape,color}) => <React.Fragment>
                        <tr>
                        
                        <td>{shape}</td>
                        <td>{color}</td>

                        </tr>
                    </React.Fragment>)
                }
        </React.Fragment>
    )
}

export default Body
