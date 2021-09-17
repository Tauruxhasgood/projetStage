<template>
  <div class="q-pa-md q-gutter-sm">
    <!-- le onReset vient dire au clic qu'il faut reset les données inscrites dans le formulaire et les CGU (voir methods ci-dessous) -->
    <q-btn
      label="Delete All"
      color="primary"
      @click="(bar = true), onReset()"
    />
    <q-dialog
      v-model="bar"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Supprimer tous les articles</div>
        </q-card-section>

        <q-form
          @submit="onSubmitDeleteAllArticle"
          @reset="onReset"
          class="q-gutter-md q-pa-md"
        >
          <q-toggle
            v-model="accept"
            class="text-grey-4"
            label="Veuillez cocher pour valider la suppression"
          />

          <div>
            <q-btn
              label="Valider"
              type="submit"
              color="primary"
              class="q-mr-sm"
            />
          </div>
        </q-form>

        <q-card-section class="q-pt-none">
          Info à prendre en considération avant de valider : La suppression est
          défintive, aucun retour en arrière n'est possible.
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      bar: ref(false),
      text: ref(""),
      accept: false,
    };
  },
  methods: {
    onSubmitDeleteAllArticle() {
      if (this.accept !== true) {
        alert("Veuillez cocher la case");
      } else this.deleteAllArticle();
      return (this.bar = false);
    },
    // onReset reset les données du formulaire et du bouton CGU
    onReset() {
      //   this.form = {};
      //   this.accept = false;
    },

    ...mapActions("article", ["deleteAllArticle"]),
  },
};
</script>
