<template>
    <div :class="['message-component', { 'message-me': isMe }]">
      <img :src="message.from.thumbnail" alt="User Thumbnail" class="thumbnail" />
      <div class="message-bubble">
        <p>{{ message.message }}</p>  <!-- Render the message content -->
      </div>
  </div>
  </template>
  
  <script>
  
  export default {
    props: {
      message: {
        type: Object,
        required: true
      },
      isMe: {
        type: Boolean,
        default: false
      }
    }
  };
  </script>
  
  <style scoped>
.message-component {
  display: flex;
  align-items: flex-end;
  margin-bottom: 12px;
}

.message-me {
  flex-direction: row-reverse;
}

.thumbnail {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
}

.message-me .thumbnail {
  margin-left: 12px;
  margin-right: 0;
}

.message-bubble {
  background-color: lightgray;
  padding: 8px;
  border-radius: 8px;
  max-width: 60%;
  word-wrap: break-word;
}

.message-me .message-bubble {
  background-color: #0084ff;
  color: white;
}
  </style>