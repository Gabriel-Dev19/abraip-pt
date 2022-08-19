<template>
    <div>
        <div class="min-height-900 mt-xs-45 mt-sm-45 mt-xl-60">
            <div class="col-12 d-flex px-0 align-items-start row mx-auto">
                <div @mouseleave="ShowDropDownMobile = false" class="d-xs-flex col-12 position-relative d-sm-flex justify-content-end px-0 d-xl-none">
                    <button @click.prevent="DropdownButton" class="btn d-flex fw-600 align-items-center">
                        Definições <i class="fa fa-angle-down ml-2 fs-20 fw-400 text-azul"></i>
                    </button>
                    <div v-show="ShowDropDownMobile">
                        <div class="dropdown-mobile-loja px-0 d-xs-block d-sm-block d-xl-none border-radius-10 bg-white border shadow py-3">
                            <h6 class="fw-600 px-3 position-relative mb-0">
                                Categorias
                                <div class="borda-marcacao"></div>
                            </h6>
                            <div class="mt-20">
                                <button @click.prevent="TodosProdutos" class="col-12 px-25 btn-dropdown d-flex position-relative align-items-center py-1 text-left fw-500 btn">
                                    <div class="caixa-select border mr-2" :class="{'bg-cinza': !SelectProdutos, 'bg-azul': SelectProdutos}">
                                        <div class="bolinha-select border bg-white" :class="{'bolinha-off': !SelectProdutos, 'bolinha-on': SelectProdutos}"></div>
                                    </div>
                                    <span class="position-relative">
                                        Todos os produtos
                                        <div class="borda-marcacao-categorias"></div>
                                    </span>
                                </button>
                                <button @click.prevent="Camera" class="col-12 px-25 btn-dropdown d-flex position-relative align-items-center py-1 text-left fw-500 btn">
                                    <div class="caixa-select border mr-2" :class="{'bg-cinza': !SelectCamera, 'bg-azul': SelectCamera}">
                                        <div class="bolinha-select border bg-white" :class="{'bolinha-off': !SelectCamera, 'bolinha-on': SelectCamera}"></div>
                                    </div>
                                    <span class="position-relative">
                                        Câmeras
                                        <div class="borda-marcacao-categorias"></div>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 px-0 d-xs-none d-sm-none d-xl-block border-radius-10 bg-white border shadow py-3">
                    <h6 class="fw-600 px-3 position-relative mb-0">
                        Categorias
                        <div class="borda-marcacao"></div>
                    </h6>
                    <div class="mt-20">
                        <button @click.prevent="TodosProdutos" class="col-12 px-25 btn-dropdown d-flex position-relative align-items-center py-1 text-left fw-500 btn">
                            <div class="caixa-select border mr-2" :class="{'bg-cinza': !SelectProdutos, 'bg-azul': SelectProdutos}">
                                <div class="bolinha-select border bg-white" :class="{'bolinha-off': !SelectProdutos, 'bolinha-on': SelectProdutos}"></div>
                            </div>
                            <span class="position-relative">
                                Todos os produtos
                                <div class="borda-marcacao-categorias"></div>
                            </span>
                        </button>
                        <button @click.prevent="Camera" class="col-12 px-25 btn-dropdown d-flex position-relative align-items-center py-1 text-left fw-500 btn">
                            <div class="caixa-select border mr-2" :class="{'bg-cinza': !SelectCamera, 'bg-azul': SelectCamera}">
                                <div class="bolinha-select border bg-white" :class="{'bolinha-off': !SelectCamera, 'bolinha-on': SelectCamera}"></div>
                            </div>
                            <span class="position-relative">
                                Câmeras
                                <div class="borda-marcacao-categorias"></div>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="col mt-xs-20 mt-sm-20 mt-xl-0 px-0 borda-caixa-loja overflow-hidden position-relative ml-xl-3">
                    <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight">
                        <div v-show="SemProdutos" class="position-absolute col-12 px-0">
                            <div class="d-flex justify-content-center">
                                <h6 class="bg-danger rounded py-1 text-white px-3">
                                    Selecione algum produto
                                </h6>
                            </div>
                        </div>
                    </transition>
                    <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight">
                        <div v-show="ViewCamera" class="col-12 px-0">
                            <h4 class="d-flex fs-xs-21 align-items-center">
                                <i class="fa fa-minus mr-2 fw-400 text-azul"></i> Câmeras
                            </h4>
                            <div class="d-flex row mx-auto mb-40">
                                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-4 mt-2 px-1">
                                    <div class="border shadow-sm bg-white border-radius-10 d-flex row mx-auto p-3 h-100">
                                        <div class="height-img-loja d-flex align-items-center justify-content-center px-xs-0 px-sm-30">
                                            <div class="mb-3">
                                                <img src="../../assets/img/loja/carregador-com-camera.png" class="img-fluid" alt="">
                                            </div>
                                        </div>
                                        <div class="align-self-end">
                                            <div>
                                                <h6 class="fs-xs-13 fs-sm-15">
                                                    Carregador de telemóvel com câmera
                                                </h6>
                                                <h6 class="fs-13 mt-15">
                                                    Relevância: 90%
                                                </h6>
                                                <div class="progress col-12 px-0" style="height: 3px;">
                                                    <div class="progress-bar bg-azul" role="progressbar" style="width: 90%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <button @click="$bvModal.show('modal-produto-1')" class="btn col-12 fw-500 d-flex align-items-center border-radius-20 justify-content-center mt-20 btn-info">
                                                <i class="fa fa-shopping-basket mr-2 fs-15 mb-1"></i> Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-4 mt-2 px-1">
                                    <div class="border shadow-sm bg-white border-radius-10 d-flex row mx-auto p-3 h-100">
                                        <div class="height-img-loja d-flex align-items-center px-xs-0 px-sm-30">
                                            <div class="mb-2">
                                                <img src="../../assets/img/loja/relogio-de-mesa-com-camera.jpg" class="img-fluid" alt="">
                                            </div>
                                        </div>
                                        <div class="align-self-end">
                                            <div>
                                                <h6 class="fs-xs-13 fs-sm-15">
                                                    Relógio de mesa com câmera gravadora
                                                </h6>
                                                <h6 class="fs-13 mt-15">
                                                    Relevância: 91%
                                                </h6>
                                                <div class="progress col-12 px-0" style="height: 3px;">
                                                    <div class="progress-bar bg-azul" role="progressbar" style="width: 91%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <button @click="$bvModal.show('modal-produto-2')" class="btn col-12 fw-500 d-flex align-items-center border-radius-20 justify-content-center mt-20 btn-info">
                                                <i class="fa fa-shopping-basket mr-2 fs-15 mb-1"></i> Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-4 mt-2 px-1">
                                    <div class="border shadow-sm bg-white border-radius-10 d-flex row mx-auto p-3 h-100">
                                        <div class="height-img-loja d-flex align-items-center px-xs-0 px-sm-30">
                                            <div>
                                                <img src="../../assets/img/loja/camera-bola-disfarcada.jpg" class="img-fluid" alt="">
                                            </div>
                                        </div>
                                        <div class="align-self-end">
                                            <div>
                                                <h6 class="fs-xs-13 fs-sm-15">
                                                    Câmera HD em formato de chaveiro
                                                </h6>
                                                <h6 class="fs-13 mt-15">
                                                    Relevância: 95%
                                                </h6>
                                                <div class="progress col-12 px-0" style="height: 3px;">
                                                    <div class="progress-bar bg-azul" role="progressbar" style="width: 95%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <button @click="$bvModal.show('modal-produto-3')" class="btn col-12 fw-500 d-flex align-items-center border-radius-20 justify-content-center mt-20 btn-info">
                                                <i class="fa fa-shopping-basket mr-2 fs-15 mb-1"></i> Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-4 mt-2 px-1">
                                    <div class="border shadow-sm bg-white border-radius-10 d-flex row mx-auto p-3 h-100">
                                        <div class="height-img-loja d-flex align-items-center px-xs-0 px-sm-30">
                                            <div>
                                                <img src="../../assets/img/loja/smartwatch-com-camera.jpg" class="img-fluid" alt="">
                                            </div>
                                        </div>
                                        <div class="align-self-end">
                                            <div>
                                                <h6 class="fs-xs-13 fs-sm-15">
                                                    Relógio Smartwatch com câmera
                                                </h6>
                                                <h6 class="fs-13 mt-15">
                                                    Relevância: 98%
                                                </h6>
                                                <div class="progress col-12 px-0" style="height: 3px;">
                                                    <div class="progress-bar bg-azul" role="progressbar" style="width: 98%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <button @click="$bvModal.show('modal-produto-4')" class="btn col-12 fw-500 d-flex align-items-center border-radius-20 justify-content-center mt-20 btn-info">
                                                <i class="fa fa-shopping-basket mr-2 fs-15 mb-1"></i> Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-4 mt-2 px-1">
                                    <div class="border shadow-sm bg-white border-radius-10 d-flex row mx-auto p-3 h-100">
                                        <div class="height-img-loja d-flex align-items-center px-xs-0 px-sm-30">
                                            <div>
                                                <img src="../../assets/img/loja/camera-caneta.jpg" class="img-fluid" alt="">
                                            </div>
                                        </div>
                                        <div class="align-self-end">
                                            <div>
                                                <h6 class="fs-xs-13 fs-sm-15">
                                                    Câmera em formato de caneta
                                                </h6>
                                                <h6 class="fs-13 mt-15">
                                                    Relevância: 95%
                                                </h6>
                                                <div class="progress col-12 px-0" style="height: 3px;">
                                                    <div class="progress-bar bg-azul" role="progressbar" style="width: 95%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <button @click="$bvModal.show('modal-produto-5')" class="btn col-12 fw-500 d-flex align-items-center border-radius-20 justify-content-center mt-20 btn-info">
                                                <i class="fa fa-shopping-basket mr-2 fs-15 mb-1"></i> Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-4 mt-2 px-1">
                                    <div class="border shadow-sm bg-white border-radius-10 d-flex row mx-auto p-3 h-100">
                                        <div class="height-img-loja d-flex align-items-center px-xs-0 px-sm-30">
                                            <div>
                                                <img src="../../assets/img/loja/camera-dado.jpg" class="img-fluid" alt="">
                                            </div>
                                        </div>
                                        <div class="align-self-end">
                                            <div>
                                                <h6 class="fs-xs-13 fs-sm-15">
                                                    Câmera em formato de dado de jogos
                                                </h6>
                                                <h6 class="fs-13 mt-15">
                                                    Relevância: 90%
                                                </h6>
                                                <div class="progress col-12 px-0" style="height: 3px;">
                                                    <div class="progress-bar bg-azul" role="progressbar" style="width: 90%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <button @click="$bvModal.show('modal-produto-6')" class="btn col-12 fw-500 d-flex align-items-center border-radius-20 justify-content-center mt-20 btn-info">
                                                <i class="fa fa-shopping-basket mr-2 fs-15 mb-1"></i> Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-4 mt-2 px-1">
                                    <div class="border shadow-sm bg-white border-radius-10 d-flex row mx-auto p-3 h-100">
                                        <div class="height-img-loja d-flex align-items-center px-xs-0 px-sm-30">
                                            <div>
                                                <img src="../../assets/img/loja/camera-hub-usb.jpg" class="img-fluid" alt="">
                                            </div>
                                        </div>
                                        <div class="align-self-end">
                                            <div>
                                                <h6 class="fs-xs-13 fs-sm-15">
                                                    Câmera acoplada a um adaptador USB
                                                </h6>
                                                <h6 class="fs-13 mt-15">
                                                    Relevância: 95%
                                                </h6>
                                                <div class="progress col-12 px-0" style="height: 3px;">
                                                    <div class="progress-bar bg-azul" role="progressbar" style="width: 95%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <button @click="$bvModal.show('modal-produto-7')" class="btn col-12 fw-500 d-flex align-items-center border-radius-20 justify-content-center mt-20 btn-info">
                                                <i class="fa fa-shopping-basket mr-2 fs-15 mb-1"></i> Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <b-modal
                        id="modal-produto-1"
                        centered
                        hide-header
                        hide-footer
                    >
                        <div class="d-flex justify-content-end">
                            <button @click="$bvModal.hide('modal-produto-1')" class="btn pr-0 pt-0">
                                <i class="fa fa-times fs-25 fw-300"></i>
                            </button>
                        </div>
                        <div class="d-flex justify-content-center pb-30 align-items-center px-20">
                            <div class="col-lg-10">
                                <img src="../../assets/img/loja/carregador-com-camera.png" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="d-flex col-12 px-xs-0 align-items-stretch row mx-auto">
                            <div class="col-12 px-0">
                                <h5 class="text-center">
                                    Carregador de telemóvel com câmera
                                </h5>
                                <p class="fw-500 mt-3 text-center">
                                    O carregador de telemóvel disfarçado com câmera é perfeito
                                    para a filmagem de ambientes como quartos, salas, e outros ambientes fechados.
                                    Quando colocado na parede ele serve de carregador, mas disfarçadamente está filmando todo
                                    o ambiente.
                                </p>
                                <div class="col-12 mt-4 mx-auto">
                                    <h6 class="fs-15 fw-600 mt-15">
                                        Relevância: 90%
                                    </h6>
                                    <div class="progress px-0" style="height: 4px;">
                                        <div class="progress-bar bg-azul" role="progressbar" style="width: 90%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <a href="https://wa.me/554195190579?text=Olá,+estou+visitando+a+loja+da+ABRAIP+Detetives+e+gostaria+de+receber+mais+informações+sobre+o+carregador+com+camera" target="_blank" rel="nopenner noreferrer" class="btn col-12 fs-xs-15 fw-500 d-flex align-items-center border-radius-20 justify-content-center mt-20 btn-info">
                                <i class="fa fa-shopping-basket mr-2 fs-15"></i> Compre pelo WhatsApp
                            </a>
                        </div>
                    </b-modal>
                    <b-modal
                        id="modal-produto-2"
                        centered
                        hide-header
                        hide-footer
                    >
                        <div class="d-flex justify-content-end">
                            <button @click="$bvModal.hide('modal-produto-2')" class="btn pr-0 pt-0">
                                <i class="fa fa-times fs-25 fw-300"></i>
                            </button>
                        </div>
                        <div class="d-flex justify-content-center pb-30 align-items-center px-20">
                            <div class="col-lg-10">
                                <img src="../../assets/img/loja/relogio-de-mesa-com-camera.jpg" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="d-flex col-12 px-xs-0 align-items-stretch row mx-auto">
                            <div class="col-12 px-0">
                                <h5 class="text-center">
                                    Relógio de mesa com câmera escondida
                                </h5>
                                <p class="fw-500 mt-3 text-center">
                                    O relógio de mesa com câmera escondida é ótimo para saber o que acontece dentro da sua casa.
                                    Perfeito para o quarto das crianças, cozinha, e outros cômodos da casa.
                                </p>
                                <div class="col-12 mt-4 mx-auto">
                                    <h6 class="fs-15 fw-600 mt-15">
                                        Relevância: 91%
                                    </h6>
                                    <div class="progress px-0" style="height: 4px;">
                                        <div class="progress-bar bg-azul" role="progressbar" style="width: 91%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <a href="https://wa.me/554195190579?text=Olá,+estou+visitando+a+loja+da+ABRAIP+Detetives+e+gostaria+de+receber+mais+informações+sobre+o+relógio+de+mesa+com+câmera" target="_blank" rel="nopenner noreferrer" class="btn col-12 fs-xs-15 fw-500 d-flex align-items-center border-radius-20 justify-content-center mt-20 btn-info">
                                <i class="fa fa-shopping-basket mr-2 fs-15"></i> Compre pelo WhatsApp
                            </a>
                        </div>
                    </b-modal>
                    <b-modal
                        id="modal-produto-3"
                        centered
                        hide-header
                        hide-footer
                    >
                        <div class="d-flex justify-content-end">
                            <button @click="$bvModal.hide('modal-produto-3')" class="btn pr-0 pt-0">
                                <i class="fa fa-times fs-25 fw-300"></i>
                            </button>
                        </div>
                        <div class="d-flex justify-content-center pb-30 align-items-center px-20">
                            <div class="col-lg-10">
                                <img src="../../assets/img/loja/camera-bola-disfarcada.jpg" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="d-flex col-12 px-xs-0 align-items-stretch row mx-auto">
                            <div class="col-12 px-0">
                                <h5 class="text-center">
                                    Câmera em HD disfarçada de chaveiro
                                </h5>
                                <p class="fw-500 mt-3 text-center">
                                    A câmera em HD disfarçada de chaveiro é ótima para fazer filmagens
                                    de forma disfarçada. Pode posicionar sua chave (com o chaveiro) em um
                                    ponto estratégico e filmar todo o ambiente.
                                </p>
                                <div class="col-12 mt-4 mx-auto">
                                    <h6 class="fs-15 fw-600 mt-15">
                                        Relevância: 95%
                                    </h6>
                                    <div class="progress px-0" style="height: 4px;">
                                        <div class="progress-bar bg-azul" role="progressbar" style="width: 95%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <a href="https://wa.me/554195190579?text=Olá,+estou+visitando+a+loja+da+ABRAIP+Detetives+e+gostaria+de+receber+mais+informações+sobre+a+câmera+chaveiro+em+formato+de+bola" target="_blank" rel="nopenner noreferrer" class="btn col-12 fs-xs-15 fw-500 d-flex align-items-center border-radius-20 justify-content-center mt-20 btn-info">
                                <i class="fa fa-shopping-basket mr-2 fs-15"></i> Compre pelo WhatsApp
                            </a>
                        </div>
                    </b-modal>
                    <b-modal
                        id="modal-produto-4"
                        centered
                        hide-header
                        hide-footer
                    >
                        <div class="d-flex justify-content-end">
                            <button @click="$bvModal.hide('modal-produto-4')" class="btn pr-0 pt-0">
                                <i class="fa fa-times fs-25 fw-300"></i>
                            </button>
                        </div>
                        <div class="d-flex justify-content-center pb-30 align-items-center px-20">
                            <div class="col-lg-10">
                                <img src="../../assets/img/loja/smartwatch-com-camera.jpg" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="d-flex col-12 px-xs-0 align-items-stretch row mx-auto">
                            <div class="col-12 px-0">
                                <h5 class="text-center">
                                    Smartwatch com câmera escondida
                                </h5>
                                <p class="fw-500 mt-3 text-center">
                                    O Smartwatch com câmera escondida é ótimo para filmagens ao ar livre ou filmagens que
                                    precisam ser feitas a distância.
                                </p>
                                <div class="col-12 mt-4 mx-auto">
                                    <h6 class="fs-15 fw-600 mt-15">
                                        Relevância: 98%
                                    </h6>
                                    <div class="progress px-0" style="height: 4px;">
                                        <div class="progress-bar bg-azul" role="progressbar" style="width: 98%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <a href="https://wa.me/554195190579?text=Olá,+estou+visitando+a+loja+da+ABRAIP+Detetives+e+gostaria+de+receber+mais+informações+sobre+a+smartwatch+com+câmera+escondida" target="_blank" rel="nopenner noreferrer" class="btn col-12 fs-xs-15 fw-500 d-flex align-items-center border-radius-20 justify-content-center mt-20 btn-info">
                                <i class="fa fa-shopping-basket mr-2 fs-15"></i> Compre pelo WhatsApp
                            </a>
                        </div>
                    </b-modal>
                    <b-modal
                        id="modal-produto-5"
                        centered
                        hide-header
                        hide-footer
                    >
                        <div class="d-flex justify-content-end">
                            <button @click="$bvModal.hide('modal-produto-5')" class="btn pr-0 pt-0">
                                <i class="fa fa-times fs-25 fw-300"></i>
                            </button>
                        </div>
                        <div class="d-flex justify-content-center pb-30 align-items-center px-20">
                            <div class="col-lg-10">
                                <img src="../../assets/img/loja/camera-caneta.jpg" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="d-flex col-12 px-xs-0 align-items-stretch row mx-auto">
                            <div class="col-12 px-0">
                                <h5 class="text-center">
                                    Câmera em formato de caneta
                                </h5>
                                <p class="fw-500 mt-3 text-center">
                                    A câmera em formato de caneta é perfeita para filmar disfarçadamente,
                                    só precisa colocar ela em uma mochila, bolso ou carteira e filmar discretamente.
                                </p>
                                <div class="col-12 mt-4 mx-auto">
                                    <h6 class="fs-15 fw-600 mt-15">
                                        Relevância: 95%
                                    </h6>
                                    <div class="progress px-0" style="height: 4px;">
                                        <div class="progress-bar bg-azul" role="progressbar" style="width: 95%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <a href="https://wa.me/554195190579?text=Olá,+estou+visitando+a+loja+da+ABRAIP+Detetives+e+gostaria+de+receber+mais+informações+sobre+a+câmera+em+formato+de+caneta" target="_blank" rel="nopenner noreferrer" class="btn col-12 fs-xs-15 fw-500 d-flex align-items-center border-radius-20 justify-content-center mt-20 btn-info">
                                <i class="fa fa-shopping-basket mr-2 fs-15"></i> Compre pelo WhatsApp
                            </a>
                        </div>
                    </b-modal>
                    <b-modal
                        id="modal-produto-6"
                        centered
                        hide-header
                        hide-footer
                    >
                        <div class="d-flex justify-content-end">
                            <button @click="$bvModal.hide('modal-produto-6')" class="btn pr-0 pt-0">
                                <i class="fa fa-times fs-25 fw-300"></i>
                            </button>
                        </div>
                        <div class="d-flex justify-content-center pb-30 align-items-center px-20">
                            <div class="col-lg-10">
                                <img src="../../assets/img/loja/camera-dado.jpg" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="d-flex col-12 px-xs-0 align-items-stretch row mx-auto">
                            <div class="col-12 px-0">
                                <h5 class="text-center">
                                    Câmera disfarçada em formato de dado
                                </h5>
                                <p class="fw-500 mt-3 text-center">
                                    A câmera em formato de dado é muito boa para filmar ambientes fechados de forma
                                    contínua, é só posicionar ele em cima de alguma coisa e começar a gravar.
                                </p>
                                <div class="col-12 mt-4 mx-auto">
                                    <h6 class="fs-15 fw-600 mt-15">
                                        Relevância: 90%
                                    </h6>
                                    <div class="progress px-0" style="height: 4px;">
                                        <div class="progress-bar bg-azul" role="progressbar" style="width: 90%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <a href="https://wa.me/554195190579?text=Olá,+estou+visitando+a+loja+da+ABRAIP+Detetives+e+gostaria+de+receber+mais+informações+sobre+a+câmera+em+formato+de+dado" target="_blank" rel="nopenner noreferrer" class="btn col-12 fs-xs-15 fw-500 d-flex align-items-center border-radius-20 justify-content-center mt-20 btn-info">
                                <i class="fa fa-shopping-basket mr-2 fs-15"></i> Compre pelo WhatsApp
                            </a>
                        </div>
                    </b-modal>
                    <b-modal
                        id="modal-produto-7"
                        centered
                        hide-header
                        hide-footer
                    >
                        <div class="d-flex justify-content-end">
                            <button @click="$bvModal.hide('modal-produto-7')" class="btn pr-0 pt-0">
                                <i class="fa fa-times fs-25 fw-300"></i>
                            </button>
                        </div>
                        <div class="d-flex justify-content-center pb-30 align-items-center px-20">
                            <div class="col-lg-10">
                                <img src="../../assets/img/loja/camera-hub-usb.jpg" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="d-flex col-12 px-xs-0 align-items-stretch row mx-auto">
                            <div class="col-12 px-0">
                                <h5 class="text-center">
                                    Câmera acoplada a um adaptador USB
                                </h5>
                                <p class="fw-500 mt-3 text-center">
                                    A câmera acoplada no adaptador USB é ótima para filmar ambientes por
                                    longos períodos. Ele funciona perfeitamente como adaptador USB e como
                                    câmera escondida.
                                </p>
                                <div class="col-12 mt-4 mx-auto">
                                    <h6 class="fs-15 fw-600 mt-15">
                                        Relevância: 95%
                                    </h6>
                                    <div class="progress px-0" style="height: 4px;">
                                        <div class="progress-bar bg-azul" role="progressbar" style="width: 95%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <a href="https://wa.me/554195190579?text=Olá,+estou+visitando+a+loja+da+ABRAIP+Detetives+e+gostaria+de+receber+mais+informações+sobre+a+câmera+acoplada+em+adaptador+USB" target="_blank" rel="nopenner noreferrer" class="btn col-12 fs-xs-15 fw-500 d-flex align-items-center border-radius-20 justify-content-center mt-20 btn-info">
                                <i class="fa fa-shopping-basket mr-2 fs-15"></i> Compre pelo WhatsApp
                            </a>
                        </div>
                    </b-modal>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      SelectProdutos: true,
      SelectCamera: false,
      SelectGravadores: false,
      SelectLocalizadores: false,
      SelectEscutas: false,

      ViewCamera: true,
      ViewGravadores: true,
      ViewLocalizadores: true,
      ViewEscutas: true,

      SemProdutos: false,

      ShowDropDownMobile: false
    }
  },
  methods: {
    VerificaProdutos () {
      if (this.SelectProdutos === false &&
          this.SelectCamera === false &&
          this.SelectGravadores === false &&
          this.SelectLocalizadores === false &&
          this.SelectEscutas === false
      ) {
        this.SemProdutos = true
        this.ViewCamera = false
        this.ViewGravadores = false
        this.ViewLocalizadores = false
        this.ViewEscutas = false
      } else {
        this.SemProdutos = false
      }
    },
    TodosProdutos () {
      this.SelectProdutos = !this.SelectProdutos

      this.ViewCamera = true
      this.ViewGravadores = true
      this.ViewLocalizadores = true
      this.ViewEscutas = true

      this.SelectCamera = false
      this.SelectGravadores = false
      this.SelectLocalizadores = false
      this.SelectEscutas = false

      this.VerificaProdutos()
    },
    Camera () {
      this.SelectCamera = !this.SelectCamera
      if (this.SelectCamera === true) {
        this.ViewCamera = false
      } else {
        this.ViewCamera = true
      }
      if (this.SelectProdutos === true) {
        this.ViewGravadores = false
        this.ViewLocalizadores = false
        this.ViewEscutas = false
      }
      this.ViewCamera = !this.ViewCamera
      this.SelectProdutos = false
      this.VerificaProdutos()
    },
    Gravadores () {
      this.SelectGravadores = !this.SelectGravadores
      if (this.SelectGravadores === true) {
        this.ViewGravadores = false
      } else {
        this.ViewGravadores = true
      }
      if (this.SelectProdutos === true) {
        this.ViewCamera = false
        this.ViewLocalizadores = false
        this.ViewEscutas = false
      }
      this.ViewGravadores = !this.ViewGravadores
      this.SelectProdutos = false
      this.VerificaProdutos()
    },
    Localizadores () {
      this.SelectLocalizadores = !this.SelectLocalizadores
      if (this.SelectLocalizadores === true) {
        this.ViewLocalizadores = false
      } else {
        this.ViewLocalizadores = true
      }
      if (this.SelectProdutos === true) {
        this.ViewCamera = false
        this.ViewGravadores = false
        this.ViewEscutas = false
      }
      this.ViewLocalizadores = !this.ViewLocalizadores
      this.SelectProdutos = false
      this.VerificaProdutos()
    },
    Escutas () {
      this.SelectEscutas = !this.SelectEscutas
      if (this.SelectEscutas === true) {
        this.ViewEscutas = false
      } else {
        this.ViewEscutas = true
      }
      if (this.SelectProdutos === true) {
        this.ViewCamera = false
        this.ViewGravadores = false
        this.ViewLocalizadores = false
      }
      this.ViewEscutas = !this.ViewEscutas
      this.SelectProdutos = false
      this.VerificaProdutos()
    },
    DropdownButton () {
      if (this.ShowDropDownMobile === true) {
        this.ShowDropDownMobile = false
      } else {
        this.ShowDropDownMobile = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    .min-height-900{
        min-height: 400px;
    }
    @media (min-width: 1px) {
        .height-img-loja{
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }
    @media (min-width: 576px) {
        .height-img-loja{
            height: 200px;
        }
    }
    .img-fluid{
        max-height: 100% !important;
    }
    .progress{
        background-color: #c7c7c7;
    }
    .borda-marcacao{
        height: 2px;
        width: 100px;
        position: absolute;
        bottom: -6px;
        left: 15px;
        background-color: var(--azul);
    }
    .animate__animated{
        animation-duration: .5s !important;
        -o-animation-duration: .5s !important;
        -moz-animation-duration: .5s !important;
        -webkit-animation-duration: .5s !important;
    }
    .borda-marcacao-categorias{
        height: 2px;
        width: 0px;
        position: absolute;
        bottom: -1px;
        background-color: var(--azul);
        transition: all .3s;
        -o-transition: all .3s;
        -moz-transition: all .3s;
        -webkit-transition: all .3s;
        opacity: 0;
    }
    .bg-cinza{
        background-color: #d6d6d6;
    }
    .borda-caixa-loja{
        border: 1px solid transparent;
    }
    .dropdown-mobile-loja{
        width: 270px;
        position: absolute;
        top: 37px;
        right: 0;
        z-index: 5 !important;
    }
    .btn-dropdown{
        border-radius: 0 !important;
    }
    .btn-dropdown:hover .borda-marcacao-categorias{
        height: 2px;
        width: 50px;
        position: absolute;
        bottom: -1px;
        background-color: var(--azul);
        opacity: 1;
    }
    .caixa-select{
        width: 30px;
        padding: 1px;
        border-radius: 10px;
        transition: all .3s;
        -o-transition: all .3s;
        -moz-transition: all .3s;
        -webkit-transition: all .3s;
    }
    .bolinha-select{
        border-radius: 50%;
        width: 12px;
        height: 12px;
        transition: all .3s;
        -o-transition: all .3s;
        -moz-transition: all .3s;
        -webkit-transition: all .3s;
    }
    .bolinha-off{
        transform: translateX(0px);
        -o-transform: translateX(0px);
        -moz-transform: translateX(0px);
        -webkit-transform: translateX(0px);
    }
    .bolinha-on{
        transform: translateX(14px);
        -o-transform: translateX(14px);
        -moz-transform: translateX(14px);
        -webkit-transform: translateX(14px);
    }
    .fa-circle{
        margin-bottom: 2px;
    }
</style>
