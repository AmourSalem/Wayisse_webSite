import React from 'react'

const Sidebar = () => {
  return (
    <aside>
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li className='my-3'><a href="/videos">Vidéos</a></li>
            <li className='my-3'><a href="/contact">Contact</a></li>
            <li className='my-3'><a href="/">Blogue</a></li>
          </ul>
        </nav>
    </aside>
  )
}

export default Sidebar