<template>
    <div :class="['message-component', { 'message-me': isMe }]">
      <div class="thumbnail-container">
        <img :src="message.from.thumbnail" alt="User Thumbnail" class="thumbnail" @mouseover="showTooltip" @mouseout="hideTooltip"/>
        <div v-if="tooltipVisible" class="tooltip">
          {{ message.from.firstName }} {{ message.from.lastName }}
        </div>
      </div>
      <div class="message-bubble">
        <p>{{ message.message  }}</p>
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
    },
    data() {
    return {
      tooltipVisible: false
    };
    },
    methods: {
      showTooltip() {
        this.tooltipVisible = true;
      },
      hideTooltip() {
        this.tooltipVisible = false;
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

.thumbnail-container {
  position: relative;
  overflow: visible;
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

.tooltip {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%); 
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  z-index: 1000;
  pointer-events: none;
}
  </style>