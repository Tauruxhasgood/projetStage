<template>
  <div>
    <!-- COMPONENT MODAL MULTIPLE POUR AUTHENTIFICATION -->
    <!-- BTN SE CONNECTER -->
    <!-- <div>
      <q-btn class="text-bold grey-10 text-grey-9" @click="onOpenModal()"
        ><q-icon name="edit"
      /></q-btn>
    </div> -->

    <p> {{ modal }} || {{ modalHeader }} </p>

    <!-- MODAL -->
    <q-dialog v-model="modal" persistent>
      <div style="max-width: 800px">
        <q-card class="bg-grey-10">
          <h6 class="text-grey-2 text-center">
            Éditer Header : {{ data }} <q-icon name="edit" />
          </h6>

          <q-input filled type="text" bg-color="lime" label="Titre" />
          <div class="row q-pl-md text-h5 text-bold bg-lime rounded-borders">
            <div class="q-pt-md">
              <p>Sélection d'un Header:</p>
            </div>

            <div class="q-pl-md q-pt-md">
              <input
                type="file"
                id="files"
                name="imagesArray"
                @change="onChange"
              />
              <label
                for="files"
                id="files"
                class="
                  col-2
                  bg-lime
                  text-amber-10
                  bg-transparent
                  tut
                  rounded-borders
                  text-bold
                "
                >Choisir un fichier...</label
              >
            </div>
            <div class="q-pl-md q-pb-md col-12">
              <q-form @submit.prevent="onUpload">
                <div class="form-group q-pa-md"></div>
                <div class="form-group">
                  <q-btn type="submit" class="text-lime bg-grey-10 q-pa-md"
                    >Submit</q-btn
                  >
                <q-btn @click="$emit('closeModalHeader')" class="text-lime bg-red-10 q-pa-md">
                    close
                </q-btn>
                </div>
              </q-form>
            </div>
          </div>
        </q-card>
      </div>
    </q-dialog>
  </div>
</template>

<script>
// on importe mapActions et mapGetters
import { ref } from 'vue'
// import { mapActions } from "vuex";
export default {
  props: ['modalHeader', 'data'],

  setup (props) {
      console.log('props child', props)
      const modal = ref(props.modalHeader)
      return {
        modal
      }
  },

//   data() {
//     return {
//       tab: 1,

//       form: {
//         name: "",
//         email: "",
//         password: "",
//         passwordConfirm: "",
//       },
//       accept: false,
//     };
//   },
//   methods: {
//     onChange(event) {
//       console.log("balance");
//       this.imagesArray = event.target.files[0];
//     },
//     onUpload() {
//       const formData = new FormData();
//       formData.append("imagesArray", this.imagesArray, this.imagesArray.name);
//       this.httpModifyHeader(formData)
//     },
//     ...mapActions('header', ['httpModifyHeader'])
//   }
}
</script>
