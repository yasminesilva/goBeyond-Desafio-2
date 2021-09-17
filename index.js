let listaVendedores = []

function adicionarVendedor(){
    let nome = prompt("Digite o nome do vendedor(a): ")
    let salarioFixo = parseFloat(prompt("Digite o salario fixo: "))
    let vendasMes = parseFloat(prompt("Digite o valor das vendas do mes: "))
    
    let total = parseFloat((salarioFixo + ((vendasMes*15)/100)).toFixed(2))
    
    listaVendedores.push({
      "Nome": nome, 
      "Salario": salarioFixo,
      "Vendas do Mes": vendasMes,
      "Total a receber no mes": total
    })
}

function main (){
  let itemSelecionado

  while (itemSelecionado != "3"){
    console.log(`
      1- Adicionar o vendedor
      2- Mostrar tabela de Vendedores
      3- Sair
    `)

    itemSelecionado = prompt("Digite um opção: ")

    if (itemSelecionado === '1'){
      adicionarVendedor()
    } else if(itemSelecionado === '2'){
      console.table(listaVendedores)
    }
  }
}

main()
