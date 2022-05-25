import { useEffect, useRef, useState } from "react";

import {
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
  useToast,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

import { login } from "./services/auth";
import { loginValidator } from "./validations/loginValidator";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import Stringify from "../../components/stringify";

const formInitialState = {
  email: "",
  password: "",
};

const formErrorsInitialState = {
  email: "",
  password: "",
};

function Login() {
  // chakra
  const toast = useToast();
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const inputBackground = useColorModeValue("gray.300", "gray.600");

  // react hooks
  const emailRef = useRef();
  const [form, setForm] = useState(formInitialState);
  const [formErrors, setFormErrors] = useState(formErrorsInitialState);
  const [success, setSuccess] = useState(false);
  const { session, setSession } = useAuth();

  // router v6
  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    if (formErrors) setFormErrors({});
  }, [form]);

  const handleLogin = async () => {
    // validación de campos
    const errors = loginValidator(form);
    if (errors.length > 0) {
      errors.forEach((error) => {
        const nuevo = {
          [error.name]: error.errors[0],
        };

        // update state de errores
        setFormErrors((formErrors) => ({
          ...formErrors,
          ...nuevo,
        }));
      });
      return;
    }

    // login hace petición al back
    const { email, password } = form;
    const response = await login(email, password);

    // se completó la solicitud pero con errores
    if (response?.error) {
      toast({
        title: "Error autenticación",
        description: "Usuario/Contraseña incorrecto",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    // alerta ingresamos
    toast({
      title: "Bienvenid@",
      description: "Se ha logueado correctamente",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    // guardamos la data en el contexto de sesion
    console.log(response);
    const { token, user } = response.data;
    setSession({ token, user });
    navigate("/");
  };

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Component
   */
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        background={formBackground}
        p={12}
        rounded={6}
        boxShadow="lg"
        w="450px"
        minW="200px"
      >
        <Heading mb={6}>Login</Heading>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            placeholder="imadueno@arkusnexus.com"
            variant="filled"
            bg={inputBackground}
            id="email"
            type="email"
            name="email"
            value={form.email.value}
            ref={emailRef}
            onChange={handleInput}
            required
          />
          {formErrors.email && (
            <FormHelperText color="red.400">{formErrors.email}</FormHelperText>
          )}
        </FormControl>

        <FormControl mt={3}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            placeholder="********"
            variant="filled"
            bg={inputBackground}
            id="password"
            type="password"
            name="password"
            value={form.password.value}
            onChange={handleInput}
          />
          {formErrors.password && (
            <FormHelperText color="red.400">
              {formErrors.password}
            </FormHelperText>
          )}
        </FormControl>

        <Button colorScheme="green" mt={6} mb={3} onClick={handleLogin}>
          Log in
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  );
}

export default Login;
