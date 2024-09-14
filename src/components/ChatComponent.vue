<template>
    <div class="chat-area">
        <ConversationComponent />
        <ComposeComponent v-model="message" @submit="sendReply"/>
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
        author: this.$store.state.me,
        text: message
      };
      this.sendReply(newMessage);
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