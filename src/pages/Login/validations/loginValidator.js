import { setData, check, runValidations } from "../../../utils/FormValidator";

const loginValidator = (formData) => {
  setData(formData);
  const validations = [
    check("email").isEmail(),
    check("password").isPassword(),
  ];

  return runValidations(validations);
};

export { loginValidator };
