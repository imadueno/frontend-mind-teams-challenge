/**
 * servicio para manipular las peciones de usuarios
 *
 */

import { mindsApi } from "../../../config/axios";

const createUser = async () => {
  try {
    const response = await mindsApi.post("/user/", {
      email,
      password,
    });

    const { data } = response;
    return data;
  } catch (err) {
    const { error } = err.response;
    return error;
  }
};

export { createUser };
