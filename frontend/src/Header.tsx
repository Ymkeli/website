function Header() {
    return (
      <header className="App-header">
        <div className='flex flex-row px-5'>
          <h1 className ='font-semibold text-black'>Ymke Wegereef</h1>
        </div>
        <div className='flex flex-row space-x-5 px-5 text-xl items-end'>
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Contact</h1>
        </div>
      </header>
    )
  }

export default Header;