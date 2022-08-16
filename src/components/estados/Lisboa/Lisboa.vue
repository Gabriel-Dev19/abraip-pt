<template>
    <div>
        <div class="container">
            <h1 class="text-center fs-xs-30 px-xs-4">Detetive particular em Lisboa</h1>
            <article class="col-lg-11 px-0 mx-auto fs-sm-17 text-center mt-4 fw-500">
                Precisando de <b>Detetive Particular para sua Empresa</b> em <b>Lisboa?</b>
                A ABRAIP Detetives está em <b>Lisboa</b> para poder lhe ajudar.
                Somos especializados em <b>casos empresarias, contra inteligência empresarial, varredura inteligente e verificação da conduta de sócios e/ou funcionários,</b> sempre executando nossos serviços de forma rápida, discreta e sigilosa, ajustados de acordo com a necessidade, exigência e orçamento de cada cliente. Não importa a complexidade do seu caso, nossos detetives estão preparados para atender sua demanda de forma <b>eficaz e profissional,</b> proporcionando assim o esclarecimento de suas dúvidas, a satisfação e a paz de espírito que você necessita e merece.
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
                        <a @click.prevent="Alcobaca" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Alcobaça
                        </a>
                        <a @click.prevent="Alenquer" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Alenquer
                        </a>
                        <a @click.prevent="Almada" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Almada
                        </a>
                        <a @click.prevent="Amadora" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Amadora
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
                            B
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="Barreiro" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Barreiro
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
                            C
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="Cascaes" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Cascaes
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
                        <a @click.prevent="Lisboa" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Lisboa
                        </a>
                        <a @click.prevent="Loures" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Loures
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
                        <a @click.prevent="Mafra" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Mafra
                        </a>
                        <a @click.prevent="Moita" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Moita
                        </a>
                        <a @click.prevent="Montijo" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Montijo
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
                            O
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="Odivelas" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Odivelas
                        </a>
                        <a @click.prevent="Oeiras" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Oeiras
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
                        <a @click.prevent="Palmela" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Palmela
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
                        <a @click.prevent="Santarem" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Santarem
                        </a>
                        <a @click.prevent="Sesimbra" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Sesimbra
                        </a>
                        <a @click.prevent="Setubal" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Setúbal
                        </a>
                        <a @click.prevent="Sintra" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Sintra
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
                            T
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="TorresVedras" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Torres Vedras
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
                        <a @click.prevent="VilaFrancaDeXira" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Vila Franca De Xira
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
    Alcobaca () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Alcobaca')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Alenquer () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Alenquer')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Almada () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Almada')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Amadora () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Amadora')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Barreiro () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Barreiro')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Cascaes () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Cascaes')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Lisboa () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Lisboa')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Loures () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Loures')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Mafra () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Mafra')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Moita () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Moita')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Montijo () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Montijo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Odivelas () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Odivelas')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Oeiras () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Oeiras')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Palmela () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Palmela')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Santarem () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Santarem')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Sesimbra () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Sesimbra')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Setubal () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Setubal')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Sintra () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Sintra')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    TorresVedras () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Torres-Vedras')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    VilaFrancaDeXira () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Vila-Franca-de-Xira')
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
    title: 'Detetive Particular em Balneário Camboriú | Florianópolis | Joinville  | Curitiba | Tubarão | Chapecó | Porto Alegre',
    meta: [{ name: 'description', content: 'Somos uma agência de detetives focada em casos empresarias, contra inteligência empresarial, varredura inteligente, verificação da conduta de sócios e/ou funcionários e muito mais!' }]
  }
}
</script>
<style lang="scss" scoped>

</style>
