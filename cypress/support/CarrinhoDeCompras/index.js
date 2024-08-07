import AdicionarCarrinho from "../AdicionarCarrinho";
 
const loginData = require("../../fixtures/Login.json");
const el = require("./elements").ELEMENTS;
 
class CarrinhoDeCompras {
  falhaNaCompra() {
    AdicionarCarrinho.adicionandoProduto();
    cy.get(el.falhaNaCompra.checkoutButton).click();
    cy.get(el.falhaNaCompra.continueButton).click();
    //Verificar mensagem de erro
    cy.get(el.falhaNaCompra.errorMessage).should("be.visible");
    cy.get(el.falhaNaCompra.errorMessage).should(
      "contain.text",
      "Error: First Name is required"
    );
  }
 
  removerProduto() {
    AdicionarCarrinho.adicionandoProduto();
    cy.get(el.removerProduto.button).first().click();
    cy.get(".subheader").should("be.visible");
    cy.get(el.removerProduto.item).click();
    cy.get(el.removerProduto.button).click();
    cy.go("back");
  }
 
  finalizarCompra() {
    AdicionarCarrinho.adicionandoProduto();
    cy.get(el.finalizarCompra.checkoutButton).click();
    cy.get(el.finalizarCompra.firstName).type(loginData.cart.firstName);
    cy.get(el.finalizarCompra.lastName).type(loginData.cart.lastName);
    cy.get(el.finalizarCompra.postalCode).type(loginData.cart.postalCode);
    cy.get(el.finalizarCompra.continueButton).click();
    cy.get(".subheader").should("be.visible");
    cy.get(el.finalizarCompra.checkoutButton).click();
    cy.contains("Finish");
  }
}
export default new CarrinhoDeCompras();