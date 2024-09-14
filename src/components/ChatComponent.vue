<template>
    <div class="chat-area">
        <ConversationComponent />
        <ComposeComponent v-model="message" :rows="3" @submit="sendReply"/>
    </div>
</template>

<script>
import ConversationComponent from './chat-areas/ConversationComponent.vue';
import ComposeComponent from './chat-areas/ComposeComponent.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        ConversationComponent,
        ComposeComponent
    },
  data() {
    return {
      message: ''
    };
  },
  created() {
    this.fetchConversation();
    this.fetchMe();
  },
  methods: {
    ...mapActions(['fetchConversation', 'fetchMe', 'sendReply']),
    sendReply(message) {
      const newMessage = {
        from: this.$store.state.me,
        message: message
      };
      this.$store.dispatch('sendReply', newMessage);
      this.message = '';
    }
  }
};
</script>

<style scoped>
.chat-area {
    width: 500px;
    height: 300px;
}

</style>