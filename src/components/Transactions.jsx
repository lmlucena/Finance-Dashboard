const Transactions = () => {
  return (
    <div className="flex gap-5 flex-col bg-BgCard w-[95%] max-w-[1600px] mx-auto rounded-xl p-7 my-7">
      <h2 className="text-md font-semibold ">Nova Transação</h2>

      <div  className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-5">
        
        <div className="flex flex-col w-full mb-4 ">
          <label className="text-CardText font-medium ">Tipo</label>
          <select className="h-10 mt-2 bg-InputBg rounded-lg p-2 pl-5 outline-none border border-BordaInput">
            <option>Receita</option>
            <option>Despesa</option>
          </select>
        </div>

        <div className="flex flex-col w-full mb-4">
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

        <div className="flex flex-col w-full mb-4">
          <label className="text-CardText font-medium ">Descrição</label>
          <input type="text" placeholder="Ex: Almoço" className="h-10 mt-2 bg-InputBg rounded-lg p-2 pl-5 outline-none border border-BordaInput"/>
        </div>

        <div className="flex flex-col w-full mb-4">
          <label className="text-CardText font-medium ">Valor</label>
          <input type="number" step="0.01" placeholder="0,00" className="h-10 mt-2 bg-InputBg rounded-lg p-2 pl-5 outline-none border border-BordaInput"/>
        </div>
        <div className="flex flex-col w-full mb-4"> <label className="opacity-0 select-none"> botão </label>
            <button className="h-10 mt-2 w-full bg-[#6366f1] text-white font-semibold rounded-lg border border-BordaInput hover:bg-blue-600 transition-colors"> Adicionar </button> 
         </div>
        
      </div>
      
    </div>
  )
}

export default Transactions