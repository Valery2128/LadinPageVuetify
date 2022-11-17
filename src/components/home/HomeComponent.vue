<template>
  <v-container>
    <titulo-component :links="links"></titulo-component>    
    <picture-component></picture-component>
  </v-container>
</template>
<script>
import TituloComponent from "./includes/TituloComponent.vue";
import PictureComponent from "./includes/PictureComponent.vue";
export default {
  components: {
"titulo-component": TituloComponent,
"picture-component":PictureComponent
  },
    data: () => ({
      links: [
        'Home',
        'About me',
        'Portfolio',
        'Contact',
      ],
    }),

  }
</script>
<!-- scope traduce a que estos estilos son solo para este componente -->
<style scope>
.display-2 {
  font-family: Playfair Display, sans-serif !important;
}
.subtitle-1 {
  font-weight: 400;
  font-family: Open Sans, sans-serif !important;
}
</style>