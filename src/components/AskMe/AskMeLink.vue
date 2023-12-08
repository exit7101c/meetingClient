<template>
  <ion-grid style="background: linear-gradient(135deg, #bdbbb1, #61594a)">
    <ion-row>
      <ion-col class="text-center">
        <h5 style="font-size: 20px;font-weight: bold;margin-bottom: 5px;">ASK ME</h5>
        <h5>링크를 공유하고 솔직한 평가받자!</h5>
        <p>
          <ion-text class="link" @click="setClipBoard">
            <a>{{
                askMeInfo.askMeCode !== null ? askMeUrl : "주소변경이 필요합니다"
              }}</a>
            <ion-icon
              v-if="askMeInfo.askMeCode !== null"
              :icon="copyOutline"
              size="small"
            />
          </ion-text>
        </p>
        <div>
          <ion-text @click="setAskMeCode" class="text-link">기존주소 삭제하고 새로만들기</ion-text>
        </div>
      </ion-col>
      <div class="detail" v-if="detail" @click="$router.push('/askMeList')">
        <ion-icon
          :icon="arrowForward"
          size="small"
        ></ion-icon>
      </div>
    </ion-row>
  </ion-grid>
</template>
<script>
import { copyOutline, arrowForward } from "ionicons/icons";

export default {
  name: "AskMeLink",
  props: {
    detail: {
      type: Boolean
    },
    askMeInfo: {
      type: Object
    },
    askMeUrl: {
      type: String
    }
  },
  data() {
    return {
      copyOutline,
      arrowForward
    };
  },
  methods: {
    setAskMeCode() {
      this.$emit("setAskMeCode");
    },
    setClipBoard() {
      this.$emit("setClipBoard");
    }
  }
};
</script>
<style lang="scss" scoped>
ion-grid {
  position: relative;
  background: linear-gradient(135deg, #cfba56 0%, #cc9a41 100%);
  border-radius: var(--ion-border-radius);
  padding: 1rem 1.25rem;

  &:before {
    display: block;
    content: '';
    position: absolute;
    z-index: 1;
    left: 0.25rem;
    top: 0.25rem;
    bottom: 0.25rem;
    right: 0.25rem;
    border-radius: inherit;
    border: 1px solid rgba($color: white, $alpha: 0.5);
  }

  ion-row {
    position: relative;
    align-items: center;
    z-index: 2;
  }

  h5 {
    margin: 0;
    line-height: 1;
  }

  .link {
    display: inline-flex;
    padding: 0.5rem 1rem;
    background-color: rgba($color: white, $alpha: 0.5);
    border-radius: var(--ion-border-radius-lg);
    align-items: center;
    justify-content: center;
    gap: 1rem;

    a {
      color: rgb(72, 34, 241);
    }

    ion-icon {
      color: rgb(72, 34, 241);
      cursor: pointer;
    }
  }

  .detail {
    position: absolute;
    right: 0;
    top: 0.25rem;
  }
}

@media screen and (max-width: 600px) {
  ion-grid {
    font-size: 12px;

    h5 {
      font-size: 15px;
    }
  }
}
</style>
