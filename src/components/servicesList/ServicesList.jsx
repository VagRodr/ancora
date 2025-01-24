import './ServicesList.css'
import Services from '../services/services'
import test from '../../assets/ancoraLogo.svg'


function ServicesList() {
    return (
        <div className="services-section">
            <div className="services-hero">
                <h2>Título</h2>
                <p>serviços .......</p>
            </div>
            <div className="services-grid">
                <div className="services-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background">
                        <Services
                            img={test}
                            title="Adesivos Náuticos"
                            description="Adesivos de qualidade com garantia vitalícia"
                        />
                    </div>
                </div>
                <div className="services-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background">

                    </div>
                    <h3>Adesivos Náticos</h3>
                    <p>Garantia Vitalícia em nossos adesivos</p>
                </div>
                <div className="services-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background">

                    </div>
                    <h3>Adesivos Náticos</h3>
                    <p>Garantia Vitalícia em nossos adesivos</p>
                </div>
                <div className="services-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background">

                    </div>
                    <h3>Adesivos Náticos</h3>
                    <p>Garantia Vitalícia em nossos adesivos</p>
                </div>
                <div className="services-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background">

                    </div>
                    <h3>Adesivos Náticos</h3>
                    <p>Garantia Vitalícia em nossos adesivos</p>
                </div>
                <div className="services-card d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background">

                    </div>
                    <h3>Adesivos Náticos</h3>
                    <p>Garantia Vitalícia em nossos adesivos</p>
                </div>
                
                
            </div>
        </div>
    )
}

export default ServicesList 