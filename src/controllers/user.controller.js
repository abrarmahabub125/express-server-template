import ApiResponse from "../utils/ApiResponse.js";

export function demoUsers(req, res) {
  const userData = [
    {
      name: "Abrar",
      email: "abrar@123gmail.com",
    },
    {
      name: "Mahabub",
      email: "mahabub@123gmail.com",
    },
    {
      name: "Abir",
      email: "abir@123gmail.com",
    },
  ];

  const meta = {
    length: userData.length,
  };
  res.status(200).json(ApiResponse.success("User list", 200, userData, meta));
}
