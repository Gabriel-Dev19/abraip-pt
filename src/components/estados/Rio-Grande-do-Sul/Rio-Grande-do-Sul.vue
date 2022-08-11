<template>
    <div>
        <div class="container">
            <h1 class="text-center fs-xs-30 px-xs-4">Detetive particular no Rio Grande do Sul</h1>
            <article class="col-lg-11 px-0 mx-auto fs-sm-17 text-center mt-4 fw-500">
                Precisando de <b>Detetive Particular para sua Empresa</b> no <b>Rio Grande do Sul?</b>
                A ABRAIP Detetives está no <b>Rio Grande do Sul</b> para poder lhe ajudar.
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
                <div class="position-relative overflow-hidden col-12 mt-40 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                    <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                        <h5 class="text-dark fw-600 mb-1">
                            A
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <div class="col-lg px-0 mt-4">
                        <a @click.prevent="AltoFeliz" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Alto Feliz - RS
                        </a>
                        <a @click.prevent="Alvorada" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Alvorada - RS
                        </a>
                        <a @click.prevent="AmaralFerrador" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Amaral Ferrador – RS
                        </a>
                        <a @click.prevent="AntaGorda" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Anta Gorda – RS
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="Arambare" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Arambaré – RS
                        </a>
                        <a @click.prevent="Ararica" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Araricá – RS
                        </a>
                        <a @click.prevent="ArroioDoMeio" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Arroio do Meio – RS
                        </a>
                        <a @click.prevent="ArroioDoSal" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Arroio do Sal – RS
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="ArroioDoTigre" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Arroio do Tigre – RS
                        </a>
                        <a @click.prevent="ArroioDosRatos" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Arroio dos Ratos – RS
                        </a>
                        <a @click.prevent="Arvorezinha" class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Arvorezinha – RS
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
                        <a @click.prevent="BalnearioPinhal" class="d-flex col-12 px-0 py-0 mt-1 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Balneário Pinhal - RS
                        </a>
                        <a @click.prevent="Barao" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Barão - RS
                        </a>
                        <a @click.prevent="BaraoDoTriunfo" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Barão do Triunfo – RS
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="BomRetiroDoSul" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Bom Retiro do Sul – RS
                        </a>
                        <a @click.prevent="BoqueirãoDoLeao" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Boqueirão do Leão – RS
                        </a>
                        <a @click.prevent="BomPrincipio" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Bom Princípio – RS
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="Brochier" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Brochier – RS
                        </a>
                        <a @click.prevent="Butiá" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Butiá – RS
                        </a>
                        <a @click.prevent="BarraDoRibeiro" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Barra do Ribeiro – RS
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
                        <a @click.prevent="CachoeiraDoSul" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Cachoeira do Sul – RS
                        </a>
                        <a @click.prevent="Cachoeirinha" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Cachoeirinha – RS
                        </a>
                        <a @click.prevent="Camaqua" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Camaquã – RS
                        </a>
                        <a @click.prevent="CampoBom" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Campo Bom – RS
                        </a>
                        <a @click.prevent="CerroBranco" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Cerro Branco – RS
                        </a>
                        <a @click.prevent="CerroGrandeDoSul" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Cerro Grande do Sul – RS
                        </a>
                        <a @click.prevent="Charqueadas" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Charqueadas – RS
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="Candelaria" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Candelária – RS
                        </a>
                        <a @click.prevent="Canoas" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Canoas – RS
                        </a>
                        <a @click.prevent="CanudosDoVale" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Canudos do Vale – RS
                        </a>
                        <a @click.prevent="CapaoDaCanoa" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Capão da Canoa – RS
                        </a>
                        <a @click.prevent="Chuvisca" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Chuvisca – RS
                        </a>
                        <a @click.prevent="Cidreira" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Cidreira – RS
                        </a>
                        <a @click.prevent="Colinas" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Colinas – RS
                        </a>
                    </div>
                    <div class="col-lg px-0 mt-lg-4">
                        <a @click.prevent="CapelaDeSantana" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Capela de Santana – RS
                        </a>
                        <a @click.prevent="Capitao" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Capitão – RS
                        </a>
                        <a @click.prevent="CapivariDoSul" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Capivari do Sul – RS
                        </a>
                        <a @click.prevent="Caraa" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Caraá – RS
                        </a>
                        <a @click.prevent="CoqueiroBaixo" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Coqueiro Baixo – RS
                        </a>
                        <a @click.prevent="Cristal" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Cristal – RS
                        </a>
                        <a @click.prevent="CruzeiroDoSul" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Cruzeiro do Sul – RS
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
                        <a @click.prevent="DoisIrmaos" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Dois Irmãos – RS
                        </a>
                        <a @click.prevent="DomFeliciano" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Dom Feliciano – RS
                        </a>
                        <a @click.prevent="DomPedroDeAlcantara" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Dom Pedro de Alcântara – RS
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
                        <a @click.prevent="EldoradoDoSul" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Eldorado do Sul – RS
                        </a>
                        <a @click.prevent="Esteio" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Esteio – RS
                        </a>
                        <a @click.prevent="Estrela" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Estrela – RS
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
                        <a @click.prevent="FazendaVilanova" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Fazenda Vilanova – RS
                        </a>
                        <a @click.prevent="Feliz" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Feliz – RS
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
                            <a @click.prevent="GeneralCamara" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> General Câmara – RS
                            </a>
                            <a @click.prevent="Glorinha" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Glorinha – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Gravatai" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Gravataí – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Guaiba" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Guaíba – RS
                            </a>
                        </div>
                </div>
                <!-- Cidades H -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                    <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                        <h5 class="text-dark fw-600 mb-0">
                            H
                        </h5>
                    </div>
                    <div class="borda-top-preto-separation"></div>
                    <a @click.prevent="Harmonia" class="d-flex col-12 px-0 mt-4 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                        <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Harmonia – RS
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
                        <div class="col-lg px-0 mt-4">
                            <a @click.prevent="Ibarama" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Ibarama – RS
                            </a>
                            <a @click.prevent="Igrejinha" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Igrejinha – RS
                            </a>
                            <a @click.prevent="Ilopolis" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Ilópolis – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Imigrante" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Imigrante – RS
                            </a>
                            <a @click.prevent="Itati" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Itati – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Ivoti" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Ivoti – RS
                            </a>
                            <a @click.prevent="Imbe" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Imbé – RS
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
                            <a @click.prevent="Lagoao" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Lagoão – RS
                            </a>
                            <a @click.prevent="Lajedo" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Lajedo – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="LindolfoCollor" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Lindolfo Collor – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="LinhaNova" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Linha Nova – RS
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
                            <a @click.prevent="Maquine" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Maquiné – RS
                            </a>
                            <a @click.prevent="MarianaPimentel" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Mariana Pimentel – RS
                            </a>
                            <a @click.prevent="MarquesDeSouza" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Marques de Souza – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="MatoLeitao" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Mato Leitão – RS
                            </a>
                            <a @click.prevent="MinasDoLeao" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Minas do Leão – RS
                            </a>
                            <a @click.prevent="Montenegro" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Montenegro – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="MorrinhosDoSul" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Morrinhos do Sul – RS
                            </a>
                            <a @click.prevent="MorroReuter" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Morro Reuter – RS
                            </a>
                            <a @click.prevent="Mostardas" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Mostardas – RS
                            </a>
                            <a @click.prevent="Mucum" class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Mucum – RS
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
                        <div class="col-lg px-0 mt-4">
                            <a @click.prevent="NovaBrescia" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Nova Bréscia – RS
                            </a>
                            <a @click.prevent="NovaHartz" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Nova Hartz – RS
                            </a>
                            <a @click.prevent="NovaSantaRita" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Nova Santa Rita – RS
                            </a>
                            <a @click.prevent="NovoHamburgo" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Novo Hamburgo – RS
                            </a>
                        </div>
                </div>
                <!-- Cidades O -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                O
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="Osorio" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Osório – RS
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
                            <a @click.prevent="PalmaresDoSul" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Palmares do Sul – RS
                            </a>
                            <a @click.prevent="PantanoGrande" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Pantano Grande – RS
                            </a>
                            <a @click.prevent="PareciNovo" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Pareci Novo – RS
                            </a>
                            <a @click.prevent="Parobe" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Parobé – RS
                            </a>
                            <a @click.prevent="PassoDoSobrado" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Passo do Sobrado – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Paverema" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Paverema – RS
                            </a>
                            <a @click.prevent="PoçoDasAntas" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Poço das Antas – RS
                            </a>
                            <a @click.prevent="Portao" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Portão – RS
                            </a>
                            <a @click.prevent="PortoAlegre" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Porto Alegre – RS
                            </a>
                            <a @click.prevent="PousoNovo" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Pouso Novo – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="PresidenteLucena" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Presidente Lucena – RS
                            </a>
                            <a @click.prevent="Progresso" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Progresso – RS
                            </a>
                            <a @click.prevent="Putinga" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Putinga – RS
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
                            <a @click.prevent="Relvado" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Relvado – RS
                            </a>
                            <a @click.prevent="RioPardo" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Rio Pardo – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="RocaSales" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Roca Sales – RS
                            </a>
                            <a @click.prevent="Rolante" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Rolante – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Riozinho" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Riozinho – RS
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
                            <a @click.prevent="SalvadorDoSul" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Salvador do Sul – RS
                            </a>
                            <a @click.prevent="SantaClaraDoSul" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Santa Clara do Sul - RS
                            </a>
                            <a @click.prevent="SantaCruzDoSul" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Santa Cruz do Sul - RS
                            </a>
                            <a @click.prevent="SantaMariaDoHerval" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Santa Maria do Herval - RS
                            </a>
                            <a @click.prevent="SantoAntonioDaPatrulha" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Santo Antônio da Patrulha - RS
                            </a>
                            <a @click.prevent="SaoJeronimo" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São Jerônimo – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="SaoJoseDoHortencio" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São José do Hortêncio – RS
                            </a>
                            <a @click.prevent="SaoLeopoldo" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São Leopoldo – RS
                            </a>
                            <a @click.prevent="SaoSebastiaoDoCai" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São Sebastião do Cai – RS
                            </a>
                            <a @click.prevent="SaoVendelino" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> São Vendelino – RS
                            </a>
                            <a @click.prevent="Sapiranga" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Sapiranga – RS
                            </a>
                            <a @click.prevent="SapucaiaDoSul" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Sapucaia do Sul – RS
                            </a>
                            <a @click.prevent="Segredo" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Segredo – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="SentinelaDoSul" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Sentinela do Sul – RS
                            </a>
                            <a @click.prevent="Serio" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Sério – RS
                            </a>
                            <a @click.prevent="SertaoSantana" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Sertão Santana – RS
                            </a>
                            <a @click.prevent="Sinimbu" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Sinimbu – RS
                            </a>
                            <a @click.prevent="Sobradinho" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Sobradinho – RS
                            </a>
                            <a @click.prevent="SantanaDoLivramento" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Santana do Livramento – RS
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
                            <a @click.prevent="Tabai" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Tabaí – RS
                            </a>
                            <a @click.prevent="Tapes" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Tapes – RS
                            </a>
                            <a @click.prevent="Taquara" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Taquara – RS
                            </a>
                            <a @click.prevent="Travesseiro" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Travesseiro – RS
                            </a>
                            <a @click.prevent="Tunas" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Tunas – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Taquari" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Taquari – RS
                            </a>
                            <a @click.prevent="Tavares" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Tavares – RS
                            </a>
                            <a @click.prevent="TerraDeAreia" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Terra de Areia – RS
                            </a>
                            <a @click.prevent="TresCachoeiras" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Três Cachoeiras – RS
                            </a>
                            <a @click.prevent="TresCoroas" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Três Coroas – RS
                            </a>
                            <a @click.prevent="Tupandi" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Tupandi – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="Teutonia" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Teutônia – RS
                            </a>
                            <a @click.prevent="Torres" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Torres – RS
                            </a>
                            <a @click.prevent="Tramandai" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Tramandaí – RS
                            </a>
                            <a @click.prevent="TresForquilhas" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Três Forquilhas – RS
                            </a>
                            <a @click.prevent="Triunfo" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Triunfo – RS
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
                    <a @click.prevent="Uruguaiana" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                        <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Uruguaiana – RS
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
                        <div class="col-lg px-0 mt-4">
                            <a @click.prevent="ValeDoSol" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Vale do Sol – RS
                            </a>
                            <a @click.prevent="ValeReal" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Vale Real – RS
                            </a>
                            <a @click.prevent="Viamao" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Viamão – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="ValeVerde" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Vale Verde – RS
                            </a>
                            <a @click.prevent="VenancioAires" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Venâncio Aires – RS
                            </a>
                        </div>
                        <div class="col-lg px-0 mt-lg-4">
                            <a @click.prevent="VeraCruz" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Vera Cruz – RS
                            </a>
                            <a @click.prevent="VespasianoCorreia" class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                                <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Vespasiano Correia – RS
                            </a>
                        </div>
                </div>
                <!-- Cidades X -->
                <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
                        <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
                            <h5 class="text-dark fw-600 mb-0">
                                X
                            </h5>
                        </div>
                        <div class="borda-top-preto-separation"></div>
                        <a @click.prevent="XangriLa" class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center">
                            <i class="fa fa-angle-right fw-300 fs-25 mr-1"></i> Xangri-Lá – RS
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
    AltoFeliz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Alto-Feliz')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Alvorada () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Alvorada')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    AmaralFerrador () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Amaral-Ferrador')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    AntaGorda () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Anta-Gorda')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Arambare () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arambare')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Ararica () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ararica')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    ArroioDoMeio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-do-Meio')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    ArroioDoSal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-do-Sal')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    ArroioDoTigre () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-do-Tigre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    ArroioDosRatos () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-dos-Ratos')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Arvorezinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arvorezinha')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BalnearioPinhal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Balneario-Pinhal')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Barao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Barao')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BaraoDoTriunfo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Barao-do-Triunfo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BomRetiroDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Bom-Retiro-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BoqueirãoDoLeao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Boqueirao-do-Leao')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BomPrincipio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Bom-Principio')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Brochier () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Brochier')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Butiá () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Butia')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    BarraDoRibeiro () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Barra-do-Ribeiro')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CachoeiraDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cachoeira-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Cachoeirinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cachoeirinha')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Camaqua () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Camaqua')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CampoBom () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Campo-Bom')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CerroBranco () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cerro-Branco')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CerroGrandeDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cerro-Grande-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Charqueadas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Charqueadas')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Candelaria () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Candelaria')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Canoas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Canoas')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CanudosDoVale () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Canudos-do-Vale')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CapaoDaCanoa () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capao-da-Canoa')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Chuvisca () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Chuvisca')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Cidreira () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cidreira')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Colinas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Colinas')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CapelaDeSantana () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capela-de-Santana')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Capitao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capitao')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CapivariDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capivari-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Caraa () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Caraa')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CoqueiroBaixo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Coqueiro-Baixo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Cristal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cristal')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    CruzeiroDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cruzeiro-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    DoisIrmaos () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Dois-Irmaos')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    DomFeliciano () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Dom-Feliciano')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    DomPedroDeAlcantara () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Dom-Pedro-de-Alcantara')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    EldoradoDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Eldorado-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Esteio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Esteio')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Estrela () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Estrela')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    FazendaVilanova () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Fazenda-Vilanova')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Feliz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Feliz')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    GeneralCamara () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-General-Camara')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Glorinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Glorinha')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Gravatai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Gravatai')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Guaiba () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Guaiba')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Harmonia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Harmonia')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Ibarama () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ibarama')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Igrejinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Igrejinha')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Ilopolis () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ilopolis')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Imigrante () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Imigrante')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Itati () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Itati')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Ivoti () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ivoti')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Imbe () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Imbe')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Lagoao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Lagoao')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Lajedo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Lajedo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    LindolfoCollor () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Lindolfo-Collor')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    LinhaNova () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Linha-Nova')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Maquine () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Maquine')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    MarianaPimentel () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mariana-Pimentel')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    MarquesDeSouza () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Marques-de-Souza')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    MatoLeitao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mato-Leitao')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    MinasDoLeao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Minas-do-Leao')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Montenegro () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Montenegro')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    MorrinhosDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Morrinhos-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    MorroReuter () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Morro-Reuter')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Mostardas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mostardas')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Mucum () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mucum')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    NovaBrescia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Nova-Brescia')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    NovaHartz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Nova-Hartz')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    NovaSantaRita () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Nova-Santa-Rita')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    NovoHamburgo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Novo-Hamburgo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Osorio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Osorio')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PalmaresDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Palmares-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PantanoGrande () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Pantano-Grande')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PareciNovo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Pareci-Novo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Parobe () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Parobe')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PassoDoSobrado () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Passo-do-Sobrado')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Paverema () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Paverema')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PoçoDasAntas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Poço-das-Antas')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Portao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Portao')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PortoAlegre () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Porto-Alegre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PousoNovo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Pouso-Novo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    PresidenteLucena () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Presidente-Lucena')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Progresso () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Progresso')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Putinga () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Putinga')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Relvado () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Relvado')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    RioPardo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Rio-Pardo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    RocaSales () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Roca-Sales')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Rolante () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Rolante')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Riozinho () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Riozinho')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SalvadorDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Salvador-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SantaClaraDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santa-Clara-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SantaCruzDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santa-Cruz-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SantaMariaDoHerval () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santa-Maria-do-Herval')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SantoAntonioDaPatrulha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santo-Antonio-da-Patrulha')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoJeronimo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Jeronimo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoJoseDoHortencio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Jose-do-Hortencio')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoLeopoldo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Leopoldo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoSebastiaoDoCai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Sebastiao-do-Cai')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SaoVendelino () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Vendelino')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Sapiranga () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sapiranga')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SapucaiaDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sapucaia-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Segredo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Segredo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SentinelaDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sentinela-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Serio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Serio')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SertaoSantana () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sertao-Santana')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Sinimbu () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sinimbu')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Sobradinho () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sobradinho')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    SantanaDoLivramento () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santana-do-Livramento')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Tabai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tabai')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Tapes () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tapes')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Taquara () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Taquara')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Travesseiro () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Travesseiro')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Tunas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tunas')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Taquari () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Taquari')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Tavares () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tavares')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    TerraDeAreia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Terra-de-Areia')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    TresCachoeiras () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tres-Cachoeiras')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    TresCoroas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tres-Coroas')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Tupandi () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tupandi')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Teutonia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Teutonia')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Torres () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Torres')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Tramandai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tramandai')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    TresForquilhas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tres-Forquilhas')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Triunfo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Triunfo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Uruguaiana () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Uruguaiana')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    ValeDoSol () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vale-do-Sol')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    ValeReal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vale-Real')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    Viamao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Viamao')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    ValeVerde () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vale-Verde')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    VenancioAires () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Venancio-Aires')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    VeraCruz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vera-Cruz')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    VespasianoCorreia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vespasiano-Correia')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -120
      })
    },
    XangriLa () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Xangri-La')
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
