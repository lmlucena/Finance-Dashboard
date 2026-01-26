const dataFormatada = new Intl.DateTimeFormat(
  navigator.language,
  {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }
).format(new Date());


const Header = () => {
    return ( 
        <header className="border-b-3 border-[#1f1f1f] p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="bg-[#6366f1] w-10 h-10 rounded-xl flex items-center justify-center">
                    <svg width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                </div>
                <h1 className="text-2xl font-semibold">Finance Dashboard</h1>
            </div>
            <p className="text-CardText">{dataFormatada}</p>
        </header>
    )

}

export default Header;