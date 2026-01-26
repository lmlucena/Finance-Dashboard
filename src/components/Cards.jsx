const Cards = () => {
  return (
    <div className="flex gap-5 flex-wrap justify-center ">
      <div className="max-md:w-11/12 h-33 p-7 bg-BgCard rounded-xl">
        <div>
          <label className="text-CardText font-medium ">Saldo total</label>
          <h2 className="text-3xl font-bold mt-5">R$ 0,00</h2>
        </div>

      </div>

      <div className="max-md:w-11/12 h-33 p-7 bg-BgCard rounded-xl text">
        <div>
          <label className="text-CardText font-medium">Receitas</label>
          <h2 className="text-3xl font-bold text-[#22c55e] mt-5">R$ 0,00</h2>
        </div>

      </div>

      <div className="max-md:w-11/12 h-33 p-7 bg-BgCard rounded-xl">
        <div>
          <label className="text-CardText font-medium">Despesas</label>
          <h2 className="text-3xl font-bold text-[#ef4444] mt-5">R$ 0,00</h2>
          
        </div>
      </div>

      
    </div>
  )
}


export default Cards