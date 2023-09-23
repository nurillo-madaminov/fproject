<template>
  <div class="cover">
  <h1>Гемодинамик стабил</h1>
  <div class="header">
    <img src="../assets/Medik.webp" alt="">
  </div>
  <div class="links">
    <RouterLink text="Кўкрак қафаси || Ултра товуш текшируви || Extended focused assessment with sonography for trauma" :to="{name: 'thirdPage'}" />
    <RouterLink text="Қорин бўшлиги || Ултра товуш текшируви || Extended focused assessment with sonography for trauma" :to="{name: 'fourthPage'}" />

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
</style>
