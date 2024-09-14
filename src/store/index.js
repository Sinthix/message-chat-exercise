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
        setConversation(state, messages) {
            state.conversation = messages;
        },
        setMe(state, user) {
            state.me = user;
        },
        addMessage(state, message) {
            state.conversation.push(message);
        }
    },
    actions: {
        fetchConversation({ commit }) {
            const messages = JSON.parse(conversation); 
            commit('setConversation', messages);
        },
        fetchMe({ commit }) {
            const user = JSON.parse(currentUser); 
            commit('setMe', user);
        },
        async sendReply({ commit }, message) {
            commit('addMessage', message);
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
  });