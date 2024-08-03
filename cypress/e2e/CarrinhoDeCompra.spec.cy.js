import CarrinhoDeCompras from "../support/CarrinhoDeCompras"

describe('Tentar finalizar Compra sem inserir os dados cadastrais', () => {
    it('Tentar finalizar a compra sem inserir os dados cadastrais', () => {
        CarrinhoDeCompras.falhaNaCompra()
    })

})

describe('Remover produtos do Carrinho', () => {
    it('Finalizar Compra', () => {
        CarrinhoDeCompras.removerProduto()
    })
    
})

describe('Finalizar Compra', () => {
    it('Finalizar Compra', () => {
        CarrinhoDeCompras.finalizarCompra()
    })
 })
  
  

  
