function validar() {

    let preco = Number(document.getElementById("preco").value);
    let qtd = Number(document.getElementById("qtd").value);

    let subtotal = preco * qtd;

    let pix = document.getElementById("pix");
    let din = document.getElementById("din");
    let cartao = document.getElementById("cartao");

    if (pix.checked)
    {
        let desconto = subtotal * 0.05;
        let total = subtotal - desconto;
    }
    else if (din.checked)
    {
        let desconto = subtotal * 0.10;
        let total = subtotal - desconto;

         document.getElementById("validacao").innerHTML =
             "Subtotal: R$ " + subtotal.toFixed(2) +
             "<br>Desconto: R$ " + desconto.toFixed(2) +
             "<br>Total: R$ " + total.toFixed(2); 
             "<br>Valor entregue: R$ " + entregue.toFixed(2);
             "<br>Troco: R$ " + TransformStreamDefaultController.toFixed(2);
    }
    else if (cartao.checked)
    {
        desconto = 0;
        total = subtotal;
   
        document.getElementById("validacao").innerHTML =
           "Subtotal: R$ " + subtotal.toFixed(2) +
           "<br>Desconto: R$ " + desconto.toFixed(2) +
           "<br>Total: R$ " + total.toFixed(2);
    }
    else 
    {
        document.getElementById("validacao").innerHTML =
            "Selecione uma forma de pagamento.";
    }    
}