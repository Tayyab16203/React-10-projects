import logo from '/images/logo.png'

const Navigation = () => {
  return (
    <nav className='container max-w-[1200px] mx-auto h-[72px] flex justify-between items-center'>
        <div>
            <img src={logo} alt="do some coding logo" />
        </div>
        <ul className='flex gap-3 font-medium'>
            <li href="#">Home</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation
