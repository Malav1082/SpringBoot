import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "firstName": "Rohit",
            "lastName": "Sharma",
            "email": "rohit@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Virat",
            "lastName": "Kohli",
            "email": "virat@gmail.com"
        },
        {
            "id": 3,
            "firstName": "Jaspreet",
            "lastName": "Bumrah",
            "email": "jassi@gmail.com"
        },
    ]

  return (
    <div className='container'>
      <h2>List of Employess</h2>
        <table>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent
