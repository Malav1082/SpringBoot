import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const EmployeeTable = () => {
    const [employeeMasters, setEmployeeMasters] = useState([]);
    const [employeeDetails, setEmployeeDetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Employee Data";
        fetchEmployeeMasters();
        fetchEmployeeDetails();
    }, []);

    const fetchEmployeeMasters = async () => {
        try {
            const res = await axios.get('/api/employee-master');
            if (Array.isArray(res.data)) {
                setEmployeeMasters(res.data);
            } else {
                console.error("Expected an array but received:", res.data);
            }
        } catch (error) {
            console.error("Error fetching employee masters:", error);
        }
    };

    const fetchEmployeeDetails = async () => {
        try {
            const res = await axios.get('/api/employee-details');
            if (Array.isArray(res.data)) {
                setEmployeeDetails(res.data);
            } else {
                console.error("Expected an array but received:", res.data);
            }
        } catch (error) {
            console.error("Error fetching employee details:", error);
        }
    };

    const handleAdd = () => {
        navigate('/add');
    };

    const handleUpdate = (empID) => {
        navigate(`/update/${empID}`);
    };

    const handleDelete = async (empID) => {
        try {
            await axios.delete(`/api/employee/${empID}`);
            setEmployeeMasters(employeeMasters.filter(emp => emp.empID !== empID));
        } catch (error) {
            console.error("Error deleting employee:", error);
        }
    };

    return (
        <div>
            <h1>Employee Data</h1>
            <Button color="primary" onClick={handleAdd}>Add Employee</Button>
            <Table striped>
                <thead>
                    <tr>
                        <th>EmpID</th>
                        <th>EmpName</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>Joined Date</th>
                        <th>Salary</th>
                        <th>Address Line 1</th>
                        <th>Address Line 2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeMasters.map(emp => (
                        <tr key={emp.empID}>
                            <td>{emp.empID}</td>
                            <td>{emp.empName}</td>
                            <td>{emp.designation}</td>
                            <td>{emp.department}</td>
                            <td>{new Date(emp.joinedDate).toLocaleDateString()}</td>
                            <td>{emp.salary}</td>
                            <td>{employeeDetails.find(detail => detail.empID === emp.empID)?.addressLine1 || ''}</td>
                            <td>{employeeDetails.find(detail => detail.empID === emp.empID)?.addressLine2 || ''}</td>
                            <td>{employeeDetails.find(detail => detail.empID === emp.empID)?.city || ''}</td>
                            <td>{employeeDetails.find(detail => detail.empID === emp.empID)?.state || ''}</td>
                            <td>{employeeDetails.find(detail => detail.empID === emp.empID)?.country || ''}</td>
                            <td>
                                <Button color="warning" onClick={() => handleUpdate(emp.empID)}>Update</Button>
                            </td>
                            <td>
                                <Button color="danger" onClick={() => handleDelete(emp.empID)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default EmployeeTable;
