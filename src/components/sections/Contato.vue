<template>
    <div>
        <div id="contato" class="pt-100">
            <div class="container">
                <h2 class="d-flex align-items-center">
                    <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Fale conosco
                </h2>
                <div v-show="ShowMsgSuccessFloat" class="col-12 mensagem-flutuante">
                  <div class="col-12 px-0 d-flex justify-content-center">
                    <div class="py-1 bg-success d-flex align-items-center shadow fw-500 justify-content-between text-white col-xl-6 rounded">
                      Mensagem enviada com sucesso, em breve entraremos em contacto com você.
                      <button @click.prevent="CloseMsgSuccess" class="btn pr-0 d-flex justify-content-center align-items-center pt-0 pb-0">
                        <i class="fa fa-times text-white fs-20 fw-400"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <form action="" @submit.prevent="submit" autocomplete="off" class="mt-60">
                    <div class="col-12 px-0 d-flex">
                       <div v-if="ShowMsgSuccess" class="bg-success py-1 d-inline-block rounded mb-30 shadow-sm text-white fs-15 px-3">
                          Mensagem enviada com sucesso, em breve entraremos em contacto com você.
                       </div>
                    </div>
                    <div class="d-flex row mx-auto">
                        <div class="form-group col-lg px-0">
                            <label for="nome" class="ml-2 mb-1">Nome</label>
                            <input type="text" id="nome" class="form-control" v-model="nome">
                            <div class="error text-left px-2" v-show="ShowMsgError" v-if="$v.nome.$error">
                                Este campo é obrigatório, mínimo {{$v.nome.$params.minLength.min}} letras.
                            </div>
                        </div>
                        <div class="form-group col-lg px-0 mx-lg-4">
                            <label for="email" class="ml-2 mb-1">E-mail</label>
                            <input type="email" id="email" class="form-control" v-model="email">
                            <div class="error text-left px-2" v-show="ShowMsgError" v-if="$v.email.$error">
                                Preencha com um e-mail válido
                            </div>
                        </div>
                        <div class="form-group col-lg px-0">
                            <label for="telefone" class="ml-2 mb-1">Telefone</label>
                            <input type="text" id="telefone" v-mask="mask" class="form-control" @keypress="VerificaNumero()" @keyup.backspace="VerificaNumeroDelete()" v-model="telefone">
                            <div class="error text-left px-2" v-show="ShowMsgError" v-if="$v.telefone.$error">
                                Coloque um telefone válido
                            </div>
                        </div>
                    </div>
                    <div class="d-flex row mx-auto">
                        <div class="form-group col-lg mt-lg-3 px-0">
                            <label for="cidade" class="ml-2 mb-1">Cidade</label>
                            <input type="text" id="cidade" class="form-control" v-model="cidade">
                            <div class="error text-left px-2" v-show="ShowMsgError" v-if="$v.cidade.$error">
                                Preencha com sua cidade
                            </div>
                        </div>
                        <div class="form-group col-lg mt-lg-3 px-0 mx-lg-4">
                            <label for="estado" class="ml-2 mb-1">Distrito</label>
                            <input type="text" id="estado" class="form-control" v-model="estado">
                            <div class="error text-left px-2" v-show="ShowMsgError" v-if="$v.estado.$error">
                                Preencha com seu distrito
                            </div>
                        </div>
                        <div class="form-group col-lg mt-lg-3 px-0">
                            <label for="tipo_servico" class="ml-2 mb-1">Tipo de servico</label>
                            <select id="tipo_servico" class="form-control" v-model="tipo_servico">
                                <option value="" disabled selected class="d-none">...</option>
                                <option value="Casos empresarial">Casos empresarial</option>
                                <option value="Contra inteligência">Contra inteligência</option>
                                <option value="Consultoria em segurança">Consultoria em segurança</option>
                                <option value="Provas para advogados">Provas para advogados</option>
                            </select>
                            <div class="error text-left px-2" v-show="ShowMsgError" v-if="$v.tipo_servico.$error">
                                Preencha com o tipo de serviço
                            </div>
                        </div>
                    </div>
                    <div class="d-flex row mx-auto">
                        <div class="form-group col-lg mt-lg-3 px-0">
                            <label for="horario_contato" class="ml-2 mb-1">Horário para contacto</label>
                            <input type="text" id="horario_contato" class="form-control" v-model="horario">
                            <div class="error text-left px-2" v-show="ShowMsgError" v-if="$v.horario.$error">
                                Coloque um horário para retorno
                            </div>
                        </div>
                        <div class="form-group col-lg mt-lg-3 px-0 ml-lg-4">
                            <label for="data_contato" class="ml-2 mb-1">Data para contacto</label>
                            <input type="text" id="data_contato" class="form-control" v-model="data_contato">
                            <div class="error text-left px-2" v-show="ShowMsgError" v-if="$v.data_contato.$error">
                                Coloque uma data para retorno
                            </div>
                        </div>
                    </div>
                    <div class="form-group mt-lg-3">
                        <label for="mensagem" class="ml-2 mb-1">Mensagem</label>
                        <textarea id="mensagem" class="form-control" v-model="mensagem"></textarea>
                        <div class="error text-left px-2" v-show="ShowMsgError" v-if="$v.mensagem.$error">
                            Digite uma mensagem
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="custom-control custom-radio">
                            <input type="radio" id="pessoa_fisica" v-model="tipo_pessoa" value="Pessoa física" class="custom-control-input">
                            <label class="custom-control-label" for="pessoa_fisica">Pessoa física</label>
                        </div>
                        <div class="custom-control mt-1 custom-radio">
                            <input type="radio" id="pessoa_juridica" v-model="tipo_pessoa" value="Pessoa jurídica" class="custom-control-input">
                            <label class="custom-control-label" for="pessoa_juridica">Pessoa jurídica</label>
                        </div>
                        <div class="error text-left px-2" v-show="ShowMsgError" v-if="$v.tipo_pessoa.$error">
                            Selecione o tipo de pessoa
                        </div>
                    </div>
                    <button :disabled="DisabledSubmit" type="submit" class="btn btn-info mt-2 fw-500 px-20">
                        Enviar
                    </button>
                </form>
                <h3 class="d-flex align-items-center mt-70">
                    <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Telefones
                </h3>
                <div class="d-flex px-0 row mx-auto">
                  <div class="col-sm-6 col-md-5 mt-xs-15 mt-sm-15 mt-lg-15 col-lg-auto px-0">
                    <div class="d-flex justify-content-center row mx-auto">
                      <a href="tel:+351913342032" class="btn d-flex align-items-center shadow-sm fs-17 col-xs-9 justify-content-center fw-600 btn-info border-radius-20 px-20">
                          <i class="fa fw-400 fa-phone-alt mr-2"></i> +351 913 342 032
                      </a>
                    </div>
                  </div>
                </div>
                <h3 class="d-flex align-items-center mt-70">
                    <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Email
                </h3>
                <div class="d-flex px-0 row mx-auto">
                  <div class="col-sm-6 col-md-5 mt-xs-15 mt-sm-15 mt-lg-15 col-lg-auto px-0">
                    <div class="d-flex justify-content-center row mx-auto">
                      <a href="mailto:contacto@abraipdetectives.pt" target="_blank" rel="nopenner noreferrer" class="d-flex align-items-center text-dark fs-18 no-underline">
                        <i class="fa fa-envelope fs-23 mr-2" /> contacto@abraipdetectives.pt
                      </a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { required, minLength, email } from '../../../node_modules/vuelidate/lib/validators'
import axios from '../../../node_modules/axios'
export default {
  data () {
    return {
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      estado: '',
      tipo_servico: '',
      horario: '',
      data_contato: '',
      mensagem: '',
      tipo_pessoa: '',
      ShowMsgSuccess: false,
      ShowMsgSuccessFloat: false,
      ShowMsgError: true,
      DisabledSubmit: false,
      mask: '(##) ####-####'
    }
  },
  validations: {
    nome: {
      required,
      minLength: minLength(3)
    },
    email: {
      email,
      required
    },
    telefone: {
      required,
      minLength: minLength(14)
    },
    cidade: {
      required
    },
    estado: {
      required
    },
    tipo_servico: {
      required
    },
    horario: {
      required
    },
    data_contato: {
      required
    },
    mensagem: {
      required
    },
    tipo_pessoa: {
      required
    }
  },
  methods: {
    CloseMsgSuccess () {
      this.ShowMsgSuccess = true
      this.ShowMsgSuccessFloat = false
    },
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
      } else {
        console.log('Submit!')
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
        axios.post('https://abraip.com.br/envio.php', JSON.stringify({
          nome: this.nome,
          email: this.email,
          telefone: this.telefone,
          cidade: this.cidade,
          estado: this.estado,
          tipo_servico: this.tipo_servico,
          horario: this.horario,
          data_contato: this.data_contato,
          mensagem: this.mensagem,
          tipo_pessoa: this.tipo_pessoa
        }))
          .then(
            setTimeout(() => {
              this.DisabledSubmit = true
              this.ShowMsgSuccessFloat = true
              setTimeout(() => {
                this.ShowMsgSuccess = true
                this.ShowMsgSuccessFloat = false
              }, 4000)
              this.ShowMsgError = false
              this.nome = ''
              this.email = ''
              this.telefone = ''
              this.cidade = ''
              this.estado = ''
              this.tipo_servico = ''
              this.horario = ''
              this.data_contato = ''
              this.mensagem = ''
              this.tipo_pessoa = ''
            }, 300)
          )
      }
    },
    VerificaNumero () {
      if (this.telefone.length === 14) {
        this.mask = '(##) # ####-####'
      }
      if (this.telefone.length <= 13) {
        this.mask = '(##) ####-####'
      }
    },
    VerificaNumeroDelete () {
      if (this.telefone.length === 15) {
        this.mask = '(##) ####-####'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    textarea{
        min-height: 150px;
        max-height: 150px;
    }
    input, select, textarea{
        border-color: var(--azul);
        box-shadow: 0 0.125rem 0.58rem rgba(0, 0, 0, 0.075)
    }
    .mensagem-flutuante{
      position: fixed;
      top: 150px;
      left: 0;
      z-index: 1080;
    }
    .error{
        color: #ffffff;
        font-size: 13px;
        margin-top: 10px;
        background-color: #ff4d4d;
        display: inline-block;
        border-radius: 10px;
    }
</style>
