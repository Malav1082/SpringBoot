import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [employee, setEmployee] = useState({
        empID: '',
        empName: '',
        designation: '',
        department: '',
        joinedDate: '',
        salary: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/employee', employee);
            navigate('/');
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
                    <Input type="text" name="empID" id="empID" value={employee.empID} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="empName">Employee Name</Label>
                    <Input type="text" name="empName" id="empName" value={employee.empName} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="designation">Designation</Label>
                    <Input type="text" name="designation" id="designation" value={employee.designation} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="department">Department</Label>
                    <Input type="text" name="department" id="department" value={employee.department} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="joinedDate">Joined Date</Label>
                    <Input type="date" name="joinedDate" id="joinedDate" value={employee.joinedDate} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="salary">Salary</Label>
                    <Input type="number" name="salary" id="salary" value={employee.salary} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="addressLine1">Address Line 1</Label>
                    <Input type="text" name="addressLine1" id="addressLine1" value={employee.addressLine1} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="addressLine2">Address Line 2</Label>
                    <Input type="text" name="addressLine2" id="addressLine2" value={employee.addressLine2} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="city">City</Label>
                    <Input type="text" name="city" id="city" value={employee.city} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="state">State</Label>
                    <Input type="text" name="state" id="state" value={employee.state} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="country">Country</Label>
                    <Input type="text" name="country" id="country" value={employee.country} onChange={handleChange} required />
                </FormGroup>
                <Button color="primary" type="submit">Submit</Button>
                <Button color="secondary" onClick={handleBack}>Back</Button>
            </Form>
        </div>
    );
};

export default Add;
