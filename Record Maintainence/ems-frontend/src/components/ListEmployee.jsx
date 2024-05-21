// import React, {useEffect, useState} from "react";

// const listEmployee = () => {

//         const [employeeMasters, setEmployeeMasters] = useState([]);
//         const [employeeDetails, setEmployeeDetails] = useState([]);
//         const navigate = useNavigate();

//         useEffect(() => {
//             document.title = "Employee Data";
//             listEmployee().then((response) => {
//                 setEmployeeMasters(response.data);
//                 setEmployeeDetails(response.data);
//             }).catch(error => {
//                 console.error(error);
//             })
//         }, []);

//     return (
//         <div className="container">
//             <h2 className="text-center"> Welcome</h2>
//             <table className="table table-striped table-bordered">
//                 <thead>
//                     <tr>
//                         <th>EmpID</th>
//                         <th>EmpName</th>
//                         <th>Designation</th>
//                         <th>Department</th>
//                         <th>Joined Date</th>
//                         <th>Salary</th>
//                         <th>Address Line 1</th>
//                         <th>Address Line 2</th>
//                         <th>City</th>
//                         <th>State</th>
//                         <th>Country</th>
//                         <th>Update</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         employeeMasters.map(employee =>
//                             <tr key={employee.}
//                         )
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }