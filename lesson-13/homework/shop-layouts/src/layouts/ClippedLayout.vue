<template>
  <div class="container">
    <header class="header">
      <nav>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </nav>
    </header>
    <main class="main">
      <slot></slot>
    </main>
    <footer class="footer">
      <h4>Pictures</h4>
      <div class="pictures">
        <div class="pic">
          <img
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Water_1_Intro_MainImage_SeanRyanTNCPhotoContest2019.jpg?crop=666%2C0%2C2667%2C2667&wid=300&hei=300&scl=8.89"
            alt="Image"
          />
        </div>
        <div class="pic">
          <img
            src="https://i.pinimg.com/474x/7e/83/0b/7e830b7800e64e69b2e696ba29941401.jpg"
            alt="Image"
          />
        </div>
        <div class="pic">
          <img
            src="https://i.pinimg.com/474x/0a/d1/65/0ad16554ca3593418b855694048ad932.jpg"
            alt="Image"
          />
        </div>
        <div class="pic">
          <img
            src="https://media.springernature.com/w300/springer-static/image/art%3A10.1038%2F515027a/MediaObjects/41586_2014_Article_BF515027a_Figb_HTML.jpg"
            alt="Image"
          />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ClippedLayout",
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header {
  border-bottom: 2px solid black;
}
.main {
  flex-grow: 1;
}
.footer {
  flex-shrink: 0;
  //   display: flex;
  //   gap: 10px;
  //   justify-content: space-around;
  padding: 10px;
  border-top: 2px solid black;
}
.pictures {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  img {
    width: 120px;
  }
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
