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
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Aveiro" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Aveiro
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Braga" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Braga
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Braganca" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Bragança
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="CasteloBranco" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Castelo Branco
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Coimbra" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Coimbra
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Evora" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Évora
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Faro" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Faro
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Guarda" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Guarda
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Leiria" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Leiria
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Portalegre" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Portalegre
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Porto" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Porto
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Santarem" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Santarem
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Setubal" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Setúbal
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="VianaDoCastelo" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Viana do Castelo
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="VilaReal" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Vila Real
                                                </a>
                                                <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -130}" @click.prevent="Viseu" class="text-dark btn text-right py-1 col-12 px-0 fw-500">
                                                    Viseu
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
                                    <div class="col-12 bg-azul shadow px-10 py-10 rounded" style="max-height: 440px">
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Aveiro" class="btn btn-outline-dark shadow-sm col-12 fw-600 text-center">
                                            Aveiro
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Braga" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Braga
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Braganca" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Bragança
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="CasteloBranco" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Castelo Branco
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Coimbra" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Coimbra
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Evora" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Évora
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Faro" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Faro
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Guarda" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Guarda
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Leiria" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Leiria
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Lisboa" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Lisboa
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Portalegre" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Portalegre
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Porto" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Porto
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Santarem" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Santarem
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Setubal" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Setúbal
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="VianaDoCastelo" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Viana do Castelo
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="VilaReal" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Vila Real
                                        </a>
                                        <a href="#sobre" v-smooth-scroll="{duration: 500, offset: -100}" @click.prevent="Viseu" class="btn btn-outline-dark mt-10 shadow-sm col-12 fw-600 text-center">
                                            Viseu
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
    // <--------------- DISTRITOS --------------->
    Aveiro () {
      this.$router.push('/detetive-particular-em-Aveiro')
      this.HideNav()
    },
    Braga () {
      this.$router.push('/detetive-particular-em-Braga')
      this.HideNav()
    },
    Braganca () {
      this.$router.push('/detetive-particular-em-Braganca')
      this.HideNav()
    },
    CasteloBranco () {
      this.$router.push('/detetive-particular-em-Castelo-Branco')
      this.HideNav()
    },
    Coimbra () {
      this.$router.push('/detetive-particular-em-Coimbra')
      this.HideNav()
    },
    Evora () {
      this.$router.push('/detetive-particular-em-Evora')
      this.HideNav()
    },
    Faro () {
      this.$router.push('/detetive-particular-em-Faro')
      this.HideNav()
    },
    Guarda () {
      this.$router.push('/detetive-particular-em-Guarda')
      this.HideNav()
    },
    Leiria () {
      this.$router.push('/detetive-particular-em-Leiria')
      this.HideNav()
    },
    Lisboa () {
      this.$router.push('/detetive-particular-em-Lisboa')
      this.HideNav()
    },
    Portalegre () {
      this.$router.push('/detetive-particular-em-Portalegre')
      this.HideNav()
    },
    Porto () {
      this.$router.push('/detetive-particular-em-Porto')
      this.HideNav()
    },
    Santarem () {
      this.$router.push('/detetive-particular-em-Santarem')
      this.HideNav()
    },
    Setubal () {
      this.$router.push('/detetive-particular-em-Setubal')
      this.HideNav()
    },
    VianaDoCastelo () {
      this.$router.push('/detetive-particular-em-Viana-do-Castelo')
      this.HideNav()
    },
    VilaReal () {
      this.$router.push('/detetive-particular-em-Vila-Real')
      this.HideNav()
    },
    Viseu () {
      this.$router.push('/detetive-particular-em-Viseu')
      this.HideNav()
    },
    // <--------------- DEMAIS PÁGINAS --------------->
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
    .dropdown-nav .bg-azul {
        overflow: auto;
    }
</style>
