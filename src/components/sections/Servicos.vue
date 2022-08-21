<template>
    <div>
        <div id="servicos" class="pt-100 overflow-hidden container">
            <h2 class="d-flex mb-0 align-items-center">
                <i class="fa fa-minus mr-3 fw-400 text-azul"></i> {{ TituloServicos }}
            </h2>
            <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight">
              <div v-show="ShowTodosServicos">
                  <div class="d-flex justify-content-between align-items-center mt-xs-45 mt-sm-60 row mx-auto">
                      <div class="col-lg-6 height-mae-img-servicos position-relative pr-xl-40 px-0">
                          <div class="img-servicos-esquerda img-investigacao-empresarial shadow"></div>
                          <div class="borda-azul-servicos-esquerda border shadow"></div>
                      </div>
                      <div class="col-lg-5 mt-xs-50 mt-sm-50 mt-lg-0 px-0">
                          <h4 class="d-flex mb-0 mr-xs-3 fs-xs-21 fw-600 mr-sm-3 mr-lg-0 justify-content-xs-center justify-content-sm-center justify-content-lg-start align-items-center">
                              <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Casos empresariais
                          </h4>
                          <p class="mb-0 fw-500 mt-xs-15 text-xs-center text-sm-center text-lg-left mt-sm-15">
                              No que se diz respeito a empresas, nosso trabalho abrange um extenso conteúdo
                              de métodos e procedimentos modernos e eficientes, entre eles está  sistema
                              de <b>varredura inteligente, desvio de conduta de sócios e funcionários,
                              entre outros.</b> Clique no botão abaixo e saiba mais.
                          </p>
                          <div class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start">
                              <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -40}" @click.prevent="InvestigacaoEmpresarial" class="btn btn-info d-lg-none px-25 mt-20 border-radius-20 fw-500">
                                  Casos empresariais
                              </a>
                              <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -70}" @click.prevent="InvestigacaoEmpresarial" class="btn btn-info d-xs-none d-sm-none d-lg-block px-25 mt-20 border-radius-20 fw-500">
                                  Casos empresariais
                              </a>
                          </div>
                      </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-xs-80 mt-sm-130 row mx-auto">
                      <div class="col-lg-5 order-xs-2 order-sm-2 order-lg-1 mt-xs-50 mt-sm-50 mt-lg-0 px-0">
                          <h4 class="d-flex mb-0 mr-xs-3 fs-xs-21 fw-600 mr-sm-3 mr-lg-0 justify-content-xs-center justify-content-sm-center justify-content-lg-start align-items-center">
                              <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Contra inteligência
                          </h4>
                          <p class="mb-0 fw-500 mt-xs-15 text-xs-center text-sm-center text-lg-left mt-sm-15">
                              O objetivo da <b>contra inteligência</b> é impedir que sua empresa seja alvo
                              de <b>seus concorrentes empresarial / industrial que queiram de alguma forma copiar o segredo do
                              seu sucesso,</b> ficamos a frente de quem quer que esteja
                              com tais planos, sempre previnindo que seu patrimônio sofra danos.
                          </p>
                          <div class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start">
                              <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -40}" @click.prevent="ContraInteligencia" class="btn btn-info d-lg-none px-25 mt-20 border-radius-20 fw-500">
                                  Contra inteligência
                              </a>
                              <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -70}" @click.prevent="ContraInteligencia" class="btn btn-info d-xs-none d-sm-none d-lg-block px-25 mt-20 border-radius-20 fw-500">
                                  Contra inteligência
                              </a>
                          </div>
                      </div>
                      <div class="col-lg-6 order-xs-1 order-sm-1 order-lg-2 height-mae-img-servicos position-relative pr-xl-40 px-0">
                          <div class="img-servicos-direita img-contra-inteligencia shadow"></div>
                          <div class="borda-azul-servicos-direita border shadow"></div>
                      </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-xs-80 mt-sm-130 row mx-auto">
                      <div class="col-lg-6 height-mae-img-servicos position-relative pr-xl-40 px-0">
                          <div class="img-servicos-esquerda img-consultoria-em-seguranca shadow"></div>
                          <div class="borda-azul-servicos-esquerda border shadow"></div>
                      </div>
                      <div class="col-lg-5 mt-xs-50 mt-sm-50 mt-lg-0 px-0">
                          <h4 class="d-flex mb-0 fs-xs-21 fw-600 mr-sm-3 mr-lg-0 justify-content-xs-center justify-content-sm-center justify-content-lg-start align-items-center">
                              <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Consultoria em segurança
                          </h4>
                          <p class="mb-0 fw-500 mt-xs-15 text-xs-center text-sm-center text-lg-left mt-sm-15">
                              A <b>consultoria em segurança</b> também é uma forma de prevenção contra a espionagem.
                              Nela nós fornecemos <b>informações valiosas</b> para que você possa ficar de olhos abertos
                              com tudo que acontece dentro da sua empresa.
                          </p>
                          <div class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start">
                              <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -40}" @click.prevent="Consultoria" class="btn btn-info d-lg-none px-25 mt-20 border-radius-20 fw-500">
                                  Consultoria em segurança
                              </a>
                              <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -70}" @click.prevent="Consultoria" class="btn btn-info d-xs-none d-sm-none d-lg-block px-25 mt-20 border-radius-20 fw-500">
                                  Consultoria em segurança
                              </a>
                          </div>
                      </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-xs-80 mt-sm-130 row mx-auto">
                      <div class="col-lg-5 order-xs-2 order-sm-2 order-lg-1 mt-xs-50 mt-sm-50 mt-lg-0 px-0">
                          <h4 class="d-flex mb-0 mr-xs-3 fs-xs-21 fw-600 mr-sm-3 mr-lg-0 justify-content-xs-center justify-content-sm-center justify-content-lg-start align-items-center">
                              <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Provas para advogados
                          </h4>
                          <p class="mb-0 fw-500 mt-xs-15 text-xs-center text-sm-center text-lg-left mt-sm-15">
                              O trabalho da ABRAIP Detectives é tornar a verdade visível,
                              <b>auxiliando os advogados na coleta de informações</b> como
                              <b>localização patrimônio, caracterização a ocultação de bens,
                              identificação fraudes e auxiliar com provas a justiça em ações
                              trabalhistas</b> por exemplo. Todo nosso esforço se dá em prol
                              da obtenção de provas juridicamente aceitas e lícitas.
                          </p>
                          <div class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start">
                              <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -40}" @click.prevent="Varredura" class="btn btn-info d-lg-none px-25 mt-20 border-radius-20 fw-500">
                                  Provas para advogados
                              </a>
                              <a href="#servicos" v-smooth-scroll="{duration: 500, offset: -70}" @click.prevent="Varredura" class="btn btn-info d-xs-none d-sm-none d-lg-block px-25 mt-20 border-radius-20 fw-500">
                                  Provas para advogados
                              </a>
                          </div>
                      </div>
                      <div class="col-lg-6 order-xs-1 order-sm-1 order-lg-2 height-mae-img-servicos position-relative pr-xl-40 px-0">
                          <div class="img-servicos-direita img-provas-para-advogados shadow"></div>
                          <div class="borda-azul-servicos-direita border shadow"></div>
                      </div>
                  </div>
              </div>
            </transition>
            <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight">
              <div v-show="ShowInvestigacaoEmpresarial">
                  <div class="d-flex justify-content-between align-items-center mt-xs-45 mt-sm-60 row mx-auto">
                        <div class="col-lg-6 height-mae-img-servicos position-relative pr-xl-40 px-0">
                            <div class="img-servicos-esquerda img-investigacao-empresarial shadow"></div>
                            <div class="borda-azul-servicos-esquerda border shadow"></div>
                        </div>
                        <div class="col-lg-5 mt-xs-50 mt-sm-50 mt-lg-0 px-0">
                            <h4 class="d-flex mb-0 mr-xs-3 fs-xs-21 fw-600 mr-sm-3 mr-lg-0 justify-content-xs-center justify-content-sm-center justify-content-lg-start align-items-center">
                                <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Casos empresariais
                            </h4>
                            <p class="mb-0 fw-500 mt-xs-15 text-xs-center text-sm-center text-lg-left mt-sm-15">
                                No que se diz respeito a empresas, nosso trabalho abrange um extenso conteúdo
                                de métodos e procedimentos modernos e eficientes, entre eles está sistema:<b>
                                desvio de conduta de sócios e funcionários,
                                entre outros.</b> Clique no botão abaixo e saiba mais.
                            </p>
                            <div class="d-flex mt-4 row mx-auto justify-content-xs-center justify-content-sm-center justify-content-lg-start">
                                <BtnAzulLigacao class="col-xs-10"/>
                                <BtnAzulWhatsapp class="col-xs-10 ml-sm-3 ml-lg-0 mt-xs-2 mt-lg-10 mt-xl-0 ml-xl-15"/>
                            </div>
                        </div>
                  </div>
                  <div class="mt-70">
                      <h4 class="d-flex mb-0 mr-xs-3 fs-xs-21 fw-500 mr-sm-3 mr-lg-0 justify-content-xs-center justify-content-sm-center justify-content-lg-start align-items-center">
                        <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Mais informações
                      </h4>
                      <p class="fs-sm-17 text-xs-center text-sm-center text-lg-left fw-500 mt-4">
                        Se você chegou até aqui é porque você tem algo muito importante para zelar. Sua EMPRESA.
                        Hoje no Brasil 70% das empresas brasileiras sofrem algum tipo de dano material causado
                        por funcionários e/ou sócios.
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center text-lg-left fw-500">
                        Mais de 60% dos casos vem de funcionários ou ex-funcionários. Sendo assim,
                        você está certo em ir atrás de informações concretas em relação as suas suspeitas.
                        Diante de possíveis atitudes desonestas, antes das emoções tomarem conta, é preciso
                        uma decisão assertiva: contratar detectives experientes, ao ponto de sanar todas as
                        suas dúvidas. Afinal, em casos como esses, todo e qualquer dano deve ser evitado,
                        acima de tudo os que podem alcançar clientes e parceiros
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center text-lg-left fw-500">
                        O trabalho do Detective Privado para casos empresariais é direcionado desde pequenos
                        comércios até grandes corporações. E isso vale para objetos,
                        roubo de ideias, desvio de conduta de sócios e funcionários, entre outros. Sim, é
                        possível ter acesso a esse tipo de comportamento. Conhecido como espionagem industrial,
                        esse tipo de serviço é mais do comum do que se imagina.
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center text-lg-left fw-500">
                        Alegar doença e até mesmo utilizar atestado médico para comprovar uma algo que não existe, também
                        está entre os motivos pelos quais empresários contratam detectives particulares para zelar por seu negócio.
                      </p>
                      <h5 class="fw-600 text-xs-center text-sm-center mt-4 text-lg-left fw-500">
                        Atuamos dentro do mais absoluto sigilo para proteger sua empresa contra:
                      </h5>
                      <h5 class="d-flex pl-xs-20 pl-sm-20 pl-lg-0 align-items-center mt-10">
                        <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Funcionários desleais
                      </h5>
                      <h5 class="d-flex pl-xs-20 pl-sm-20 pl-lg-0 align-items-center mt-10">
                        <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Vazamento de informação
                      </h5>
                      <h5 class="d-flex pl-xs-20 pl-sm-20 pl-lg-0 align-items-center mt-10">
                        <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Prejuízos em geral
                      </h5>
                      <p class="fs-sm-17 text-xs-center text-sm-center text-lg-left mt-4 fw-500">
                        Por isso mesmo, temos de ser taxativos: se você precisa mesmo contratar
                        um serviço de um detective privado para cuidar de sua empresa, você precisa,
                        antes de qualquer coisa, de uma empresa séria, que proporcionará a você
                        serviço com ética e qualidade profissional.
                      </p>
                  </div>
              </div>
            </transition>
            <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight">
              <div v-show="ShowContraInteligencia">
                <div class="d-flex justify-content-between align-items-center mt-xs-45 mt-sm-60 row mx-auto">
                    <div class="col-lg-6 height-mae-img-servicos position-relative pr-xl-40 px-0">
                        <div class="img-servicos-esquerda img-contra-inteligencia shadow"></div>
                        <div class="borda-azul-servicos-esquerda border shadow"></div>
                    </div>
                    <div class="col-lg-5 mt-xs-50 mt-sm-50 mt-lg-0 px-0">
                        <h4 class="d-flex mb-0 mr-xs-3 fs-xs-21 fw-600 mr-sm-3 mr-lg-0 justify-content-xs-center justify-content-sm-center justify-content-lg-start align-items-center">
                            <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Contra inteligência
                        </h4>
                        <p class="mb-0 fw-500 mt-xs-15 text-xs-center text-sm-center text-lg-left mt-sm-15">
                          O objetivo da <b>contra inteligência</b> é impedir que sua empresa seja alvo
                          de <b>seus concorrentes empresarial / industrial que queiram de alguma forma copiar
                            o segredo do seu sucesso,</b> ficamos a frente de quem quer que esteja
                          com tais planos, sempre previnindo que seu patrimônio sofra danos.
                        </p>
                        <div class="d-flex mt-4 row mx-auto justify-content-xs-center justify-content-sm-center justify-content-lg-start">
                            <BtnAzulLigacao class="col-xs-10"/>
                            <BtnAzulWhatsapp class="col-xs-10 ml-sm-3 ml-lg-0 mt-xs-2 mt-lg-10 mt-xl-0 ml-xl-15"/>
                        </div>
                    </div>
                </div>
                <div class="mt-70">
                      <h4 class="d-flex mb-0 mr-xs-3 fs-xs-21 fw-500 mr-sm-3 mr-lg-0 justify-content-xs-center justify-content-sm-center justify-content-lg-start align-items-center">
                        <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Mais informações
                      </h4>
                      <p class="fs-sm-17 text-xs-center text-sm-center text-lg-left fw-500 mt-4">
                        Nos últimos anos, o combate às fraudes passou a receber maior atenção das empresas,
                        pois tanto os órgãos reguladores quanto os “possíveis” novos investidores exigem das
                        organizações transparência e melhoraria no resultado operacional, desta forma fizeram
                        com que o combate às fraudes ganhasse uma importância extremamente significativa
                        na gestão das companhias.
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center text-lg-left fw-500">
                        A ABRAIP Detectives é considerada uma referência em inteligência e contra inteligência
                        empresarial, pois utiliza o que há de mais avançado em tecnologia na detecção de fraudes.
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center text-lg-left fw-500">
                        Nossos métodos são embasados em critérios éticos que garantem aos nossos clientes
                        respostas precisas e eficazes.
                      </p>
                  </div>
              </div>
            </transition>
            <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight">
              <div v-show="ShowConsultoria">
                <div class="d-flex justify-content-between align-items-center mt-xs-45 mt-sm-60 row mx-auto">
                    <div class="col-lg-6 height-mae-img-servicos position-relative pr-xl-40 px-0">
                        <div class="img-servicos-esquerda img-consultoria-em-seguranca shadow"></div>
                        <div class="borda-azul-servicos-esquerda border shadow"></div>
                    </div>
                    <div class="col-lg-5 mt-xs-50 mt-sm-50 mt-lg-0 px-0">
                        <h4 class="d-flex mb-0 mr-xs-3 fs-xs-21 fw-600 mr-sm-3 mr-lg-0 justify-content-xs-center justify-content-sm-center justify-content-lg-start align-items-center">
                            <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Consultoria em segurança
                        </h4>
                        <p class="mb-0 fw-500 mt-xs-15 text-xs-center text-sm-center text-lg-left mt-sm-15">
                            A <b>consultoria em segurança</b> também é uma forma de prevenção contra a espionagem.
                            Nela nós fornecemos <b>informações valiosas</b> para que você possa ficar de olhos abertos
                            com tudo que acontece dentro da sua empresa.
                        </p>
                        <div class="d-flex mt-4 row mx-auto justify-content-xs-center justify-content-sm-center justify-content-lg-start">
                            <BtnAzulLigacao class="col-xs-10"/>
                            <BtnAzulWhatsapp class="col-xs-10 ml-sm-3 ml-lg-0 mt-xs-2 mt-lg-10 mt-xl-0 ml-xl-15"/>
                        </div>
                    </div>
                </div>
                <div class="mt-70">
                      <h4 class="d-flex mb-0 mr-xs-3 fs-xs-21 fw-500 mr-sm-3 mr-lg-0 justify-content-xs-center justify-content-sm-center justify-content-lg-start align-items-center">
                        <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Mais informações
                      </h4>
                      <p class="fs-sm-17 text-xs-center text-sm-center text-lg-left fw-500 mt-4">
                        Nossa consultoria em segurança, vai além de dar simples dicas de como você deve proteger
                        sua empresa contra possíveis danos causados por terceiros. Nós fazemos uma inspeção
                        detalhada da sua empresa e focamos nos pontos em que ela precisa ser melhorada.
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center text-lg-left fw-500">
                        A ABRAIP Detectives tem a experiência e a vivência com casos empresariais a mais de 25
                        anos, isso nos capacita a fazer uma inspeção detalhada da sua empresa e pontuar com clareza
                        aonde ela precisa melhorar e de que formas você pode fazer isso.
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center text-lg-left fw-500">
                        Ao fazermos a inspeção da sua empresa, usamos de total descrição e sigilo, adotamos
                        vários métodos de disfarces para que possamos participar do ambiente empresarial
                        sem que sejamos percebidos.
                      </p>
                  </div>
              </div>
            </transition>
            <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight">
              <div v-show="ShowVarredura">
                <div class="d-flex justify-content-between align-items-center mt-xs-45 mt-sm-60 row mx-auto">
                    <div class="col-lg-6 height-mae-img-servicos position-relative pr-xl-40 px-0">
                        <div class="img-servicos-esquerda img-provas-para-advogados shadow"></div>
                        <div class="borda-azul-servicos-esquerda border shadow"></div>
                    </div>
                    <div class="col-lg-5 mt-xs-50 mt-sm-50 mt-lg-0 px-0">
                        <h4 class="d-flex mb-0 mr-xs-3 fs-xs-21 fw-600 mr-sm-3 mr-lg-0 justify-content-xs-center justify-content-sm-center justify-content-lg-start align-items-center">
                            <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Provas para advogados
                        </h4>
                        <p class="mb-0 fw-500 mt-xs-15 text-xs-center text-sm-center text-lg-left mt-sm-15">
                            O trabalho da ABRAIP Detectives é tornar a verdade visível,
                            <b>auxiliando os advogados na coleta de informações</b> como
                            <b>localização de patrimônio, caracterização a ocultação de bens,
                            identificação fraudes e auxiliar com provas a justiça em ações
                            trabalhistas</b> por exemplo. Todo nosso esforço se dá em prol
                              da obtenção de provas juridicamente aceitas e lícitas.
                        </p>
                        <div class="d-flex mt-4 row mx-auto justify-content-xs-center justify-content-sm-center justify-content-lg-start">
                            <BtnAzulLigacao class="col-xs-10"/>
                            <BtnAzulWhatsapp class="col-xs-10 ml-sm-3 ml-lg-0 mt-xs-2 mt-lg-10 mt-xl-0 ml-xl-15"/>
                        </div>
                    </div>
                </div>
                <div class="mt-70">
                      <h4 class="d-flex mb-0 mr-xs-3 fs-xs-21 fw-500 mr-sm-3 mr-lg-0 justify-content-xs-center justify-content-sm-center justify-content-lg-start align-items-center">
                        <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Mais informações
                      </h4>
                      <p class="fs-sm-17 text-xs-center text-sm-center text-lg-left fw-500 mt-4">
                        Os Detectives são contratados também por procuradores que precisam
                        de auxílio para reunir provas na atuação em defesas de seus clientes,
                        pois para dar entrada em uma ação judicial é de grande importância
                        que seus clientes tenham provas concretas em mãos e para se ter êxito
                        em suas ações, essas provas depende dos serviços de um Detective Particular.
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center text-lg-left fw-500">
                        Sendo assim, listamos abaixo exemplos de situações em que podemos
                        trabalhar em conjunto com profissionais do Direito:
                      </p>
                      <h4 class="d-flex mb-0 mr-xs-3 fs-xs-21 mt-50 fw-500 mr-sm-3 mr-lg-0 justify-content-xs-center justify-content-sm-center justify-content-lg-start align-items-center">
                        <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Área trabalhista / Família
                      </h4>
                      <p class="fs-sm-17 text-xs-center text-sm-center mt-4 mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Comprovação de Capacidade Laborativa, Física e Psíquica de empregados
                        e ex-empregados, para fins de suspensão de indenização, aposentadoria e pensão;
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Comprovação de Duplicidade Empregatícia;
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Comprovação de real situação financeira/padrão de vida, para fins de separação,
                        divórcios, pensão alimentícia e herança;
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Levantamento de Bens Móveis e Imóveis (inclusive os não registrados junto a Cartórios),
                        para fins de separação, divórcio, herança;
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Levantamento de Informações Cartoriais: Bens, Certidões de Nascimento,
                        Casamento, Óbito, entre outras;
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Levantamento de situação criminal, bons antecedentes, etc.;
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Localização e Confirmação de moradas para entrega de citações.
                      </p>
                      <h4 class="d-flex mb-0 mr-xs-3 fs-xs-21 mt-50 fw-500 mr-sm-3 mr-lg-0 justify-content-xs-center justify-content-sm-center justify-content-lg-start align-items-center">
                        <i class="fa fa-minus mr-3 fw-400 text-azul"></i> Área empresarial
                      </h4>
                      <p class="fs-sm-17 text-xs-center text-sm-center mt-4 mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Desvios internos ( valores, matérias-primas e equipamentos);
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Desvio de combustíveis, equipamentos, máquinas e animais – em trânsito;
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Desvio de Conduta de Colaboradores, com prejuízo às atividades laborais
                        ( ex.: relacionamento amoroso entre funcionários);
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                         Concorrência desleal;
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Comprovação de Quebra de Contrato de Franqueados ou de Representação Comercial com exclusividade;
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Desvio de Conduta de Fornecedores e Terceirizados;
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Venda/repasse de Informações, documentos, softwares e dados corporativos;
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Desacordos comerciais e societários;
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Contraespionagem;
                      </p>
                      <p class="fs-sm-17 text-xs-center text-sm-center mb-2 text-lg-left fw-500">
                        <i class="fa fa-minus mr-1 fw-400 text-azul"></i>
                        Assessoria completa com juntada de documentos e materiais comprobatórios para causas jurídicas.
                      </p>
                  </div>
              </div>
            </transition>
        </div>
    </div>
</template>
<script>
import BtnAzulLigacao from '../buttons/btn-azul-ligue-agora'
import BtnAzulWhatsapp from '../buttons/btn-azul-fale-no-whatsapp'
export default {
  components: {
    BtnAzulLigacao,
    BtnAzulWhatsapp
  },
  data () {
    return {
      TituloServicos: 'Serviços',
      ShowInvestigacaoEmpresarial: false,
      ShowContraInteligencia: false,
      ShowConsultoria: false,
      ShowVarredura: false,
      ShowTodosServicos: true
    }
  },
  created () {
    this.$root.$on('MudancaInvestigacaoEmpresarial', () => {
      this.TituloServicos = 'Casos empresariais'
      setTimeout(() => {
        this.ShowInvestigacaoEmpresarial = true
      }, 500)
      this.ShowContraInteligencia = false
      this.ShowConsultoria = false
      this.ShowVarredura = false
      this.ShowTodosServicos = false
    })
    this.$root.$on('MudancaContraInteligencia', () => {
      this.TituloServicos = 'Contra Inteligência'
      this.ShowInvestigacaoEmpresarial = false
      setTimeout(() => {
        this.ShowContraInteligencia = true
      }, 500)
      this.ShowConsultoria = false
      this.ShowVarredura = false
      this.ShowTodosServicos = false
    })
    this.$root.$on('MudancaConsultoriaEmSeguranca', () => {
      this.TituloServicos = 'Consultoria em Segurança'
      this.ShowInvestigacaoEmpresarial = false
      this.ShowContraInteligencia = false
      setTimeout(() => {
        this.ShowConsultoria = true
      }, 500)
      this.ShowVarredura = false
      this.ShowTodosServicos = false
    })
    this.$root.$on('MudancaVarreduraDeEscutas', () => {
      this.TituloServicos = 'Provas para advogados'
      this.ShowInvestigacaoEmpresarial = false
      this.ShowContraInteligencia = false
      this.ShowConsultoria = false
      setTimeout(() => {
        this.ShowVarredura = true
      }, 500)
      this.ShowTodosServicos = false
    })
    this.$root.$on('MudancaServico', () => {
      this.TituloServicos = 'Serviços'
      this.ShowInvestigacaoEmpresarial = false
      this.ShowContraInteligencia = false
      this.ShowConsultoria = false
      this.ShowVarredura = false
      setTimeout(() => {
        this.ShowTodosServicos = true
      }, 500)
    })
  },
  methods: {
    InvestigacaoEmpresarial () {
      this.$root.$emit('MudancaInvestigacaoEmpresarial')
    },
    ContraInteligencia () {
      this.$root.$emit('MudancaContraInteligencia')
    },
    Consultoria () {
      this.$root.$emit('MudancaConsultoriaEmSeguranca')
    },
    Varredura () {
      this.$root.$emit('MudancaVarreduraDeEscutas')
    },
    Servicos () {
      this.$root.$emit('MudancaServico')
    }
  }
}
</script>
<style lang="scss" scoped>
  @media (min-width: 1px) {
    .height-mae-img-servicos{
      height: 250px;
    }
  }
  @media (min-width: 576px) {
    .height-mae-img-servicos{
      height: 350px;
    }
  }
  .fa-instagram, .fa-camera{
    margin-right: 1px;
  }
  .circulo-caracteristicas-celular-espiao{
    border: 2px solid var(--azul);
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .animate__animated{
    animation-duration: 0.5s !important;
    -o-animation-duration: 0.5s !important;
    -moz-animation-duration: 0.5s !important;
    -webkit-animation-duration: 0.5s !important;
  }
  .borda-azul-servicos-esquerda{
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--azul);
    width: 96%;
    height: 96%;
    z-index: 2;
  }
  .img-servicos-esquerda{
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--azul);
    width: 96%;
    height: 96%;
    z-index: 3;
  }
  .borda-azul-servicos-direita{
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--azul);
    width: 96%;
    height: 96%;
    z-index: 2;
  }
  .img-servicos-direita{
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--azul);
    width: 96%;
    height: 96%;
    z-index: 3;
  }
  #servicos .img-fluid{
    max-height: 100% !important;
    min-height: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }
  .img-investigacao-empresarial{
    background: url(../../assets/img/investigacao-empresarial-servicos.jpg) center center no-repeat;
    background-size: cover;
  }
  .img-contra-inteligencia{
    background: url(../../assets/img/contra-inteligencia.jpg) center center no-repeat;
    background-size: cover;
  }
  .img-consultoria-em-seguranca{
    background: url(../../assets/img/consultoria-em-seguranca.jpg) center center no-repeat;
    background-size: cover;
  }
  .img-provas-para-advogados{
    background: url(../../assets/img/provas-para-advogados.webp) center center no-repeat;
    background-size: cover;
  }
</style>
