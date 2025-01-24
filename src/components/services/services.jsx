import './Services.css'


function Services ({img, title, description}) {


    return (
        <div>
            <div>
                <img src={img} alt='error' />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            
            
            
        </div>
    )
}

export default Services


