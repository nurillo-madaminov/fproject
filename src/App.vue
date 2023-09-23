<template>
  <div class="container">
    <nav>
      <div class="links">
        <button @click="back">
          <img src="./assets/caret-left.svg" alt="" width="11" />
        </button>

        <router-link to="/">
          <img src="./assets/house-solid.svg" alt="" width="15" />
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  margin-top: 10px;
  border-radius: 20px;
  padding: 20px 0;
  background-color: lightblue;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.header img {
  width: 60%;
}
@media screen and (max-width: 1200px) {
  nav {
    padding: 10px 0px;
    flex-direction: column-reverse;
    gap: 10px;
    font-size: 16px;
  }
  .links:not(nav .links) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .links:not(nav .links) a {
    font-size: 16px;
    background-color: red;
  }
  .header img {
    width: 70%;
  }
  h1:not(nav h1),h2 {
    font-size: 20px;
  }
}
</style>
