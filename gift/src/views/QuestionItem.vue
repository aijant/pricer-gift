<template>
  <main>
    <section class="contents">
      <div>
        <div class="questionView">
          <div class="questionView__inner">
            <p class="questionView__number">Q1.</p>
            <h2 class="questionView__text">
              プレゼントを贈る相手はどんなものが好き？
            </h2>
            <div class="questionList">
              <a href="javascript:void(0)" class="questionList__item"
                ><span>A.</span>
                <p>仕事も休日も使える万能アイテム</p>
              </a>
              <a href="javascript:void(0)" class="questionList__item"
                ><span>B.</span>
                <p>スポーツやレジャーシーンで役立つ高機能アイテム</p>
              </a>
              <!---->
            </div>
          </div>
        </div>
        <div class="btnBox">
          <div class="btnBox__btn">
            <button type="button" class="mod-btnBack">1つ前の質問へ</button>
          </div>
          <div class="btnBox__btn">
            <a class="mod-btnBack" @click="back()">&#60; TOPへ戻る</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        name: 'QuestionItem',
        data() {
          return {
            items: [],
            result: []
          }
        },
        computed: mapState({
            questions: state => state.questions,
        }),
        methods: {
            back() {
                console.log(this.questions)
                this.$router.push({ path: "/" });
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contents {
  max-width: 560px;
  width: 85%;
  margin: 0 auto;
}

.questionView {
  position: relative;
  padding-top: 180px;
  min-height: 505px;

  &__number {
    position: absolute;
    left: 50%;
    top: 83px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    font-size: 5.6rem;
    font-weight: bold;
    line-height: 1.48;
    text-align: center;
  }
  &__text {
    margin-bottom: 40px;
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    line-height: 1.5;
  }

  .questionList {
    width: 100%;

    &__item {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      width: 100%;
      margin: 12px 0;
      padding: 18px;
      box-sizing: border-box;
      border-radius: 43px;
      border: 1px solid #fff;
      background-color: #f8f8f5;
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 1.5;
    }
  }
}

.btnBox {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
}

.btnBox .btnBox__btn {
  margin: 0 2%;
  width: 46%;
}

.mod-btnBack {
  position: relative;
  width: 100%;
  display: block;
  padding: 17px 0 17px 17px;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: bold;
  text-align: center;
  border: 2px solid #4c4033;
  border-radius: 43px;
  background-color: #fff;
  box-sizing: border-box;
}
</style>
