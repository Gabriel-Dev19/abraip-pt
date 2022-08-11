<template>
    <div>
        <div id="home" class="height-100-vh min-height-600 d-flex align-items-center bg-home">
            <div class="container d-flex align-items-center justify-content-between mt-20">
                <main class="col-lg-8 col-xl-7 px-0">
                    <h1 class="fw-600 text-light pr-xl-70 fs-xs-25">
                        Detetives especializados em casos empresariais
                    </h1>
                    <p class="mb-0 mt-3 col-xl-11 pl-0 pr-xs-0 pr-sm-0 pr-xl-15 text-light fw-500">
                        A ABRAIP detetives vem ao longo de mais de 25 anos sendo a principal
                        solução para centenas de empresários que buscam por sanar dúvidas em
                        relação a seus funcionários e seus concorrentes.
                    </p>
                    <div class="d-flex mt-xs-4 mt-sm-3">
                        <a href="#contato" v-smooth-scroll="{duration: 500, offset: -50}" class="btn btn-outline-light px-25 fs-17 fw-600 border-radius-20">
                            Fale conosco
                        </a>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
    .bg-home{
        background: url(../../assets/img/bg-home-desenho.png) bottom center no-repeat, linear-gradient(0deg, #000000b4, #000000b4), url(../../assets/img/investigacao-empresarial.jpg) center center no-repeat;
        background-size: cover;
    }
    #home h1{
        line-height: 44px;
    }
    @media (min-width: 1px) and (max-width: 575.95px) {
        h1.fs-xs-25{
            line-height: 35px !important;
        }
    }
</style>
