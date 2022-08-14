<template>
    <div>
        <div class="container">
            <h1 class="text-center fs-xs-30 px-xs-4">Sobre nosso trabalho</h1>
            <article class="col-lg-11 px-0 mx-auto fs-sm-17 text-center mt-4 fw-500">
                Para se obter conhecimento, ou seja, <b>informação privilegiada</b>, que é o
                interesse maior na <b>competição comercial</b>, utiliza-se dos mais variados meios,
                muitas vezes <b>agindo de má fé</b>, e é nesse campo que se dissemina e prolifera
                a <b>grande concorrência econômica / industrial.</b>
                Visando a necessidade de profissionais privados nesta área a <b>ABRAIP Detetives
                – Academia Brasileira de Inteligência Privada</b>, foi desenvolvida e estruturada a partir da especialização
                de profissionais da área de <b>Inteligência empresarial</b>, tornou-se uma referência para empresas
                e segmentos da sociedade em geral, que buscam uma forma de anular a ação de grupos
                especializados. Nossa estrutura nos dá condições de implementar operações
                de <b>Inteligência e Contra Inteligência</b> em qualquer setor.
                A ABRAIP Detetives nasceu para apresentar uma solução aos problemas
                de seus clientes, por meio de <b>provas reais que comprovem ou não as suspeitas</b>,
                trabalhando no mais absoluto sigilo e ética profissional.
            </article>
            <div class="d-flex justify-content-center row mx-auto mt-30">
                <BtnLigueAgora class="col-xs-10" />
                <BtnFaleNoWhatsapp class="mt-xs-2 col-xs-10 ml-sm-3" />
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
  metaInfo: {
    link: [
      { rel: 'alternate', href: 'https://abraip.com.br', hreflang: 'x-default' },
      { rel: 'alternate', href: 'https://abraipdetectives.pt', hreflang: 'pt-br' },
      { rel: 'alternate', href: 'https://abraip.com.br', hreflang: 'pt' }
    ]
  }
}
</script>
<style lang="scss" scoped>

</style>
