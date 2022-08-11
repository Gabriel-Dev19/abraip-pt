<template>
    <div>
        <div class="container">
            <h1 class="text-center fs-xs-30 px-xs-4">Detetive particular em Minas Gerais</h1>
            <article class="col-lg-11 px-0 mx-auto fs-sm-17 text-center mt-4 fw-500">
                Precisando de <b>Detetive Particular para sua Empresa</b> em <b>Minas Gerais?</b>
                A ABRAIP Detetives está em <b>Minas Gerais</b> para poder lhe ajudar.
                Somos especializados em <b>casos empresarias, contra inteligência empresarial, varredura inteligente e verificação da conduta de sócios e/ou funcionários,</b> sempre executando nossos serviços de forma rápida, discreta e sigilosa, ajustados de acordo com a necessidade, exigência e orçamento de cada cliente. Não importa a complexidade do seu caso, nossos detetives estão preparados para atender sua demanda de forma <b>eficaz e profissional,</b> proporcionando assim o esclarecimento de suas dúvidas, a satisfação e a paz de espírito que você necessita e merece.
            </article>
            <div class="d-flex justify-content-center row mx-auto mt-30">
                <BtnLigueAgora class="col-xs-10" />
                <BtnFaleNoWhatsapp class="mt-xs-2 col-xs-10 ml-sm-3" />
            </div>
        </div>
        <section class="pt-80">
            <div class="container">
                <h3 class="text-uppercase fs-xs-25 fw-600 text-center text-dark">
                  Encontre um detetive na sua cidade
                </h3>
                <!-- Cidades B -->
                <div class="position-relative overflow-hidden mt-40 col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                B
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="BeloHorizonte" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Belo Horizonte – MG
                        </a>
                </div>
            </div>
        </section>
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
    BeloHorizonte () {
      this.$router.push('/detetive-particular-em-Minas-Gerais/detetive-particular-em-Belo-Horizonte')
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
