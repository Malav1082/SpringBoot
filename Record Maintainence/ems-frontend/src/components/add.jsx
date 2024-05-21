import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [employeeMasters, setEmployeeMasters] = useState({
        user: JSON.parse(sessionStorage.getItem("user")),
        empID: '',
        empName: '',
        designation: '',
        department: '',
        joinedDate: '',
        salary: '',
    });

    const [employeeDetails, setEmployeeDetails] = useState({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: ''
    });

    const navigate = useNavigate();

    const handleChangeMaster = (e) => {
        const { name, value } = e.target;
        setEmployeeMasters(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleChangeDetail = (e) => {
        const { name, value } = e.target;
        setEmployeeDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const masterResponse = await axios.post('http://localhost:8080/api/employee-master', employeeMasters);
            const detailsResponse = await axios.post('http://localhost:8080/api/employee-details', employeeDetails);

            navigate('/');
            // if (masterResponse.status === 200 && detailsResponse.status === 200) {

            // } else {
            //     console.error("Error adding employee details:", masterResponse, detailsResponse);
            // }
        } catch (error) {
            console.error("Error adding employee:", error);
        }
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>Add Employee</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="empID">Employee ID</Label>
                    <Input type="text" name="empID" id="empID" value={employeeMasters.empID} onChange={handleChangeMaster} required />
                </FormGroup>
                <FormGroup>
                    <Label for="empName">Employee Name</Label>
                    <Input type="text" name="empName" id="empName" value={employeeMasters.empName} onChange={handleChangeMaster} required />
                </FormGroup>
                <FormGroup>
                    <Label for="designation">Designation</Label>
                    <Input type="text" name="designation" id="designation" value={employeeMasters.designation} onChange={handleChangeMaster} required />
                </FormGroup>
                <FormGroup>
                    <Label for="department">Department</Label>
                    <Input type="text" name="department" id="department" value={employeeMasters.department} onChange={handleChangeMaster} required />
                </FormGroup>
                <FormGroup>
                    <Label for="joinedDate">Joined Date</Label>
                    <Input type="date" name="joinedDate" id="joinedDate" value={employeeMasters.joinedDate} onChange={handleChangeMaster} required />
                </FormGroup>
                <FormGroup>
                    <Label for="salary">Salary</Label>
                    <Input type="number" name="salary" id="salary" value={employeeMasters.salary} onChange={handleChangeMaster} required />
                </FormGroup>
                <FormGroup>
                    <Label for="addressLine1">Address Line 1</Label>
                    <Input type="text" name="addressLine1" id="addressLine1" value={employeeDetails.addressLine1} onChange={handleChangeDetail} required />
                </FormGroup>
                <FormGroup>
                    <Label for="addressLine2">Address Line 2</Label>
                    <Input type="text" name="addressLine2" id="addressLine2" value={employeeDetails.addressLine2} onChange={handleChangeDetail} />
                </FormGroup>
                <FormGroup>
                    <Label for="city">City</Label>
                    <Input type="text" name="city" id="city" value={employeeDetails.city} onChange={handleChangeDetail} required />
                </FormGroup>
                <FormGroup>
                    <Label for="state">State</Label>
                    <Input type="text" name="state" id="state" value={employeeDetails.state} onChange={handleChangeDetail} required />
                </FormGroup>
                <FormGroup>
                    <Label for="country">Country</Label>
                    <Input type="text" name="country" id="country" value={employeeDetails.country} onChange={handleChangeDetail} required />
                </FormGroup>
                <Button color="primary" type="submit">Submit</Button>
                <Button color="secondary" onClick={handleBack}>Back</Button>
            </Form>
        </div>
    );
};

export default Add;
