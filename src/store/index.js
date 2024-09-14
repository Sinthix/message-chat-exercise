import Vue from 'vue';
import Vuex from 'vuex';
import { currentUser, conversation } from '@/mockApi';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      conversation: [],
      me: null
    },
    mutations: {
     
    },
    actions: {
      
    }
  });