document.getElementById("header").innerHTML = `<!-- announcement-bar -->
<div class="announcement-bar pt-2 pb-2">
<div class="container">
<div class="row">
  <div class="col-md-4">
    <ul class="announcement-bar__list">
      <li>
        <i class="bi bi-telephone rounded-circle"></i>
        <a href="tel: +5491148264437" class="text-decoration-none">
          11 4826 4437</a
        >
      </li>
      <li>
        <i class="bi bi-envelope rounded-circle"></i>
        <a
          href="mailto:info@puntorosso.com"
          class="text-decoration-none">
          info@puntorosso.com</a
        >
      </li>
    </ul>
  </div>

  <div class="col-md-8 d-flex justify-content-end">
    <ul class="announcement-bar__list">
      <li>
        <i class="bi bi-clock rounded-circle"></i> Mié-Jue-Dom de 12 a
        00hs / Vie-Sáb de 12 a 01hs
      </li>
      <li>
        <i class="bi bi-geo-alt-fill rounded-circle"></i> Julian Alvarez
        2486
      </li>
      <li class="dropdown">
        <a class="dropdown-toggle text-decoration-none" href="#" id="dropdownId"
           data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Idioma</a>
         <div class="dropdown-menu" aria-labelledby="dropdownId">
           <a class="dropdown-item text-decoration-none" href="index.html">Español</a>
           <a class="dropdown-item text-decoration-none" href="home.html">Inglés</a>
        </div>
      </li>
    </ul>
  </div>
</div>
</div>
</div>

<nav class="navbar navbar-expand-md navbar-primary bg-gris">
<div class="container">
<!-- Logo -->
<a
  class="navbar-brand mt-2 mt-lg-0 justify-content-center justify-content-md-start"
  href="index.html">
  <img
    src="./imagenes/logo.svg"
    alt="Punto Rosso Logo"
    loading="lazy" />
</a>
<!-- Fin logo -->

<!-- Menú -->
<button
  class="navbar-toggler d-lg-none"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#collapsibleNavId"
  aria-controls="collapsibleNavId"
  aria-expanded="false"
  aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collapsibleNavId">
  <ul class="navbar-nav ms-auto mt-2 mt-lg-0 px-2">
    <li class="nav-item">
      <a class="nav-link" href="index.html" aria-current="page"
        >Inicio</a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link" href="nosotros.html">Nosotros</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="productos.html">Productos</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="pedidos.html">Pedidos</a>
    </li>
  </ul>
  <form class="d-flex my-2 my-lg-0">
    <input
      class="form-control me-sm-2"
      type="text"
      placeholder="Buscar" />
    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
      Buscar
    </button>
  </form>
</div>
<!-- Fin Menú -->
</div>
</nav>
<div class="barra-amarilla"></div>
<div class="barra-verde"></div>
  `;
