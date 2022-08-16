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
    path: '/detetive-particular-em-Aveiro',
    component: () => import('../components/estados/Aveiro/RouterViewAveiro.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Aveiro/Aveiro.vue')
      },
      {
        path: '/detetive-particular-em-Aveiro/detetive-particular-em-Agueda',
        component: () => import('../components/estados/Aveiro/cidades/Agueda.vue')
      },
      {
        path: '/detetive-particular-em-Aveiro/detetive-particular-em-Aveiro',
        component: () => import('../components/estados/Aveiro/cidades/Aveiro.vue')
      },
      {
        path: '/detetive-particular-em-Aveiro/detetive-particular-em-Oliveira-de-Azemeis',
        component: () => import('../components/estados/Aveiro/cidades/Oliveira-de-Azemeis.vue')
      },
      {
        path: '/detetive-particular-em-Aveiro/detetive-particular-em-Ovar',
        component: () => import('../components/estados/Aveiro/cidades/Ovar.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-em-Braga',
    component: () => import('../components/estados/Braga/RouterViewBraga.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Braga/Braga.vue')
      },
      {
        path: '/detetive-particular-em-Braga/detetive-particular-em-Barcelos',
        component: () => import('../components/estados/Braga/cidades/Barcelos.vue')
      },
      {
        path: '/detetive-particular-em-Braga/detetive-particular-em-Braga',
        component: () => import('../components/estados/Braga/cidades/Braga.vue')
      },
      {
        path: '/detetive-particular-em-Braga/detetive-particular-em-Fafe',
        component: () => import('../components/estados/Braga/cidades/Fafe.vue')
      },
      {
        path: '/detetive-particular-em-Braga/detetive-particular-em-Guimaraes',
        component: () => import('../components/estados/Braga/cidades/Guimaraes.vue')
      },
      {
        path: '/detetive-particular-em-Braga/detetive-particular-em-Vila-Nova-de-Famalicao',
        component: () => import('../components/estados/Braga/cidades/Vila-Nova-de-Famalicao.vue')
      },
      {
        path: '/detetive-particular-em-Braga/detetive-particular-em-Vila-Verde',
        component: () => import('../components/estados/Braga/cidades/Vila-Verde.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-em-Braganca',
    component: () => import('../components/estados/Braganca/RouterViewBraganca.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Braganca/Braganca.vue')
      },
      {
        path: '/detetive-particular-em-Braganca/detetive-particular-em-Braganca',
        component: () => import('../components/estados/Braganca/cidades/Braganca.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-em-Castelo-Branco',
    component: () => import('../components/estados/Castelo-Branco/RouterViewCasteloBranco.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Castelo-Branco/Castelo-Branco.vue')
      },
      {
        path: '/detetive-particular-em-Castelo-Branco/detetive-particular-em-Castelo-Branco',
        component: () => import('../components/estados/Castelo-Branco/cidades/Castelo-Branco.vue')
      },
      {
        path: '/detetive-particular-em-Castelo-Branco/detetive-particular-em-Covilha',
        component: () => import('../components/estados/Castelo-Branco/cidades/Covilha.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-em-Coimbra',
    component: () => import('../components/estados/Coimbra/RouterViewCoimbra.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Coimbra/Coimbra.vue')
      },
      {
        path: '/detetive-particular-em-Coimbra/detetive-particular-em-Coimbra',
        component: () => import('../components/estados/Coimbra/cidades/Coimbra.vue')
      },
      {
        path: '/detetive-particular-em-Coimbra/detetive-particular-em-Figueira-da-Foz',
        component: () => import('../components/estados/Coimbra/cidades/Figueira-da-Foz.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-em-Evora',
    component: () => import('../components/estados/Evora/RouterViewEvora.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Evora/Evora.vue')
      },
      {
        path: '/detetive-particular-em-Evora/detetive-particular-em-Evora',
        component: () => import('../components/estados/Evora/cidades/Evora.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-em-Faro',
    component: () => import('../components/estados/Faro/RouterViewFaro.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Faro/Faro.vue')
      },
      {
        path: '/detetive-particular-em-Faro/detetive-particular-em-Albufeira',
        component: () => import('../components/estados/Faro/cidades/Albufeira.vue')
      },
      {
        path: '/detetive-particular-em-Faro/detetive-particular-em-Faro',
        component: () => import('../components/estados/Faro/cidades/Faro.vue')
      },
      {
        path: '/detetive-particular-em-Faro/detetive-particular-em-Loule',
        component: () => import('../components/estados/Faro/cidades/Loule.vue')
      },
      {
        path: '/detetive-particular-em-Faro/detetive-particular-em-Olhao',
        component: () => import('../components/estados/Faro/cidades/Olhao.vue')
      },
      {
        path: '/detetive-particular-em-Faro/detetive-particular-em-Portimao',
        component: () => import('../components/estados/Faro/cidades/Portimao.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-em-Guarda',
    component: () => import('../components/estados/Guarda/RouterViewGuarda.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Guarda/Guarda.vue')
      },
      {
        path: '/detetive-particular-em-Guarda/detetive-particular-em-Guarda',
        component: () => import('../components/estados/Guarda/cidades/Guarda.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-em-Leiria',
    component: () => import('../components/estados/Leiria/RouterViewLeiria.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Leiria/Leiria.vue')
      },
      {
        path: '/detetive-particular-em-Leiria/detetive-particular-em-Caldas-da-Rainha',
        component: () => import('../components/estados/Leiria/cidades/Caldas-da-Rainha.vue')
      },
      {
        path: '/detetive-particular-em-Leiria/detetive-particular-em-Leiria',
        component: () => import('../components/estados/Leiria/cidades/Leiria.vue')
      },
      {
        path: '/detetive-particular-em-Leiria/detetive-particular-em-Pombal',
        component: () => import('../components/estados/Leiria/cidades/Pombal.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-em-Lisboa',
    component: () => import('../components/estados/Lisboa/RouterViewLisboa.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Lisboa/Lisboa.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Alcobaca',
        component: () => import('../components/estados/Lisboa/cidades/Alcobaca.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Alenquer',
        component: () => import('../components/estados/Lisboa/cidades/Alenquer.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Almada',
        component: () => import('../components/estados/Lisboa/cidades/Almada.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Amadora',
        component: () => import('../components/estados/Lisboa/cidades/Amadora.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Barreiro',
        component: () => import('../components/estados/Lisboa/cidades/Barreiro.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Cascaes',
        component: () => import('../components/estados/Lisboa/cidades/Cascaes.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Lisboa',
        component: () => import('../components/estados/Lisboa/cidades/Lisboa.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Loures',
        component: () => import('../components/estados/Lisboa/cidades/Loures.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Mafra',
        component: () => import('../components/estados/Lisboa/cidades/Mafra.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Moita',
        component: () => import('../components/estados/Lisboa/cidades/Moita.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Montijo',
        component: () => import('../components/estados/Lisboa/cidades/Montijo.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Odivelas',
        component: () => import('../components/estados/Lisboa/cidades/Odivelas.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Oeiras',
        component: () => import('../components/estados/Lisboa/cidades/Oeiras.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Palmela',
        component: () => import('../components/estados/Lisboa/cidades/Palmela.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Santarem',
        component: () => import('../components/estados/Lisboa/cidades/Santarem.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Sesimbra',
        component: () => import('../components/estados/Lisboa/cidades/Sesimbra.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Setubal',
        component: () => import('../components/estados/Lisboa/cidades/Setubal.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Sintra',
        component: () => import('../components/estados/Lisboa/cidades/Sintra.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Torres-Vedras',
        component: () => import('../components/estados/Lisboa/cidades/Torres-Vedras.vue')
      },
      {
        path: '/detetive-particular-em-Lisboa/detetive-particular-em-Vila-Franca-de-Xira',
        component: () => import('../components/estados/Lisboa/cidades/Vila-Franca-de-Xira.vue')
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
