import Login from "../support/Login";
 
describe("Verificar o Login", () => {
  //Login Válido
  it("Verificar login", () => {
    Login.loginValido();
  });
 
  //Login usuario inválido
  it("Login Username Invalido", () => {
    Login.loginUsernameInvalido();
  });
 
  //Login senha inválido
  it("Login Password Invalido", () => {
    Login.loginPasswordInvalido();
  });
});