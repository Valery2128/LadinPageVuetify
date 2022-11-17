<template>
    <v-row>
      <v-col
        v-for="(n, index ) in images"
        :key="index"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="n.img"
          :lazy-src="n.img"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </template>
<script>
export default {
  data: () => ({
    images: [ //array - matriz - arreglo 
    //indcamos el contenido del arreglo puede ser una variable un bool, float, int , string, obj
    //ingreamos un objeto con atributos
      {        
        img:'../img/f2.png',//atributo img
        name: 'John Leider',//atributo name ahh osea que segun esto deberia hacer 
        title: 'Welcome to Vuetify!', //atributo title
        excerpt: 'Thank you for joining our community...',//atributo except
      },
      {        
        img:'../img/f1.png',//atributo img
        name: 'John Leider',//atributo name  
        title: 'Welcome to Vuetify!', //atributo title
        excerpt: 'Thank you for joining our community...',//atributo except
      },
      {        
        img:'../img/f3.png',//atributo img
        name: 'John Leider',//atributo name  
        title: 'Welcome to Vuetify!', //atributo title
        excerpt: 'Thank you for joining our community...',//atributo except
      },
      {        
        img:'../img/f4.png',//atributo img
        name: 'John Leider',//atributo name  
        title: 'Welcome to Vuetify!', //atributo title
        excerpt: 'Thank you for joining our community...',//atributo except
      },
      {        
        img:'../img/f1.png',//atributo img
        name: 'John Leider',//atributo name  
        title: 'Welcome to Vuetify!', //atributo title
        excerpt: 'Thank you for joining our community...',//atributo except
      },
      {        
        img:'../img/f4.png',//atributo img
        name: 'John Leider',//atributo name  
        title: 'Welcome to Vuetify!', //atributo title
        excerpt: 'Thank you for joining our community...',//atributo except
      },
    
    ],
    lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
  }),
}
</script>