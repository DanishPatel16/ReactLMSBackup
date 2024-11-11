import apiController from "./apiController";

const GET_LEAVE_DETAILS = "/getLeaveDetails"; // Update this with your actual API endpoint

const GetLeaveDetailsService = {
  async getLeaveDetails(employeeCode) {
    try {
      const response = await apiController.fetchData(
        `${GET_LEAVE_DETAILS}?employeeCode=${employeeCode}`,
        {
          method: "GET",
        }
      );
      return response?.result;
    } catch (error) {
      console.error("Failed to fetch employee details by Ecode:", error);
      throw error;
    }
  },
};

export default GetLeaveDetailsService;
