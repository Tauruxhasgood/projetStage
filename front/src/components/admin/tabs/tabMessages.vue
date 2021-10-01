<template>
  <div class="q-pa-md">
     <q-table
       title="Messages"
       :data="getListMessage"
       :columns="columns"
       row-key="name"
       :rows="getListMessage"
       :filter="filter"
       :loading="loading">
      >
        <template v-slot:body="props">
         
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
                  sortable: true
              },
              { name: 'email', align: 'left', label: 'Email :', field: 'email', sortable: true },
              { name: 'sujet', label: 'Sujet :', align:'left',  field: 'sujet', sortable: true },
              { name: 'message', label: 'Message :', align:'left',  field: 'message', sortable: true }
              
          ]
       }

  },
  methods: {
     ...mapActions('contact', ['httpGetListMessage'])
  },
 
  computed: {
    ...mapGetters('contact', ['getListMessage'])
    
  },

  mounted () {
    this.httpGetListMessage()
    // console.log(this.setListMessage[0].nom)

  }
}
</script>
