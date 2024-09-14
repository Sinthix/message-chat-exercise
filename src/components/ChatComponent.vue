<template>
    <div class="chat-area">
      <div class="conversation-area">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, minima quaerat. Illum perspiciatis alias vitae quas inventore sunt earum delectus aliquam iste. Dolorem inventore autem rem distinctio quas, atque iste.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, minima quaerat. Illum perspiciatis alias vitae quas inventore sunt earum delectus aliquam iste. Dolorem inventore autem rem distinctio quas, atque iste.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, minima quaerat. Illum perspiciatis alias vitae quas inventore sunt earum delectus aliquam iste. Dolorem inventore autem rem distinctio quas, atque iste.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, minima quaerat. Illum perspiciatis alias vitae quas inventore sunt earum delectus aliquam iste. Dolorem inventore autem rem distinctio quas, atque iste.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, minima quaerat. Illum perspiciatis alias vitae quas inventore sunt earum delectus aliquam iste. Dolorem inventore autem rem distinctio quas, atque iste.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, minima quaerat. Illum perspiciatis alias vitae quas inventore sunt earum delectus aliquam iste. Dolorem inventore autem rem distinctio quas, atque iste.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, minima quaerat. Illum perspiciatis alias vitae quas inventore sunt earum delectus aliquam iste. Dolorem inventore autem rem distinctio quas, atque iste.
      </div>
      <div class="compose-area">
        <input type="text">
        <button>
            s
        </button>
      </div>
    </div>
</template>

<style scoped>
.chat-area {
    width: 500px;
    height: 300px;
    border: 1px solid black;
}
.conversation-area {
    width: 100%;
    max-height: 300px;
    overflow: scroll;
    scrollbar-color: red orange;
    scrollbar-width: thin;
}
.compose-area {
    display: grid;
    grid-template-columns: 1fr 60px;
    grid-gap: 12px;
}
</style>