<template>
    <div>
        <div class="container">
            <h1 class="text-center fs-xs-30 px-xs-4">Detetive particular em Santa Catarina</h1>
            <article class="col-lg-11 px-0 mx-auto fs-sm-17 text-center mt-4 fw-500">
                Precisando de <b>Detetive Particular para sua Empresa</b> em <b>Santa Catarina?</b>
                A ABRAIP Detetives está em <b>Santa Catarina</b> para poder lhe ajudar.
                Somos especializados em <b>casos empresarias, contra inteligência empresarial, varredura inteligente e verificação da conduta de sócios e/ou funcionários,</b> sempre executando nossos serviços de forma rápida, discreta e sigilosa, ajustados de acordo com a necessidade, exigência e orçamento de cada cliente. Não importa a complexidade do seu caso, nossos detetives estão preparados para atender sua demanda de forma <b>eficaz e profissional,</b> proporcionando assim o esclarecimento de suas dúvidas, a satisfação e a paz de espírito que você necessita e merece.
            </article>
            <div class="d-flex justify-content-center row mx-auto mt-30">
                <BtnLigueAgora class="col-xs-10"/>
                <BtnFaleNoWhatsapp class="mt-xs-2 col-xs-10 ml-sm-3"/>
            </div>
            <section class="pt-80">
              <div class="container px-0">
                <!-- Cidades A -->
                <div class="position-relative overflow-hidden mt-40 col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                    <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                        <h5 class="text-dark fw-600 mb-1">
                            A
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="Agrolandia" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Agrolândia - SC
                        </a>
                        <a @click.prevent="Agronomica" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Agronômica - SC
                        </a>
                        <a @click.prevent="Apiuna" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Apiúna – SC
                        </a>
                        <a @click.prevent="Araquari" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Araquari – SC
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="Ascurra" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Ascurra – SC
                        </a>
                        <a @click.prevent="Atalanta" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Atalanta – SC
                        </a>
                        <a @click.prevent="Aurora" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Aurora – SC
                        </a>
                        <a @click.prevent="AguasMornas" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Águas Mornas – SC
                        </a>
                        <a @click.prevent="AlfredoWagner" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Alfredo Wagner – SC
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="Angelina" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Angelina – SC
                        </a>
                        <a @click.prevent="Anitapolis" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Anitápolis – SC
                        </a>
                        <a @click.prevent="AntonioCarlos" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Antônio Carlos – SC
                        </a>
                        <a @click.prevent="Ararangua" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Araranguá – SC
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
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="BalnearioBarraDoSul" class="d-flex col-12 px-0 py-0 mt-1 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Balneário Barra do Sul - SC
                        </a>
                        <a @click.prevent="BalnearioCamboriu" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Balneário Camboriú - SC
                        </a>
                        <a @click.prevent="BalnearioPicarras" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Balneário Piçarras – SC
                        </a>
                        <a @click.prevent="BarraVelha" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Barra Velha – SC
                        </a>
                        <a @click.prevent="BelaVistaDoToldo" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Bela Vista do Toldo – SC
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="BeneditoNovo" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Benedito Novo – SC
                        </a>
                        <a @click.prevent="Blumenau" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Blumenau – SC
                        </a>
                        <a @click.prevent="Bombinhas" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Bombinhas – SC
                        </a>
                        <a @click.prevent="Botuvera" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Botuverá – SC
                        </a>
                        <a @click.prevent="BracoDoTrombudo" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Braço do Trombudo – SC
                        </a>
                        <a @click.prevent="Brusque" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Brusque – SC
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="BalnearioArroioDoSilva" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Balneário Arroio do Silva – SC
                        </a>
                        <a @click.prevent="BalnearioGaivota" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Balneário Gaivota – SC
                        </a>
                        <a @click.prevent="BalnearioRincao" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Balneário Rincão – SC
                        </a>
                        <a @click.prevent="Biguacu" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Biguaçu – SC
                        </a>
                        <a @click.prevent="BracoDoNorte" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Braço do Norte – SC
                        </a>
                    </div>
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
                        <a @click.prevent="Camboriu" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Camboriú – SC
                        </a>
                        <a @click.prevent="Cacador" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Caçador – SC
                        </a>
                        <a @click.prevent="CamposNovos" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Campos Novos – SC
                        </a>
                        <a @click.prevent="Chapeco" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Chapecó – SC
                        </a>
                        <a @click.prevent="Concordia" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Concórdia – SC
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="CampoAlegre" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Campo Alegre – SC
                        </a>
                        <a @click.prevent="Canoinhas" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Canoinhas – SC
                        </a>
                        <a @click.prevent="ChapadaoDoLageado" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Chapadão do Lageado – SC
                        </a>
                        <a @click.prevent="Corupa" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Corupá – SC
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="Canelinha" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Canelinha – SC
                        </a>
                        <a @click.prevent="CapivariDeBaixo" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Capivari de Baixo – SC
                        </a>
                        <a @click.prevent="CocalDoSul" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Cocal do Sul – SC
                        </a>
                        <a @click.prevent="Criciuma" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Criciúma – SC
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
                        <a @click.prevent="DonaEmma" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Dona Emma – SC
                        </a>
                        <a @click.prevent="DoutorPedrinho" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Doutor Pedrinho – SC
                        </a>
                        <a @click.prevent="DionisioCerqueira" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Dionísio Cerqueira – SC
                        </a>
                    </div>
                </div>
                <!-- Cidades E -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                E
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="Ermo" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Ermo – SC
                        </a>
                </div>
                <!-- Cidades F -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                F
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="Florianopolis" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Florianópolis – SC
                        </a>
                        <a @click.prevent="Forquilhinha" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Forquilhinha – SC
                        </a>
                        <a @click.prevent="Fraiburgo" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Fraiburgo – SC
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
                        <div class="col-lg px-0 mt-4">
                            <a @click.prevent="Garuva" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Garuva – SC
                            </a>
                            <a @click.prevent="Gaspar" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Gaspar – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Guabiruba" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Guabiruba – SC
                            </a>
                            <a @click.prevent="Guanamirim" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Guanamirim – SC
                            </a>
                            <a @click.prevent="GovernadorCelsoRamos" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Gov. Celso Ramos – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="GraoPara" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Grão Pará – SC
                            </a>
                            <a @click.prevent="Gravatal" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Gravatal – SC
                            </a>
                        </div>
                </div>
                <!-- Cidades I -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                I
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <div class="col-lg px-0 mt-4">
                            <a @click.prevent="Ibirama" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Ibirama – SC
                            </a>
                            <a @click.prevent="Ilhota" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Ilhota – SC
                            </a>
                            <a @click.prevent="Imbuia" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Imbuia – SC
                            </a>
                            <a @click.prevent="Indaial" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Indaial – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Irineopolis" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Irineópolis – SC
                            </a>
                            <a @click.prevent="Itaiopolis" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Itaiópolis – SC
                            </a>
                            <a @click.prevent="Itajai" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Itajaí – SC
                            </a>
                            <a @click.prevent="Itapema" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Itapema – SC
                            </a>
                            <a @click.prevent="Itapoa" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Itapoá – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Ituporanga" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Ituporanga – SC
                            </a>
                            <a @click.prevent="Icara" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Içara – SC
                            </a>
                            <a @click.prevent="Imarui" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Imaruí – SC
                            </a>
                            <a @click.prevent="Imbituba" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Imbituba – SC
                            </a>
                        </div>
                </div>
                <!-- Cidades J -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                J
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <div class="col-lg px-0 mt-4">
                            <a @click.prevent="Joinville" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Joinville – SC
                            </a>
                            <a @click.prevent="JaguaraDoSul" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Jaguará do Sul – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="JoseBoiteux" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> José Boiteux – SC
                            </a>
                            <a @click.prevent="JacintoMachado" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Jacinto Machado – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Jaguaruna" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Jaguaruna – SC
                            </a>
                            <a @click.prevent="Joacaba" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Joaçaba – SC
                            </a>
                        </div>
                </div>
                <!-- Cidades L -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                L
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <div class="col-lg px-0 mt-4">
                            <a @click.prevent="Laurentino" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Laurentino – SC
                            </a>
                            <a @click.prevent="Lages" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Lages – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Laguna" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Laguna – SC
                            </a>
                            <a @click.prevent="LauroMuller" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Lauro Muller – SC
                            </a>
                            <a @click.prevent="LeobertoLeal" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Leoberto Leal – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Lontras" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Lontras – SC
                            </a>
                            <a @click.prevent="LuisAlves" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Luís Alves – SC
                            </a>
                        </div>
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
                            <a @click.prevent="Mafra" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Mafra – SC
                            </a>
                            <a @click.prevent="MajorVieira" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Major Vieira – SC
                            </a>
                            <a @click.prevent="Massaranduba" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Massaranduba – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="MajorGercino" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Major Gercino – SC
                            </a>
                            <a @click.prevent="Maracaja" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Maracajá – SC
                            </a>
                            <a @click.prevent="MorroDaFumaca" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Morro da Fumaça – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="MirimDoce" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Mirim Doce – SC
                            </a>
                            <a @click.prevent="MonteCastelo" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Monte Castelo – SC
                            </a>
                            <a @click.prevent="MorroGrande" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Morro Grande – SC
                            </a>
                        </div>
                </div>
                <!-- Cidades N -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                N
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="Navegantes" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Navegantes – SC
                        </a>
                        <a @click.prevent="NovaTrento" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Nova Trento – SC
                        </a>
                </div>
                <!-- Cidades O -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                O
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="Orleans" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Orleans – SC
                        </a>
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
                            <a @click.prevent="Papanduva" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Papanduva – SC
                            </a>
                            <a @click.prevent="Penha" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Penha – SC
                            </a>
                            <a @click.prevent="Petrolandia" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Petrolândia – SC
                            </a>
                            <a @click.prevent="Picarras" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Piçarras – SC
                            </a>
                            <a @click.prevent="Pomerode" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Pomerode – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="PortoBelo" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Porto Belo – SC
                            </a>
                            <a @click.prevent="PousoRedondo" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Pouso Redondo – SC
                            </a>
                            <a @click.prevent="PresidenteGetulio" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Presidente Getúlio – SC
                            </a>
                            <a @click.prevent="PresidenteNereu" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Presidente Nereu – SC
                            </a>
                            <a @click.prevent="Palhoca" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Palhoça – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="PassoDeTorres" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Passo de Torres – SC
                            </a>
                            <a @click.prevent="PauloLopes" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Paulo Lopes – SC
                            </a>
                            <a @click.prevent="PedrasGrandes" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Pedras Grandes – SC
                            </a>
                            <a @click.prevent="PescariaBrava" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Pescaria Brava – SC
                            </a>
                        </div>
                </div>
                <!-- Cidades R -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                R
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <div class="col-lg px-0 mt-4">
                            <a @click.prevent="RioDoCampo" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Rio do Campo – SC
                            </a>
                            <a @click.prevent="RioDoOeste" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Rio do Oeste – SC
                            </a>
                            <a @click.prevent="RioFortuna" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Rio Fortuna – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="RioNegrinho" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Rio Negrinho – SC
                            </a>
                            <a @click.prevent="Rodeio" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Rodeio – SC
                            </a>
                            <a @click.prevent="RanchoQueimado" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Rancho Queimado – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="RioDoSul" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Rio do Sul – SC
                            </a>
                            <a @click.prevent="RioDosCedros" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Rio dos Cedros – SC
                            </a>
                        </div>
                </div>
                <!-- Cidades S -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                S
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <div class="col-lg px-0 mt-4">
                            <a @click.prevent="Salete" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Salete – SC
                            </a>
                            <a @click.prevent="SantaTerezinha" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Santa Terezinha - SC
                            </a>
                            <a @click.prevent="SaoBentoDoSul" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São Bento do Sul - SC
                            </a>
                            <a @click.prevent="SaoFranciscoDoSul" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São Francisco do Sul - SC
                            </a>
                            <a @click.prevent="SaoJoaquim" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São Joaquim - SC
                            </a>
                            <a @click.prevent="SaoJoaoDoItaperiu" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São João do Itaperiú – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Shroeder" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Shroeder – SC
                            </a>
                            <a @click.prevent="Sangao" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Sangão – SC
                            </a>
                            <a @click.prevent="SantaRosaDeLima" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Santa Rosa de Lima – SC
                            </a>
                            <a @click.prevent="SantoAmaroDaImperatriz" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Santo Amaro da Imperatriz – SC
                            </a>
                            <a @click.prevent="SaoBonifacio" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São Bonifácio – SC
                            </a>
                            <a @click.prevent="SaoJoaoBatista" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São Jõao Batista – SC
                            </a>
                            <a @click.prevent="SaoJoaoDoSul" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São Jõao do Sul – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="SaoJose" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São José – SC
                            </a>
                            <a @click.prevent="SaoLudgero" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São Ludgero – SC
                            </a>
                            <a @click.prevent="SaoMartinho" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São Martinho – SC
                            </a>
                            <a @click.prevent="SaoPedroDeAlcantara" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São Pedro de Alcântara – SC
                            </a>
                            <a @click.prevent="Sideropolis" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Siderópolis – SC
                            </a>
                            <a @click.prevent="Sombrio" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Sombrio – SC
                            </a>
                        </div>
                </div>
                <!-- Cidades T -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                T
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <div class="col-lg px-0 mt-4">
                            <a @click.prevent="Taio" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Taió – SC
                            </a>
                            <a @click.prevent="Timbo" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Timbó – SC
                            </a>
                            <a @click.prevent="TrombudoCentral" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Trombudo Central – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Treviso" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Treviso – SC
                            </a>
                            <a @click.prevent="TrezeDeMaio" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Treze de Maio – SC
                            </a>
                            <a @click.prevent="Tubarao" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Tubarão – SC
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Tijucas" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Tijucas – SC
                            </a>
                            <a @click.prevent="TimbeDoSul" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Timbé do Sul – SC
                            </a>
                            <a @click.prevent="Turvo" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Turvo – SC
                            </a>
                        </div>
                </div>
                <!-- Cidades U -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                U
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="Urussanga" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Urussanga – SC
                        </a>
                        <a @click.prevent="Urubici" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Urubici – SC
                        </a>
                </div>
                <!-- Cidades V -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                V
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="VidalRamos" class="d-flex col-12 px-0 mt-4 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Vidal Ramos – SC
                        </a>
                        <a @click.prevent="VitorMeireles" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Vitor Meireles – SC
                        </a>
                </div>
                <!-- Cidades W -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                W
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="Witmarsum" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Witmarsum – SC
                        </a>
                </div>
                <!-- Cidades X -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                    <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                        <h5 class="text-dark fw-600 mb-0">
                            X
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <a @click.prevent="Xanxere" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                        <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Xanxerê – SC
                    </a>
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
    Agrolandia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Agrolandia')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Agronomica () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Agronomica')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Apiuna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Apiuna')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Araquari () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Araquari')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Ascurra () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ascurra')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Atalanta () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Atalanta')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Aurora () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Aurora')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    AguasMornas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Aguas-Mornas')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    AlfredoWagner () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Alfredo-Wagner')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Angelina () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Angelina')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Anitapolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Anitapolis')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    AntonioCarlos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Antonio-Carlos')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Ararangua () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ararangua')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BalnearioBarraDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Barra-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BalnearioCamboriu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Camboriu')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BalnearioPicarras () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Picarras')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BarraVelha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Barra-Velha')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BelaVistaDoToldo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Bela-Vista-do-Toldo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BeneditoNovo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Benedito-Novo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Blumenal () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Blumenal')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Bombinhas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Bombinhas')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Botuvera () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Botuvera')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BracoDoTrombudo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Braco-do-Trombudo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Brusque () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Brusque')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BalnearioArroioDoSilva () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Arroio-do-Silva')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BalnearioGaivota () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Gaivota')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BalnearioRincao () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Rincao')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Biguacu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Biguacu')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BracoDoNorte () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Braco-do-Norte')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Camboriu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Camboriu')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Cacador () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Cacador')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CamposNovos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Campos-Novos')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Chapeco () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Chapeco')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Concordia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Concordia')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CampoAlegre () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Campo-Alegre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Canoinhas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Canoinhas')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    ChapadaoDoLageado () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Chapadao-do-Lageado')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Corupa () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Corupa')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Canelinha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Canelinha')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CapivariDeBaixo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Capivari-de-Baixo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CocalDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Cocal-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Criciuma () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Criciuma')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    DonaEmma () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Dona-Emma')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    DoutorPedrinho () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Doutor-Pedrinho')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    DionisioCerqueira () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Dionisio-Cerqueira')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Ermo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ermo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Florianopolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Florianopolis')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Forquilhinha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Forquilhinha')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Fraiburgo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Fraiburgo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Garuva () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Garuva')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Gaspar () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Gaspar')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Guabiruba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Guabiruba')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Guanamirim () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Guanamirim')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    GovernadorCelsoRamos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Governador-Celso-Ramos')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    GraoPara () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Grao-Para')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Gravatal () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Gravatal')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Ibirama () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ibirama')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Ilhota () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ilhota')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Imbuia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Imbuia')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Indaial () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Indaial')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Irineopolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Irineopolis')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Itaiopolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itaiopolis')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Itajai () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itajai')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Itapema () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itapema')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Itapoa () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itapoa')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Ituporanga () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ituporanga')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Icara () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Icara')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Imarui () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Imarui')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Imbituba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Imbituba')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Joinville () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Joinville')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    JaguaraDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jaguara-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    JoseBoiteux () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jose-Boiteux')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    JacintoMachado () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jacinto-Machado')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Jaguaruna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jaguaruna')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Joacaba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Joacaba')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Laurentino () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Laurentino')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Lages () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Lages')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Laguna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Laguna')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    LauroMuller () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Lauro-Muller')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    LeobertoLeal () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Leoberto-Leal')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Lontras () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Lontras')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    LuisAlves () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Luis-Alves')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Mafra () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Mafra')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    MajorVieira () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Major-Vieira')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Massaranduba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Massaranduba')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    MajorGercino () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Major-Gercino')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Maracaja () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Maracaja')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    MorroDaFumaca () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Morro-da-Fumaca')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    MirimDoce () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Mirim-Doce')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    MonteCastelo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Monte-Castelo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    MorroGrande () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Morro-Grande')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Navegantes () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Navegantes')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    NovaTrento () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Nova-Trento')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Orleans () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Orleans')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Papanduva () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Papanduva')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Penha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Penha')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Petrolandia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Petrolandia')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Picarras () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Picarras')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Pomerode () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pomerode')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PortoBelo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Porto-Belo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PousoRedondo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pouso-Redondo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PresidenteGetulio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Presidente-Getulio')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PresidenteNereu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Presidente-Nereu')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Palhoca () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Palhoca')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PassoDeTorres () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Passo-de-Torres')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PauloLopes () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Paulo-Lopes')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PedrasGrandes () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pedras-Grandes')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PescariaBrava () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pescaria-Brava')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    RioDoCampo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-do-Campo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    RioDoOeste () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-do-Oeste')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    RioFortuna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-Fortuna')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    RioNegrinho () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-Negrinho')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Rodeio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rodeio')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    RanchoQueimado () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rancho-Queimado')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    RioDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    RioDosCedros () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-dos-Cedros')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Salete () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Salete')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SantaTerezinha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Santa-Terezinha')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoBentoDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Bento-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoFranciscoDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Francisco-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoJoaquim () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joaquim')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoJoaoDoItaperiu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joao-do-Itaperiu')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Shroeder () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Shroeder')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Sangao () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sangao')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SantaRosaDeLima () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Santa-Rosa-de-Lima')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SantoAmaroDaImperatriz () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Santo-Amaro-da-Imperatriz')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoBonifacio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Bonifacio')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoJoaoBatista () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joao-Batista')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoJoaoDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joao-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoJose () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Jose')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoLudgero () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Ludgero')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoMartinho () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Martinho')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoPedroDeAlcantara () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Pedro-de-Alcantara')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Sideropolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sideropolis')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Sombrio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sombrio')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Taio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Taio')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Timbo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Timbo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    TrombudoCentral () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Trombudo-Central')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Treviso () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Treviso')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    TrezeDeMaio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Treze-de-Maio')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Tubarao () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Tubarao')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Tijucas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Tijucas')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    TimbeDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Timbe-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Turvo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Turvo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Urussanga () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Urussanga')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Urubici () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Urubici')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    VidalRamos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Vidal-Ramos')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    VitorMeireles () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Vitor-Meireles')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Witmarsum () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Witmarsum')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Xanxere () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Xanxere')
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
