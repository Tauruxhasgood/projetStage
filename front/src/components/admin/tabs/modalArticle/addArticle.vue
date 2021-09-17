<template>
  <div class="q-pa-md q-gutter-sm">
    <!-- le onReset vient dire au clic qu'il faut reset les données inscrites dans le formulaire et les CGU (voir methods ci-dessous) -->
    <q-btn
      label="Add Article"
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
          <div class="text-h6">Ajouter un article</div>
        </q-card-section>

        <q-form
          @submit="onSubmitAddArticle"
          @reset="onReset"
          class="q-gutter-md q-pa-md"
        >
          <q-input
            standout
            v-model="form.title"
            label="Titre"
            bg-color="white"
            :rules="[
              (val) => (val && val.length > 0) || 'Merci de remplir le champ',
            ]"
          />
          <q-input
            standout
            v-model="form.description"
            label="Description"
            bg-color="white"
            :rules="[
              (val) => (val && val.length > 0) || 'Merci de remplir le champ',
            ]"
          />
          <q-input
            standout
            v-model="form.content"
            label="Contenu"
            type="textarea"
            bg-color="white"
            :rules="[
              (val) => (val && val.length > 0) || 'Merci de remplir le champ',
            ]"
          />

          <q-toggle
            v-model="accept"
            class="text-grey-6"
            label="J'accepte les CGU"
          />

          <div>
            <q-btn
              label="Envoyer"
              type="submit"
              color="primary"
              class="q-mr-sm"
            />
            <q-btn label="Effacer" type="reset" color="primary" />
          </div>
        </q-form>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
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

      form: {
        title: "",
        description: "",
        content: "",
      },
      accept: false,
    };
  },
  methods: {
    onSubmitAddArticle() {
      if (this.accept !== true) {
        alert("Veuillez accepter les CGU !");
      } else this.httpFormAddArticle(this.form);
      return (this.bar = false);
    },
    // onReset reset les données du formulaire et du bouton CGU
    onReset() {
      this.form = {};
      this.accept = false;
    },

    ...mapActions("article", ["httpFormAddArticle"]),
  },
};
</script>
