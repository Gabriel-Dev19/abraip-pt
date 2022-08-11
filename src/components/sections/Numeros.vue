<template>
    <div>
        <div id="numeros" v-scroll="ScrollNumeros" class="bg-azul mt-xs-100 mt-sm-120 py-70">
            <div class="container">
                <h3 class="fw-600 mb-0 text-center">
                    Para quem é indicado o trabalho de Detetive Particular no âmbito empresarial?
                </h3>
                <p class="fw-500 text-center fs-sm-17 mt-15">
                  Este tipo de trabalho é indicado para quando há suspeitas de desvios
                  tanto materiais quanto de informações realizados por funcionários de uma empresa.
                  Esse tipo de trabalho é direcionado
                  desde pequenos comércios até grandes corporações. E isso vale tanto para objetos,
                  desvio de dinheiro e até roubo de idéias.
                </p>
                <h3 class="fw-600 text-center mb-0 mt-50">
                    Como funciona?
                </h3>
                <p class="fw-500 text-center fs-sm-17 mt-15">
                  A ABRAIP Detetives realiza este trabalho através de monitorias na comunicação
                  interna e colocação de um membro da nossa de detetives particulares dentro da empresa ser
                  favorecida. Para se protegerem dessas pessoas que tentam burlar as regras e descobrir segredos,
                  as empresas contratam os serviços de contra espionagem dos detetives particulares.
                </p>
                <h3 class="fw-600 text-center mb-0 mt-50">
                    Quais as principais técnicas utilizadas neste tipo trabalho?
                </h3>
                <div class="d-flex mt-60 justify-content-xs-center justify-content-sm-center  justify-content-lg-around row mx-auto">
                  <div class="col-sm-7 col-md-6 col-lg-5 col-xl">
                    <div class="d-flex justify-content-center">
                      <i class="fas fs-50 fw-400 fa-broadcast-tower"></i>
                    </div>
                    <h6 class="mt-3 text-center fw-600">
                      Cuidar da comunicação interna e externa da empresa
                    </h6>
                  </div>
                  <div class="col-sm-7 col-md-6 col-lg-5 mt-xs-45 mt-sm-45 mt-md-0 col-xl">
                    <div class="d-flex justify-content-center">
                      <i class="fas fs-50 fa-people-carry"></i>
                    </div>
                    <h6 class="mt-3 text-center fw-600">
                      Colocação de um profissional (Detetive Particular) dentro da empresa
                    </h6>
                  </div>
                  <div class="col-sm-7 col-md-6 col-lg-5 mt-xs-45 mt-sm-45 mt-xl-0 col-xl">
                    <div class="d-flex justify-content-center">
                      <i class="fas fs-50 fw-400 fa-photo-video"></i>
                    </div>
                    <h6 class="mt-3 text-center fw-600">
                      Registro de fotos, áudios e vídeos
                    </h6>
                  </div>
                  <div class="col-sm-7 col-md-6 col-lg-5 mt-xs-45 mt-sm-45 mt-xl-0 col-xl">
                    <div class="d-flex justify-content-center">
                      <i class="fas fs-50 fw-400 fa-file-archive"></i>
                    </div>
                    <h6 class="mt-3 text-center fw-600">
                      Envio de relatórios elaborados com as provas coletadas
                    </h6>
                  </div>
                </div>
                <div class="d-flex mt-80 justify-content-center row mx-auto">
                    <div class="col-lg-10 col-xl">
                        <h1 class="text-center fs-sm-47 mb-1 fw-700">
                            {{Numeros.Empresas}}
                        </h1>
                        <h4 class="text-center px-lg-30 fw-600">
                            Empresas atendidas
                        </h4>
                        <p class="mb-0 text-center fw-600 fs-15 mt-10">
                            Com mais de 25 anos de atuação na área, a
                            ABRAIP Detetives já atendeu
                            os mais variados clientes das mais variadas áreas de atuação.
                        </p>
                    </div>
                    <div class="col-lg-10 col-xl my-xs-50 my-sm-50 my-xl-0 mx-xl-20">
                        <h1 class="text-center mb-1 fs-sm-47 fw-700">
                            {{Numeros.Suspeitas}}
                        </h1>
                        <h4 class="text-center fw-600">
                            Suspeitas confirmadas
                        </h4>
                        <p class="mb-0 text-center fw-600 fs-15 mt-10">
                            Com nossa dedicação e esforço tivemos ao longo dessa jornada
                            aproximadamente 94% de confirmação das suspeitas dos clientes sobre algum
                            tipo de irregularidade na empresa.
                        </p>
                    </div>
                    <div class="col-lg-10 col-xl">
                        <h1 class="text-center fs-sm-47 mb-1 fw-700">
                            {{Numeros.Aprovacao}}<span class="fw-800 fs-sm-43">%</span>
                        </h1>
                        <h4 class="text-center fw-600">
                            Aprovação dos clientes
                        </h4>
                        <p class="mb-0 text-center fw-600 fs-15 mt-10">
                            Graças ao nosso empenho em resolver os problemas de nossos clientes
                            tivemos ao longo de todos esses anos {{Numeros.Aprovacao}}% de aprovação e satisfação de nossos contratantes.
                        </p>
                    </div>
                </div>
                <p class="text-center mt-xs-60 mt-sm-70 mt-xl-50 col-sm-10 px-0 mx-auto fw-600 fs-18">
                    Nosso compromisso para com sua nessessidade é absoluto, e estamos dispostos a
                    fazer o que for nessessário para que possamos solucionar seu problema, por isso
                    pode confiar na ABRAIP Detetives para estar do seu lado
                    nesse momento.
                </p>
                <div class="d-flex justify-content-center row mx-auto mt-40">
                    <BtnLigueAgora class="col-xs-10" />
                    <BtnFaleNoWhatsapp class="mt-xs-2 col-xs-10 ml-sm-3" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BtnLigueAgora from '../buttons/btn-outline-ligue-agora'
import BtnFaleNoWhatsapp from '../buttons/btn-outline-fale-no-whatsapp'
export default {
  components: {
    BtnLigueAgora,
    BtnFaleNoWhatsapp
  },
  data () {
    return {
      Numeros: {
        Empresas: 0,
        Suspeitas: 0,
        Aprovacao: 0
      }
    }
  },
  methods: {
    AdicionaNumeroEmpresas () {
      this.Numeros.Empresas = this.Numeros.Empresas + 1
    },
    AdicionaNumeroSuspeitas () {
      this.Numeros.Suspeitas = this.Numeros.Suspeitas + 1
    },
    AdicionaNumeroAprovacao () {
      this.Numeros.Aprovacao = this.Numeros.Aprovacao + 1
    },
    ScrollNumeros: function () {
      var Janela = document.body.getBoundingClientRect()
      var Numeros = document.getElementById('numeros').getBoundingClientRect()
      var OffsetNumeros = Numeros.top - Janela.top

      if (window.scrollY > OffsetNumeros + 100) {
        setInterval(() => {
          if (this.Numeros.Empresas < 528) {
            this.AdicionaNumeroEmpresas()
          }
          if (this.Numeros.Suspeitas < 497) {
            this.AdicionaNumeroSuspeitas()
          }
          if (this.Numeros.Aprovacao < 100) {
            this.AdicionaNumeroAprovacao()
          }
        }, 30)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    h1{
        letter-spacing: 1px;
    }
</style>
