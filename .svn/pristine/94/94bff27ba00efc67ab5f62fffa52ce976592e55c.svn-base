<template>
  <section>
    <ion-row>
      <ion-img
        class="mb-4"
        v-if="info.cdnNm2"
        :src="'https://' + info.cdnNm2"
      />
      <ion-text color="light" class="text-bold" v-if="info.shortWord"
        >INTERVIEW</ion-text
      >
      <div class="row-box" v-if="info.shortWord">
        <ion-card>
          <ion-text color="light">
            {{ info.shortWord }}
          </ion-text>
        </ion-card>
      </div>
    </ion-row>
    <ion-row>
      <ion-img
        class="mb-4"
        v-if="info.cdnNm3"
        :src="'https://' + info.cdnNm3"
      />
      <ion-text color="light" class="text-bold" v-if="info.mbtiDetail"
        >Q. 어떤 성격인가요?</ion-text
      >
      <div class="row-box" v-if="info.mbtiDetail">
        <ion-card>
          {{ info.mbtiDetail }}
        </ion-card>
      </div>
    </ion-row>
    <ion-row>
      <ion-img
        class="mb-4"
        v-if="info.cdnNm4"
        :src="'https://' + info.cdnNm4"
      />
      <ion-text
        color="light"
        class="text-bold"
        v-if="info.idealLookNm && info.idealFormNm && info.idealCharacterNm"
        >Q. 취향은 어떻게 되시나요?</ion-text
      >
      <div
        class="row-box"
        v-if="info.idealLookNm && info.idealFormNm && info.idealCharacterNm"
      >
        <ion-card>
          전
          <ion-text color="primary">{{ info.idealLookNm }}</ion-text>
          스타일을 선호하고 체형은
          <ion-text color="primary">{{ info.idealFormNm }}</ion-text> 한 분들을
          좋아합니다 무엇보다 성격은
          <ion-text color="primary">{{ info.idealCharacterNm }}</ion-text>
          분들이 저와 잘 맞을것 같아요.
        </ion-card>
      </div>
    </ion-row>
    <ion-row>
      <ion-img
        class="mb-4"
        v-if="info.cdnNm5"
        :src="'https://' + info.cdnNm5"
      />
      <ion-text color="light" class="text-bold" v-if="info.hobbyNm"
        >Q. 관심사가 뭔가요?</ion-text
      >
      <div class="row-box" v-if="info.hobbyNm">
        <ion-card>
          제가 요즘 관심 갖는 취미활동은
          <ion-text color="primary">{{ info.hobbyNm }}</ion-text> 등이 있습니다.
        </ion-card>
      </div>
    </ion-row>
    <ion-row>
      <ion-img
        class="mb-4"
        v-if="info.cdnNm6"
        :src="'https://' + info.cdnNm6"
      />
      <ion-text color="light" class="text-bold" v-if="info.likeSinger"
        >Q. 요즘 자주 듣는 노래는 뭔가요?</ion-text
      >
      <div class="row-box" v-if="info.likeSinger">
        <ion-card>
          <ion-text color="primary"
            >{{ info.likeSinger }} - {{ info.likeMusic }}</ion-text
          >
          꼭 들어보세요!!
        </ion-card>
      </div>
    </ion-row>
  </section>
</template>
<script>
export default {
  name: 'UserDetailInterview',
  props: {
    info: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
section {
  padding-bottom: 40px;
  .section-header {
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 20px;
  }

  ion-title {
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 20px;
  }
  ion-text {
    font-weight: bold;
  }
  ion-row {
    display: block;
    padding: 0;
    margin: 0;
    + ion-row {
      margin-top: 40px;
    }
    ion-img {
      border-radius: 10px;
      overflow: hidden;
    }
    ion-card {
      border-radius: var(--ion-border-radius);
      border: 1px solid var(--ion-border-color);
      background-color: var(--ion-border-color);
      padding: 20px;
      margin: 0;
      --color: white;
      line-height: 1.5;
      font-size: 15px;
    }
  }
}
</style>
