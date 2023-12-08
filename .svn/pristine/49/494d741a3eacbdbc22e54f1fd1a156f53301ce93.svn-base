<template>
  <ion-modal
    :is-open="isOpen"
    @ionModalDidDismiss="ionModalDidDismiss"
    :initial-breakpoint="0.95"
    :breakpoints="[0, 0.15, 0.5, 0.95]"
  >
    <ion-row class="gap-lg">
      <div class="img-item">
        <ion-row>
          <ion-col
            size="4"
            v-for="item in emoticonList"
            :key="item.emoticonCd"
          >
            <ion-card @click="handleClick(item)"
                      style="display: flex; justify-content: center; align-items: center; background-color: white;">
              <ion-img
                style="max-width: 100%; max-height: 100%;"
                :src="
                      isLoaded
                        ? 'https://' + item.cdnNm
                        : require('../../assets/img/Loading_icon.gif')
                    "
                @ionImgDidLoad="handleImgloaded"
                @ionError="
                      $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
                    "
              />
            </ion-card>
          </ion-col>
        </ion-row>
      </div>
    </ion-row>
  </ion-modal>
</template>
<script>
import IconAddPhoto from "@/assets/img/icon/icon_add_photo.svg";
import IconSend from "@/assets/img/icon/icon_send.svg";
import IconClose from "@/assets/img/icon/icon_close.svg";
import IconEmoji from "@/assets/img/icon/icon_emoji.svg";

export default {
  name: "Emoticon",
  props: {
    emoticonList: {
      type: Object
    },
    isOpen: {
      type: Boolean
    }

  },
  data() {
    return {
      closeIcon: IconClose,
      addPhotoIcon: IconAddPhoto,
      sendIcon: IconSend,
      emojiIcon: IconEmoji,

      emojiCheck: false,
      isLoaded: false
    };
  },
  methods: {
    ionModalDidDismiss() {
      this.$emit("ionModalDidDismiss");
    },
    handleClick(item) {
      // console.log(item);
      this.$emit("emoticonClick", item);
    },

    handleClose() {
      this.openEmoticon = false;
    },
    handleImgloaded() {
      this.isLoaded = true;
    }

  }
};
</script>
<style lang="scss" scoped>
.img-area {
  overflow-y: auto;
  height: 300px;
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 100%;
  padding: 16px 10px;
  background-color: rgba(0, 0, 0, 1);
  z-index: 1;

  .img-item {
    position: relative;

    ion-img {
      width: 60px;
      height: 60px;
      object-fit: cover;
    }

    .btn-close {
      position: absolute;
      right: -16px;
      top: -16px;
      margin: 0;
      transform: scale(0.75);
    }
  }
}

.comment-area {
  --padding-top: 10px;
  --padding-bottom: 30px;
  --padding-start: 0;
  align-items: center;

  .input-area {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    background-color: white;

    ion-textarea {
      height: 100%;
      color: black;
      margin: 0;
      caret-color: black;
      font-size: 12px;

      .textarea-wrapper.sc-ion-textarea-md {
        height: 100%;
      }
    }
  }

  ion-fab-button {
    width: 36px;
    height: 36px;
    margin: 0 4px;
    --box-shadow: none;

    + ion-fab-button {
      margin-left: 4px;
    }
  }

  .btn-area {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    padding: 0 4px;
  }
}

.centered-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

ion-modal {
  --border-radius: 10px;
  --width: 100%;
  --height: 430px;
}
</style>
