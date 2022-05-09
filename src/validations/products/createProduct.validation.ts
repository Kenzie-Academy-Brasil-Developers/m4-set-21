import * as yup from "yup";

const createProductSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        title: yup.string().required("title is required"),
        description: yup.string().required("description is required"),
        price: yup.number().required("price is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createProductSchema;
