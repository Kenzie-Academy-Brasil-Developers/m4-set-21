import jwt from "jsonwebtoken";

const ensureAuthMiddleware = (request, response, next) => {
  let token = request.headers.authorization;

  if (!token) {
    return response.status(401).json("Missing authorization token");
  }

  const [, authToken] = token.split(" ");

  jwt.verify(authToken, process.env.SECRET, (error, decoded) => {
    if (error) {
      return response.status(401).json("Invalid token");
    }

    const { sub } = decoded;

    request.user = {
      id: sub,
    };

    next();
  });
};

export default ensureAuthMiddleware;
