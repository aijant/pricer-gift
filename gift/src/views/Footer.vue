<template>
  <footer id="footer" class="footer">
    <div class="footer__inner">
      <a
        href="https://crosset.onward.co.jp/"
        target="_blank"
        class="footer__logo"
        ><img src="../assets/logo-onward_brown.png" alt="ONWARD CROSSET"
      /></a>
      <p class="footer__copyright">
        <small>copyright onward kashiyama co., ltd. all rights reserved.</small>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  padding: 64px 0;
  background-color: #fff;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 90%;å
  margin: 0 auto;
}

.footer__logo {
  order: 2;

  img {
    width: 150px;
    height: auto;
  }
}

@media only screen and (max-width: $breakpoint) {
  .footer {
    padding: 60px 0 40px;
  }
  .footer__inner {
    display: block;
  }

  .footer__logo {
    display: block;
    width: 120px;
    margin: 0 auto 26px;
  }
  .footer__copyright {
    font-size: 11px;
    text-align: center;
  }
}
</style>
