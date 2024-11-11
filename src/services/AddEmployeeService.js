// import apiController from './apiController';
// const CREATE_EMPLOYEE = "/createEmployee";

// const AddEmployeeService = {
//     async addEmployee(employeeData) {
//         try {
//             const response = await apiController.fetchData(CREATE_EMPLOYEE, {
//                 method: 'POST',
//                 body: JSON.stringify(employeeData),
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             return response;
//         } catch (error) {
//             console.error("Something went wrong", error);
//             throw error;
//         }
//     }
// };

// export default AddEmployeeService;

import apiController from "./apiController";
const CREATE_EMPLOYEE = "/createEmployee";

const AddEmployeeService = {
  async addEmployee(employeeData) {
    // Accept an object for the employee data
    try {
      // const url = `${CREATE_EMPLOYEE}?EmployeeCode=${employeeData.employeeCode}&FirstName=${employeeData.firstName}&LastName=${employeeData.lastName}&Email=${employeeData.email}
      // &Password=${employeeData.password}`;

      const url = `${CREATE_EMPLOYEE}?EmployeeCode=${employeeData.employeeCode}&FirstName=${employeeData.firstName}&MiddleName=${employeeData.middleName}&LastName=${employeeData.lastName}&Email=${employeeData.email}&ContactNo=${employeeData.contactNo}&Department=${employeeData.department}&Position=${employeeData.position}&Role=${employeeData.role}&ManagerId=${employeeData.managerId}&PancardNo=${employeeData.pancardNo}&AdharcardNo=${employeeData.adharcardNo}&CurrentAddress=${employeeData.currentAddress}&PermanentAddress=${employeeData.permanentAddress}&BloodGroup=${employeeData.bloodGroup}&JoiningDate=${employeeData.joiningDate}&ReleaseDate=${employeeData.releaseDate}&Password=${employeeData.password}`;

      const response = await apiController.fetchData(url, {
        method: "POST",
      });
      return response;
    } catch (error) {
      console.error("Something went wrong", error);
      throw error;
    }
  },
};

export default AddEmployeeService;
