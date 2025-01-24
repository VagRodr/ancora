import './Card.css'
import { useState } from 'react'

function Card({img, title, service, description, site }){

    const [info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }

    function InfoOff(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={InfoOff} className='card' >
            <a onMouseEnter={InfoOn} href={site} >
            <img src={img} alt='error' />
            </a>

            {info === true && (
                <section>
                    <h3>{title}</h3>
                    <p><strong>Serviço:</strong> {service} </p>
                    <p>{description}</p>
                </section>
            )}           
        </div>
    )
}

export default Card