<template>
    <q-page>
        <HeaderManager/>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import HeaderManager from 'src/components/admin/headerManager.vue'
export default defineComponent({
    components: {
        HeaderManager,
    }
})
</script>