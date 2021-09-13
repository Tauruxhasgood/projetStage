<template>
  <div class="q-pa-md">
    <h2>nom :  {{getListMessage}}</h2>
     <q-table
       title="Messages"
       :data="getListMessage"
       :columns="columns"
       row-key="name"
       :filter="filter"
       :loading="loading">
      >
        <template v-slot:body="props">
          <div>
              <q-tr :props="props">
                 <q-td auto>
                     <p>{{ props.row.nom }}</p>
                 </q-td>
                 <q-td auto>
                     <p>{{props.row.email }}</p>
                 </q-td>
                  <q-td auto>
                     <p>{{props.row.sujet }}</p>
                 </q-td>
                  <q-td auto>
                     <p>{{props.row.message }}</p>
                 </q-td>
             </q-tr>
          </div>      
        </template>

     </q-table>
  </div>
</template>



<script>
import { mapActions ,mapGetters } from 'vuex'

export default {
  
  data () {
      return {
          loading: false,
          filter: '',
          rowCount: 10,

          columns: [
              {
                  name: 'nom',
                  required: true,
                  label: 'Nom',
                  align: 'left',
                  field: row => row.name,
                  format: val => `${val}`,
                  sortable: true
              }
              
          ]
       }

  },
  methods: {
     ...mapActions('contact', ['httpGetListMessage'])
  },
 
  computed: {
    ...mapGetters('contact', ['getListMessage'])
  },

  props: {
      message: {
        type: Object
     }
  },
  

  mounted () {
    this.httpGetListMessage()
    // console.log(this.setListMessage[0].nom)

  }
}
</script>
