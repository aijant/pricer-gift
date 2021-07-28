<template>
  <main>
    <section class="contents">
      <div class="questionView">
        <div class="questionView__inner">
          <h2 class="questionView__text">あなたが送りたい相手の性別は</h2>
          <div class="questionList">
            <a href="#" class="questionList__item" @click="goToQuestion('man')">
              <p>SHAPE</p>
            </a>
            <a href="#" class="questionList__item" @click="goToQuestion('woman')">
              <p>NEW FEATURE</p>
            </a>
          </div>
        </div>
      </div>

      <div class="btnBox">
        <div class="btnBox__btn">
          <a class="mod-btnBack" @click="back()">&#60; TOPへ戻る</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Question',
  methods: {
       back() {
      this.$router.go(-1);
    },
     goToQuestion(type) {
      console.log(type)
      this.$router.push({ path: `/questionItem/`, params: { type: type } });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contents {
  margin: 0 auto;
  padding-bottom: 94px;
  font-family: $font_sans;
}

.questionView {
  position: relative;
  padding-top: 180px;
  min-height: 505px;
}

.questionView__text {
  margin-bottom: 40px;
  font-size: $font-size;
  font-weight: $bold;
  text-align: $text-align;
  line-height: 1.5;
}

.questionList {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 661px;

  .questionList__item {
    display: flex;
    justify-content: center;
    text-align: $text-align;
    color: $main-color;
    text-decoration: none;
    width: 100%;
    margin: 12px 0;
    padding: 18px;
    box-sizing: border-box;
    border-radius: 43px;
    border: 1px solid #fff;
    background-color: #f8f8f5;
    font-size: 1rem;
    font-weight: $bold;
    line-height: 1.5;

     &:hover {
        background: #ded7d1b5;
      }
  }

  a {
    width: 48%;
  }
}

.btnBox {
  display: flex;
  justify-content: center;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;

  .btnBox__btn {
    margin: 0 2%;
    width: 46%;
  }

  .mod-btnBack {
    position: relative;
    display: block;
    color: $main-color;
    text-decoration: none;
    padding: 17px 0 17px 17px;
    font-size: $font-size;
    line-height: 1.5;
    font-weight: $bold;
    text-align: $text-align;
    border: 2px solid #4c4033;
    border-radius: 43px;
    background-color: #fff;
  }
}

@media only screen and (max-width: $breakpoint) {
  .questionView {
    padding-top: 114px;
  }

  .questionList {
    margin-bottom: 96px;
  }

  .questionList__item {
    display: block;
    margin-bottom: 16px;
    padding: 21px;
  }
}
</style>
