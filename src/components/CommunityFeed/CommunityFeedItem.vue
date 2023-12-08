<template>
  <ion-card>
    <ion-item>
      <ion-avatar slot="start" @click="goDetail">
        <ion-img
          :src="'https://' + item.cdnThumbNmIcon"
          @ionError="
            $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
          "
        />
      </ion-avatar>
      <ion-label @click="goDetail">
        <ion-text color="light">
          <h3>{{ item.communityNick }}</h3>
        </ion-text>
        <ion-text color="secondary">
          <span>{{ item.createdDtMm }}</span>
        </ion-text>
      </ion-label>
      <!--<ion-label>
        <ion-chip class="chip-sm chip-secondary"
                  @click="letterBtn(item)" style="padding: 2px; font-size: 12px;float:right;">익명 메세지
        </ion-chip>
      </ion-label>-->

      <div slot="end">
        <ion-icon
          slot="icon-only"
          :icon="ellipsisVertical"
          color="light"
          :id="`feed-popover-button-${item.articleId}`"
        />
        <ion-popover
          :trigger="`feed-popover-button-${item.articleId}`"
          trigger-action="click"
          :dismiss-on-select="true"
          mode="ios"
        >
          <ion-content>
            <ion-list lines="full">
              <template v-if="item.createdUserKey == SS_USER_KEY">
                <ion-item :button="true" :detail="false" @click="editCommunity">수정</ion-item>
                <ion-item :button="true" :detail="false" @click="presentAlertConfirm">삭제</ion-item>
              </template>
              <template v-else>
                <ion-item :button="true" :detail="false" @click="policeBtn">신고</ion-item>
                <ion-item :button="true" :detail="false" @click="setHide">숨김</ion-item>
              </template>
              <template v-if="SS_USER_KEY == 'oicc8XQmIB8SklPssUoYtg==' && item.appTesterYn == 'Y'">
                <ion-item :button="true" :detail="false" @click="adminHideCommunity">관리자숨김</ion-item>
              </template>
              <template v-else-if="SS_USER_KEY == 'oicc8XQmIB8SklPssUoYtg==' && item.appTesterYn == 'N'">
                <ion-item :button="true" :detail="false" @click="adminHideCommunity">관리자숨김(이미처리됨)</ion-item>
              </template>
            </ion-list>
          </ion-content>
        </ion-popover>
      </div>
    </ion-item>
    <ion-card-content >
      <ion-text @click="goDetail" slot="start" color="light" style="font-size: 18px; font-weight: 700;">
        {{ item.title }}
      </ion-text>
      <div>
        <ion-img
          v-show="item.cdnNm !== null"
          :src="'https://' + item.cdnNm"
          @ionError="
            $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
          "
          class="mb-4"
          @click="goDetail"
        />
        <div
          class="content"
          :class="{ 'is-expand': moreView }"
          v-if="item.content.length > 0"
          @click="goDetail"
        >
          <ion-text color="light" class="text-md" v-html="item.content">
          </ion-text>
        </div>
        <p class="mt-2" v-if="!moreView && item.content.split('\n').length > 2">
          <ion-text color="primary" class="text-link" @click="moreView = true"
          >더보기...
          </ion-text
          >
        </p>
      </div>
      <div class="row-box add-info" @click="goDetail">
        <ion-row class="ion-align-items-center ion-justify-content-between">
          <ion-text>
            <ion-icon :icon="chatbubble" />
            {{ item.commentCnt }}
          </ion-text>
          <ion-text>
            <ion-icon :icon="eyeOutline" />
            {{ item.viewCnt }}
          </ion-text>
        </ion-row>
      </div>
    </ion-card-content>
    <ion-buttons>
      <!-- 댓글 상세페이지로 연결 -->
      <ion-button color="light" expand="block" @click="goDetail">
        <ion-icon :icon="chatbubble" />
        <ion-text>댓글</ion-text>
        {{ item.commentCnt }}
      </ion-button
      >
      <ion-button color="light" expand="block" @click="thumbsUpDown">
        <ion-icon :icon="thumbsUpOutline" />
        <ion-text> 좋아요</ion-text>
        {{ item.likeCnt }}
      </ion-button
      >
    </ion-buttons>
  </ion-card>

  <!--<MessageModal
    :is-open="messageOpen"
    :title="communityNick + '님에게 메시지 보내기'"
    @ionModalDidDismiss="messageOpen = false"
    @input="limitMessage($event)"
    @handleSendMessage="handleSendMessage"
  />-->
</template>
<script>
import IconChatbubbleOutline from "@/assets/img/icon/icon_chatbubbleOutline.svg";
import IonEyeOutline from "@/assets/img/icon/ion_eyeOutline.svg";
import { thumbsUpOutline, ellipsisVertical } from "ionicons/icons";
import { SS_USER_KEY } from "@/assets/js/common";

export default {
  name: "CommunityFeedItem",
  props: {
    item: {
      type: Object
    },
    loaded: {
      type: Boolean
    }
  },
  data() {
    return {
      SS_USER_KEY,
      thumbsUpOutline,
      ellipsisVertical,
      eyeOutline: IonEyeOutline,
      chatbubble: IconChatbubbleOutline,
      moreView: false,
      contentExmaple:
        "본문내용 &lt;사진상단에 포함&gt; <br />최대 2줄까지 가능 <br> 더보기 눌러야 전테 내용 다보임",
      messageOpen: false,
      communityNick: ''
    };
  },
  mounted() {
    this.replaceContentURL();
  },
  methods: {
    goDetail() {
      this.$emit("goDetail");
    },
    editCommunity() {
      this.$emit("edit");
    },
    presentAlertConfirm() {
      this.$emit("delete");
    },
    thumbsUpDown() {
      this.$emit("thumbsUpDown");
    },
    policeBtn() {
      this.$emit("policeBtn");
    },
    setHide() {
      this.$emit("setHide");
    },
    replaceContentURL() {
      this.$emit("replaceContentURL");
    },
    adminHideCommunity() {
      this.$emit("adminHideCommunity");
    },
    letterBtn(item) {
      console.log(item);
      //if (this.dropYn === 'N') {
        this.messageOpen = true;
      //} else {
      //  this.warningAlert('탈퇴한 유저입니다.');
      //}
    },
    limitMessage(e) {
      const text = e.target.value;
      this.messageTextSend = text;
    },
  }
};
</script>
<style scoped lang="scss">
ion-card {
  --background: #1d1f29;
  --border-radius: var(--ion-border-radius);
  margin: 0;

  + ion-card {
    margin-top: 8px;
  }

  ion-item {
    --background: #1d1f29;
    --border-color: transparent;
    --padding-top: 4px;
    --padding-bottom: 4px;

    ion-avatar {
      margin-right: 10px;
    }

    ion-label {
      h3 {
        font-size: 16px;
        overflow: visible;
        contain: inherit;
        white-space: pre-wrap;
      }

      span {
        font-size: 12px;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        gap: 4px;
        min-width: 24px;

        + span {
          margin-left: 10px;

          ion-icon {
            vertical-align: -2px;
          }
        }
      }
    }

    ion-row {
      width: 100%;
      align-items: flex-start;
      justify-content: center;
      gap: 10px;

      ion-text {
        padding-top: 4px;
      }

      ion-thumbnail {
        ion-img {
          height: 48px;
        }
      }
    }
  }

  ion-card-content {
    border-bottom: 1px solid var(--ion-color-dark);
    padding-top: 0px;

    .content {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      &.is-expand {
        display: block;
        overflow: visible;
      }
    }

    .add-info {
      ion-text {
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        gap: 4px;
      }
    }
  }

  ion-buttons {
    width: 100%;

    ion-button {
      width: 50%;
      height: 50px;
      font-size: 12px;

      ion-text {
        margin: 0 8px 0 6px;
      }
    }
  }
}
</style>
