import React, { useEffect, useState } from 'react';
import { Table, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { fetchEmployeeMasters, fetchEmployeeDetails, deleteEmployee } from '../services/Employee';

const EmployeeTable = () => {
    const [employeeMasters, setEmployeeMasters] = useState([]);
    const [employeeDetails, setEmployeeDetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Employee Data";
        fetchEmployeeData();
    }, []);

    const fetchEmployeeData = async () => {
        try {
            const mastersRes = await fetchEmployeeMasters();
            console.log("Masters Response:", mastersRes.data);
            if (Array.isArray(mastersRes.data)) {
                setEmployeeMasters(mastersRes.data);
            } else {
                console.error("Expected an array but received:", mastersRes.data);
            }

            const detailsRes = await fetchEmployeeDetails();
            console.log("Details Response:", detailsRes.data);
            if (Array.isArray(detailsRes.data)) {
                setEmployeeDetails(detailsRes.data);
            } else {
                console.error("Expected an array but received:", detailsRes.data);
            }
        } catch (error) {
            console.error("Error fetching employee data:", error);
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
            await deleteEmployee(empID);
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
                    {employeeMasters.map((master) => {
                        const detail = employeeDetails.find(d => d.empID === master.empID) || {};
                        console.log("Master:", master, "Detail:", detail);
                        return (
                            <tr key={master.empID}>
                                <td>{master.empID}</td>
                                <td>{master.empName}</td>
                                <td>{master.designation}</td>
                                <td>{master.department}</td>
                                <td>{master.joinedDate}</td>
                                <td>{master.salary}</td>
                                <td>{detail.addressLine1 || 'N/A'}</td>
                                <td>{detail.addressLine2 || 'N/A'}</td>
                                <td>{detail.city || 'N/A'}</td>
                                <td>{detail.state || 'N/A'}</td>
                                <td>{detail.country || 'N/A'}</td>
                                <td><Button color="warning" onClick={() => handleUpdate(master.empID)}>Update</Button></td>
                                <td><Button color="danger" onClick={() => handleDelete(master.empID)}>Delete</Button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default EmployeeTable;
