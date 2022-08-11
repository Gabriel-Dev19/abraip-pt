<template>
    <div>
        <button class="btn d-flex align-items-center justify-content-center btn-info px-25 fw-600 border-radius-20" @click.prevent="$root.$emit('ShowModalWhatsapp')">
            <i class="fab fa-whatsapp fs-17 mr-2 fw-500"></i> Fale no WhatsApp
        </button>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
    .fa-whatsapp{
        margin-bottom: 2px;
    }
</style>
