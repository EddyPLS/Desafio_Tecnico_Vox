import Login from "../Login";
const el = require("./elements").ELEMENTS;
class AdicionarCarrinho {
  adicionandoProduto() {
    Login.loginValido();
    cy.get(el.adicionarProduto.item).first().click();
    cy.get(el.adicionarProduto.button).click();
    cy.wait(500);
    cy.go("back");
    //adicionando mais um produto no carrinho
    cy.get(el.adicionarProduto.item).last().click();
    cy.get(el.adicionarProduto.button).click();
    cy.wait(500);
    cy.go("back");
    //Verificar se o produto foi adicionado
    cy.get(el.adicionarProduto.carrinho).click();
    cy.get(el.adicionarProduto.itemCarrinho).should("have.length", 2);
  }
}
export default new AdicionarCarrinho();