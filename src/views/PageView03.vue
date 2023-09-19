<template>
  <div class="page_2 cover">
    <h1>{{ pageName }} УТТ (e-FAST)</h1>
    <div class="links">
      <RouterLink text="Мусбат" :to="positive" />
      <RouterLink text="Манфий" :to="negative" />
    </div>
  </div>
</template>

<script>
import RouterLink from "../components/RouterLink.vue";
export default {
  data() {
    return {
      pageName: "",
      positive: "",
      negative: "",
    };
  },
  components: { RouterLink },
  mounted() {
    if (this.$route.path == "/page-1/1") {
      this.pageName = "Кўкрак қафаси";
      (this.positive = "/page-1/1/1"), (this.negative = "/page-1/1/2");
    } else if (this.$route.path == "/page-1/2") {
      this.pageName = "Қорин бўшлиги";
      (this.positive = "/page-1/2/1"), (this.negative = "/page-1/2/2");
    } else if (this.$route.path == "/page-2/1") {
      this.pageName = "Кўкрак қафаси";
      (this.positive = "/page-2/1/1"), (this.negative = "/page-2/1/2");
    } else if (this.$route.path == "/page-2/2") {
      this.pageName = "Қорин бўшлиги";
      (this.positive = "/page-2/2/1"), (this.negative = "/page-2/2/2");
    }
  },
};
</script>

<style></style>
