import { Footer } from "../ui/Footer"

export default function Terminos() {
  return (
    <>
      <main className="flex flex-col place-self-center items-center p-15 w-1/2">
        <header>
          <h1 className="text-5xl font-bold mb-6 text-sky-600">Términos y Condiciones — Paquetes de Fotografía de Graduación</h1>
        </header>

        <article>
          <section>
            <header>
              <h2 className="text-2xl font-bold">1. Alcance</h2>
            </header>
            <p className="text-lg">Estos términos aplican a la contratación de servicios fotográficos de graduación ofrecidos por <strong>Flashback</strong>.</p>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">2. Reservación y pago</h2>
            </header>
            <ul>
              <li>La reserva se confirma con un anticipo del <strong>[PORCENTAJE]</strong>% del valor total.</li>
              <li>El saldo restante debe liquidarse el día de la sesión o antes de la entrega del material final.</li>
              <li>Los pagos no son reembolsables salvo causas de fuerza mayor comprobables.</li>
            </ul>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">3. Entrega</h2>
            </header>
            <ul>
              <li>Las fotografías se entregan en formato digital y/o impreso según el paquete contratado.</li>
              <li>El tiempo de entrega estimado es de <strong>[NÚMERO]</strong> días hábiles posteriores a la sesión.</li>
            </ul>
          </section>


          <section>
            <header>
              <h2 className="text-2xl font-bold">4. Uso de imágenes</h2>
            </header>
            <p className="text-lg">El cliente autoriza el uso de las fotografías con fines promocionales en redes sociales o portafolio del fotógrafo, salvo indicación contraria por escrito.</p>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">5. Reagendaciones y cancelaciones</h2>
            </header>
            <ul>
              <li>La sesión puede reprogramarse con al menos <strong>[DÍAS]</strong> días de anticipación sin costo.</li>
              <li>Las cancelaciones posteriores al plazo no generan reembolso del anticipo.</li>
            </ul>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">6. Responsabilidad</h2>
            </header>
            <p className="text-lg"><strong>Flashback</strong> no se hace responsable por retrasos o fallos ocasionados por causas externas (clima, fallas técnicas, inasistencias).</p>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">7. Aceptación</h2>
            </header>
            <p className="text-lg">La contratación de cualquier paquete implica la aceptación total de estos términos.</p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
