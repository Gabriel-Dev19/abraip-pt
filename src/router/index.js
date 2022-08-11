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
    path: '/detetive-particular-em-Santa-Catarina',
    component: () => import('../components/estados/Santa-Catarina/RouterViewSantacatarina.vue'),
    children: [
      // Cidades A
      {
        path: '/',
        component: () => import('../components/estados/Santa-Catarina/Santa-Catarina.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Agrolandia',
        component: () => import('../components/estados/Santa-Catarina/cidades/Agrolandia.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Agronomica',
        component: () => import('../components/estados/Santa-Catarina/cidades/Agronomica.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Apiuna',
        component: () => import('../components/estados/Santa-Catarina/cidades/Apiuna.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Araquari',
        component: () => import('../components/estados/Santa-Catarina/cidades/Araquari.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ascurra',
        component: () => import('../components/estados/Santa-Catarina/cidades/Ascurra.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Atalanta',
        component: () => import('../components/estados/Santa-Catarina/cidades/Atalanta.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Aurora',
        component: () => import('../components/estados/Santa-Catarina/cidades/Aurora.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Aguas-Mornas',
        component: () => import('../components/estados/Santa-Catarina/cidades/Aguas-Mornas.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Alfredo-Wagner',
        component: () => import('../components/estados/Santa-Catarina/cidades/Alfredo-Wagner.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Angelina',
        component: () => import('../components/estados/Santa-Catarina/cidades/Angelina.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Anitapolis',
        component: () => import('../components/estados/Santa-Catarina/cidades/Anitapolis.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Antonio-Carlos',
        component: () => import('../components/estados/Santa-Catarina/cidades/Antonio-Carlos.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ararangua',
        component: () => import('../components/estados/Santa-Catarina/cidades/Ararangua.vue')
      },
      // Cidades B
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Barra-do-Sul',
        component: () => import('../components/estados/Santa-Catarina/cidades/Balneario-Barra-do-Sul.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Camboriu',
        component: () => import('../components/estados/Santa-Catarina/cidades/Balneario-Camboriu.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Picarras',
        component: () => import('../components/estados/Santa-Catarina/cidades/Balneario-Picarras.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Barra-Velha',
        component: () => import('../components/estados/Santa-Catarina/cidades/Barra-Velha.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Bela-Vista-do-Toldo',
        component: () => import('../components/estados/Santa-Catarina/cidades/Bela-Vista-do-Toldo.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Benedito-Novo',
        component: () => import('../components/estados/Santa-Catarina/cidades/Benedito-Novo.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Blumenal',
        component: () => import('../components/estados/Santa-Catarina/cidades/Blumenal.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Bombinhas',
        component: () => import('../components/estados/Santa-Catarina/cidades/Bombinhas.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Botuvera',
        component: () => import('../components/estados/Santa-Catarina/cidades/Botuvera.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Braco-do-Trombudo',
        component: () => import('../components/estados/Santa-Catarina/cidades/Braco-do-Trombudo.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Brusque',
        component: () => import('../components/estados/Santa-Catarina/cidades/Brusque.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Arroio-do-Silva',
        component: () => import('../components/estados/Santa-Catarina/cidades/Balneario-Arroio-do-Silva.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Gaivota',
        component: () => import('../components/estados/Santa-Catarina/cidades/Balneario-Gaivota.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Rincao',
        component: () => import('../components/estados/Santa-Catarina/cidades/Balneario-Rincao.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Biguacu',
        component: () => import('../components/estados/Santa-Catarina/cidades/Biguacu.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Braco-do-Norte',
        component: () => import('../components/estados/Santa-Catarina/cidades/Braco-do-Norte.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Camboriu',
        component: () => import('../components/estados/Santa-Catarina/cidades/Camboriu.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Cacador',
        component: () => import('../components/estados/Santa-Catarina/cidades/Cacador.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Campos-Novos',
        component: () => import('../components/estados/Santa-Catarina/cidades/Campos-Novos.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Chapeco',
        component: () => import('../components/estados/Santa-Catarina/cidades/Chapeco.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Concordia',
        component: () => import('../components/estados/Santa-Catarina/cidades/Concordia.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Campo-Alegre',
        component: () => import('../components/estados/Santa-Catarina/cidades/Campo-Alegre.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Canoinhas',
        component: () => import('../components/estados/Santa-Catarina/cidades/Canoinhas.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Chapadao-do-Lageado',
        component: () => import('../components/estados/Santa-Catarina/cidades/Chapadao-do-Lageado.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Corupa',
        component: () => import('../components/estados/Santa-Catarina/cidades/Corupa.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Canelinha',
        component: () => import('../components/estados/Santa-Catarina/cidades/Canelinha.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Capivari-de-Baixo',
        component: () => import('../components/estados/Santa-Catarina/cidades/Capivari-de-Baixo.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Cocal-do-Sul',
        component: () => import('../components/estados/Santa-Catarina/cidades/Cocal-do-Sul.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Criciuma',
        component: () => import('../components/estados/Santa-Catarina/cidades/Criciuma.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Dona-Emma',
        component: () => import('../components/estados/Santa-Catarina/cidades/Dona-Emma.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Doutor-Pedrinho',
        component: () => import('../components/estados/Santa-Catarina/cidades/Doutor-Pedrinho.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Dionisio-Cerqueira',
        component: () => import('../components/estados/Santa-Catarina/cidades/Dionisio-Cerqueira.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ermo',
        component: () => import('../components/estados/Santa-Catarina/cidades/Ermo.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Florianopolis',
        component: () => import('../components/estados/Santa-Catarina/cidades/Florianopolis.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Forquilhinha',
        component: () => import('../components/estados/Santa-Catarina/cidades/Forquilhinha.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Fraiburgo',
        component: () => import('../components/estados/Santa-Catarina/cidades/Fraiburgo.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Garuva',
        component: () => import('../components/estados/Santa-Catarina/cidades/Garuva.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Gaspar',
        component: () => import('../components/estados/Santa-Catarina/cidades/Gaspar.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Guabiruba',
        component: () => import('../components/estados/Santa-Catarina/cidades/Guabiruba.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Guanamirim',
        component: () => import('../components/estados/Santa-Catarina/cidades/Guanamirim.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Governador-Celso-Ramos',
        component: () => import('../components/estados/Santa-Catarina/cidades/Governador-Celso-Ramos.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Grao-Para',
        component: () => import('../components/estados/Santa-Catarina/cidades/Grao-Para.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Gravatal',
        component: () => import('../components/estados/Santa-Catarina/cidades/Gravatal.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ibirama',
        component: () => import('../components/estados/Santa-Catarina/cidades/Ibirama.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ilhota',
        component: () => import('../components/estados/Santa-Catarina/cidades/Ilhota.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Imbuia',
        component: () => import('../components/estados/Santa-Catarina/cidades/Imbuia.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Indaial',
        component: () => import('../components/estados/Santa-Catarina/cidades/Indaial.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Irineopolis',
        component: () => import('../components/estados/Santa-Catarina/cidades/Irineopolis.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itaiopolis',
        component: () => import('../components/estados/Santa-Catarina/cidades/Itaiopolis.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itajai',
        component: () => import('../components/estados/Santa-Catarina/cidades/Itajai.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itapema',
        component: () => import('../components/estados/Santa-Catarina/cidades/Itapema.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itapoa',
        component: () => import('../components/estados/Santa-Catarina/cidades/Itapoa.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ituporanga',
        component: () => import('../components/estados/Santa-Catarina/cidades/Ituporanga.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Icara',
        component: () => import('../components/estados/Santa-Catarina/cidades/Icara.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Imarui',
        component: () => import('../components/estados/Santa-Catarina/cidades/Imarui.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Imbituba',
        component: () => import('../components/estados/Santa-Catarina/cidades/Imbituba.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Joinville',
        component: () => import('../components/estados/Santa-Catarina/cidades/Joinville.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jaguara-do-Sul',
        component: () => import('../components/estados/Santa-Catarina/cidades/Jaguara-do-Sul.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jose-Boiteux',
        component: () => import('../components/estados/Santa-Catarina/cidades/Jose-Boiteux.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jacinto-Machado',
        component: () => import('../components/estados/Santa-Catarina/cidades/Jacinto-Machado.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jaguaruna',
        component: () => import('../components/estados/Santa-Catarina/cidades/Jaguaruna.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Joacaba',
        component: () => import('../components/estados/Santa-Catarina/cidades/Joacaba.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Laurentino',
        component: () => import('../components/estados/Santa-Catarina/cidades/Laurentino.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Lages',
        component: () => import('../components/estados/Santa-Catarina/cidades/Lages.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Lauro-Muller',
        component: () => import('../components/estados/Santa-Catarina/cidades/Lauro-Muller.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Leoberto-Leal',
        component: () => import('../components/estados/Santa-Catarina/cidades/Leoberto-Leal.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Laguna',
        component: () => import('../components/estados/Santa-Catarina/cidades/Laguna.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Lontras',
        component: () => import('../components/estados/Santa-Catarina/cidades/Lontras.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Luis-Alves',
        component: () => import('../components/estados/Santa-Catarina/cidades/Luis-Alves.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Mafra',
        component: () => import('../components/estados/Santa-Catarina/cidades/Mafra.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Major-Vieira',
        component: () => import('../components/estados/Santa-Catarina/cidades/Major-Vieira.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Massaranduba',
        component: () => import('../components/estados/Santa-Catarina/cidades/Massaranduba.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Major-Gercino',
        component: () => import('../components/estados/Santa-Catarina/cidades/Major-Gercino.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Maracaja',
        component: () => import('../components/estados/Santa-Catarina/cidades/Maracaja.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Morro-da-Fumaca',
        component: () => import('../components/estados/Santa-Catarina/cidades/Morro-da-Fumaca.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Mirim-Doce',
        component: () => import('../components/estados/Santa-Catarina/cidades/Mirim-Doce.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Monte-Castelo',
        component: () => import('../components/estados/Santa-Catarina/cidades/Monte-Castelo.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Morro-Grande',
        component: () => import('../components/estados/Santa-Catarina/cidades/Morro-Grande.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Navegantes',
        component: () => import('../components/estados/Santa-Catarina/cidades/Navegantes.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Nova-Trento',
        component: () => import('../components/estados/Santa-Catarina/cidades/Nova-Trento.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Orleans',
        component: () => import('../components/estados/Santa-Catarina/cidades/Orleans.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Papanduva',
        component: () => import('../components/estados/Santa-Catarina/cidades/Papanduva.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Penha',
        component: () => import('../components/estados/Santa-Catarina/cidades/Penha.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Petrolandia',
        component: () => import('../components/estados/Santa-Catarina/cidades/Petrolandia.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Picarras',
        component: () => import('../components/estados/Santa-Catarina/cidades/Picarras.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pomerode',
        component: () => import('../components/estados/Santa-Catarina/cidades/Pomerode.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Porto-Belo',
        component: () => import('../components/estados/Santa-Catarina/cidades/Porto-Belo.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pouso-Redondo',
        component: () => import('../components/estados/Santa-Catarina/cidades/Pouso-Redondo.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Presidente-Getulio',
        component: () => import('../components/estados/Santa-Catarina/cidades/Presidente-Getulio.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Presidente-Nereu',
        component: () => import('../components/estados/Santa-Catarina/cidades/Presidente-Nereu.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Palhoca',
        component: () => import('../components/estados/Santa-Catarina/cidades/Palhoca.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Passo-de-Torres',
        component: () => import('../components/estados/Santa-Catarina/cidades/Passo-de-Torres.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Paulo-Lopes',
        component: () => import('../components/estados/Santa-Catarina/cidades/Paulo-Lopes.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pedras-Grandes',
        component: () => import('../components/estados/Santa-Catarina/cidades/Pedras-Grandes.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pescaria-Brava',
        component: () => import('../components/estados/Santa-Catarina/cidades/Pescaria-Brava.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-do-Campo',
        component: () => import('../components/estados/Santa-Catarina/cidades/Rio-do-Campo.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-do-Oeste',
        component: () => import('../components/estados/Santa-Catarina/cidades/Rio-do-Oeste.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-Fortuna',
        component: () => import('../components/estados/Santa-Catarina/cidades/Rio-Fortuna.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-Negrinho',
        component: () => import('../components/estados/Santa-Catarina/cidades/Rio-Negrinho.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rodeio',
        component: () => import('../components/estados/Santa-Catarina/cidades/Rodeio.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rancho-Queimado',
        component: () => import('../components/estados/Santa-Catarina/cidades/Rancho-Queimado.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-do-Sul',
        component: () => import('../components/estados/Santa-Catarina/cidades/Rio-do-Sul.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-dos-Cedros',
        component: () => import('../components/estados/Santa-Catarina/cidades/Rio-dos-Cedros.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Salete',
        component: () => import('../components/estados/Santa-Catarina/cidades/Salete.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Santa-Terezinha',
        component: () => import('../components/estados/Santa-Catarina/cidades/Santa-Terezinha.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Bento-do-Sul',
        component: () => import('../components/estados/Santa-Catarina/cidades/Sao-Bento-do-Sul.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Francisco-do-Sul',
        component: () => import('../components/estados/Santa-Catarina/cidades/Sao-Francisco-do-Sul.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joaquim',
        component: () => import('../components/estados/Santa-Catarina/cidades/Sao-Joaquim.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joao-do-Itaperiu',
        component: () => import('../components/estados/Santa-Catarina/cidades/Sao-Joao-do-Itaperiu.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Shroeder',
        component: () => import('../components/estados/Santa-Catarina/cidades/Shroeder.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sangao',
        component: () => import('../components/estados/Santa-Catarina/cidades/Sangao.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Santa-Rosa-de-Lima',
        component: () => import('../components/estados/Santa-Catarina/cidades/Santa-Rosa-de-Lima.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Santo-Amaro-da-Imperatriz',
        component: () => import('../components/estados/Santa-Catarina/cidades/Santo-Amaro-da-Imperatriz.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Bonifacio',
        component: () => import('../components/estados/Santa-Catarina/cidades/Sao-Bonifacio.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joao-Batista',
        component: () => import('../components/estados/Santa-Catarina/cidades/Sao-Joao-Batista.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joao-do-Sul',
        component: () => import('../components/estados/Santa-Catarina/cidades/Sao-Joao-do-Sul.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Jose',
        component: () => import('../components/estados/Santa-Catarina/cidades/Sao-Jose.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Ludgero',
        component: () => import('../components/estados/Santa-Catarina/cidades/Sao-Ludgero.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Martinho',
        component: () => import('../components/estados/Santa-Catarina/cidades/Sao-Martinho.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Pedro-de-Alcantara',
        component: () => import('../components/estados/Santa-Catarina/cidades/Sao-Pedro-de-Alcantara.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sideropolis',
        component: () => import('../components/estados/Santa-Catarina/cidades/Sideropolis.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sombrio',
        component: () => import('../components/estados/Santa-Catarina/cidades/Sombrio.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Taio',
        component: () => import('../components/estados/Santa-Catarina/cidades/Taio.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Timbo',
        component: () => import('../components/estados/Santa-Catarina/cidades/Timbo.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Trombudo-Central',
        component: () => import('../components/estados/Santa-Catarina/cidades/Trombudo-Central.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Treviso',
        component: () => import('../components/estados/Santa-Catarina/cidades/Treviso.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Treze-de-Maio',
        component: () => import('../components/estados/Santa-Catarina/cidades/Treze-de-Maio.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Tubarao',
        component: () => import('../components/estados/Santa-Catarina/cidades/Tubarao.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Tijucas',
        component: () => import('../components/estados/Santa-Catarina/cidades/Tijucas.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Timbe-do-Sul',
        component: () => import('../components/estados/Santa-Catarina/cidades/Timbe-do-Sul.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Turvo',
        component: () => import('../components/estados/Santa-Catarina/cidades/Turvo.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Urussanga',
        component: () => import('../components/estados/Santa-Catarina/cidades/Urussanga.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Urubici',
        component: () => import('../components/estados/Santa-Catarina/cidades/Urubici.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Vidal-Ramos',
        component: () => import('../components/estados/Santa-Catarina/cidades/Vidal-Ramos.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Vitor-Meireles',
        component: () => import('../components/estados/Santa-Catarina/cidades/Vitor-Meireles.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Witmarsum',
        component: () => import('../components/estados/Santa-Catarina/cidades/Witmarsum.vue')
      },
      {
        path: '/detetive-particular-em-Santa-Catarina/detetive-particular-em-Xanxere',
        component: () => import('../components/estados/Santa-Catarina/cidades/Xanxere.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-no-Parana',
    component: () => import('../components/estados/Parana/RouterViewParana.vue'),
    children: [
      {
        path: '/',
        component: () => import('../components/estados/Parana/Parana.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Adrianopolis',
        component: () => import('../components/estados/Parana/cidades/Adrianopolis.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Agudos-do-Sul',
        component: () => import('../components/estados/Parana/cidades/Agudos-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Antonina',
        component: () => import('../components/estados/Parana/cidades/Antonina.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Araucaria',
        component: () => import('../components/estados/Parana/cidades/Araucaria.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Balsa-Nova',
        component: () => import('../components/estados/Parana/cidades/Balsa-Nova.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Bocaiuva-do-Sul',
        component: () => import('../components/estados/Parana/cidades/Bocaiuva-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Campo-do-Tenente',
        component: () => import('../components/estados/Parana/cidades/Campo-do-Tenente.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Campo-Largo',
        component: () => import('../components/estados/Parana/cidades/Campo-Largo.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Cascavel',
        component: () => import('../components/estados/Parana/cidades/Cascavel.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Campina-Grande-do-Sul',
        component: () => import('../components/estados/Parana/cidades/Campina-Grande-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Campo-Magro',
        component: () => import('../components/estados/Parana/cidades/Campo-Magro.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Cerro-Azul',
        component: () => import('../components/estados/Parana/cidades/Cerro-Azul.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Contenda',
        component: () => import('../components/estados/Parana/cidades/Contenda.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Curitiba',
        component: () => import('../components/estados/Parana/cidades/Curitiba.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Colombo',
        component: () => import('../components/estados/Parana/cidades/Colombo.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Doutor-Ulysses',
        component: () => import('../components/estados/Parana/cidades/Doutor-Ulysses.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Foz-do-Iguacu',
        component: () => import('../components/estados/Parana/cidades/Foz-do-Iguacu.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Fazenda-Rio-Grande',
        component: () => import('../components/estados/Parana/cidades/Fazenda-Rio-Grande.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Guaraquecaba',
        component: () => import('../components/estados/Parana/cidades/Guaraquecaba.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Guaratuba',
        component: () => import('../components/estados/Parana/cidades/Guaratuba.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Itaperucu',
        component: () => import('../components/estados/Parana/cidades/Itaperucu.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Lapa',
        component: () => import('../components/estados/Parana/cidades/Lapa.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Londrina',
        component: () => import('../components/estados/Parana/cidades/Londrina.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Mandirituba',
        component: () => import('../components/estados/Parana/cidades/Mandirituba.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Matinhos',
        component: () => import('../components/estados/Parana/cidades/Matinhos.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Maringa',
        component: () => import('../components/estados/Parana/cidades/Maringa.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Morretes',
        component: () => import('../components/estados/Parana/cidades/Morretes.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Pinhais',
        component: () => import('../components/estados/Parana/cidades/Pinhais.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Piraquara',
        component: () => import('../components/estados/Parana/cidades/Piraquara.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Pontal-do-Parana',
        component: () => import('../components/estados/Parana/cidades/Pontal-do-Parana.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Ponta-Grossa',
        component: () => import('../components/estados/Parana/cidades/Ponta-Grossa.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Paranagua',
        component: () => import('../components/estados/Parana/cidades/Paranagua.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Pien',
        component: () => import('../components/estados/Parana/cidades/Pien.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Pato-Branco',
        component: () => import('../components/estados/Parana/cidades/Pato-Branco.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Quitandinha',
        component: () => import('../components/estados/Parana/cidades/Quitandinha.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Quatro-Barras',
        component: () => import('../components/estados/Parana/cidades/Quatro-Barras.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Rio-Branco-do-Sul',
        component: () => import('../components/estados/Parana/cidades/Rio-Branco-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Sao-Jose-dos-Pinhais',
        component: () => import('../components/estados/Parana/cidades/Sao-Jose-dos-Pinhais.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Tijucas-do-Sul',
        component: () => import('../components/estados/Parana/cidades/Tijucas-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Tunas-do-Parana',
        component: () => import('../components/estados/Parana/cidades/Tunas-do-Parana.vue')
      },
      {
        path: '/detetive-particular-no-Parana/detetive-particular-em-Toledo',
        component: () => import('../components/estados/Parana/cidades/Toledo.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-no-Rio-Grande-do-Sul',
    component: () => import('../components/estados/Rio-Grande-do-Sul/RouterViewRioGrandeDoSul.vue'),
    children: [
      {
        path: '/',
        component: () => import('../components/estados/Rio-Grande-do-Sul/Rio-Grande-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Alto-Feliz',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Alto-Feliz.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Alvorada',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Alvorada.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Amaral-Ferrador',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Amaral-Ferrador.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Anta-Gorda',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Anta-Gorda.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arambare',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Arambare.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ararica',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Ararica.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-do-Meio',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Arroio-do-Meio.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-do-Sal',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Arroio-do-Sal.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-do-Tigre',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Arroio-do-Tigre.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-dos-Ratos',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Arroio-dos-Ratos.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arvorezinha',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Arvorezinha.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Balneario-Pinhal',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Balneario-Pinhal.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Barao',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Barao.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Barao-do-Triunfo',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Barao-do-Triunfo.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Bom-Retiro-do-Sul',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Bom-Retiro-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Boqueirao-do-Leao',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Boqueirao-do-Leao.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Bom-Principio',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Bom-Principio.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Brochier',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Brochier.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Butia',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Butia.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Barra-do-Ribeiro',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Barra-do-Ribeiro.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cachoeira-do-Sul',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Cachoeira-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cachoeirinha',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Cachoeirinha.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Camaqua',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Camaqua.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Campo-Bom',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Campo-Bom.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cerro-Branco',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Cerro-Branco.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cerro-Grande-do-Sul',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Cerro-Grande-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Charqueadas',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Charqueadas.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Candelaria',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Candelaria.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Canoas',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Canoas.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Canudos-do-Vale',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Canudos-do-Vale.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capao-da-Canoa',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Capao-da-Canoa.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Chuvisca',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Chuvisca.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cidreira',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Cidreira.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Colinas',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Colinas.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capela-de-Santana',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Capela-de-Santana.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capitao',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Capitao.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capivari-do-Sul',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Capivari-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Caraa',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Caraa.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Coqueiro-Baixo',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Coqueiro-Baixo.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cristal',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Cristal.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cruzeiro-do-Sul',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Cruzeiro-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Dois-Irmaos',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Dois-Irmaos.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Dom-Feliciano',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Dom-Feliciano.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Dom-Pedro-de-Alcantara',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Dom-Pedro-de-Alcantara.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Eldorado-do-Sul',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Eldorado-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Esteio',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Esteio.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Estrela',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Estrela.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Fazenda-Vilanova',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Fazenda-Vilanova.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Feliz',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Feliz.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-General-Camara',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/General-Camara.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Glorinha',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Glorinha.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Gravatai',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Gravatai.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Guaiba',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Guaiba.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Harmonia',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Harmonia.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ibarama',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Ibarama.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Igrejinha',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Igrejinha.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ilopolis',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Ilopolis.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Imigrante',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Imigrante.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Itati',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Itati.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ivoti',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Ivoti.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Imbe',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Imbe.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Lagoao',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Lagoao.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Lajedo',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Lajedo.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Lindolfo-Collor',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Lindolfo-Collor.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Linha-Nova',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Linha-Nova.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Maquine',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Maquine.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mariana-Pimentel',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Mariana-Pimentel.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Marques-de-Souza',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Marques-de-Souza.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mato-Leitao',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Mato-Leitao.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Minas-do-Leao',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Minas-do-Leao.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Montenegro',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Montenegro.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Morrinhos-do-Sul',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Morrinhos-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Morro-Reuter',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Morro-Reuter.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mostardas',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Mostardas.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mucum',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Mucum.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Nova-Brescia',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Nova-Brescia.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Nova-Hartz',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Nova-Hartz.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Nova-Santa-Rita',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Nova-Santa-Rita.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Novo-Hamburgo',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Novo-Hamburgo.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Osorio',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Osorio.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Palmares-do-Sul',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Palmares-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Pantano-Grande',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Pantano-Grande.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Pareci-Novo',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Pareci-Novo.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Parobe',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Parobe.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Passo-do-Sobrado',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Passo-do-Sobrado.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Paverema',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Paverema.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Poco-das-Antas',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Poco-das-Antas.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Portao',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Portao.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Porto-Alegre',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Porto-Alegre.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Pouso-Novo',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Pouso-Novo.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Presidente-Lucena',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Presidente-Lucena.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Progresso',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Progresso.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Putinga',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Putinga.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Relvado',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Relvado.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Rio-Pardo',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Rio-Pardo.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Roca-Sales',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Roca-Sales.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Rolante',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Rolante.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Riozinho',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Riozinho.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Salvador-do-Sul',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Salvador-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santa-Clara-do-Sul',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Santa-Clara-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santa-Cruz-do-Sul',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Santa-Cruz-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santa-Maria-do-Herval',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Santa-Maria-do-Herval.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santo-Antonio-da-Patrulha',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Santo-Antonio-da-Patrulha.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Jeronimo',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Sao-Jeronimo.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Jose-do-Hortencio',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Sao-Jose-do-Hortencio.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Leopoldo',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Sao-Leopoldo.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Sebastiao-do-Cai',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Sao-Sebastiao-do-Cai.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Vendelino',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Sao-Vendelino.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sapiranga',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Sapiranga.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sapucaia-do-Sul',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Sapucaia-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Segredo',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Segredo.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sentinela-do-Sul',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Sentinela-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Serio',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Serio.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sertao-Santana',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Sertao-Santana.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sinimbu',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Sinimbu.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sobradinho',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Sobradinho.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santana-do-Livramento',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Santana-do-Livramento.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tabai',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Tabai.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tapes',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Tapes.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Taquara',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Taquara.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Travesseiro',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Travesseiro.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tunas',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Tunas.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Taquari',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Taquari.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tavares',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Tavares.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Terra-de-Areia',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Terra-de-Areia.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tres-Cachoeiras',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Tres-Cachoeiras.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tres-Coroas',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Tres-Coroas.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tupandi',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Tupandi.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Teutonia',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Teutonia.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Torres',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Torres.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tramandai',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Tramandai.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tres-Forquilhas',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Tres-Forquilhas.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Triunfo',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Triunfo.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Uruguaiana',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Uruguaiana.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vale-do-Sol',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Vale-do-Sol.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vale-Real',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Vale-Real.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Viamao',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Viamao.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vale-Verde',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Vale-Verde.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Venancio-Aires',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Venancio-Aires.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vera-Cruz',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Vera-Cruz.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vespasiano-Correia',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Vespasiano-Correia.vue')
      },
      {
        path: '/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Xangri-La',
        component: () => import('../components/estados/Rio-Grande-do-Sul/cidades/Xangri-La.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-em-Sao-Paulo',
    component: () => import('../components/estados/Sao-Paulo/RouterViewSaoPaulo.vue'),
    children: [
      {
        path: '/',
        component: () => import('../components/estados/Sao-Paulo/Sao-Paulo.vue')
      },
      {
        path: '/detetive-particular-em-Sao-Paulo/detetive-particular-em-Sao-Paulo',
        component: () => import('../components/estados/Sao-Paulo/cidades/Sao-Paulo.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-no-Rio-de-Janeiro',
    component: () => import('../components/estados/Rio-de-Janeiro/RouterViewRioDeJaneiro.vue'),
    children: [
      {
        path: '/',
        component: () => import('../components/estados/Rio-de-Janeiro/Rio-de-Janeiro.vue')
      },
      {
        path: '/detetive-particular-no-Rio-de-Janeiro/detetive-particular-em-Rio-de-Janeiro',
        component: () => import('../components/estados/Rio-de-Janeiro/cidades/Rio-de-Janeiro.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-em-Minas-Gerais',
    component: () => import('../components/estados/Minas-Gerais/RouterViewMinasGerais.vue'),
    children: [
      {
        path: '/',
        component: () => import('../components/estados/Minas-Gerais/Minas-Gerais.vue')
      },
      {
        path: '/detetive-particular-em-Minas-Gerais/detetive-particular-em-Belo-Horizonte',
        component: () => import('../components/estados/Minas-Gerais/cidades/Belo-Horizonte.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-no-Distrito-Federal',
    component: () => import('../components/estados/Distrito-Federal/RouterViewDistritoFederal.vue'),
    children: [
      {
        path: '/',
        component: () => import('../components/estados/Distrito-Federal/Distrito-Federal.vue')
      },
      {
        path: '/detetive-particular-no-Distrito-Federal/detetive-particular-em-Brasilia',
        component: () => import('../components/estados/Distrito-Federal/cidades/Brasilia.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-no-Mato-Grosso-do-Sul',
    component: () => import('../components/estados/Mato-Grosso-do-Sul/RouterViewMatoGrossoDoSul.vue'),
    children: [
      {
        path: '/',
        component: () => import('../components/estados/Mato-Grosso-do-Sul/Mato-Grosso-do-Sul.vue')
      },
      {
        path: '/detetive-particular-no-Mato-Grosso-do-Sul/detetive-particular-em-Campo-Grande',
        component: () => import('../components/estados/Mato-Grosso-do-Sul/cidades/Campo-Grande.vue')
      }
    ]
  },
  {
    path: '/detetive-particular-em-Goias',
    component: () => import('../components/estados/Goias/RouterViewGoias.vue'),
    children: [
      {
        path: '/',
        component: () => import('../components/estados/Goias/Goias.vue')
      },
      {
        path: '/detetive-particular-em-Goias/detetive-particular-em-Goiania',
        component: () => import('../components/estados/Goias/cidades/Goiania.vue')
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
