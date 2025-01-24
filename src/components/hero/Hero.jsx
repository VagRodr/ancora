import {Link} from 'react-router-dom'
import './Hero.css'
import Button from '../button/Button'

function Hero() {
    return (
        <div className="hero d-flex al-center">
            <div className="hero-text">
                <h1>Título do hero</h1>
                <p>Alguma coisa a respeito...</p>
                <Link>
                    <Button buttonStyle="secondary" arrow>
                        Vamos Começar!
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero