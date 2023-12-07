import React from 'react'

function List(props) {
    console.log("props", props.toList);


    return (



        <div className='d-flex flex-column justify-content-center align-items-center mt-5'>

            <h1 className='mt-5 mb-5'>Country List</h1>

            <table className='ms-5 align-items-center table'>
                <thead>
                    <tr>
                        <th>Country name</th>
                        <th>Capital</th>
                        <th>Flag</th>
                        <th>Region</th>
                        <th>Population</th>
                        <th>Time zone</th>
           
                    </tr>
                </thead>

                <tbody>
                    {
                        props.toList.map((item) => (
                            <tr>
                                <td>{item.name.common}</td>
                                <td>{item.capital}</td>
                                <td><img src={item.coatOfArms.png} width={100} height={100} /></td>
                                <td>{item.region}</td>
                                <td>{item.population}</td>
                                <td>{item.timezones}</td>
                               
                            </tr>

                        ))
                    }

                </tbody>
            </table>

        </div>
    )
}

export default List