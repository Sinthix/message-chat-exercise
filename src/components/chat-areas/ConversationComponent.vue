<template>
    <div class="conversation-area" ref="conversationArea">
        <MessageComponent v-for="(message, index) in messages" :key="index" :message="message" :isMe="message.from.id === me.id"/>
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
            messages: state => state.conversation,
            me: state => state.me
        })
    },
    watch: {
        messages() {
        this.scrollToBottom();  
        }
        },
        mounted() {
            this.scrollToBottom(); 
    },
    methods: {
    scrollToBottom() {
        this.$nextTick(() => {
            const conversationArea = this.$refs.conversationArea;
            if (conversationArea) {
            conversationArea.scrollTop = conversationArea.scrollHeight;
            }
        });
        }
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