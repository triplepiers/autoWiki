import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 } // allways back to Top
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/team/TeamView.vue'),
    },
    {
      path: '/attributions',
      name: 'attributions',
      component: () => import('../views/team/AttributionsView.vue')
    },
    {
      path: '/contribution',
      name: 'contribution',
      component: () => import('../views/project/ContributionView.vue')
    },
    {
      path: '/description',
      name: 'description',
      component: () => import('../views/project/DescriptionView.vue')
    },
    {
      path: '/engineering',
      name: 'engineering',
      component: () => import('../views/project/EngineeringView.vue')
    },
    {
      path: '/experiments',
      name: 'experiments',
      component: () => import('../views/project/ExperimentsView.vue')
    },
    {
      path: '/notebook',
      name: 'notebook',
      component: () => import('../views/project/NotebookView.vue')
    },
    {
      path: '/results',
      name: 'results',
      component: () => import('../views/project/ResultsView.vue')
    },
    {
      path: '/safety',
      name: 'safety',
      component: () => import('../views/SafetyView.vue')
    },
    {
      path: '/human-practices',
      name: 'human-practices',
      component: () => import('../views/HumanPracticesView.vue')
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/awards/EducationView.vue')
    },
    {
      path: '/entrepreneurship',
      name: 'entrepreneurship',
      component: () => import('../views/awards/EntrepreneurshipView.vue')
    },
    {
      path: '/hardware',
      name: 'hardware',
      component: () => import('../views/awards/HardwareView.vue')
    },
    {
      path: '/inclusivity',
      name: 'inclusivity',
      component: () => import('../views/awards/InclusivityView.vue')
    },
    {
      path: '/measurement',
      name: 'measurement',
      component: () => import('../views/awards/MeasurementView.vue')
    },
    {
      path: '/model',
      name: 'model',
      component: () => import('../views/awards/ModelView.vue')
    },
    {
      path: '/plant',
      name: 'plant',
      component: () => import('../views/awards/PlantView.vue')
    },
    {
      path: '/software',
      name: 'software',
      component: () => import('../views/awards/SoftwareView.vue')
    },
    {
      path: '/sustainable',
      name: 'sustainable',
      component: () => import('../views/awards/SustainableView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue')
    }
  ],
})

export default router
