import { FormEvent, useState } from "react";
import { FormInput } from "../../atoms/input";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { StyledForm, StyledLoginForm } from "./styles";
import { api } from "../../../utils/api/api";

const error = false;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const loginPayload = {
      Email: e.currentTarget.email.value,
      Password: e.currentTarget.password.value,
    };

    const userData = await api.login(loginPayload);

    console.log(userData);
  }

  return (
    <StyledLoginForm>
      <h2>Login</h2>
      <StyledForm onSubmit={handleSubmit} error={error}>
        <input placeholder="Seu email" name="email" />
        <div>
          <input
            placeholder="Sua senha"
            type={showPassword ? "text" : "password"}
            name="password"
            required
          />
          <button type="button" onClick={handleShowPassword}>
            {showPassword ? (
              <BsEyeSlashFill size={25} />
            ) : (
              <BsEyeFill size={25} />
            )}
          </button>
        </div>
        <button type="submit">Login</button>
      </StyledForm>
    </StyledLoginForm>
  );
}
