// Basic
import Vue from 'vue';
import Router from 'vue-router';

// Views :: Onboarding
import Welcome from '@/views/ongoing/Welcome.vue';
import howIsTheJourneyOrganized from '@/views/ongoing/HowIsTheJourneyOrganized.vue';
import chooseYourNavigationType from '@/views/ongoing/ChooseYourNavigationType.vue';

// Views :: Pages
import SobreGerirASiMesmo from '@/views/pages/SobreGerirASiMesmo.vue';
import OQueJaSeiSobreMim from '@/views/pages/OQueJaSeiSobreMim.vue';
import OOlharDoOutroSobreMim from '@/views/pages/OOlharDoOutroSobreMim.vue';
import MeuOlharSobreQuemSouEu from '@/views/pages/MeuOlharSobreQuemSouEu.vue';
import MeuOlharSobreAMinhaHistoria from '@/views/pages/MeuOlharSobreAMinhaHistoria.vue';
import Analise from '@/views/pages/Analise.vue';
import ImpactoDosSentimentos from '@/views/pages/ImpactoDosSentimentos.vue';
import MindsetDeLideranca from '@/views/pages/MindsetDeLideranca.vue';
import AnsiedadeENormose from '@/views/pages/AnsiedadeENormose.vue';
import OEfeitoDunningKruger from '@/views/pages/OEfeitoDunningKruger.vue';
import SindromeDoImpostor from '@/views/pages/SindromeDoImpostor.vue';
import OsProximos15Dias from '@/views/pages/OsProximos15Dias.vue';

// View :: Login
import Login from '@/views/login/Login.vue';
import Profile from '@/views/login/Profile.vue';
import ForgotPassword from '@/views/login/ForgotPassword.vue';
import SSO from '@/views/login/Sso.vue';

// Use Router
Vue.use(Router);

// Init Onboarding
const productOnboardingKey = `product-${process.env.VUE_APP_PRODUCT_ID}-onboarding`;
localStorage.setItem(productOnboardingKey, 'N');  ///////// DESABLE ONBOARDING  /////////
if (localStorage.getItem(productOnboardingKey) === null) {
  localStorage.setItem(productOnboardingKey, 'Y');
}

const router = new Router({
  // mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { transitionName: 'fade' },
    },
    {
      path: '/sso/:token',
      name: 'sso',
      component: SSO,
      meta: { transitionName: 'fade' },
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { transitionName: 'fade' },
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: ForgotPassword,
      meta: { transitionName: 'fade' },
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      meta: { transitionName: 'slide', transitionOrder: 1 },
    },
    {
      path: '/how-is-the-journey-organized',
      name: 'howIsTheJourneyOrganized',
      component: howIsTheJourneyOrganized,
      meta: { transitionName: 'slide', transitionOrder: 2 },
    },
    {
      path: '/choose-your-navigation-type',
      name: 'chooseYourNavigationType',
      component: chooseYourNavigationType,
      meta: { transitionName: 'slide', transitionOrder: 3 },
    },
    {
      path: '/sobre-gerir-a-si-mesmo',
      name: 'SobreGerirASiMesmo',
      component: SobreGerirASiMesmo,
      meta: { transitionName: 'fade', transitionOrder: 22, pageId: 96 },
    },
    {
      path: '/o-que-ja-sei-sobre-mim',
      name: 'OQueJaSeiSobreMim',
      component: OQueJaSeiSobreMim,
      meta: { transitionName: 'fade', transitionOrder: 23, pageId: 33 },
    },
    {
      path: '/o-olhar-do-outro-sobre-mim',
      name: 'OOlharDoOutroSobreMim',
      component: OOlharDoOutroSobreMim,
      meta: { transitionName: 'fade', transitionOrder: 24, pageId: 34 },
    },
    {
      path: '/meu-olhar-sobre-quem-sou-eu',
      name: 'MeuOlharSobreQuemSouEu',
      component: MeuOlharSobreQuemSouEu,
      meta: { transitionName: 'fade', transitionOrder: 25, pageId: 35 },
    },
    {
      path: '/meu-olhar-sobre-a-minha-historia',
      name: 'MeuOlharSobreAMinhaHistoria',
      component: MeuOlharSobreAMinhaHistoria,
      meta: { transitionName: 'fade', transitionOrder: 26, pageId: 36 },
    },
    {
      path: '/analise',
      name: 'Analise',
      component: Analise,
      meta: { transitionName: 'fade', transitionOrder: 27, pageId: 37 },
    },
    {
      path: '/impacto-dos-sentimentos',
      name: 'ImpactoDosSentimentos',
      component: ImpactoDosSentimentos,
      meta: { transitionName: 'fade', transitionOrder: 28, pageId: 38 },
    },
    {
      path: '/mindset-de-lideranca',
      name: 'MindsetDeLideranca',
      component: MindsetDeLideranca,
      meta: { transitionName: 'fade', transitionOrder: 29, pageId: 39 },
    },
    {
      path: '/ansiedade-e-normose',
      name: 'AnsiedadeENormose',
      component: AnsiedadeENormose,
      meta: { transitionName: 'fade', transitionOrder: 30, pageId: 40 },
    },
    {
      path: '/o-efeito-dunning-kruger',
      name: 'OEfeitoDunningKruger',
      component: OEfeitoDunningKruger,
      meta: { transitionName: 'fade', transitionOrder: 31, pageId: 41 },
    },
    {
      path: '/sindrome-do-impostor',
      name: 'SindromeDoImpostor',
      component: SindromeDoImpostor,
      meta: { transitionName: 'fade', transitionOrder: 32, pageId: 42 },
    },
    {
      path: '/os-proximos-15-dias',
      name: 'OsProximos15Dias',
      component: OsProximos15Dias,
      meta: { transitionName: 'fade', transitionOrder: 33, pageId: 97 },
    }
  ],
});

router.beforeEach((to, from, next) => {
  // Check if it is public
  const publicPages = ['login', 'forgotPassword', 'sso'];
  const authRequired = !publicPages.includes(to.name);

  // check token
  const productId = process.env.VUE_APP_PRODUCT_ID;
  const productTokenKey = `product-${productId}-token`;
  const loggedIn = localStorage.getItem(productTokenKey);

  // Check authentication
  if (authRequired && !loggedIn) {
    return next('/');
  }

  // Check tutorial
  const onBoardingPages = ['welcome', 'howIsTheJourneyOrganized', 'chooseYourNavigationType'];
  if (localStorage.getItem(productOnboardingKey) === 'N' && onBoardingPages.includes(to.name)) {
    next({ path: '/comece-por-aqui' })
  }

  next();
})

export default router;