import Header from "../components/Header"
import Cards from "../components/Cards"
import Recents from "../components/Recents"
import Transactions from "../components/Transactions"

const MainPage = () => {
  return (
    <div className="w-full space-y-4">
      <Header></Header>
      <Cards></Cards>
      <Transactions></Transactions>
      <Recents></Recents>

    </div>
  )
}


export default MainPage