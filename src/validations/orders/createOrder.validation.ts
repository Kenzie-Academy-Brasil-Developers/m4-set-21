import * as yup from "yup";

const createOrderSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        desk: yup.string().required("desk is required"),
        products_ids: yup.array().required("products_ids is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createOrderSchema;
