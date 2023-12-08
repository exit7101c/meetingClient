<template>
  <ion-list lines="full">
    <ion-item
      @click="goRouter(data.articleId, data)"
      v-for="(data, index) in sliceItemList"
      :key="index"
    >
      <div slot="start" class="num">
        <ion-text color="light">{{ index + 1 }}</ion-text>
        <ion-avatar style="width: 36px; height: 36px;">
          <ion-skeleton-text
            :animated="true"
            v-if="!loaded"
            class="skeleton-img"
          />
          <ion-img
            v-else
            :src="'https://' + data.cdnThumbNmIcon"
            @ionError="
              $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
            "
          />
        </ion-avatar>
      </div>
      <ion-label>
        <ion-text color="light">
          <ion-skeleton-text :animated="true" v-if="!loaded" />
          <template v-else>
            <h3 style="font-size: 16px">{{ data.title }}</h3>
          </template>
        </ion-text>
        <ion-text color="light">
          <template v-if="!loaded">
            <span><ion-skeleton-text :animated="true" /></span
            ><span><ion-skeleton-text :animated="true" /></span>
            <span><ion-skeleton-text :animated="true" /></span>
          </template>
          <template v-else>
            <span style="font-size: 12px">{{ data.createdDtMm }}</span
            ><span style="font-size: 12px"
          >읽음 {{ data.viewCnt }} · 댓글 {{ data.commentCnt }}</span
          >
          </template>
        </ion-text>
      </ion-label>
      <ion-thumbnail slot="end">
        <ion-skeleton-text
          :animated="true"
          v-if="!loaded"
          class="skeleton-img"
        />
        <template v-else>
          <ion-img
            v-show="data.cdnThumbNm !== null"
            :src="'https://' + data.cdnThumbNm"
            @ionError="
              $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
            "
          />
        </template>
      </ion-thumbnail>
    </ion-item>
  </ion-list>
  <div class="row-box text-center" v-if="limit < 10">
    <ion-chip color="light" outline class="shape-round btn-more" @click="btnMoreList">
      <ion-label>
        5개 펼쳐보기
      </ion-label>
      <ion-icon :icon="chevronDown" size="small"></ion-icon>
    </ion-chip>
  </div>
</template>
<script>
import { communityViewMapFn } from "@/assets/js/common";
import { chevronDown } from "ionicons/icons";

export default {
  name: "MainBestTopic",
  props: {
    itemList: {
      type: Array
    },
    loaded: {
      type: Boolean
    }
  },
  computed: {
    sliceItemList() {
      return this.itemList.slice(0, this.limit);
    }
  },
  data() {
    return {
      limit: 5,
      chevronDown
    };
  },
  methods: {
    goRouter(articleKey) {
      communityViewMapFn({ article: articleKey, type: "Home" });
      this.$router.push("/communityView");
    },
    btnMoreList() {
      this.limit = 10;
    }
  }
};
</script>
<style scoped lang="scss">
ion-list {
  //background: #1b1b1b;
  border-radius: var(--ion-border-radius);

  ion-item {
    --padding-start: 0;
    --inner-padding-end: 0;
    --border-color: rgba(255, 255, 255, 0.1);
    --background: transparent;

    .num {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 8px;

      ion-text {
        font-weight: bold;
        font-size: 16px;
        width: 26px;
        margin-top: -8px;
        padding-left: 6px;
      }
    }

    &:last-of-type {
      --border-color: transparent;
    }
  }

  ion-label {
    h3 {
      font-size: 12px;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    span {
      font-size: 10px;
      display: inline-block;
      min-width: 24px;

      + span {
        margin-left: 10px;
      }
    }
  }

  ion-thumbnail {
    ion-skeleton-text {
      --border-radius: 0;
    }

    ion-img {
      height: 48px;
    }
  }
}

</style>
