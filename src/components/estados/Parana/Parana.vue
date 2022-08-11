<template>
    <div>
        <div class="container">
            <h1 class="text-center fs-xs-30 px-xs-4">Detetive particular no Paraná</h1>
            <article class="col-lg-11 px-0 mx-auto fs-sm-17 text-center mt-4 fw-500">
                Precisando de <b>Detetive Particular para sua Empresa</b> no <b>Paraná?</b>
                A ABRAIP Detetives está no <b>Paraná</b> para poder lhe ajudar.
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
                <!-- Cidades A -->
                <div class="position-relative overflow-hidden mt-40 col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                    <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                        <h5 class="text-dark fw-600 mb-1">
                            A
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="Adrianopolis" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Adrianópolis - PR
                        </a>
                        <a @click.prevent="AgudosDoSul" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Agudos do Sul - PR
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="Antonina" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Antonina - PR
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="Araucaria" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Araucária - PR
                        </a>
                    </div>
                </div>
                <!-- Cidades B -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                    <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                        <h5 class="text-dark fw-600 mb-0">
                            B
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <a @click.prevent="BalsaNova" class="d-flex col-12 mt-4 px-0 py-0 mt-1 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                        <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Balsa Nova - PR
                    </a>
                    <a @click.prevent="BocaiuvaDoSul" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                        <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Bocaiuva do Sul - PR
                    </a>
                </div>
                <!-- Cidades C -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                    <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                        <h5 class="text-dark fw-600 mb-0">
                            C
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="CampoDoTenente" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Campo do Tenente – PR
                        </a>
                        <a @click.prevent="CampoLargo" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Campo Largo – PR
                        </a>
                        <a @click.prevent="Cascavel" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Cascavel – PR
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="CampinaGrandeDoSul" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Campina Grande do Sul – PR
                        </a>
                        <a @click.prevent="CampoMagro" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Campo Magro – PR
                        </a>
                        <a @click.prevent="CerroAzul" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Cerro Azul – PR
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="Contenda" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Contenda – PR
                        </a>
                        <a @click.prevent="Curitiba" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Curitiba – PR
                        </a>
                        <a @click.prevent="Colombo" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Colombo – PR
                        </a>
                    </div>
                </div>
                <!-- Cidades D -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                    <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                        <h5 class="text-dark fw-600 mb-0">
                            D
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg mt-4 px-0">
                        <a @click.prevent="DoutorUlysses" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Doutor Ulysses – PR
                        </a>
                    </div>
                </div>
                <!-- Cidades F -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                F
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="FozDoIguacu" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Foz do Iguaçu – PR
                        </a>
                        <a @click.prevent="FazendaRioGrande" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Fazenda Rio Grande – PR
                        </a>
                </div>
                <!-- Cidades G -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                G
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="Guaraquecaba" class="d-flex mt-4 col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Guaraqueçaba – PR
                        </a>
                        <a @click.prevent="Guaratuba" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Guaratuba – PR
                        </a>
                </div>
                <!-- Cidades I -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                I
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="Itaperucu" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Itaperuçu – PR
                        </a>
                </div>
                <!-- Cidades L -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                L
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="Lapa" class="d-flex mt-4 col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Lapa – PR
                        </a>
                        <a @click.prevent="Londrina" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Londrina – PR
                        </a>
                </div>
                <!-- Cidades M -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                M
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <div class="col-lg px-0 mt-4">
                            <a @click.prevent="Mandirituba" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Mandirituba – PR
                            </a>
                            <a @click.prevent="Matinhos" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Matinhos – PR
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Maringa" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Maringá – PR
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Morretes" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Morretes – PR
                            </a>
                        </div>
                </div>
                <!-- Cidades P -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                P
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <div class="col-lg px-0 mt-4">
                            <a @click.prevent="Pinhais" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Pinhais – PR
                            </a>
                            <a @click.prevent="Piraquara" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Piraquara – PR
                            </a>
                            <a @click.prevent="PontalDoParana" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Pontal do Paraná – PR
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="PontaGrossa" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Ponta Grossa – PR
                            </a>
                            <a @click.prevent="Paranagua" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Paranaguá – PR
                            </a>
                            <a @click.prevent="Piên" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Piên – PR
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="PatoBranco" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Pato Branco – PR
                            </a>
                        </div>
                </div>
                <!-- Cidades Q -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                    <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                        <h5 class="text-dark fw-600 mb-0">
                            Q
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <a @click.prevent="Quitandinha" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                        <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Quitandinha – PR
                    </a>
                    <a @click.prevent="QuatroBarras" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                        <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Quatro Barras – PR
                    </a>
                </div>
                <!-- Cidades R -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                R
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="RioBrancoDoSul" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Rio Branco do Sul – PR
                        </a>
                </div>
                <!-- Cidades S -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                S
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="SaoJoseDosPinhais" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São José dos Pinhais – PR
                        </a>
                </div>
                <!-- Cidades T -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                T
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="TijucasDoSul" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Tijucas do Sul – PR
                        </a>
                        <a @click.prevent="TunasDoParana" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Tunas do Paraná – PR
                        </a>
                        <a @click.prevent="Toledo" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Toledo – PR
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
    Adrianopolis () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Adrianopolis')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    AgudosDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Agudos-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Antonina () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Antonina')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Araucaria () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Araucaria')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BalsaNova () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Balsa-Nova')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BocaiuvaDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Bocaiuva-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CampoDoTenente () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campo-do-Tenente')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CampoLargo () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campo-Largo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Cascavel () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Cascavel')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CampinaGrandeDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campina-Grande-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CampoMagro () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campo-Magro')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CerroAzul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Cerro-Azul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Contenda () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Contenda')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Curitiba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Curitiba')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Colombo () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Colombo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    DoutorUlysses () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Doutor-Ulysses')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    FozDoIguacu () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Foz-do-Iguacu')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    FazendaRioGrande () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Fazenda-Rio-Grande')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Guaraquecaba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Guaraquecaba')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Guaratuba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Guaratuba')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Itaperucu () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Itaperucu')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Lapa () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Lapa')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Londrina () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Londrina')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Mandirituba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Mandirituba')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Matinhos () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Matinhos')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Maringa () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Maringa')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Morretes () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Morretes')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Pinhais () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pinhais')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Piraquara () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Piraquara')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PontalDoParana () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pontal-do-Parana')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PontaGrossa () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Ponta-Grossa')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Paranagua () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Paranagua')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Piên () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pien')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PatoBranco () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pato-Branco')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Quitandinha () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Quitandinha')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    QuatroBarras () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Quatro-Barras')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    RioBrancoDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Rio-Branco-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoJoseDosPinhais () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Sao-Jose-dos-Pinhais')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    TijucasDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Tijucas-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    TunasDoParana () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Tunas-do-Parana')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Toledo () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Toledo')
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
