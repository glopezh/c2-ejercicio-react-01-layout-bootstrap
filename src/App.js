function App() {
  const titulo = "Cosetes";
  const claseCopyright = "true";

  return (
<>
    <div className ="container">
      <header className ="cabecera text-white row align-items-center">
        <h1 className ="col m-0">Título</h1>
        <nav className ="col text-right">
          <ul className ="links-navegacion list-inline m-0">
            <li className="list-inline-item">hola</li>
            <li className="list-inline-item">adiós</li>
            <li className="list-inline-item">ciao</li>
          </ul>
        </nav>
      </header>
      <div className="contenedor-principal row">
        <main className="principal col-12 col-sm-7 col-md-8 py-4">
          <h2>Titular de la noticia</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            numquam, iusto omnis minima corrupti est officiis natus nam,
            adipisci commodi quo autem magnam sequi magni odio soluta temporibus
            velit quas!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            sequi, dolorum autem alias commodi molestiae facere quibusdam beatae
            nulla error, dignissimos, libero vitae ratione porro. Delectus
            dolorem ad non esse.
          </p>
        </main>
        <aside className="sidebar col-12 col-sm-5 col-md-4 py-4">
          <section className="listado">
            <h3>Categorías</h3>
            <ul className="list-unstyled">
              <li>Noticias de deporte</li>
              <li>Noticias de ocio</li>
              <li>Noticias de política</li>
              <li>Noticias de espectáculos</li>
            </ul>
          </section>
          <section className="listado">
            <h3>Otras cosas</h3>
            <ul className="list-unstyled">
              <li>Nosequé</li>
              <li>Nosecuánto</li>
              <li>Talycual</li>
            </ul>
          </section>
        </aside>
      </div>
      <footer className = "pie text-white row align-items-center">
        <p className ="col text-center">Texto del footer</p>
      </footer>
      </div>
    </>

  );

}

export default App;
