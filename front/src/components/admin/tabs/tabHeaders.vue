<template>
  <div class="q-pa-md row flex flex-center items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-table
        title="image"
        :columns="columns"
        row-key="name"
        :rows="getHeader"
        binary-state-sort
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto>
              <div class="row">
                <div>
                  <p>{{ props.row.titre }}</p>
                  <q-img width="100px" :src="props.row.path" />
                </div>
                 <q-space />
                 <div>
                  <q-btn
                    class="text-bold grey-10 text-grey-9"
                    @click="onOpenModal(props.row)"
                  >
                    <q-icon name="edit"/>
                  </q-btn>
                 </div>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>

      <!-- Modal -->
      <Modal
        v-if='modalHeader'
        :data="header"
        :modalHeader="modalHeader"
        @closeModalHeader='closeModal()'
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Headers</div>
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
              </div>
            </q-form>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-overline text-orange-9">Headers</div>
        <div class="row q-pl-md text-h5 text-bold bg-lime rounded-borders">
          <div class="q-pt-md">
            <p>Modification / Suppression :</p>
            <q-form @submit="onSubmitDeleteAllHeaders()">
              <div class="q-pb-md">
                <q-btn type="submit" class="text-lime bg-grey-10"
                  >Supprimer Tous les Headers</q-btn
                >
              </div>
            </q-form>
          </div>
        </div>
      </q-card-section>

      <q-card-actions>
        <q-space />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Modal from "../editHeaderModal.vue"
export default {
  components: {
    Modal
  },

  data() {
    
    // const url = ref(this.getHeader)
    return {
      rowCount: 10,
      header: null,
      columns: [
        {
          name: "name",
          require: true,
          label: "image",
          field: (row) => row.name,
          format: (val) => `${val}`,
          align: "left",
          sortable: true,
        },
      ],
      modalHeader: null
    };
  },
  methods: {
    closeModal() {
      this.header = null
      this.modalHeader = false
    },
    onOpenModal (data) {
      console.log("open modal", data)
      this.header = data
      this.modalHeader = true
    },
    onChange(event) {
      console.log("balance");
      this.imagesArray = event.target.files[0];
    },
    onUpload() {
      const formData = new FormData();
      formData.append("imagesArray", this.imagesArray, this.imagesArray.name);
      this.httpHeaderSend(formData);
    },
    onSubmitDeleteAllHeaders() {
      this.httpDeleteAllHeaders();
    },
    ...mapActions("header", ["httpHeaderSend"]),
    ...mapActions("header", ["httpGetHeader"]),
    ...mapActions("header", ["httpDeleteAllHeaders"]),
  },
  computed: {
    ...mapGetters("header", ["flashGetter"]),
    ...mapGetters("header", ["getHeader"]),
  },
  mounted() {
    this.httpGetHeader();

    // console.log(this.setListMessage[0].nom)
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 850px

input
   display: none

.tut
  cursor: pointer

label:hover
   background-color: blue
</style>

<style>
#files:hover {
  color: #cddc39 !important;
  background-color: #212121 !important;
}
</style>
