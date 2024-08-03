const el = require("./elements").ELEMENTS;
const loginData = require("../../fixtures/Login.json");
class Login {
  loginValido() {
    cy.visit(loginData.login.url);
    cy.get(el.login.username).type(loginData.login.username);
    cy.get(el.login.password).type(loginData.login.password);
    cy.get(el.login.button).click();
    //assert
    cy.get(el.login.productLabel).should("be.visible");
    cy.get(el.login.productLabel).should(
      "contain.text",
      loginData.login.product
    );
  }
 
  loginUsernameInvalido() {
    cy.visit(loginData.login.url);
    cy.get(el.login.username).type(loginData.login.invalid);
    cy.get(el.login.password).type(loginData.login.password);
    cy.get(el.login.button).click();
    //assert na mensagem de erro
    cy.get(el.login.messageError)
      .should("be.visible")
      .and("contain.text", loginData.login.errorText);
  }
 
  loginPasswordInvalido() {
    cy.visit(loginData.login.url);
    cy.get(el.login.username).type(loginData.login.username);
    cy.get(el.login.password).type(loginData.login.invalid);
    cy.get(el.login.button).click();
    //assert na mensagem de erro
    cy.get(el.login.messageError)
      .should("be.visible")
      .and("contain.text", loginData.login.errorText);
  }
}
export default new Login();