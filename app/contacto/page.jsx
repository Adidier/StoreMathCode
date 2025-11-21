import { Footer } from "../ui/Footer"
import { ContactForm } from "../ui/ContactForm"

export default function Contacto() {
    return (
        <>
            <main className="grid grid-cols-1 place-items-center md:p-10 bg-gray-100">
                <ContactForm />
            </main>
            <Footer />
        </>
    )
}

