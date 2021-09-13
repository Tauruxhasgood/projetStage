<!--COMPONENT HEADER-->
<template>
  <div>
    <q-parallax>
      <template v-slot:media>
        <img src="https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?cs=srgb&dl=pexels-kelly-lacy-2876511.jpg&fm=jpg">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
          <div class="text-h3 text-white text-center">Stage Site Header</div>
        </div>
      </template>
    </q-parallax>
  </div>
</template>
<script>

export default {
    components: {
    
    },
  name: "Header",
};
</script>
