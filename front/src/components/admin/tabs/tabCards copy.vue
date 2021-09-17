<template>
  <div class="q-pa-md">
    <!-- Ajout du bouton avec modal intégré pour ajouter un article -->
    <btnAddArticle />
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
              <q-btn rounded color="yellow-10" icon="edit"  @click="showModal" />
              <!-- <q-btn rounded label="" icon="edit" color="yellow-10" @click="showModal" /> -->
              <btnDeleteArticle />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <!-- Component modal -->
    <Modal v-show="isModalVisible" @close="closeModal" />
    <!-- <Modal v-model="isModalVisible" @close="closeModal"/> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { ref } from "vue";
import btnAddArticle from "./modalArticle/addArticle.vue";
import Modal from './modalArticle/formEditArticle.vue';
import btnDeleteArticle from "./modalArticle/deleteOneArticle.vue";

export default {
  components: {
    btnAddArticle,
    Modal,
    btnDeleteArticle,
  },

  data() {
    return {
      // persistent: ref(true),
      isModalVisible: false,
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
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    ...mapActions("article", ["getListArticle"]),
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
