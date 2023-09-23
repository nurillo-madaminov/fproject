<template>
  <div class="cover">
    <h1>Гемодинамик ностабил</h1>
    <div class="main_content">
    <div class="header">
        <img src="../assets/Medik.webp" alt="">
      </div>
    </div>
    <div class="links">
      <RouterLink text="Кўкрак бўшлиги || Ултра товуш текшируви || Extended focused assessment with sonography for trauma" :to="{name: 'fifthPage'}" />
      <RouterLink text="Қорин бўшлиги || Ултра товуш текшируви || Extended focused assessment with sonography for trauma" :to="{name: 'sixthPage'}" />
      <RouterLink text="Ҳаёт учун хавфли жароҳат" :to="{name: 'firstResult'}" />
    </div>
  </div>  
</template>

<script>
import RouterLink from "../components/RouterLink.vue";
export default {
  components: { RouterLink },
};
</script>

<style></style>
