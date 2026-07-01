const Transactions = () => {
  return (
    <div className="flex gap-5 flex-col bg-BgCard w-[95%] max-w-[1600px] mx-auto rounded-xl p-7">
      

      <div  className="w-full">
        <h2 className="text-md font-semibold ">Nova Transação</h2>
        <div className="flex flex-col mb-4">
          <label className="text-CardText font-medium ">Tipo</label>
          <select className="h-10 mt-2 bg-InputBg rounded-lg p-2 pl-5 outline-none border border-BordaInput">
            <option>Receita</option>
            <option>Despesa</option>
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-CardText font-medium ">Categoria</label>
          <select className="h-10 mt-2 bg-InputBg rounded-lg p-2 pl-5 outline-none border border-BordaInput">
            <option>Salario</option>
            <option>Freelancer</option>
            <option>Investimento</option>
            <option>Alimentação</option>
            <option>Transporte</option>
            <option>Saúde</option>
            <option>Lazer</option>
            <option>Contas</option>
          </select>
        </div>
        
      </div>

    </div>
  )
}

export default Transactions