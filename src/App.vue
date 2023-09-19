<template>
  <div class="container">
    <nav>
      <div class="links">
        <button @click="back">
          <img src="./assets/caret-left.svg" alt="" width="11">
        </button>

        <router-link to="/">
          <img src="./assets/house-solid.svg" alt="" width="15">
        </router-link>
      </div>
      <h1>Торакоабминал шикастланишларда жарроҳлик тактикаси</h1>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: space-around;
  display: flex;
  gap: 20px;
  align-items: center;
}

nav a,
button {
  width: 30px;
  height: 30px;
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
  aspect-ratio: 3/4;
  object-fit: cover;
}

.container {
  width: 80%;
  margin: auto;
}
  .links {
    display: flex;
    gap: 50px;
    justify-content: center;
  }
  .cover {
  padding: 20px;
  border-radius: 10px;
}

nav {
  border-radius: 20px;
  background-color: lightblue;
}


nav a.router-link-exact-active {
  color: #42b983;
}
</style>
