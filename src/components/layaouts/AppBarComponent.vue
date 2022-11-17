<template>
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar>
      <img
        src="../../../public/img/Logo.png"        alt="John"
      >
    </v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          text
          :href="link.href"
        >
          {{ link.title }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
</template>
<script>
  export default {
    name: 'App',
    data: () => ({
      links: [
        {
          title:  "Home",
          href: "/"
        } 
        
          

            
      ],
    }),
  }
</script>