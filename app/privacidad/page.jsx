import Link from "next/link"
import { Footer } from "../ui/Footer"

export default function Privacidad() {
  return (
    <>
      <main className="flex flex-col place-self-center items-center p-15 w-1/2">
        <header>
          <h1 className="text-5xl font-bold mb-6 text-sky-600">Terminos generales de venta</h1>
        </header>

        <div>
          <section>
            <header>
              <h2 className="text-2xl font-bold">1. Responsable del tratamiento de datos</h2>
            </header>
            <p className="text-lg"><strong>Flashback</strong>, con domicilio en <strong>Pino Suarez 606-B, Pachuca de Soto, Mexico</strong> y correo electrónico <Link href="mailto:flashbacksuc1@gmail.com">flashbacksuc1@gmail.com</Link>, es responsable del tratamiento de sus datos personales conforme a la legislación vigente.</p>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">2. Datos personales que se recaban</h2>
            </header>
            <p className="text-lg">Podemos recopilar los siguientes datos personales:</p>
            <ul>
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Teléfono</li>
              <li>Dirección de envío y facturación</li>
              <li>Datos de pago (procesados por plataformas seguras externas)</li>
            </ul>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">3. Finalidades del tratamiento</h2>
            </header>
            <p className="text-lg">Los datos se utilizan para:</p>
            <ul>
              <li>Procesar pedidos y pagos realizados en la tienda online.</li>
              <li>Enviar productos, facturas y notificaciones sobre su compra.</li>
              <li>Brindar atención al cliente y soporte técnico.</li>
              <li>Enviar información promocional si el usuario lo autoriza expresamente.</li>
            </ul>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">4. Uso de cookies</h2>
            </header>
            <p className="text-lg">Este sitio utiliza cookies propias y de terceros para mejorar la experiencia del usuario y analizar el tráfico. Puede deshabilitarlas en la configuración de su navegador.</p>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">5. Transferencia de datos</h2>
            </header>
            <p className="text-lg">No compartimos datos personales con terceros, salvo cuando sea necesario para cumplir obligaciones legales o contractuales (por ejemplo, servicios de paquetería o plataformas de pago).</p>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">6. Conservación de datos</h2>
            </header>
            <p className="text-lg">Los datos personales se conservarán únicamente el tiempo necesario para cumplir con las finalidades descritas o según lo exijan las disposiciones legales aplicables.</p>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">7. Seguridad</h2>
            </header>
            <p className="text-lg">Se implementan medidas técnicas y administrativas para proteger sus datos contra acceso, pérdida o uso no autorizado.</p>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">8. Cambios al aviso</h2>
            </header>
            <p className="text-lg">Podremos actualizar este aviso de privacidad en cualquier momento. Las modificaciones estarán disponibles en esta misma página junto con la fecha de actualización correspondiente.</p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
