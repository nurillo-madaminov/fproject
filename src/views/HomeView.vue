<template>
  <div class="cover">
    <h1>Торакоабдоминал шикастланган бемор</h1>
    <div class="main_content">
      <div class="header">
        <img src="../assets/Medik.webp" alt="">
      </div>
    </div>
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

<style scoped>
.main_content p {
  font-size: 18px;
  text-align: justify;
}
</style>
