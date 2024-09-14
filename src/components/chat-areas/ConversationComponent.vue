<template>
    <div class="conversation-area">
        <MessageComponent v-for="(message, index) in messages" :key="index" :message="message" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import MessageComponent from './MessageComponent.vue';

export default {
    components: {
        MessageComponent
    },
    data() {
        return {
      
        };
    },
    computed: {
        ...mapState({
            messages: state => state.conversation
        })
    }
};
</script>

<style scoped>
.conversation-area {
    border: 1px solid black;
    width: 100%;
    min-height: 300px;
    max-height: 300px;
    overflow: scroll;
    scrollbar-color: red orange;
    scrollbar-width: thin;
}
</style>