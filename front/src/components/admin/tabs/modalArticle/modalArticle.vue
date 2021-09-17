<template>
  <div>
    <div v-if='data' class="text-h6"> {{ data }} {{ modal }} {{ modalDeleteArticle }} </div>
    <q-dialog v-model="modal">
      <!-- Edit Section -->
      <q-card v-if='edit'>
        <q-card-section>
          <div class="text-h6"> Edit {{ data._id }} </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="close modal" color="primary" @click="$emit('closeModalDeleteArticle')" />
          <q-btn flat label="Delete" color="primary" @click="deleteOneArticle(data._id)" />
        </q-card-actions>
      </q-card>
      <!-- Delete Section -->
      <q-card v-if='deletee'>
        <q-card-section>
          <div class="text-h6"> Delete {{ data._id }} </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="close modal" color="primary" @click="$emit('closeModalDeleteArticle')" />
          <q-btn flat label="Delete" color="primary" @click="deleteOneArticle(data._id)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'
import { mapActions } from 'vuex'

export default {
  name: "ModalDeleteArticle",
  props: ['modalDeleteArticle', 'data', 'deletee', 'edit'],

  methods: {
    ...mapActions('article', ['deleteOneArticle'])
  },

  setup (props) {
    console.log('props child', props.modalDeleteArticle)
    const modal = ref(props.modalDeleteArticle)
    return {
      modal
    }
  }
};
</script>