import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner'
import ContactForm from '../components/contactForm/ContactForm'

function Contact() {
    return (
        <>
        <Header />
        <Banner image="fotoDrone.svg" title="Contatos" />
        <div className="container">
            <ContactForm />
        </div>
        <Footer />
        </>
    )
}

export default Contact