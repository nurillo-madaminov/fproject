<template>
  <div class="page_1 cover">
  <h1>Гемодинамик стабил</h1>
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
  .page_1 {
    padding: 20px;
    /* background-color:rgb(0, 222, 247); */
  }
</style>
