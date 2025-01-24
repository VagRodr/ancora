import './Banner.css'

function Banner(props) {
    return(
        <div className="banner d-flex al-end" style={{backgroundImage:`url(/${props.image})`}}>
            
        </div>
    )
}

export default Banner