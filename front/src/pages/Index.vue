<template>
  <q-page>
    <Header/>
    <Card/>
    <Caroussel/>
    <Contact/>
    <History/>
  </q-page>


</template>

<script>
import { defineComponent } from 'vue';
import Card from 'src/components/index/card.vue'
import Header from 'src/components/index/header.vue'
import Contact from 'src/components/index/contact.vue'
import Caroussel from 'src/components/index/carou.vue'
import History from 'src/components/index/history.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    Card,
    Header,
    Contact,
    Caroussel,
    History
  }
})
</script>
