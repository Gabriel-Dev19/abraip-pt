<template>
  <div id="app">
    <NavBarComponent/>
    <HomeComponent/>
    <RouterViewPrincipal/>
    <ServicosComponent/>
    <NumerosComponent/>
    <ContatoComponent/>
    <FooterComponent/>
    <WhatsAppFloat/>
    <ModalWhatsapp />
    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
      <div v-scroll="ScrollRedesSociais" v-show="ShowRedesSociais">
        <div class="redes-sociais-lateral d-xs-flex shadow">
          <a href="https://www.facebook.com/Abraip-Detetives-106334185038008" target="_blank" class="no-underline rede-social" rel="noopener noreferrer">
            <div class="rede-social bg-facebook d-flex align-items-center justify-content-center">
              <i class="fab fa-facebook text-white fs-20"></i>
            </div>
          </a>
          <a href="https://twitter.com/AbraipDetetives" target="_blank" class="no-underline rede-social" rel="noopener noreferrer">
            <div class="rede-social bg-twitter d-flex align-items-center justify-content-center">
              <i class="fab fa-twitter text-white fs-20"></i>
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UCdfZ8-Kk3HnZNOIUIgE1XKw/featured" target="_blank" class="no-underline rede-social" rel="noopener noreferrer">
            <div class="rede-social bg-youtube d-flex align-items-center justify-content-center">
              <i class="fab fa-youtube text-white fs-20"></i>
            </div>
          </a>
          <a href="https://www.instagram.com/abraipdetetives/" target="_blank" class="no-underline rede-social" rel="noopener noreferrer">
            <div class="rede-social bg-instagram d-flex align-items-center justify-content-center">
              <i class="fab fa-instagram text-white fs-20"></i>
            </div>
          </a>
          <a href="https://br.pinterest.com/abraipdetetives/" target="_blank" class="no-underline rede-social" rel="noopener noreferrer">
            <div class="rede-social bg-pinterest d-flex align-items-center justify-content-center">
              <i class="fab fa-pinterest text-white fs-20"></i>
            </div>
          </a>
        </div>
      </div>
    </transition>
    <Cookie />
  </div>
</template>
<script>
import NavBarComponent from './components/sections/Navbar'
import HomeComponent from './components/sections/Home'
import RouterViewPrincipal from './components/sections/RouterViewPrincipal'
import ServicosComponent from './components/sections/Servicos'
import NumerosComponent from './components/sections/Numeros'
import ContatoComponent from './components/sections/Contato'
import FooterComponent from './components/sections/Footer'
import WhatsAppFloat from './components/buttons/btn-whatsapp-flutuante'
import ModalWhatsapp from './components/sections/ModalWhatsapp.vue'
import Cookie from './components/sections/Cookie.vue'
export default {
  components: {
    NavBarComponent,
    HomeComponent,
    RouterViewPrincipal,
    ServicosComponent,
    NumerosComponent,
    ContatoComponent,
    FooterComponent,
    WhatsAppFloat,
    ModalWhatsapp,
    Cookie
  },
  data () {
    return {
      ShowRedesSociais: false
    }
  },
  mounted () {
    document.oncontextmenu = function () {
      return false
    }

    function EvitarSeleccion (target) {
      if (typeof target.onselectstart !== 'undefined') {
        target.onselectstart = function () {
          return false
        }
      } else if (typeof target.style.MozUserSelect !== 'undefined') {
        target.style.MozUserSelect = 'none'
      } else {
        target.style.cursor = 'default'
      }
    }

    EvitarSeleccion(document.body)
  },
  methods: {
    ScrollRedesSociais: function () {
      if (window.scrollY > 700) {
        this.ShowRedesSociais = true
      } else {
        this.ShowRedesSociais = false
      }
    }
  },
  metaInfo: {
    htmlAttrs: {
      lang: 'pt-BR'
    },
    title: 'Detetive Particular em Lisboa | Porto | Évora  | Braga | Faro | Coimbra | Aveiro',
    meta: [{ name: 'description', content: 'Somos uma agência de detetives focada em casos empresarias, contra inteligência empresarial, varredura inteligente, verificação da conduta de sócios e/ou funcionários e muito mais!' }]
  }
}
</script>
<style scoped>
  @media (min-width: 1px) and (max-width: 575.95px) {
    .redes-sociais-lateral{
      position: fixed;
      left: 0;
      bottom: 0;
      height: 40px;
      z-index: 17;
      width: 100%;
    }
    .rede-social{
      height: 40px !important;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -ms-flex-positive: 1;
      flex-grow: 1;
      max-width: 100%;
    }
  }
  @media (min-width: 576px) {
    .redes-sociais-lateral{
      position: fixed;
      left: 0;
      bottom: 100px;
      width: 40px;
      z-index: 17;
    }
    .rede-social{
      height: 40px !important;
      width: 40px !important;
    }
  }
</style>
