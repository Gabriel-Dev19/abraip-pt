import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../components/sections/Sobre.vue')
  },
  {
    path: '/politicas-de-privacidade',
    component: () => import('../components/sections/Politicas.vue')
  },
  {
    path: '/detective-privado-em-Aveiro',
    component: () => import('../components/estados/Aveiro/RouterViewAveiro.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Aveiro/Aveiro.vue')
      },
      {
        path: '/detective-privado-em-Aveiro/detective-privado-em-Agueda',
        component: () => import('../components/estados/Aveiro/cidades/Agueda.vue')
      },
      {
        path: '/detective-privado-em-Aveiro/detective-privado-em-Aveiro',
        component: () => import('../components/estados/Aveiro/cidades/Aveiro.vue')
      },
      {
        path: '/detective-privado-em-Aveiro/detective-privado-em-Oliveira-de-Azemeis',
        component: () => import('../components/estados/Aveiro/cidades/Oliveira-de-Azemeis.vue')
      },
      {
        path: '/detective-privado-em-Aveiro/detective-privado-em-Ovar',
        component: () => import('../components/estados/Aveiro/cidades/Ovar.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Braga',
    component: () => import('../components/estados/Braga/RouterViewBraga.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Braga/Braga.vue')
      },
      {
        path: '/detective-privado-em-Braga/detective-privado-em-Barcelos',
        component: () => import('../components/estados/Braga/cidades/Barcelos.vue')
      },
      {
        path: '/detective-privado-em-Braga/detective-privado-em-Braga',
        component: () => import('../components/estados/Braga/cidades/Braga.vue')
      },
      {
        path: '/detective-privado-em-Braga/detective-privado-em-Fafe',
        component: () => import('../components/estados/Braga/cidades/Fafe.vue')
      },
      {
        path: '/detective-privado-em-Braga/detective-privado-em-Guimaraes',
        component: () => import('../components/estados/Braga/cidades/Guimaraes.vue')
      },
      {
        path: '/detective-privado-em-Braga/detective-privado-em-Vila-Nova-de-Famalicao',
        component: () => import('../components/estados/Braga/cidades/Vila-Nova-de-Famalicao.vue')
      },
      {
        path: '/detective-privado-em-Braga/detective-privado-em-Vila-Verde',
        component: () => import('../components/estados/Braga/cidades/Vila-Verde.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Braganca',
    component: () => import('../components/estados/Braganca/RouterViewBraganca.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Braganca/Braganca.vue')
      },
      {
        path: '/detective-privado-em-Braganca/detective-privado-em-Braganca',
        component: () => import('../components/estados/Braganca/cidades/Braganca.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Castelo-Branco',
    component: () => import('../components/estados/Castelo-Branco/RouterViewCasteloBranco.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Castelo-Branco/Castelo-Branco.vue')
      },
      {
        path: '/detective-privado-em-Castelo-Branco/detective-privado-em-Castelo-Branco',
        component: () => import('../components/estados/Castelo-Branco/cidades/Castelo-Branco.vue')
      },
      {
        path: '/detective-privado-em-Castelo-Branco/detective-privado-em-Covilha',
        component: () => import('../components/estados/Castelo-Branco/cidades/Covilha.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Coimbra',
    component: () => import('../components/estados/Coimbra/RouterViewCoimbra.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Coimbra/Coimbra.vue')
      },
      {
        path: '/detective-privado-em-Coimbra/detective-privado-em-Coimbra',
        component: () => import('../components/estados/Coimbra/cidades/Coimbra.vue')
      },
      {
        path: '/detective-privado-em-Coimbra/detective-privado-em-Figueira-da-Foz',
        component: () => import('../components/estados/Coimbra/cidades/Figueira-da-Foz.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Evora',
    component: () => import('../components/estados/Evora/RouterViewEvora.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Evora/Evora.vue')
      },
      {
        path: '/detective-privado-em-Evora/detective-privado-em-Evora',
        component: () => import('../components/estados/Evora/cidades/Evora.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Faro',
    component: () => import('../components/estados/Faro/RouterViewFaro.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Faro/Faro.vue')
      },
      {
        path: '/detective-privado-em-Faro/detective-privado-em-Albufeira',
        component: () => import('../components/estados/Faro/cidades/Albufeira.vue')
      },
      {
        path: '/detective-privado-em-Faro/detective-privado-em-Faro',
        component: () => import('../components/estados/Faro/cidades/Faro.vue')
      },
      {
        path: '/detective-privado-em-Faro/detective-privado-em-Loule',
        component: () => import('../components/estados/Faro/cidades/Loule.vue')
      },
      {
        path: '/detective-privado-em-Faro/detective-privado-em-Olhao',
        component: () => import('../components/estados/Faro/cidades/Olhao.vue')
      },
      {
        path: '/detective-privado-em-Faro/detective-privado-em-Portimao',
        component: () => import('../components/estados/Faro/cidades/Portimao.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Guarda',
    component: () => import('../components/estados/Guarda/RouterViewGuarda.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Guarda/Guarda.vue')
      },
      {
        path: '/detective-privado-em-Guarda/detective-privado-em-Guarda',
        component: () => import('../components/estados/Guarda/cidades/Guarda.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Leiria',
    component: () => import('../components/estados/Leiria/RouterViewLeiria.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Leiria/Leiria.vue')
      },
      {
        path: '/detective-privado-em-Leiria/detective-privado-em-Caldas-da-Rainha',
        component: () => import('../components/estados/Leiria/cidades/Caldas-da-Rainha.vue')
      },
      {
        path: '/detective-privado-em-Leiria/detective-privado-em-Leiria',
        component: () => import('../components/estados/Leiria/cidades/Leiria.vue')
      },
      {
        path: '/detective-privado-em-Leiria/detective-privado-em-Pombal',
        component: () => import('../components/estados/Leiria/cidades/Pombal.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Lisboa',
    component: () => import('../components/estados/Lisboa/RouterViewLisboa.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Lisboa/Lisboa.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Alcobaca',
        component: () => import('../components/estados/Lisboa/cidades/Alcobaca.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Alenquer',
        component: () => import('../components/estados/Lisboa/cidades/Alenquer.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Almada',
        component: () => import('../components/estados/Lisboa/cidades/Almada.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Amadora',
        component: () => import('../components/estados/Lisboa/cidades/Amadora.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Barreiro',
        component: () => import('../components/estados/Lisboa/cidades/Barreiro.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Cascaes',
        component: () => import('../components/estados/Lisboa/cidades/Cascaes.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Lisboa',
        component: () => import('../components/estados/Lisboa/cidades/Lisboa.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Loures',
        component: () => import('../components/estados/Lisboa/cidades/Loures.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Mafra',
        component: () => import('../components/estados/Lisboa/cidades/Mafra.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Moita',
        component: () => import('../components/estados/Lisboa/cidades/Moita.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Montijo',
        component: () => import('../components/estados/Lisboa/cidades/Montijo.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Odivelas',
        component: () => import('../components/estados/Lisboa/cidades/Odivelas.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Oeiras',
        component: () => import('../components/estados/Lisboa/cidades/Oeiras.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Palmela',
        component: () => import('../components/estados/Lisboa/cidades/Palmela.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Santarem',
        component: () => import('../components/estados/Lisboa/cidades/Santarem.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Sesimbra',
        component: () => import('../components/estados/Lisboa/cidades/Sesimbra.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Setubal',
        component: () => import('../components/estados/Lisboa/cidades/Setubal.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Sintra',
        component: () => import('../components/estados/Lisboa/cidades/Sintra.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Torres-Vedras',
        component: () => import('../components/estados/Lisboa/cidades/Torres-Vedras.vue')
      },
      {
        path: '/detective-privado-em-Lisboa/detective-privado-em-Vila-Franca-de-Xira',
        component: () => import('../components/estados/Lisboa/cidades/Vila-Franca-de-Xira.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Portalegre',
    component: () => import('../components/estados/Portalegre/RouterViewPortalegre.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Portalegre/Portalegre.vue')
      },
      {
        path: '/detective-privado-em-Portalegre/detective-privado-em-Portalegre',
        component: () => import('../components/estados/Portalegre/cidades/Portalegre.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Porto',
    component: () => import('../components/estados/Porto/RouterViewPorto.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Porto/Porto.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Amarante',
        component: () => import('../components/estados/Porto/cidades/Amarante.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Felgueiras',
        component: () => import('../components/estados/Porto/cidades/Felgueiras.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Gondomar',
        component: () => import('../components/estados/Porto/cidades/Gondomar.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Lousada',
        component: () => import('../components/estados/Porto/cidades/Lousada.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Maia',
        component: () => import('../components/estados/Porto/cidades/Maia.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Marco-de-Canaveses',
        component: () => import('../components/estados/Porto/cidades/Marco-de-Canaveses.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Matosinhos',
        component: () => import('../components/estados/Porto/cidades/Matosinhos.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Pacos-de-Ferreira',
        component: () => import('../components/estados/Porto/cidades/Pacos-de-Ferreira.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Paredes',
        component: () => import('../components/estados/Porto/cidades/Paredes.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Penafiel',
        component: () => import('../components/estados/Porto/cidades/Penafiel.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Porto',
        component: () => import('../components/estados/Porto/cidades/Porto.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Povoa-de-Varzim',
        component: () => import('../components/estados/Porto/cidades/Povoa-de-Varzim.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Santa-Maria-de-Feira',
        component: () => import('../components/estados/Porto/cidades/Santa-Maria-de-Feira.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Santo-Tirso',
        component: () => import('../components/estados/Porto/cidades/Santo-Tirso.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Valongo',
        component: () => import('../components/estados/Porto/cidades/Valongo.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Vila-do-Conde',
        component: () => import('../components/estados/Porto/cidades/Vila-do-Conde.vue')
      },
      {
        path: '/detective-privado-em-Porto/detective-privado-em-Vila-Nova-de-Gaia',
        component: () => import('../components/estados/Porto/cidades/Vila-Nova-de-Gaia.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Santarem',
    component: () => import('../components/estados/Santarem/RouterViewSantarem.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Santarem/Santarem.vue')
      },
      {
        path: '/detective-privado-em-Santarem/detective-privado-em-Ourem',
        component: () => import('../components/estados/Santarem/cidades/Ourem.vue')
      },
      {
        path: '/detective-privado-em-Santarem/detective-privado-em-Santarem',
        component: () => import('../components/estados/Santarem/cidades/Santarem.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Setubal',
    component: () => import('../components/estados/Setubal/RouterViewSetubal.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Setubal/Setubal.vue')
      },
      {
        path: '/detective-privado-em-Setubal/detective-privado-em-Seixal',
        component: () => import('../components/estados/Setubal/cidades/Seixal.vue')
      },
      {
        path: '/detective-privado-em-Setubal/detective-privado-em-Setubal',
        component: () => import('../components/estados/Setubal/cidades/Setubal.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Viana-do-Castelo',
    component: () => import('../components/estados/Viana-do-Castelo/RouterViewVianaDoCastelo.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Viana-do-Castelo/Viana-do-Castelo.vue')
      },
      {
        path: '/detective-privado-em-Viana-do-Castelo/detective-privado-em-Viana-do-Castelo',
        component: () => import('../components/estados/Viana-do-Castelo/cidades/Viana-do-Castelo.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Vila-Real',
    component: () => import('../components/estados/Vila-Real/RouterViewVilaReal.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Vila-Real/Vila-Real.vue')
      },
      {
        path: '/detective-privado-em-Vila-Real/detective-privado-em-Vila-Real',
        component: () => import('../components/estados/Vila-Real/cidades/Vila-Real.vue')
      }
    ]
  },
  {
    path: '/detective-privado-em-Viseu',
    component: () => import('../components/estados/Viseu/RouterViewViseu.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Viseu/Viseu.vue')
      },
      {
        path: '/detective-privado-em-Viseu/detective-privado-em-Viseu',
        component: () => import('../components/estados/Viseu/cidades/Viseu.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
