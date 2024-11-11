import apiController from "./apiController";

const GET_EMPLOYEE_BY_EMAIL_ENDPOINT = "/getEmployeeDetailsById"; // Update this with your actual API endpoint

const ProfileService = {
  async getEmployeeDetailsById(id) {
    try {
      const response = await apiController.fetchData(
        `${GET_EMPLOYEE_BY_EMAIL_ENDPOINT}?id=${id}`,
        {
          method: "GET",
        }
      );
      return response?.result;
    } catch (error) {
      console.error("Failed to fetch employee details by email:", error);
      throw error;
    }
  },
};

export default ProfileService;
