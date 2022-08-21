<template>
    <div>
        <div class="container">
            <h1 class="text-center fs-xs-30 px-xs-4">Detective privado em Porto</h1>
            <article class="col-lg-11 px-0 mx-auto fs-sm-17 text-center mt-4 fw-500">
                Precisando de <b>Detective Privado para sua Empresa</b> em <b>Porto?</b>
                A ABRAIP Detectives está em <b>Porto</b> para poder lhe ajudar.
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
                            A
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="Amarante" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Amarante
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
                        <a @click.prevent="Felgueiras" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Felgueiras
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
                        <a @click.prevent="Gondomar" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Gondomar
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
                            L
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="Lousada" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Lousada
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
                            M
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="Maia" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Maia
                        </a>
                        <a @click.prevent="MarcoDeCanaveses" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Marco de Canaveses
                        </a>
                        <a @click.prevent="Matosinhos" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Matosinhos
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
                            P
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="PacosDeFerreira" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Pacos de Ferreira
                        </a>
                        <a @click.prevent="Paredes" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Paredes
                        </a>
                        <a @click.prevent="Penafiel" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Penafiel
                        </a>
                        <a @click.prevent="Porto" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Porto
                        </a>
                        <a @click.prevent="PovoaDeVarzim" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Póvoa de Varzim
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
                            S
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="SantaMariaDeFeira" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Santa Maria de Feira
                        </a>
                        <a @click.prevent="SantoTirso" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Santo Tirso
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
                        <a @click.prevent="Valongo" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Valongo
                        </a>
                        <a @click.prevent="VilaDoConde" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Vila do Conde
                        </a>
                        <a @click.prevent="VilaNovaDeGaia" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Vila Nova de Gaia
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
    Amarante () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Amarante')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Felgueiras () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Felgueiras')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Gondomar () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Gondomar')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Lousada () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Lousada')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Maia () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Maia')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    MarcoDeCanaveses () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Marco-de-Canaveses')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Matosinhos () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Matosinhos')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PacosDeFerreira () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Pacos-de-Ferreira')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Paredes () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Paredes')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Porto () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Porto')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Penafiel () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Penafiel')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PovoaDeVarzim () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Povoa-de-Varzim')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SantaMariaDeFeira () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Santa-Maria-de-Feira')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SantoTirso () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Santo-Tirso')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Valongo () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Valongo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    VilaDoConde () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Vila-do-Conde')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    VilaNovaDeGaia () {
      this.$router.push('/detective-privado-em-Porto/detective-privado-em-Vila-Nova-de-Gaia')
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
    title: 'Detective Privado em Porto | Porto | Évora  | Braga | Faro | Coimbra | Aveiro',
    meta: [{ name: 'description', content: 'Somos uma agência de detectives focada em casos empresarias, contra inteligência empresarial, varredura inteligente, verificação da conduta de sócios e/ou funcionários e muito mais!' }]
  }
}
</script>
<style lang="scss" scoped>

</style>
