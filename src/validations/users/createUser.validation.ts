import * as yup from "yup";

const createUserSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().required("name is required"),
        email: yup.string().required("email is required"),
        password: yup.string().required("password is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createUserSchema;
