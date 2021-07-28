import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContent from '../components/MainContent.vue'
import Question from '../views/Question.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainContent',
    component: MainContent
  },
  {
    path: '/question/',
    name: 'Question',
    component: Question,
  },
  {
    path: "/questionItem/",
    name: 'QuestionItem',
    component: () => import("../views/QuestionItem.vue"),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
