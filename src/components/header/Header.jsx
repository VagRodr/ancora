import { useState } from 'react'
import { Link } from 'react-router-dom'


//ASSETS
import './Header.css'
import Logo from '../../assets/ancoraLogo.svg'

//COMPONENTS
import Button from '../button/Button'

function Header() {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
 
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo} width="40%"/></Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secondary" onClick={toggleMenu}>
                            Menu
                        </Button>
                    </div>
                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu}>
                            X
                        </Button>
                        <ul className='d-flex'>
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="/about">Sobre Nós</Link></li>
                            <li><Link to="/services">Serviços</Link></li>
                            <li><Link to="/normas">Salvatagem</Link></li>
                            <li><Link to="/contact">Contatos</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header