import Prancheta from "../assets/icons/Prancheta"
import Lixeira from "../assets/icons/Lixeira"


const Recents = ({ transactions, removerTransacao }) => {
  console.log("Transações de recentes:", transactions.map((item) => item ));
  const emojiDescricao = {
    "Salário": "💰",
    "Contas": "🧾",
    "Lazer": "🎢",
    "Saúde": "🏥",
    "Transporte": "🚗",
    "Alimentação": "🍔",
    "Investimento": "📈",
    "Freelancer": "💼"
  };

  const data = new Intl.DateTimeFormat(
  navigator.language,
    {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }
  ).format(new Date());

  const valorFormatado = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  
  if (transactions.length > 0) {
    return (
      <div className="flex gap-5 flex-col bg-BgCard w-[95%] max-w-[1600px] mx-auto rounded-xl p-7 my-7">
          <div className="flex justify-between">
            <h2 className="text-md font-semibold ">Transações Recentes</h2>
            <span className="text-sm text-CardText">{transactions.length} transações</span>
          </div>
          
          
          <div className="flex flex-col gap-3  ">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex justify-between items-center bg-InputBg rounded-lg p-5">
                <div className="flex items-center gap-3 ">
                  <span className="text-2xl p-2 bg-CardText rounded-lg">{emojiDescricao[transaction.categoria]}</span>
                  <div>
                    <h3 className="font-medium first-letter:uppercase text-lg">{transaction.descricao}</h3>
                    <p className="text-sm text-CardText">{transaction.categoria} • {data}</p>
                  </div>
                </div>



                {/* valor e botão de exclusão */}
                <div className="flex items-center gap-2">
                  <span className={transaction.tipo === "Receita" ? "text-green-500 font-bold" : "text-red-500 font-bold" } >
                  {transaction.tipo === "Receita" ? "+" : "-"} {valorFormatado(transaction.valor)}
                  </span>

                  <button onClick={() => removerTransacao(transaction.id)} className="p-2 bg-InputBg rounded-lg">
                    <Lixeira className="w-5 h-5 text-red-500"/>
                  </button>
                </div>
              </div>
            ))}
          </div>
      </div>
    )
  } else {
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
}

export default Recents