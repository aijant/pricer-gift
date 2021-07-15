<template>
  <div class="contents__logo">
    <a href="https://crosset.onward.co.jp/mag/" target="_blank">
      <h1 class="mod-logoMain">
        <img src="../assets/ttl-mag_brown.png" alt="ONWARD MAG" />
      </h1>
    </a>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contents__logo {
  width: 179px;
  height: auto;
  margin: 0 auto 40px;

  a {
    color: $main-color;
    text-decoration: none;
    cursor: pointer;
  }

  .mod-logoMain {
    width: 100%;
    height: auto;
  }

  img {
    width: 100%;
    height: auto;
    vertical-align: bottom;
  }
}
</style>
