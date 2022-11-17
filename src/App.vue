<template>
  <div id="app">
    <v-app>
      <!-- barra de navegacion -->
      <app-bar-component />
      <!-- contenedor donde se rendeiza el content -->
      <v-main class="ma-5 grey lighten-3">
        <!-- ma es margin en todos los lados -->
        <!-- <home-component /> -->
        <!-- vamos a renderizar los componentes en esta etiqueta-->
        <router-view></router-view>

      </v-main>
      <footer-component />
    </v-app>
  </div>
</template>

<script>
import AppBarComponent from "./components/layaouts/AppBarComponent.vue";
// import HomeComponent from "./components/home/HomeComponent.vue";
import FooterComponent from "./components/footer/FooterComponent.vue";
export default { //ojo con la sintaxis
  name: "App",
  components: {
    "app-bar-component": AppBarComponent,
    // "home-component": HomeComponent,
    "footer-component": FooterComponent,
  },
};
</script>

<style>
#app {
  font-family: Playfair Display, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
