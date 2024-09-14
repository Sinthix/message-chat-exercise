<template>
    <div class="chat-area">
        <ConversationComponent />
        <ComposeComponent />
    </div>
</template>

<script>
import ConversationComponent from './chat-areas/ConversationComponent.vue';
import ComposeComponent from './chat-areas/ComposeComponent.vue';

export default {
    components: {
        ConversationComponent,
        ComposeComponent
    },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
.chat-area {
    width: 500px;
    height: 300px;
}

</style>