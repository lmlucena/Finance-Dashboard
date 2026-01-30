const Cards = () => {
  return (
    <div className="flex gap-5 flex-wrap justify-center m-auto ">
      {/* Card 1 */}
      <div className="max-md:w-11/12 h-33 p-7 bg-BgCard rounded-xl flex justify-between hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
        <div>
          <label className="text-CardText font-medium ">Saldo total</label>
          <h2 className="text-3xl font-bold mt-5">R$ 0,00</h2>
        </div>
        
        <div className="flex items-center justify-center w-10 h-10 bg-InputBg rounded-lg">
          <svg width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /> <path d="M12 10v4M10 12h4" />
         </svg>
        </div>  
      </div>


      {/* Card 2 */}
      <div className="max-md:w-11/12 h-33 p-7 bg-BgCard rounded-xl flex justify-between hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
        <div>
          <label className="text-CardText font-medium">Receitas</label>
          <h2 className="text-3xl font-bold text-[#22c55e] mt-5">R$ 0,00</h2>
        </div>

        <div className="flex items-center bg-green-950 justify-center w-10 h-10 rounded-lg">
          <svg width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7" />
         </svg>
        </div>
      </div>


      {/* Card 3 */}
      <div className="max-md:w-11/12 h-33 p-7 bg-BgCard rounded-xl flex justify-between hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
        <div>
          <label className="text-CardText font-medium">Despesas</label>
          <h2 className="text-3xl font-bold text-[#ef4444] mt-5">R$ 0,00</h2>
        </div>

        <div className="flex items-center bg-red-950 justify-center w-10 h-10 rounded-lg">
          <svg width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

    </div>
  )
}


export default Cards