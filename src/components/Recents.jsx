import Prancheta from "../assets/icons/Prancheta"

const Recents = () => {
  return (
    <div className="flex gap-5 flex-col bg-BgCard w-[95%] max-w-[1600px] mx-auto rounded-xl p-7 my-7">
        <div className="flex justify-between">
          <h2 className="text-md font-semibold ">Transações Recentes</h2>
          <span className="text-sm text-CardText">0 transações</span>
        </div>
        
        <div className="flex flex-col justify-center items-center gap-3 h-55 ">
          <div className="p-3 bg-InputBg rounded-full">
            <Prancheta className="w-8 h-8 text-CardText"/>
          </div>
          <h3>Nenhuma transação ainda</h3>
          <p className="text-sm text-CardText">Adicione sua primeira transação acima</p>
        </div>
    </div>
  )
}

export default Recents