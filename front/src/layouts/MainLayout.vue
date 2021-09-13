<template>
  <q-layout view="lHh Lpr lFf">
    <Navbar/>
    <Footer/>
    

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


import { defineComponent, ref } from 'vue'
import Navbar from "src/components/navbar.vue"
import Footer from "src/components/footer.vue"
export default defineComponent({
  name: 'MainLayout',

  components: {
     Navbar,
     Footer
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
