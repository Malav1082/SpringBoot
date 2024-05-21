import axios from "axios";

const EMPLOYEE_MASTER_API = 'http://localhost:8080/api/employee-master';
const EMPLOYEE_DETAILS_API = 'http://localhost:8080/api/employee-details';
const EMPLOYEE_API = 'http://localhost:8080/api/employee';  // This is not used in the provided code

export const fetchEmployeeMasters = () => axios.get(EMPLOYEE_MASTER_API);
export const fetchEmployeeDetails = () => axios.get(EMPLOYEE_DETAILS_API);
export const deleteEmployee = (empID) => axios.delete(`${EMPLOYEE_MASTER_API}/${empID}`);
