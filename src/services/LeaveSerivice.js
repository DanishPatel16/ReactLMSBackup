// // import apiController from './apiController';
// // const CREATE_LEAVE = "/createLeave"; 

// // const LeaveService = {
// //     async applyLeave(leaveData) {  // Accept an object for the leave data
// //         try {
// //             // Construct the URL with query parameters (if necessary)
// //             const url = `${CREATE_LEAVE}?EmployeeName=${leaveData.employeeName}&ReportingManager=${leaveData.reportingManager}&LeaveType=${leaveData.leaveType}&From=${leaveData.from}&To=${leaveData.to}&DayTypeFrom=${leaveData.dayTypeFrom}&DayTypeTo=${leaveData.dayTypeTo}&Reason=${leaveData.reason}`;
            
// //             const response = await apiController.fetchData(url, {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //             });
// //             return response;
// //         } catch (error) {
// //             console.error("Something went wrong while applying for leave:", error);
// //             throw error;
// //         }
// //     }
// // };

// // export default LeaveService;


// import apiController from './apiController';
// const CREATE_LEAVE = "/createLeave"; 
// const SEND_EMAIL = "/sendEmail"; // Endpoint for sending emails

// const LeaveService = {
//     async applyLeave(leaveData) {  // Accept an object for the leave data
//         try {
//             // Construct the URL with query parameters (if necessary)
//             const url = `${CREATE_LEAVE}?EmployeeName=${leaveData.employeeName}&ReportingManager=${leaveData.reportingManager}&LeaveType=${leaveData.leaveType}&From=${leaveData.from}&To=${leaveData.to}&DayTypeFrom=${leaveData.dayTypeFrom}&DayTypeTo=${leaveData.dayTypeTo}&Reason=${leaveData.reason}`;
            
//             const response = await apiController.fetchData(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             return response;
//         } catch (error) {
//             console.error("Something went wrong while applying for leave:", error);
//             throw error;
//         }
//     },

//     async sendLeaveRequestEmail(leaveData) {


        
//         try {
//             // Construct the URL for sending the email
//             const url = SEND_EMAIL; // Adjust if needed

//             const response = await apiController.fetchData(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(leaveData) // Send leave data as body
//             });
//             return response;
//         } catch (error) {
//             console.error("Something went wrong while sending email:", error);
//             throw error;
//         }
//     }
// };

// export default LeaveService;
