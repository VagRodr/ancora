import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner'
import ServicesList from '../components/servicesList/ServicesList'

function Services() {
    return (
        <>
        <Header />
        <Banner image="fotoDrone.svg" title="Serviços" />
        <ServicesList />
        <Footer />
        </>
    )
}

export default Services