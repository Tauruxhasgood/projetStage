<template>
  <div>
      <!-- TABS -->
    <q-tabs
      v-model="tab"
      inline-label
      switch-indicator
      indicator-color="primary"
      class="bg-lime shadow-2"
    >
      <q-tab name="headers" icon="photo" label="Headers" />
      <q-tab name="cards" icon="style" label="Cards" />
      <q-tab name="messages" icon="mail" label="Messages" />
        <q-tab name="others" icon="group_work" label="Others" />
    </q-tabs>
    <q-separator/>
    <!-- CONTENU TABS ADMIN -->
    <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="headers">
              <Header/>
            <div class="text-amber"></div>
          </q-tab-panel>
          <q-tab-panel name="cards">
              <Cards/>
            <div class="text-amber"></div>
          </q-tab-panel>
          <q-tab-panel name="messages">
            <Messages/>
          </q-tab-panel>
          <q-tab-panel name="others">
            
          </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
// import { ref } from "vue";
import { defineComponent } from 'vue'
import Header from 'src/components/admin/tabs/tabHeaders.vue'
import Cards from 'src/components/admin/tabs/tabCards.vue'
import Messages from 'src/components/admin/tabs/tabMessages.vue'

export default defineComponent  ({
    data() {
      return {
       tab: ""
      }
         
    },
    components: {
         Header,
         Cards,
         Messages
    },
    
})
</script>
