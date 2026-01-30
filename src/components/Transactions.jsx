const Transactions = () => {
  return (
    <div className="flex gap-5 flex-wrap bg-BgCard max-md:w-11/12 m-auto rounded-xl p-7">
      <h2 className="text-md font-semibold w-full">Nova Transação</h2>

      <div  className="w-full md:w-1/2 flex flex-col mb-4">
        <div className="flex flex-col mb-4">
          <label className="text-CardText font-medium ">Tipo</label>
          <select className="h-10 mt-2 bg-InputBg rounded-lg p-2 pl-5 outline-none border border-BordaInput">
            <option>Receita</option>
            <option>Despesa</option>
          </select>
        </div>
      </div>

    </div>
  )
}

export default Transactions