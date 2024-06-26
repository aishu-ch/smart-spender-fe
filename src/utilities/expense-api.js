import sendRequest from "./send-request";

const apiUrl = process.env.REACT_APP_API_URL;

const BASE_URL = `${apiUrl}/api/expenses`;
// const BASE_URL = "/api/expenses";

export function createExpense(expenseDetails) {
  return sendRequest(`${BASE_URL}/create`, "POST", expenseDetails);
}

export function findExpenses() {
  return sendRequest(`${BASE_URL}/find`);
}

export function findUserExpenses(userId) {
  return sendRequest(`${BASE_URL}/find/user/${userId}`);
}
