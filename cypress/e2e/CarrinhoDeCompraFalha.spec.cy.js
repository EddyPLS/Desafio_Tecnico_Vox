import CarrinhoDeCompras from "../support/CarrinhoDeCompras";
 
describe("Tentar finalizar Compra sem inserir os dados cadastrais", () => {
 // Verficar a mensagem de falha ao tentar finalizar sem preencher os dados cadastrais   
  it("Tentar finalizar a compra sem inserir os dados cadastrais", () => {
    CarrinhoDeCompras.falhaNaCompra();
  });
});