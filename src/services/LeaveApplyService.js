import apiController from "./apiController";

const CREAT_LEAVE = "/create-leave";

export const createLeave = async (payload) => {
  return await apiController.fetchData(CREAT_LEAVE, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

// eslint-disable-next-line no-undef
// export default LeaveApplyService;
