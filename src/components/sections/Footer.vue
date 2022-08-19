<template>
    <div>
        <footer class="bg-azul mt-70 pt-50 pb-xs-65 pb-sm-35">
            <div class="container d-flex justify-content-center align-items-start row mx-auto">
                <div class="col-lg-4 d-flex justify-content-center row mx-auto px-xs-0 px-sm-0">
                    <h6 class="text-center col-12 px-0 fw-700 mb-0">
                        Nossos serviços
                    </h6>
                    <div>
                        <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -70}" @click.prevent="InvestigacaoEmpresarial" class="col-12 no-underline fw-600 mt-3 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0">
                            <i class="fa fa-angle-right fw-400 mr-2 fs-18"></i> Casos empresarial
                        </a>
                        <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -70}" @click.prevent="ContraInteligencia" class="col-12 no-underline fw-600 mt-2 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0">
                            <i class="fa fa-angle-right fw-400 mr-2 fs-18"></i> Contra inteligência
                        </a>
                        <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -70}" @click.prevent="Consultoria" class="col-12 no-underline fw-600 mt-2 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0">
                            <i class="fa fa-angle-right fw-400 mr-2 fs-18"></i> Consultoria em segurança
                        </a>
                        <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -70}" @click.prevent="Varredura" class="col-12 no-underline fw-600 mt-2 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0">
                            <i class="fa fa-angle-right fw-400 mr-2 fs-18"></i> Provas para advogados
                        </a>
                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Politica" class="col-12 no-underline fw-600 mt-2 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0">
                            <i class="fa fa-angle-right fw-400 mr-2 fs-18"></i> Políticas de privacidade
                        </a>
                        <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -70}" @click.prevent="Servicos" class="col-12 no-underline fw-600 mt-2 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0">
                            <i class="fa fa-angle-right fw-400 mr-2 fs-18"></i> Todos os serviços
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 mt-xs-50 mt-sm-50 d-flex justify-content-center row mx-auto mt-lg-0 px-0">
                    <h6 class="col-12 text-center px-0 fw-700 mb-0">
                        Siga-nos
                    </h6>
                    <div>
                        <a href="https://www.facebook.com/Abraip-Detetives-106334185038008" target="_blank" rel="noopener noreferrer" class="col-12 fw-600 mt-3 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0">
                            <i class="fab fa-facebook fw-400 mr-2 fs-22"></i> Facebook
                        </a>
                        <a href="https://twitter.com/AbraipDetetives" target="_blank" rel="noopener noreferrer" class="col-12 fw-600 mt-3 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0">
                            <i class="fab fa-twitter fw-400 mr-2 fs-23"></i> Twitter
                        </a>
                        <a href="https://www.youtube.com/channel/UCdfZ8-Kk3HnZNOIUIgE1XKw/featured" target="_blank" rel="noopener noreferrer" class="col-12 fw-600 mt-3 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0">
                            <i class="fab fa-youtube fw-400 mr-2 fs-20"></i> YouTube
                        </a>
                        <a href="https://www.instagram.com/abraipdetetives/" target="_blank" rel="noopener noreferrer" class="col-12 fw-600 mt-3 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0">
                            <i class="fab fa-instagram fw-400 mr-2 fs-23"></i> Instagram
                        </a>
                        <a href="https://br.pinterest.com/abraipdetetives/" target="_blank" rel="noopener noreferrer" class="col-12 fw-600 mt-3 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0">
                            <i class="fab fa-pinterest fw-400 mr-2 fs-23"></i> Pinterest
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 mt-xs-50 mt-sm-50 mt-lg-0 px-0 col-xl-4">
                    <h6 class="text-center px-0 fw-700 mb-0">
                        Aceitamos
                    </h6>
                    <div id="icons-cartoes" class="mt-3 d-flex col-12 pl-2 justify-content-center pr-0 row mx-auto">
                        <i class="fab mr-2 fa-cc-paypal fs-60"></i>
                        <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
                            <div class="px-1">
                                <img src="../../assets/img/icons/icon-pix.png" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
                            <div class="px-1">
                                <img src="../../assets/img/icons/icon-elo.png" class="img-fluid" alt="">
                            </div>
                        </div>
                        <i class="fab mr-2 fa-cc-diners-club fs-60"></i>
                        <i class="fab mr-2 fa-cc-amex fs-60"></i>
                        <i class="fab mr-2 fa-cc-visa fs-60"></i>
                        <i class="fab fa-cc-mastercard fs-60"></i>
                        <div class="icon-card ml-7-px d-flex justify-content-center align-items-center mr-2">
                            <div class="px-1">
                                <img src="../../assets/img/icons/icon-hiper.png" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
                            <div class="px-1">
                                <img src="../../assets/img/icons/icon-wu.png" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
                            <div class="px-1">
                                <img src="../../assets/img/icons/icon-money-gram.png" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
                            <div class="px-1">
                                <img src="../../assets/img/icons/icon-pag.png" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
                            <div class="px-2">
                                <img src="../../assets/img/icons/icon-mercado-pago.png" class="img-fluid" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-xs-center px-30 justify-content-sm-center justify-content-lg-start">
                        <div class="mt-4">
                            <img src="../../assets/img/selo-garantia-abraip.webp" width="130" alt="Grantia 100%">
                        </div>
                    </div>
                </div>
                <div class="col-12 px-0 d-flex justify-content-center row mx-auto mt-70">
                    <div class="col-lg-10 col-xl-9 px-0 text-center fw-500 fs-15">
                        A ABRAIP DETECTIVES é uma empresa que preza e respeita a privacidade e confidencialidade do
                        cliente. Constituída de acordo com a lei federal <a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13432.htm" target="_blank" rel="noopener noreferrer">13.432/2017</a>
                    </div>
                </div>
                <div class="col-12 px-0 d-flex justify-content-between row mx-auto mt-60">
                    <div class="col-lg-6 px-0 text-xs-center fs-15 fw-600 text-sm-center text-lg-left">
                        &copy; 2021 - ABRAIP DETECTIVES - Todos os direitos reservados
                    </div>
                    <div class="col-lg-6 mt-xs-4 mt-sm-4 mt-lg-0 fw-600 px-0 text-xs-center text-sm-center fs-15 text-lg-right">
                        <a href="https://portfoliogabrieldev.000webhostapp.com/" class="no-underline d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-end" target="_blank">
                            Desenvolvido por Gabriel Camurça <i class="fab fs-24 fw-300 ml-1 fa-vuejs"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
  methods: {
    InvestigacaoEmpresarial () {
      this.$root.$emit('MudancaInvestigacaoEmpresarial')
    },
    ContraInteligencia () {
      this.$root.$emit('MudancaContraInteligencia')
    },
    Consultoria () {
      this.$root.$emit('MudancaConsultoriaEmSeguranca')
    },
    Varredura () {
      this.$root.$emit('MudancaVarreduraDeEscutas')
    },
    Celular () {
      this.$root.$emit('MudancaCelularEspiao')
    },
    Equipamentos () {
      this.$root.$emit('MudancaEquipamentos')
    },
    Servicos () {
      this.$root.$emit('MudancaServico')
    },
    Politica () {
      this.$router.push('/politicas-de-privacidade')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -100
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    footer a{
        color: #2c3e50c9;
    }
    footer a:hover{
        color: #2c3e50;
    }
    #icons-cartoes i{
        color: #2c3e50c9;
    }
    #icons-cartoes i:hover{
        color: #2c3e50;
    }
    .icon-card{
        width: 67.5px;
        height: 53px;
        background-color: #2c3e50c9;
        margin-top: 3px;
        border-radius: 6px;
    }
    .icon-card:hover{
        background-color: #2c3e50;
    }
    .ml-7-px{
        margin-left: 7px;
    }
    .mr-7-px{
        margin-right: 7.5px;
    }

    a#botao-suspenso-whatsapp{
        position: fixed;
        bottom: 25px;
        right: 25px;
        height: 55px;
        width: 55px;
        border-radius: 50%;
        background-color: rgba(52,175,35,1);
        -webkit-transition: all 0.3s;
        -o-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
        z-index: 30 !important;
    }
    a#botao-suspenso-whatsapp:hover{
        text-decoration: none;
        background-color: rgba(40,143,26,1);
        -webkit-transition: all 0.3s;
        -o-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }
    a#botao-suspenso-whatsapp i{
        font-size: 30px;
        color: #ffffff;
    }
</style>
