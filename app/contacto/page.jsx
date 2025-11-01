import { Footer } from "../ui/Footer"
import { ContactForm } from "../ui/ContactForm"

export default function Contacto() {
    return (
        <>
            <main className="flex flex-col place-items-center items-center p-10 bg-gray-100">
                <ContactForm />
            </main>
            <Footer />
        </>
    )
}