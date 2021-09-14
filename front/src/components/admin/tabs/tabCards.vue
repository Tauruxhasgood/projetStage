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
            <div class=" q-gutter-xs row">
              <btn-edit-article />
              <btn-delete-article />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import btnAddArticle from "./modalArticle/addArticle.vue";
import btnEditArticle from "./modalArticle/EditArticle.vue";
import btnDeleteArticle from "./modalArticle/deleteArticle.vue";

export default {
  components: {
    btnAddArticle,
    btnEditArticle,
    btnDeleteArticle,
  },

  data() {
    return {
      columns: [
        {name:"id", align: "left", label: "id", sortable: true},
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
    ...mapActions("article", ["getListArticle"]),
  },
  computed: {
    ...mapGetters("article", ["listArticleGetter"]),
  },

  // props: {
  //   article: {
  //     type: Object
  //   }
  // },
  mounted() {
    this.getListArticle();
    console.log("Info :", this.listArticleGetter);
  },
};
</script>
