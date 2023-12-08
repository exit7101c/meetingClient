<template>
  <ion-card>
    <ion-grid>
      <div class="row-box">
        <ion-avatar>
          <ion-img :src="'https://' + thumbnail" @click="$router.push('/profile')" />
          <custom-button
            color="warning"
            shape="round"
            size="small"
            class="btn-profile"
            @click="routerDailyCardInfo"
          >
            <ion-text>프로필 보기</ion-text>
            <ion-icon :icon="searchOutline" slot="end" />
          </custom-button>
        </ion-avatar>
      </div>
      <div class="row-box">
        <ion-row class="profile-info">
          <ion-col size="12">
            <ion-row
              class="ion-align-items-center ion-justify-content-center flex-nowrap"
            >
              <ion-text color="light" class="text-lg text-bold"
              >{{ user.nick }}
              </ion-text
              >
              <ion-icon
                :icon="pencilIcon"
                color="light"
                size="large"
                @click="updateNickName"
              />
            </ion-row>
          </ion-col>
        </ion-row>
      </div>
    </ion-grid>
  </ion-card>
</template>
<script>
import { searchOutline, pencilOutline } from "ionicons/icons";
import IconMyPencil from "@/assets/img/icon/icon_pencil.svg";

export default {
  name: "MyPageProfile",
  props: {
    thumbnail: {
      type: String
    },
    user: {
      type: Object
    },
    nickState: {
      type: String
    },
    customFormatter: {
      type: Function
    },
    value: {
      type: String
    },
    isNicknameValid: {
      type: Boolean
    }
  },
  data() {
    return {
      pencilIcon: IconMyPencil,
      searchOutline,
      pencilOutline
    };
  },
  methods: {
    validateNickname($event) {
      this.$emit("update:value", $event.target.value);
    },
    updateNickName() {
      this.$emit("updateNickname");
    },
    routerDailyCardInfo() {
      this.$emit("dailyCardInfo");
    }
  }
};
</script>
<style lang="scss" scoped>
ion-avatar {
  position: relative;
  width: 140px;
  height: 140px;
  object-fit: cover;
  border: 2px solid var(--ion-color-warning);
  margin: 0 auto;

  ion-img {
    border: 1px solid var(--ion-background-color);
    border-radius: 50%;
  }

  .btn-profile {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1rem;
    margin: 0;

    &::part(native) {
      width: auto;
      height: 24px;
      margin: 0 auto;
      padding: 0 10px;
    }
  }
}

.profile-info {
  text-align: center;
}
</style>
