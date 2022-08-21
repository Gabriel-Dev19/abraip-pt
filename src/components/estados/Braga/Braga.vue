<template>
    <div>
        <div class="container">
            <h1 class="text-center fs-xs-30 px-xs-4">Detective privado em Braga</h1>
            <article class="col-lg-11 px-0 mx-auto fs-sm-17 text-center mt-4 fw-500">
                Precisando de <b>Detective Privado para sua Empresa</b> em <b>Braga?</b>
                A ABRAIP Detectives está em <b>Braga</b> para poder lhe ajudar.
                Somos especializados em <b>casos empresarias, contra inteligência empresarial, varredura inteligente e verificação da conduta de sócios e/ou funcionários,</b> sempre executando nossos serviços de forma rápida, discreta e sigilosa, ajustados de acordo com a necessidade, exigência e orçamento de cada cliente. Não importa a complexidade do seu caso, nossos detectives estão preparados para atender sua demanda de forma <b>eficaz e profissional,</b> proporcionando assim o esclarecimento de suas dúvidas, a satisfação e a paz de espírito que você necessita e merece.
            </article>
            <div class="d-flex justify-content-center row mx-auto mt-30">
                <BtnLigueAgora class="col-xs-10"/>
                <BtnFaleNoWhatsapp class="mt-xs-2 col-xs-10 ml-sm-3"/>
            </div>
            <h5 class="text-dark fw-600 mt-70 mb-1 d-flex justify-content-center">
              Localidades atendidas
            </h5>
            <section class="pt-20">
              <div class="container px-0">
                <!-- Cidades A -->
                <div class="position-relative overflow-hidden mt-10 col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                    <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                        <h5 class="text-dark fw-600 mb-1">
                            B
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="Barcelos" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Barcelos
                        </a>
                        <a @click.prevent="Braga" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Braga
                        </a>
                    </div>
                </div>
              </div>
            </section>
            <section class="pt-20">
              <div class="container px-0">
                <!-- Cidades A -->
                <div class="position-relative overflow-hidden mt-10 col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                    <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                        <h5 class="text-dark fw-600 mb-1">
                            F
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="Fafe" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Fafe
                        </a>
                    </div>
                </div>
              </div>
            </section>
            <section class="pt-20">
              <div class="container px-0">
                <!-- Cidades A -->
                <div class="position-relative overflow-hidden mt-10 col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                    <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                        <h5 class="text-dark fw-600 mb-1">
                            G
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="Guimaraes" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Guimarães
                        </a>
                    </div>
                </div>
              </div>
            </section>
            <section class="pt-20">
              <div class="container px-0">
                <!-- Cidades A -->
                <div class="position-relative overflow-hidden mt-10 col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                    <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                        <h5 class="text-dark fw-600 mb-1">
                            V
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="VilaNovaDeFamalicao" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Vila Nova de Famalicão
                        </a>
                        <a @click.prevent="VilaVerde" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Vila Verde
                        </a>
                    </div>
                </div>
              </div>
            </section>
        </div>
    </div>
</template>
<script>
import BtnLigueAgora from '../../buttons/btn-outline-ligue-agora'
import BtnFaleNoWhatsapp from '../../buttons/btn-outline-fale-no-whatsapp'
export default {
  components: {
    BtnLigueAgora,
    BtnFaleNoWhatsapp
  },
  methods: {
    Barcelos () {
      this.$router.push('/detective-privado-em-Braga/detective-privado-em-Barcelos')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Braga () {
      this.$router.push('/detective-privado-em-Braga/detective-privado-em-Braga')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Fafe () {
      this.$router.push('/detective-privado-em-Braga/detective-privado-em-Fafe')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Guimaraes () {
      this.$router.push('/detective-privado-em-Braga/detective-privado-em-Guimaraes')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    VilaNovaDeFamalicao () {
      this.$router.push('/detective-privado-em-Braga/detective-privado-em-Vila-Nova-de-Famalicao')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    VilaVerde () {
      this.$router.push('/detective-privado-em-Braga/detective-privado-em-Vila-Verde')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    }
  },
  metaInfo: {
    htmlAttrs: {
      lang: 'pt-BR'
    },
    title: 'Detective Privado em Braga | Porto | Évora  | Braga | Faro | Coimbra | Aveiro',
    meta: [{ name: 'description', content: 'Somos uma agência de detectives focada em casos empresarias, contra inteligência empresarial, varredura inteligente, verificação da conduta de sócios e/ou funcionários e muito mais!' }]
  }
}
</script>
<style lang="scss" scoped>

</style>
