<template>
    <div class="compose-area">
        <textarea v-model="input" placeholder="Type your message here..." name="chat-input" id="chatInput" @keyup.enter="submitMessage" ref="inputArea" rows="3"></textarea>
        <button @click="submitMessage">
            s
        </button>
    </div>
</template>

<script>
export default {
  data() {
    return {
        input: '',
        rows: 1
    };
  },
  methods: {
    submitMessage() {
        this.input.trim()
        this.$emit('submit', this.input);
        this.input = '';
      
    }
  },
};
</script>

<style scoped>
.compose-area {
    margin-top: 12px;
    display: grid;
    grid-template-columns: 1fr 60px;
    grid-gap: 12px;
}

#chatInput {
    resize: none;
    padding: 8px;
}
</style>