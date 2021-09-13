<template>
<q-page>
    <div>
        <Contact/>
   </div>
</q-page>
   
   
</template>


<script>
import { defineComponent } from 'vue';
import Contact from 'src/components/index/contact.vue'
export default defineComponent({
    components: {
        Contact,
    }
})
</script>