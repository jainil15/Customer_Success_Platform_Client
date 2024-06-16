export const baseUrl = "http://localhost:8000/api";
export const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};
