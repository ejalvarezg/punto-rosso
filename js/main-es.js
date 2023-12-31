/* ********** HEADER ********** */

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
</div>
<!-- Fin Menú -->
</div>
</nav>
<div class="barra-amarilla"></div>
<div class="barra-verde"></div>
  `;

/* ********** FOOTER ********** */

document.getElementById(
  "footer"
).innerHTML = `<div class="container pt-4 text-center border-bottom">
<!-- Section: Social media -->
<section class="mb-4">
  <!-- Facebook -->
  <a
    class="btn btn-link btn-floating btn-lg text-gris m-1"
    href="#!"
    role="button"
    data-mdb-ripple-color="dark"
    ><i class="bi bi-facebook"></i
  ></a>

  <!-- Twitter -->
  <a
    class="btn btn-link btn-floating btn-lg text-gris m-1"
    href="#!"
    role="button"
    data-mdb-ripple-color="dark"
    ><i class="bi bi-twitter"></i
  ></a>

  <!-- Google -->
  <a
    class="btn btn-link btn-floating btn-lg text-gris m-1"
    href="#!"
    role="button"
    data-mdb-ripple-color="dark"
    ><i class="bi bi-google"></i
  ></a>

  <!-- Instagram -->
  <a
    class="btn btn-link btn-floating btn-lg text-gris m-1"
    href="#!"
    role="button"
    data-mdb-ripple-color="dark"
    ><i class="bi bi-instagram"></i
  ></a>

  <!-- Linkedin -->
  <a
    class="btn btn-link btn-floating btn-lg text-gris m-1"
    href="#!"
    role="button"
    data-mdb-ripple-color="dark"
    ><i class="bi bi-linkedin"></i
  ></a>
  <!-- Github -->
  <a
    class="btn btn-link btn-floating btn-lg text-gris m-1"
    href="#!"
    role="button"
    data-mdb-ripple-color="dark"
    ><i class="bi bi-github"></i
  ></a>
</section>
<!-- Fin Sección: Social media -->
</div>

<div class="container d-flex justify-content-around align-items-center py-2">
<p class="col-md-4 mb-0 text-gris">© 2023 Punto Rosso</p>

<a href="index.html" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-gris text-decoration-none">
  <img
      src="./imagenes/icono.svg"
      style="width: 8%"
      alt="Punto Rosso Logo"
      loading="lazy" />
</a>

<ul class="nav col-md-4 justify-content-end">
  <li class="nav-item"><a href="index.html" class="nav-link px-2 text-gris">Inicio</a></li>
  <li class="nav-item"><a href="nosotros.html" class="nav-link px-2 text-gris">Nosotros</a></li>
  <li class="nav-item"><a href="productos.html" class="nav-link px-2 text-gris">Productos</a></li>
  <li class="nav-item"><a href="pedidos.html" class="nav-link px-2 text-gris">Pedidos</a></li>
  <li class="nav-item"><a href="home.html" class="nav-link px-2 text-gris">Inglés</a></li>
</ul>
</div>
  `;