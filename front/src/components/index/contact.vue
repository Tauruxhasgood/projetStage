<template>
  <div class="q-pa-xl">

  
    <q-card bordered class="rounded-borders bg-orange-2">
      <!-- FORMULAIRE DE CONTACT -->
      <q-form @submit="onSubmitContact" @reset="onReset" class="q-pa-xl row">
        <!-- INPUT NAME -->
        <q-input
          label-color="orange-2"
          label="Nom*"
          style="width: 50%"
          color="orange-2"
          bg-color="grey-10"
          input-class="text-orange-2"
          class="q-pa-md"
          outlined
          v-model="message.nom"
          required
        >
          <template v-slot:append>
            <q-avatar>
              <q-icon name="people" class="text-orange-2" />
            </q-avatar>
          </template>
        </q-input>
        <!-- INPUT EMAIL -->
        <q-input
          label-color="orange-2"
          input-class="text-orange-2"
          label="Addresse Email*"
          required
          style="width: 50%"
          type="email"
          color="orange-2"
          bg-color="grey-10"
          class="q-pa-md"
          outlined
          v-model="message.email"
        >
          <template v-slot:append>
            <q-avatar>
              <q-icon name="mail" class="text-orange-2" />
            </q-avatar>
          </template>
        </q-input>
        <!-- INPUT SUJET -->
        <q-input
          label-color="orange-2"
          input-class="text-orange-2"
          label="Sujet*"
          style="width: 100%"
          required
          color="orange-2"
          bg-color="grey-10"
          class="q-pa-md"
          outlined
          v-model="message.sujet"
        >
          <template v-slot:append>
            <q-avatar>
              <q-icon name="subject" class="text-orange-2" />
            </q-avatar>
          </template>
        </q-input>
        <!-- INPUT MESSAGE -->
        <q-input
          label-color="orange-2"
          input-class="text-orange-2"
          label="Message*"
          style="width: 100%"
          required
          color="orange-2"
          bg-color="grey-10"
          class="q-pa-md"
          outlined
          v-model="message.message"
        >
          <template v-slot:append>
            <q-avatar>
              <q-icon name="message" class="text-orange-2" />
            </q-avatar>
          </template>
        </q-input>
        <!-- VALIDER -->
        <div class="q-pa-md">
          <q-btn
                    label="Envoyer"
                    type="submit"
                    color="grey-2"
                    class="text-grey-10"
                  />
          
        </div>
        <!-- RESET -->
        <div class="q-pa-md">
          <q-btn
            label="Reset"
            class="text-bold"
            type="reset"
            color="grey-10"
            text-color="orange-2"
          ></q-btn>
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  
  data() {
    return {
      message: {
        nom:'',
        email:'',
        sujet:'',
        message:'',
      },
    }
  },
methods: {
    onSubmitContact() {
        console.log('test')
        this.httpMessageContact(this.message)
    },
    onReset() {
      this.message = {}
    },

    ...mapActions('contact', ['httpMessageContact'])
},
  computed: {
    ...mapGetters('contact', ['flashGetter'])
  },
}
</script>
