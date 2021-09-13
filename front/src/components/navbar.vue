<!--COMPONENT NAVBAR-->
<template>
  <div>
    <q-toolbar class="bg-grey-10">
      
      <q-btn
        dense
        round
        class="text-orange-2"
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />
      <div class="q-pl-md">
        <q-btn to="/" flat class="q-pa-sm text-orange-2">
          <q-icon name="home" class="q-pa-sm" />Accueil</q-btn
        >
      </div>
      <div class="q-pl-md">
        <q-btn to="/contact" flat class=" q-pa-sm text-orange-2">
          <q-icon name="mail" class="q-pa-sm" />Contact</q-btn
        >
      </div>
      <q-space />
      <div>
        <MultiModal />
      </div>
      <!-- <p class="text-h5 text-white"> {{ flashGetter }}</p> -->
    </q-toolbar>
    <q-drawer
      behavior="mobile"
      v-model="leftDrawerOpen"
      show-if-above
      class="bg-grey-10"
    >
      <q-list>
        <q-item-label header class="text-grey-8"> Projet Stage </q-item-label>

        <q-separator />
        <div class="row q-pa-sm text-center">
          <div class="col-12 q-pa-md">
            <q-input
              borderless
              input-class="text-orange-2"
              label-color="orange-2"
              label="Rechercher sur le site"
            >
              <template v-slot:after>
                <q-icon color="orange-2" name="search" />
              </template>
            </q-input>
          </div>
        </div>
        <q-separator />
      </q-list>
    </q-drawer>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import MultiModal from "../components/index/multiModal.vue";
export default defineComponent({
  components: {
    MultiModal,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      text: '',
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
