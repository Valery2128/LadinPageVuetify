<template>
    <v-container>
      <section id="intro" class="text-center mb-12">
        <!-- #id .class -->
        <h1 class="display-2 font-weight-light mb-8">
          Kirei Sushi
        </h1>
        <v-responsive class="mx-auto subtitle-1 grey--text">
            Sushi a domicilio 

          <!-- <div v-text="texto + `${links}`"></div> -->
        </v-responsive>
      </section>
    </v-container>
  </template>
  <script>
  export default {
    components: {
    },
    props:['links'],
      data: () => ({
      texto: ""
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