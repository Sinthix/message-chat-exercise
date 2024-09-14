<template>
    <div class="compose-area">
        <textarea placeholder="Type your message here..." name="chat-input" id="chatInput" rows="3"></textarea>
        <button>
            s
        </button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
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