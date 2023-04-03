import { ApplicationError } from "../protocols";

export function invalidCredentialsError(): ApplicationError {
  return {
    name: "InvalidCredentialsError",
    message: "email or password are incorrect",
  };
};

export function NotFoundError(): ApplicationError {
  return {
    name: "NotFoundError",
    message: "not found"
  };
};
