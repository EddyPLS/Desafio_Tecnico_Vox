import Login from "../Login";
const el = require('./elements').ELEMENTS

class PaginaDeProdutos {
    visualizarProduto() {
        Login.loginValido()

        // Visualização de Produtos após o Login
        cy.get(el.paginaDeProdutos.visualizarProdutos).should('have.length.greaterThan', 1);
    }

}
export default new PaginaDeProdutos
