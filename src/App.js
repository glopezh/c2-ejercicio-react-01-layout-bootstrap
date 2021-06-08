function App() {
  /*Una variable que contenga el titular de la noticia.
- Una variable que contenga el cuerpo de la noticia.
- Una variable que contenga un array de categorías.
- Una variable que contenga un array de "otras cosas".
- Una variable que contenga un valor booleano,
indicando si se debe imprimir el copyright en el footer o no.Si está a`true`,
el texto del footer debe ser éste:
`Texto del footer - Ningún derecho reservado, copia lo que quieras`.*/
  const titular = "Titular de noticias";
  const cuerpoNoticia = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturinumquam, iusto omnis minima corrupti est officiis natus nam,adipisci commodi quo autem magnam sequi magni odio soluta temporibusvelit quas!",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sequi, dolorum autem alias commodi molestiae facere quibusdam beatae nulla error, dignissimos, libero vitae ratione porro.Delectusdolorem ad non esse."
  ]
  const categorias = [
    "Noticias de deporte",
    "Noticias de ocio",
    "Noticias de política",
    "Noticias de espectaculos",
  ];
  const otrasCosas = [
    "Nosequé",
    "Nosecuánto",
    "Talycual",
  ]

  const copyright = "true";

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
          <p>{cuerpoNoticia[0]}</p>
          <p>{cuerpoNoticia[1]}</p>
        </main>
        <aside className="sidebar col-12 col-sm-5 col-md-4 py-4">

            <section className="listado center-style">
            <h3>Categorías</h3>
              <ul className="list-unstyled">
                <li>{categorias[0]}</li>
                <li>{categorias[1]}</li>
                <li>{categorias[2]}</li>
                <li>{categorias[3]}</li>
            </ul>
          </section>

          <section className="listado center-style">
            <h3>Otras cosas</h3>
            <ul className="list-unstyled">
              <li>{otrasCosas[0]}</li>
              <li>{otrasCosas[1]}</li>
              <li>{otrasCosas[2]}</li>
            </ul>
          </section>

        </aside>
      </div>
        <footer className= "pie text-white row text-center align-items-center" >
          <p className="col text-center"> <span className={copyright}> Texto del footer - Ningún derecho reservado, copia lo que quieras </span></p>
      </footer>
      </div>
    </>

  );

}

export default App;
