import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner'
import AboutText from '../components/aboutText/AboutText'


function About() {
    return (
        <>
        <Header />
        <Banner image="fotoDrone.svg" title="Sobre Nós" />
        <div className="container">
            <AboutText />
        </div>
        <Footer />
        </>
    )
}

export default About