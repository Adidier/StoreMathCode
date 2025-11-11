import { Footer } from "../ui/Footer"

export default function Terminos() {
  return (
    <>
      <main className="flex flex-col place-self-center items-center p-10 w-1/2">
        <header>
          <h1 className="text-5xl font-bold mb-6 text-sky-600">Terminos generales de venta</h1>
        </header>
        <p className="text-lg">
          Al realizar una compra en este sitio, el cliente acepta los siguientes términos:
        </p>

        <div>
          <section>
            <header>
              <h2 className="text-2xl font-bold"> 1. Precios y Pagos </h2>
            </header>
            <p className="text-lg">
              Todos los precios están expresados en la moneda indicada e incluyen los impuestos aplicables. El pago debe completarse mediante los métodos disponibles al momento de la compra.
            </p>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">
                2. Confirmación del Pedido
              </h2>
            </header>
            <p className="text-lg">
              Una vez recibido el pago, se enviará una confirmación del pedido al correo electrónico proporcionado por el cliente.
            </p>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">
                3. Envíos y Entregas
              </h2>
            </header>
            <p className="text-lg">
              Los tiempos de envío son estimados y pueden variar según disponibilidad o ubicación. La empresa no se hace responsable por retrasos ocasionados por el servicio de mensajería.
            </p>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">
                4. Devoluciones y Reembolsos
              </h2>
            </header>
            <p className="text-lg">

              Se aceptan devoluciones dentro de un plazo de [X] días hábiles a partir de la recepción del producto, siempre que el artículo esté en su estado original y con empaque intacto. Los costos de envío no son reembolsables.
            </p>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">
                5. Garantías
              </h2>
            </header>
            <p className="text-lg">

              Los productos cuentan con garantía contra defectos de fabricación por un periodo de [X] días. No se cubren daños por mal uso o manipulación indebida.
            </p>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">
                6. Privacidad y Datos Personales
              </h2>
            </header>
            <p className="text-lg">
              La información del cliente se maneja conforme a la política de privacidad disponible en este sitio.
            </p>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">
                7. Modificaciones
              </h2>
            </header>
            <p className="text-lg">
              La empresa se reserva el derecho de modificar estos términos sin previo aviso. Las condiciones vigentes al momento de la compra serán las aplicables.
            </p>
          </section>

          <section>
            <header>
              <h2 className="text-2xl font-bold">
                8. Jurisdicción
              </h2>
            </header>
            <p className="text-lg">
              Cualquier disputa será resuelta conforme a las leyes de [país o estado aplicable].
            </p>
          </section>
        </div>

      </main>
      <Footer />
    </>
  )
}
