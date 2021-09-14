<template>
  <div class="q-pa-md">
    <!-- Ajout du bouton avec modal intégré pour ajouter un article -->
    <btnAddArticle/>
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
            <p>{{ props.row.title }}</p>
          </q-td>

          <q-td auto>
            <p>{{ props.row.description }}</p>
          </q-td>

          <q-td auto>
            <p>{{ props.row.content }}</p>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import btnAddArticle from './modalArticle/addArticle.vue'

export default {
  components: {
    btnAddArticle
  },

  data () {
    return {

      columns: [
        {
          name: 'title',
          required: true,
          label: 'title',
          align: 'left',
          sortable: true
        },
        {name:'description', align:'left', label:'description', sortable:true},
        {name:'Contenu', align:'left', label:'contenu', sortable:true}

      ]
    }
  },
  methods: {
    ...mapActions('article', ['getListArticle'])
  },
  computed: {
    ...mapGetters('article', ['listArticleGetter'])
  },
  // props: {
  //   article: {
  //     type: Object
  //   }
  // },
  mounted () {
    this.getListArticle()
    console.log('Info :', this.listArticleGetter);
  }
}
</script>
