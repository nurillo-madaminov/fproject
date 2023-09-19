<template>
  <div class="cover">
    <h1>Торакоабдоминал шикастланган бемор</h1>
    <div class="links">
      <RouterLink text="Гемодинамик стабил" to="/page-1"/>
      <RouterLink text="Гемодинамик ностабил" to="/page-2"/>
    </div>
  </div>
</template>

<script>
import RouterLink from "../components/RouterLink.vue";
export default {
  components: { RouterLink },
};
</script>

<style>
.cover {
  padding: 20px;
  border-radius: 10px;
  background-color: lightblue;
}
  .links {
    display: flex;
    gap: 50px;
    justify-content: center;
  }
</style>
