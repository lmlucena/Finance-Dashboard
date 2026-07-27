import Header from "../components/Header"
import Cards from "../components/Cards"
import Recents from "../components/Recents"
import Transactions from "../components/Transactions"
import { useState } from "react"


const MainPage = () => {
  const [transactions, setTransactions] = useState([]);
  const removerTransacao = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div className="w-full space-y-4">
      <Header></Header>
      <Cards
        transactions={transactions}></Cards>
      <Transactions 
        transactions={transactions}
        setTransactions={setTransactions}></Transactions>
      <Recents
        transactions={transactions}
        removerTransacao={removerTransacao}></Recents>

    </div>
  )
}


export default MainPage