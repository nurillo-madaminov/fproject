<template>
  <router-link :to="to" ref="link">{{text}}</router-link>
</template>

<script>
export default {
  props: ["text", "to"],
  mounted() {
    this.$refs.link.$el.innerHTML = this.$refs.link.$el.innerHTML.replaceAll("||", "<br />");
  },
}
</script>
<style scoped>
  a {
    color: #fff;
    max-width: 500px;
    width: 100%;
    padding: 10px 20px;
    background-color: green;
    text-decoration: none;
    font-size: 20px;
    border-radius: 5px;
    letter-spacing: .5px;
    transition: 500ms;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a:hover {
    transform: scale(1.050);
  }
</style>
