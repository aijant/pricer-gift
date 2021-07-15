<template>
  <main>
    <section class="contents">
      <p class="contents__lead-img">
        <picture>
          <source
            srcset="../assets/img-lead_pc.svg"
            media="(min-width:768px)"
          />
          <img src="../assets/img-lead_sp.svg" alt="もらって嬉しいありがとう" />
        </picture>
      </p>
      <h3 class="contents__lead">贈る相手にピッタリなギフトがわかる！</h3>
      <h2 class="contents__title">ギフトタイプ診断</h2>
      <div class="contents__image">
        <picture
          ><source
            srcset="../assets/img-mv_pc.jpg"
            media="(min-width: 767px)" />
          <img src="../assets/img-mv_sp.jpg" alt="mg-mv_sp"
        /></picture>
      </div>
      <div class="contents__btn">
        <a class="mod-btnSimpleBrown" @click="goToQuestion()">診断スタート</a>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'MainContent',
  methods:{
  goToQuestion() {
    this.$router.push({path:'question'})
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contents {
  margin: 0 auto;
  padding-bottom: 94px;
  font-family: $font_sans;
}

.contents__lead-img {
  width: 276px;
  height: auto;
  margin: 0 auto 16px;
  text-align: $text-align;

  img {
    max-width: 100%;
    width: auto;
  }
}

.contents__lead {
  font-size: $font-size;
  font-weight: $bold;
  line-height: 1.46;
  color: $main-color;
  text-align: $text-align;

  .contents__title {
    margin-bottom: 48px;
    font-size: 4.7rem;
    color: $main-color;
  }
}

.contents__title {
  text-align: $text-align;
}

.contents__image {
  max-width: 980px;
  width: 83%;
  margin: 0 auto 64px;

  img {
    width: 100%;
    height: auto;
    vertical-align: bottom;
  }
}

.contents__btn {
  max-width: 1000px;
  width: 82%;
  width: 313px;
  margin: 0 auto;

  .mod-btnSimpleBrown {
    width: 100%;
    display: block;
    padding: 17px 0;
    font-size: $font-size;
    line-height: 1.5;
    font-weight: $bold;
    text-align: $text-align;
    text-decoration: none;
    border: 2px solid $main-color;
    border-radius: 43px;
    background-color: $main-color;
    color: #fff;
  }
}

@media only screen and (max-width: $breakpoint) {
  .contents__title {
    margin-bottom: 24px;
    font-size: 3.2rem;
    line-height: 1.75;
  }

  .contents__image {
    width: 100%;
    margin: 0 auto 24px;
  }

  .contents__btn {
    width: 82%;
  }
}
</style>
