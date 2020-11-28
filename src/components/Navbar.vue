<template>
  <div>
    <b-navbar toggleable="lg" variant="dark">
      <b-navbar-brand>
        <router-link to="/home">
          Perpustakaan
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/buku">
              Buku
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/pengarang">
              Pengarang
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/penerbit">
              Penerbit
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
.nav-link a {
  color: plum;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.navbar-brand a {
  color: peru;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
