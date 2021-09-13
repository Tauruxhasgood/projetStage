<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <label for="file">Sélectionnez un Header: </label>
      <q-input
        @update:model-value="val => { file = val[0] }"
        filled
        name="file"
        type="file"
        hint="Header"
      />
      <label for="img">Aperçu : </label>
      <img name="img" height="300" width="300" src="https://images.pexels.com/photos/3331837/pexels-photo-3331837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
    </div>
    <q-btn color="lime" text-color="grey-10">valider</q-btn>
  </div>
</template>
