import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner'
import ServicesList from '../components/servicesList/ServicesList'


function Home() {
    return (
        <>
        <Header />
        <Banner image="fotoDrone.svg" title="Início"/>
        <ServicesList image="logoBarco.svg" />
        <Footer />
        </>
    )
}

export default Home

/*
import Hero from '../components/hero/Hero'
<div className="container">
        <Hero />
        </div>
*/