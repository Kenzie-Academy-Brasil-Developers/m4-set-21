import { users } from "../database";

const verifyEmailAvailabilityMiddleware = (request, response, next) => {
  const { email } = request.body;

  const user = users.find((user) => user.email === email);

  if (user) {
    return response
      .status(401)
      .json({ status: "error", message: "Email address already in use" });
  }

  next();
};

export default verifyEmailAvailabilityMiddleware;
