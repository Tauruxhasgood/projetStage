<template>
  <div class="q-pa-md">
    <!-- Ajout du bouton avec modal intégré pour ajouter un article -->
    <div class="row">
      <btnAddArticle />
      <btnDeleteAllArticle />
    </div>
    <q-table
      title="Liste Articles"
      :data="listArticleGetter"
      :columns="columns"
      row-key="name"
      :rows="listArticleGetter"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto>
            <p>{{ props.row._id }}</p>
          </q-td>

          <q-td auto>
            <p>{{ props.row.title }}</p>
          </q-td>

          <q-td auto>
            <p>{{ props.row.description }}</p>
          </q-td>

          <q-td auto>
            <p>{{ props.row.content }}</p>
          </q-td>

          <q-td auto>
            <div>
              <q-btn
                rounded
                color="yellow-10"
                icon="edit"
                @click="showModalEditArticle(props.row)"
              />
              <q-btn
                rounded
                color="red-10"
                icon="delete"
                @click="showModalDeleteArticle(props.row)"
              />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <!-- Component modal -->
    <q-dialog v-model="modalEditArticle">
      <q-card>
        <div align="right">
          <q-btn dense flat icon="close" v-close-popup />
        </div>

        <q-card-section>
          <div class="text-h6">Edition de : {{ article.title }}</div>
        </q-card-section>
        <q-form
          @submit="onSubmitEditArticle(article)"
          class="q-gutter-md q-pa-md"
        >
          <div class="q-gutter-md q-pa-md">
            <q-input
              standout="bg-lime"
              v-model="article.title"
              @change="fnFormArticle()"
              :value="title"
              label="Title"
              bg-color="white"
            />
            <q-input
              standout
              v-model="article.description"
              label="Description"
              bg-color="white"
            />
            <q-input
              standout
              v-model="article.content"
              type="textarea"
              label="Content"
              bg-color="white"
            />

            <q-toggle
              v-model="formArticle.accept"
              class="text-grey-6"
              label="J'accepte les CGU"
            />
          </div>

          <div>
            <q-btn
              label="Envoyer"
              type="submit"
              color="primary"
              class="q-mr-sm"
            />
          </div>
        </q-form>
      </q-card>
    </q-dialog>

    <!-- quand nous avons deletee=deletee, c'est l'enfant en premier qui est déclaré avec le parent en 
         second (ce qui fait notre lien entre les deux) -->
    <ModalDeleteArticle
      v-if="modalDeleteArticle"
      :edit="edit"
      :deletee="deletee"
      :data="article"
      :modalDeleteArticle="modalDeleteArticle"
      @closeModalDeleteArticle="closeModal()"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { mapActions, mapGetters } from "vuex";
import btnAddArticle from "./modalArticle/addArticle.vue";
import btnDeleteAllArticle from "./modalArticle/deleteAllArticle.vue";
import ModalDeleteArticle from "./modalArticle/modalArticle.vue";

export default {
  name: "EditArticle",

  setup(props) {
    const modalEditArticle = ref(false);
    const modalDeleteArticle = ref(false);
    const article = ref(null);
    const formArticle = ref({
      title: "",
      description: "",
      content: "",
      _id: "",
      accept: false,
    });

    return {
      modalEditArticle,
      modalDeleteArticle,
      article,
      formArticle,
    };
  },

  data() {
    return {
      edit: null,
      deletee: null,
      columns: [
        { name: "id", align: "left", label: "id", sortable: true },
        {
          name: "title",
          required: true,
          label: "title",
          align: "left",
          sortable: true,
        },
        {
          name: "description",
          align: "left",
          label: "description",
          sortable: true,
        },
        { name: "Content", align: "left", label: "content", sortable: true },
        { name: "Actions", align: "left", label: "actions", sortable: true },
      ],
    };
  },

  components: {
    btnAddArticle,
    btnDeleteAllArticle,
    ModalDeleteArticle,
    // Modal,
  },

  methods: {
    showModalEditArticle(data) {
      this.article = data;
      this.edit = true;
      this.modalDeleteArticle = true;
    },
    showModalDeleteArticle(data) {
      console.log("ùmodaldeletearticle", data);
      this.article = data;
      this.deletee = true;
      this.modalDeleteArticle = true;
    },
    closeModal() {
      console.log(
        "close modal",
        this.modalDeleteArticle,
        this.modalEditArticle
      );
      this.article = null;
      this.edit = false;
      this.deletee = false;
      this.modalEditArticle = false;
      this.modalDeleteArticle = false;
    },

    onSubmitEditArticle(id) {
      if (this.accept !== true) {
        alert("Veuillez accepter les CGU !");
      } else this.editOneArticle(this.formArticle);
      // return this.modalEditArticle = false
    },

    ...mapActions("article", ["getListArticle", "editOneArticle"]),
  },

  computed: {
    ...mapGetters("article", ["listArticleGetter"]),
  },

  mounted() {
    this.getListArticle();
    console.log("Info :", this.listArticleGetter);
  },
};
</script>
