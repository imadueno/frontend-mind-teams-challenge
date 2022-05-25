class FormValidator {
  constructor(inputName, inputValue) {
    this.inputName = inputName;
    this.input = inputValue;
    this.errors = [];
  }

  length(length) {
    if (typeof length === "object") {
      if (length?.min && this.input.length < length.min) {
        this.errors.push(
          `longitud mínima de ${length.min}, tiene ${this.input.length}`
        );
      }
      if (length?.max && this.input.length > length.max) {
        this.errors.push(
          `longitud máxima de ${length.max}, tiene ${this.input.length}`
        );
      }
    } else if (typeof length === "number") {
      if (length !== "undefined" && this.input.length !== length) {
        this.errors.push(
          `longitud debe ser ${length} caracteres, tiene ${this.input.length}`
        );
      }
    }
    return this;
  }

  isRequired() {
    if (this.input === "") {
      this.input[errors].push("Este campo es requerido");
    }
    return this;
  }

  isEmail() {
    const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      this.input
    );
    if (!isEmail) {
      this.errors.push("Formato de correo invalido");
    }
    return this;
  }

  isPassword() {
    const isPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
        this.input
      );
    if (!isPassword) {
      this.errors.push("Contraseña no valida");
    }
    return this;
  }
}

let publicData = {};

export const setData = (data) => {
  publicData = data;
};

export const check = (inputName) => {
  return new FormValidator(inputName, publicData[inputName]);
};

export const runValidations = (validations) => {
  return validations
    .filter((validation) => {
      if (validation.errors.length > 0) {
        return validation;
      }
    })
    .map(({ errors, input, inputName }) => {
      return {
        errors,
        name: inputName,
        value: input,
      };
    });
};
