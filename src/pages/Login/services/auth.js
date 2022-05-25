/**
 * Solicitud http asincrona para hacer login
 */

import { mindsApi } from "../../../config/axios";

const login = async (email, password) => {
  try {
    const response = await mindsApi.post("/auth/login", {
      email,
      password,
    });

    // si todo sale bien accedemos a la respuesta
    const { data } = response;
    return data;
  } catch ({ response }) {
    // accedemos a la respuesta del error
    const { error } = response.data;
    const { status } = response;
    return { error, status };
  }
};

export { login };
