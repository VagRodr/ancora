import { Link } from 'react-router-dom'
import './Footer.css'

//ASSETS
import Logo from '../../assets/ancoraLogo.svg'
import instagram from '../../assets/iconInstagram.svg'
import linkedin from '../../assets/iconLinkedin.svg'
import brazil from '../../assets/iconBrazil.svg'
import usa from '../../assets/iconUsa.svg'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-column">
                        <img src={Logo} width="25%" className="footer-logo"/>
                        <p /*className="gray-1-color"*/>Sinalização Náutica e Legalização de embarcações e Obras, 30 anos atendendo com qualidade!</p>
                        <div className="d-flex social-links">
                            <a href="http://google.com" target="_blank">
                                <img src={instagram} />
                            </a>
                            <a href="http://google.com" target="_blank">
                                <img src={linkedin} />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>Páginas</h3>
                            <ul>
                                <li><Link to="/">Início</Link></li>
                                <li><Link to="/about">Sobre Nós</Link></li>
                                <li><Link to="/services">Serviços</Link></li>
                                <li><Link to="/normas">Salvatagem</Link></li>
                                <li><Link to="/contact">Contatos</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Contatos</h3>
                            <p>Marina Verolme Loja 15A</p>
                            <p>e-mail luciano@ancoraservicos.com.br</p>
                            <p>tel: 24 99956 1267</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p /*className="garay-1-color"*/>Copyright © Âncora Despachadoria Marítima - 2025</p>
                    <div className="langs-area d-flex">
                        <img src={brazil} height="25px"/>
                        <img src={usa} height="25px"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer