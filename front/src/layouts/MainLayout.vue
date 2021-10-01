<template>
  <q-layout view="lHh Lpr lFf">
    <Navbar/>
    

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


import { defineComponent, ref } from 'vue'
import Navbar from "src/components/navbar.vue"
export default defineComponent({
  name: 'MainLayout',

  components: {
     Navbar
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
