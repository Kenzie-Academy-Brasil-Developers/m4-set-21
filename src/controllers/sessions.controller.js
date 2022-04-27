import userLoginService from "../services/users/userLogin.service";

export default class SessionController {
  async store(request, response) {
    const { email, password } = request.body;

    try {
      const userToken = await userLoginService({ email, password });

      return response.json(userToken);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }
}
