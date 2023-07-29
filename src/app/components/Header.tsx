export default function Header() {
    return (
        <div className='py-4 flex flex-row justify-between'>
          <a href="/" className='bg-dark-green-500 text-white text-2xl font-regular pl-16 p-8 rounded-r-3xl'>
            <p>René Schultheis</p>
          </a>
          <nav className='flex items-center mr-8 text-lg font-light'>
            <ul className='flex flex-row space-x-8'>
              <li className="menu">
                <a href="/projects">Projects</a>
              </li>
              <li className="menu">
                <a href="/hobbies">Hobbies</a>
              </li>
              <li className="menu">
                <a href="/agfa-photo">Agfa Photo</a>
              </li>
              <li className="menu">
                <a href="https://vienna-sausage-gang.vercel.app">Vienna Sausage Guide</a>
              </li>
            </ul>
          </nav>
        </div>
    )
}