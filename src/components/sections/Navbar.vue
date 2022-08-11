<template>
    <div>
        <header>
            <!-- Barra de navegação Mobile -->
            <nav v-scroll="ScrollNav" class="navbar nav d-xs-flex d-sm-flex d-lg-none fixed-top" :class="{'pt-25': ShowLogoNomes, 'py-10 shadow-sm bg-light': !ShowLogoNomes}">
                <div class="container">
                    <a href="">
                        <img v-show="ShowLogoNomes" src="../../assets/img/logo-abraip-branca.webp" width="90" alt="">
                        <img v-show="!ShowLogoNomes" src="../../assets/img/logo-abraip-dete-preta.webp" width="90" alt="">
                    </a>
                    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
                        <div @click="HideNav" v-show="Shownav" id="nav-offset"></div>
                    </transition>
                    <button @click="ShowNav" class="btn pr-0">
                        <i class="fa fa-bars fs-28 text-azul fw-300"></i>
                    </button>
                    <transition enter-active-class="animate__animated animate__slideInRight" leave-active-class="animate__animated animate__slideOutRight">
                        <div v-show="Shownav" id="nav-event" class="pb-50">
                            <div class="d-flex mt-50 justify-content-center">
                                <div>
                                    <img src="../../assets/img/logo-abraip-preta.webp" width="120" alt="">
                                </div>
                            </div>
                            <div class="d-flex row mx-auto mt-40 justify-content-center">
                                <div class="col-12 pr-60">
                                    <a href="#home" v-smooth-scroll="{duration: 500, offset: -120}" @click="HideNav" class="btn nav-link px-0 text-right fw-500 fs-19">
                                        Início
                                    </a>
                                    <div @mouseenter="ShowServicosMobile = true" @mouseleave="ShowServicosMobile = false">
                                        <button class="btn nav-link px-0 d-flex align-items-center my-2 col-12 justify-content-end text-right fw-500 fs-19">
                                            <i class="fa fa-angle-down text-azul mr-2 fw-400 fs-20"></i> Serviços
                                        </button>
                                        <slide-up-down :active="ShowServicosMobile" class="col-12 px-0" :duration="500">
                                            <div class="col-12 px-0">
                                                <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -40}" @click.prevent="InvestigacaoEmpresarial" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Casos Empresariais
                                                </a>
                                                <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -40}" @click.prevent="ContraInteligencia" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Contra inteligência
                                                </a>
                                                <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -40}" @click.prevent="Consultoria" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Consultoria em segurança
                                                </a>
                                                <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -40}" @click.prevent="Varredura" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Provas para advogados
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Politicas" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Políticas de privacidade
                                                </a>
                                                <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -40}" @click.prevent="Servicos" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Todos os serviços
                                                </a>
                                            </div>
                                        </slide-up-down>
                                    </div>
                                    <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click="HideNav" class="btn nav-link px-0 text-right fw-500 fs-19">
                                        Sobre nós
                                    </a>
                                    <div @mouseenter="ShowLocalidadesMobile = true" @mouseleave="ShowLocalidadesMobile = false">
                                        <button class="btn nav-link px-0 d-flex align-items-center my-2 col-12 justify-content-end text-right fw-500 fs-19">
                                            <i class="fa fa-angle-down text-azul mr-2 fw-400 fs-20"></i> Localidades
                                        </button>
                                        <slide-up-down :active="ShowLocalidadesMobile" class="col-12 px-0" :duration="500">
                                            <div class="col-12 px-0">
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="SantaCatarina" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Santa Catarina
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Parana" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Paraná
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="RioGrandeDoSul" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Rio Grande do Sul
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="SaoPaulo" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    São paulo
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="RioDeJaneiro" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Rio de Janeiro
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="MinasGerais" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Minas Gerais
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="DistritoFederal" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Distrito Federal
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="MatoGrossoDoSul" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Mato Grosso do Sul
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Goias" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Goiás
                                                </a>
                                            </div>
                                        </slide-up-down>
                                    </div>
                                    <a href="#contato" v-smooth-scroll="{duration: 500, offset: -30}" @click="HideNav" class="btn nav-link px-0 text-right fw-500 fs-19">
                                        Contato
                                    </a>
                                </div>
                                <button class="col-10 mx-auto btn text-white d-flex fw-500 justify-content-center align-items-center mt-35 border-radius-20 px-25 btn-whatsapp-navbar" @click.prevent="$root.$emit('ShowModalWhatsapp')">
                                    <i class="fab fa-whatsapp fw-300 fs-18 mr-2"></i> WhatsApp
                                </button>
                                <div class="col-12 mx-auto px-0 mt-45 justify-content-center d-flex row mx-auto">
                                    <div>
                                        <a href="https://www.facebook.com/Abraip-Detetives-106334185038008" class="py-2 d-flex no-underline text-dark fw-500 align-items-center">
                                            <i class="fab fa-facebook text-facebook fs-30 mr-2"></i> Facebook
                                        </a>
                                        <a href="https://twitter.com/AbraipDetetives" class="py-2 d-flex my-2 no-underline text-dark fw-500 align-items-center">
                                            <i class="fab fa-twitter text-twitter fs-30 mr-2"></i> Twitter
                                        </a>
                                        <a href="https://br.pinterest.com/abraipdetetives/" class="py-2 d-flex no-underline text-dark fw-500 align-items-center">
                                            <i class="fab fa-pinterest text-pinterest fs-30 mr-2"></i> Pinterest
                                        </a>
                                        <a href="https://www.instagram.com/abraipdetetives/" class="py-2 d-flex my-2 no-underline text-dark fw-500 align-items-center">
                                            <i class="fab fa-instagram text-instagram fs-30 mr-2"></i> Instagram
                                        </a>
                                        <a href="https://www.youtube.com/channel/UCdfZ8-Kk3HnZNOIUIgE1XKw/featured" class="py-2 d-flex no-underline text-dark fw-500 align-items-center">
                                            <i class="fab fa-youtube text-youtube fs-26 mr-2"></i> Youtube
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </nav>
            <!-- Barra de navegação Desktop -->
            <nav v-scroll="ScrollNav" class="navbar nav d-xs-none d-sm-none d-lg-flex fixed-top" :class="{'pt-25': ShowLogoNomes, 'py-10 shadow-sm bg-light': !ShowLogoNomes}">
                <div class="container">
                    <a href="">
                        <img v-show="ShowLogoNomes" src="../../assets/img/logo-abraip-branca.webp" width="125" alt="Logo Abraip">
                        <img v-show="!ShowLogoNomes" src="../../assets/img/logo-abraip-dete-preta.webp" width="120" alt="Logo Abraip">
                    </a>
                    <div class="ml-auto d-flex">
                        <a href="#home" v-smooth-scroll="{duration: 500, offset: -100}" class="nav-link no-underline fs-19 fw-500" :class="{'text-preto-dark': !ShowLogoNomes, 'text-white': ShowLogoNomes}">
                            Início
                        </a>
                        <div @mouseenter="ShowDropdownServicos = true" @mouseleave="ShowDropdownServicos = false" class="nav-link mx-10 cursor-pointer d-flex align-items-center position-relative no-underline fs-19 fw-500" :class="{'text-preto-dark': !ShowLogoNomes, 'text-white': ShowLogoNomes}">
                            Serviços <i class="fa fa-angle-down fs-21 ml-2 fw-400 text-azul"></i>
                            <transition enter-active-class="animate__animated animate__fadeIn">
                                <div v-show="ShowDropdownServicos" class="dropdown-nav pt-10">
                                    <div class="col-12 bg-azul shadow px-10 py-10 rounded">
                                        <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -70}" @click.prevent="InvestigacaoEmpresarial" class="btn btn-outline-dark shadow-sm col-12 fw-600 text-center">
                                            Casos empresariais
                                        </a>
                                        <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -70}" @click.prevent="ContraInteligencia" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Contra inteligência
                                        </a>
                                        <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -70}" @click.prevent="Consultoria" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Consultoria em segurança
                                        </a>
                                        <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -70}" @click.prevent="Varredura" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Provas para advogados
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Politicas" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Políticas de privacidade
                                        </a>
                                        <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -70}" @click.prevent="Servicos" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Todos os serviços
                                        </a>
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" class="nav-link no-underline fs-19 fw-500" :class="{'text-preto-dark': !ShowLogoNomes, 'text-white': ShowLogoNomes}">
                            Sobre nós
                        </a>
                        <div @mouseenter="ShowDropdownLocalidades = true" @mouseleave="ShowDropdownLocalidades = false" class="nav-link cursor-pointer mx-10 d-flex align-items-center position-relative no-underline fs-19 fw-500" :class="{'text-preto-dark': !ShowLogoNomes, 'text-white': ShowLogoNomes}">
                            Localidades <i class="fa fa-angle-down fs-21 ml-2 fw-400 text-azul"></i>
                            <transition enter-active-class="animate__animated animate__fadeIn">
                                <div v-show="ShowDropdownLocalidades" class="dropdown-nav pt-10">
                                    <div class="col-12 bg-azul shadow px-10 py-10 rounded">
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="SantaCatarina" class="btn btn-outline-dark shadow-sm col-12 fw-600 text-center">
                                            Santa Catarina
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Parana" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Paraná
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="RioGrandeDoSul" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Rio Grande do Sul
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="SaoPaulo" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            São paulo
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="RioDeJaneiro" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Rio de Janeiro
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="MinasGerais" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Minas Gerais
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="DistritoFederal" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Distrito Federal
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="MatoGrossoDoSul" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Mato Grosso do Sul
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Goias" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Goiás
                                        </a>
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <a href="#contato" v-smooth-scroll="{duration: 500, offset: -70}" class="nav-link no-underline fs-19 fw-500" :class="{'text-preto-dark': !ShowLogoNomes, 'text-white': ShowLogoNomes}">
                            Contato
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>
<script>
export default {
  data () {
    return {
      Shownav: false,
      ShowLogoNomes: true,
      ShowDropdownServicos: false,
      ShowDropdownLocalidades: false,
      ShowServicosMobile: false,
      ShowLocalidadesMobile: false
    }
  },
  methods: {
    ScrollNav: function () {
      if (window.scrollY > 10) {
        this.ShowLogoNomes = false
      } else {
        this.ShowLogoNomes = true
      }
    },
    ShowNav () {
      this.Shownav = true
      document.body.classList.add('overflow-hidden')
    },
    HideNav () {
      this.Shownav = false
      document.body.classList.remove('overflow-hidden')
    },
    SantaCatarina () {
      this.$router.push('/detetive-particular-em-Santa-Catarina')
      this.HideNav()
    },
    Parana () {
      this.$router.push('/detetive-particular-no-Parana')
      this.HideNav()
    },
    RioGrandeDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul')
      this.HideNav()
    },
    SaoPaulo () {
      this.$router.push('/detetive-particular-em-Sao-Paulo')
      this.HideNav()
    },
    RioDeJaneiro () {
      this.$router.push('/detetive-particular-no-Rio-de-Janeiro')
      this.HideNav()
    },
    MinasGerais () {
      this.$router.push('/detetive-particular-em-Minas-Gerais')
      this.HideNav()
    },
    DistritoFederal () {
      this.$router.push('/detetive-particular-no-Distrito-Federal')
      this.HideNav()
    },
    MatoGrossoDoSul () {
      this.$router.push('/detetive-particular-no-Mato-Grosso-do-Sul')
      this.HideNav()
    },
    Goias () {
      this.$router.push('/detetive-particular-em-Goias')
      this.HideNav()
    },
    InvestigacaoEmpresarial () {
      this.$root.$emit('MudancaInvestigacaoEmpresarial')
      this.HideNav()
    },
    ContraInteligencia () {
      this.$root.$emit('MudancaContraInteligencia')
      this.HideNav()
    },
    Equipamentos () {
      this.$root.$emit('MudancaEquipamentos')
      this.HideNav()
    },
    Consultoria () {
      this.$root.$emit('MudancaConsultoriaEmSeguranca')
      this.HideNav()
    },
    Varredura () {
      this.$root.$emit('MudancaVarreduraDeEscutas')
      this.HideNav()
    },
    Servicos () {
      this.$root.$emit('MudancaServico')
      this.HideNav()
    },
    Politicas () {
      this.$router.push('/politicas-de-privacidade')
      this.HideNav()
    }
  }
}
</script>
<style lang="scss" scoped>
    nav{
        transition: all .3s;
        -o-transition: all .3s;
        -moz-transition: all .3s;
        -webkit-transition: all .3s;
    }
    .animate__animated{
        animation-duration: .3s;
        -o-animation-duration: .3s;
        -moz-animation-duration: .3s;
        -webkit-animation-duration: .3s;
    }
    .btn-whatsapp-navbar{
        background-color: var(--whatsapp);
    }
    .btn-whatsapp-navbar:hover{
        background-color: var(--whatsapp_hover);
    }
    .fa-whatsapp{
        margin-bottom: 2px;
    }
    .fa-angle-down{
        margin-top: 3px;
    }
    .dropdown-nav-mobile{
        width: 240px;
    }
    #nav-offset{
        background-color: #000000d2;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        z-index:19;
    }
    #nav-event{
        background-color: var(--light);
        width: 310px;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 20;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    #nav-event::-webkit-scrollbar{
        width: 0px !important;
    }
    .dropdown-nav{
        position: absolute;
        top: 38px;
        right: 10px;
        width: 290px;
    }
</style>
