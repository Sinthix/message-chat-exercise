<template>
    <div :class="['message-component', isCurrentUser ? 'sent' : 'received']">
      <img :src="message.from.thumbnail" class="thumbnail" />
      <div class="bubble">{{ message.message }}</div>
    </div>
  </template>
  
  <script>
  
  export default {
    props: {
      message: Object
    },
    computed: {
      isCurrentUser() {
        return this.message.from.id === this.$store.state.me.id;
      }
    }
  };
  </script>
  
  <style scoped>
  .message-component {
    display: flex;
    margin-bottom: 16px;
    align-items: flex-end;
  }
  
  .message-component.sent {
    justify-content: flex-end;
  }
  
  .message-component.received {
    justify-content: flex-start;
  }
  
  .thumbnail {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 12px;
  }
  
  .bubble {
    max-width: 60%;
    padding: 8px;
    border-radius: 8px;
    background-color: #f0f0f0;
    word-wrap: break-word;
  }
  
  .message-entry.sent .bubble {
    background-color: #007bff;
    color: white;
  }
  </style>