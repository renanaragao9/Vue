<script>
    import Tag from './Tag.vue';

    export default {
        
        components: { Tag },
        
        props: {
            ingrediente: {Type: String, required: true}
        },

        data() {
            return {
                selecionado: false    
            }
        },
    }
</script>

<template>
    <button class="ingrediente" @click="selecionado = !selecionado" :aria-pressed="selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado" />
    </button>
</template>

<style scoped>
    .ingrediente {
        cursor: pointer;
    }
</style>