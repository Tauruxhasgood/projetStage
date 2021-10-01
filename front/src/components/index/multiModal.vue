

<template>
  <div>
    <!-- COMPONENT MODAL MULTIPLE POUR AUTHENTIFICATION -->
    <!-- BTN SE CONNECTER -->
    <div class="">
      <q-btn
        dense
        label="Connexion"
        class="text-bold bg-orange-2 text-grey-9"
        @click="dialog = true"
      />
    </div>

    <!-- MODAL -->
    <q-dialog v-model="dialog">
      <div style="max-width: 800px">
        <q-card class="bg-grey-10">
          <!-- BOUTONS TABS -->
          <q-tabs
            v-model="tab"
            dense
            vertical
            class="text-grey text-overline"
            active-color="orange-2"
            align="justify"
          >
            <q-tab name="Connexion" label="Connexion" />
            <q-tab name="Inscription" label="Inscription" />
            <q-tab name="Mot de passe oublié" label="Mot de passe oublié" />
          </q-tabs>
          <q-separator />
          <!-- TABS AUTH -->
          <q-tab-panels
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
            class=""
            v-model="tab"
          >
            <!-- TAB LOGIN -->
            <q-tab-panel name="Connexion" class="bg-grey-10">
              <q-form
                @submit="onSubmitLogin"
                @reset="onReset()"
                class="q-pa-xl q-gutter-md"
              >
                <p class="text-h6 text-grey-2 text-bold">Connexion</p>
                <!-- INPUT USERNAME  -->
                <q-input
                  bg-color="orange-2"
                  filled
                  v-model="form.email"
                  label="Nom d'utilisateur ou email*"
                  hint=""
                />
                <!-- INPUT PASSWORD -->
                <q-input
                  bg-color="orange-2"
                  v-model="form.password"
                  filled
                  type="password"
                  label="Mot de passe*"
                  lazy-rules
                />

                <q-toggle
                  v-model="accept"
                  class="text-grey-5"
                  label="J'accepte les CGU"
                />

                <div>
                  <q-btn label="Envoyer" type="submit" color="grey-10"  @click="dialog = false, onReset()" />
                  <q-btn
                    label="Reset"
                    type="reset"
                    color="grey-10"
                    flat
                    class="q-ml-sm"
                  />
                  <q-btn
                    label="Reset"
                    type="reset"
                    color="grey-2"
                    flat
                    class="q-ml-sm"
                  />
                </div>
              </q-form>
            </q-tab-panel>
            <!-- TAB REGISTER -->
            <q-tab-panel class="bg-grey-10 text-center" name="Inscription">
              <!-- Ici on indique dans une balise <p> ou autre le state "Flash" qui indique un message lors de l'enregistrement déclaré dans le store-auth -->
              <p class="text-h5 text-white"> {{ flashGetter }} </p>
              <q-form
                @submit="onSubmitRegister"
                @reset="onReset()"
                class="q-pa-xl"
              >
                <p class="text-h6 text-grey-2">Inscription</p>
                <!-- INPUT USERNAME le v-model indique l'intitulé qui sera repris dans le AuthController -->
                <q-input
                  filled
                  bg-color="orange-2"
                  label="Nom d'utilisateur *"
                  v-model="form.name"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Merci de remplir le champ',
                  ]"
                />
                <!-- INPUT EMAIL ADRESS -->
                <q-input
                  bg-color="orange-2"
                  filled
                  v-model="form.email"
                  type="mail"
                  label="Adresse Mail *"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Merci de remplir le champ',
                  ]"
                />
                <!-- INPUT PASSWORD -->
                <q-input
                  bg-color="orange-2"
                  filled
                  v-model="form.password"
                  type="password"
                  label="Mot de passe *"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') || 'Entrez un mot de passe',
                  ]"
                />
                <!-- CONFIRM PASSWORD -->
                <q-input
                  filled
                  v-model="form.passwordConfirm"
                  bg-color="orange-2"
                  type="password"
                  label="Confirmez votre mot de passe *"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') || 'Entrez un mot de passe',
                  ]"
                />

                <q-toggle
                  v-model="accept"
                  class="text-grey-6"
                  label="J'accepte les CGU"
                />

                <div>
                  <q-btn
                  @click="dialog = false, onReset()"
                    label="Envoyer"
                    type="submit"
                    color="grey-2"
                    class="text-grey-10"
                  />
                  <q-btn
                    label="Reset"
                    type="reset"
                    color="grey-2"
                    flat
                    class="q-ml-sm"
                  />
                </div>
              </q-form>
            </q-tab-panel>
            <!-- TAB LOST PASSWORD -->
            <q-tab-panel class="bg-grey-10" name="Mot de passe oublié">
              <h6 class="text-grey-2 text-center">Mot de passe oublié</h6>

              <q-form
                @submit="onSubmitLogin"
                @reset="onReset()"
                class="q-pa-md q-gutter-md"
              >
                <!-- INPUT EMAIL ADRESS -->
                <q-input
                  filled
                  type="mail"
                  bg-color="orange-2"
                  label="Entrez votre adresse mail"
                />

                <div>
                  <q-btn
                  @click="dialog = false, onReset()"
                    label="Envoyer"
                    class="text-grey-10"
                    type="submit"
                    color="orange-2"
                  />
                  <q-btn
                    label="Reset"
                    type="reset"
                    color="orange-2"
                    flat
                    class="q-ml-sm"
                  />
                </div>
              </q-form>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </q-dialog>
  </div>
</template>

<script>
// on importe mapActions et mapGetters
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      tab: 1,
      dialog: false,

      form: {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      accept: false,
    }
  },
  methods: {
    onSubmitLogin() {
      if (this.accept !== true) alert("Accepte les CGU!")
      else this.httpFormLogin(this.form);
    },
    onSubmitRegister() {
      if (this.accept !== true) alert("accepte les cgu !")
      else this.httpFormRegister(this.form)
    },
    onReset() {
      this.form = {}
      this.form.accept = false
    },
    // on déclare mapActions avec les actions que l'on a déclaré dans "store-auth"
    ...mapActions('auth', ['httpFormLogin', 'httpFormRegister'])
  },
  // on déclare notre mapGetters qui est l'écoute de  notre formulaire et qui déclenche le Flash de notre state dans "store-auth"
  computed: {
    ...mapGetters('auth', ['flashGetter'])
  }
};
</script>
