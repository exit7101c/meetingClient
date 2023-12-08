<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>기본설정</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="layout-container">
        <!-- title -->
        <JoinTitle>
          <template v-slot:title>
            기본 정보를 <br />
            작성해 주세요
          </template>
          <template v-slot:desc>
            프로필에 기본으로 등록되는 정보입니다.
          </template>
        </JoinTitle>
        <div class="form-wrapper">
          <!-- 대표 아이콘 -->
          <ion-grid class="ion-padding" style="margin-top: -20px;">
            <ion-row>
              <ion-col>
                <ion-text color="light" class="text-sm"
                >대표 아이콘
                </ion-text
                >
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <div class="row-box">
                  <div class="btn-tab-group">
                    <ion-button
                      @click="iconModalOpen = true;"
                      fill="clear"
                      class="iconBtn">
                        <span style=" display: flex; align-items: center;">
                          <ion-img style="width: 30px; height: 30px;" v-bind:src="'https://'+this.userIconImgId" />
                          <span>&nbsp;&nbsp;{{ this.userIconNm }}</span>
                        </span>
                    </ion-button>
                  </div>
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>


          <!-- 대표 아이콘 -->

          <!-- 흡연 여부 -->
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-text color="light" class="text-sm">흡연 여부 🚭</ion-text>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col
                size="auto"
                v-for="(data, index) in smokeList"
                :key="index"
              >
                <ion-button
                  color="secondary"
                  size="small"
                  :fill="isSelectedSmoke(data) ? 'solid' : 'outline'"
                  @click="toggleItem('smoke', data)"
                >
                  {{ data.smokeNm }}
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
          <!-- 음주 여부 -->
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-text color="light" class="text-sm">음주 여부 🥂</ion-text>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col
                size="auto"
                v-for="(data, index) in drinkingList"
                :key="index"
              >
                <ion-button
                  color="secondary"
                  size="small"
                  :fill="isSelectedDrinking(data) ? 'solid' : 'outline'"
                  @click="toggleItem('drinking', data)"
                >
                  {{ data.drinkNm }}
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
          <!-- 체형 -->
          <!--          <ion-grid>-->
          <!--            <ion-row>-->
          <!--              <ion-col>-->
          <!--                <ion-text color="light" class="text-sm"-->
          <!--                  >체형을 알려주세요</ion-text-->
          <!--                >-->
          <!--              </ion-col>-->
          <!--            </ion-row>-->
          <!--            <ion-row>-->
          <!--              <ion-col-->
          <!--                size="auto"-->
          <!--                v-for="(data, index) in bodyList"-->
          <!--                :key="index"-->
          <!--              >-->
          <!--                <ion-button-->
          <!--                  color="secondary"-->
          <!--                  size="small"-->
          <!--                  :fill="isSelectedBody(data) ? 'solid' : 'outline'"-->
          <!--                  @click="toggleItem('body', data)"-->
          <!--                >-->
          <!--                  {{ data.formNm }}-->
          <!--                </ion-button>-->
          <!--              </ion-col>-->
          <!--            </ion-row>-->
          <!--          </ion-grid>-->
          <!-- 키 -->
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-text color="light" class="text-sm"
                >키를 알려주세요
                </ion-text
                >
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col style="padding: 0 10px 0 10px">
                <ion-range
                  aria-label="Volume"
                  min="140"
                  max="200"
                  step="1"
                  value="140"
                  v-model="selectedValue"
                  @ionChange="onRangeChange"
                >
                  <ion-label color="light" slot="end" class="text-sm"
                  >{{ selectedValue }}cm
                  </ion-label
                  >
                </ion-range>
              </ion-col>
            </ion-row>
          </ion-grid>
          <!-- 몸무게 -->
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-text color="light" class="text-sm"
                >몸무게를 알려주세요
                </ion-text
                >
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col style="padding: 0 10px 0 10px">
                <ion-range
                  aria-label="Volume"
                  min="40"
                  max="120"
                  step="1"
                  value="70"
                  v-model="weightValue"
                  @ionChange="onWeightRangeChange"
                >
                  <ion-label color="light" slot="end" class="text-sm"
                  >{{ weightValue }}kg
                  </ion-label
                  >
                </ion-range>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </div>
    </ion-content>

    <!-- 아이콘 모달창 -->
    <ion-modal
      :is-open="iconModalOpen"
      @ionModalDidDismiss="iconModalOpen = false"
    >
      <ion-content class="ion-padding">
        <ion-toolbar mode="md">
          <ion-title class="main-header">
            대표 아이콘
          </ion-title>
        </ion-toolbar>

        <ion-list lines="none">
          <ion-radio-group v-model="selectedAvatar" class="img-radio-group">
            <ion-row>
              <ion-col size="4" v-for="data in iconList" :key="data.iconCd" @click="closeIconSelect(data)">
                <ion-item class="img-radio-button">
                  <ion-label>
                    <ion-img :src="'https://' + data.cdnThumbNm" />
                    <ion-text color="light">{{ data.iconNm }}</ion-text>
                  </ion-label>
                  <ion-radio slot="start" :value="data.iconCd"></ion-radio>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-radio-group>
        </ion-list>

      </ion-content>
    </ion-modal>
    <!-- 아이콘 모달창 -->

    <ion-footer class="join-footer">
      <div class="layout-container">
        <div class="btn-group">
          <custom-button
            color="primary"
            size="large"
            expand="block"
            shape="round"
            @click="getSave(btnCheckDisabled=false)"
            :disabled="!btnCheckDisabled"
          >
            저장
          </custom-button>
        </div>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script>
import { chevronBack, search } from "ionicons/icons";
import { getData, profileMapFn } from "@/assets/js/common";
import JoinTitle from "@/components/JoinTitle.vue";
import { loadingController } from "@ionic/vue";

export default {
  name: "Register",
  inject: ["alertController"],
  components: {
    JoinTitle
  },
  data() {
    return {
      chevronBack,
      search,

      ItemList: [],

      rangeValue: "",
      selectedValue: "", // 키 초기값
      weightValue: "", // 몸무게 초기값

      iconModalOpen: false,

      iconList: [],
      // iconNm: '',

      bodyList: [],
      smokeList: [],
      drinkingList: [],

      selectBodys: [],
      selectSmokes: [],
      selectDrinkings: [],

      btnType: "",

      userBody: "",
      userSmoke: "",
      userDrinking: "",
      userIconNm: "",
      userIconImgId: "",
      btnCheckDisabled: true,
      loadingTime: 500,
      loading: null,
      selectedAvatar: ""
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.getInfoList();
  },

  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {
  },

  methods: {
    getResult() {
      let resultObj = {};

      resultObj.iconCd = this.iconCd; // 아이콘
      resultObj.tall = this.selectedValue; // 키
      resultObj.weight = this.weightValue; // 몸무게
      // resultObj.formCd = JSON.stringify(
      //   this.selectBodys.map((item) => item.formCd)
      // ); // 체형
      resultObj.smokeCd = JSON.stringify(
        this.selectSmokes.map((item) => item.smokeCd)
      ); // 흡연
      resultObj.drinkCd = JSON.stringify(
        this.selectDrinkings.map((item) => item.drinkCd)
      ); // 음주

      return resultObj;
    },

    getSave() {
      // return;
      this.showLoading();
      getData({
        url: "/getUserInfoUpdate",
        param: this.getResult(),
        target: this,
        then: (data) => {
          if (data.successYn === "N") {
            this.warningAlert(data.message);
          } else {
            profileMapFn({ pageType: "profileEdit" });
            this.$router.push("/profile");
          }
          setTimeout(() => {
            this.loading.dismiss();
            this.btnCheckDisabled = true;
          }, this.loadingTime);
        }
      });
    },

    /** 로그인 유저 정보 **/
    getSelectUser() {
      getData({
        url: "/getSettingUserInfo",
        param: {},
        target: this,
        then: (data) => {
          this.userBody = data.formNm;
          this.userSmoke = data.smokeNm;
          this.userDrinking = data.drinkNm;
          this.selectedValue = data.tall;
          this.weightValue = data.weight;
          this.userIconNm = data.iconNm;
          this.selectedAvatar = data.iconCd;
          this.userIconImgId = data.cdnThumbNmIcon;

          /** 체형 자동선택 **/
          // const bodyObject = this.bodyList.filter((item) =>
          //   this.userBody.includes(item.formNm)
          // );
          // if (bodyObject.length > 0) {
          //   bodyObject.forEach((bodyObject) => {
          //     this.toggleItem("body", bodyObject);
          //   });
          // }
          /** 흡연 자동선택 **/
          const smokeObject = this.smokeList.filter((item) =>
            this.userSmoke.includes(item.smokeNm)
          );
          if (smokeObject.length > 0) {
            smokeObject.forEach((smokeObject) => {
              this.toggleItem("smoke", smokeObject);
            });
          }
          /** 음주 자동선택 **/
          const drinkingObject = this.drinkingList.filter((item) =>
            this.userDrinking.includes(item.drinkNm)
          );
          if (drinkingObject.length > 0) {
            drinkingObject.forEach((drinkingObject) => {
              this.toggleItem("drinking", drinkingObject);
            });
          }
        }
      });
    },
    getInfoList() {
      getData({
        url: "/getInfoList",
        param: {},
        target: this,
        then: (data) => {
          this.bodyList = data.bodyList;
          this.drinkingList = data.drinkingList;
          this.smokeList = data.smokeList;
          this.iconList = data.iconList;
        }
      });
      this.$nextTick(() => {
        this.getSelectUser();
      });
    },

    isSelectedBody(item) {
      return this.selectBodys.includes(item);
    },
    isSelectedSmoke(item) {
      return this.selectSmokes.includes(item);
    },
    isSelectedDrinking(item) {
      return this.selectDrinkings.includes(item);
    },

    toggleItem(state, item) {
      if (state === "body") {
        /** 체형 **/
        if (item.formNm === "비공개") {
          if (!this.isSelectedBody(item)) {
            if (
              this.selectBodys.some(
                (selectedItem) => selectedItem.formNm === "비공개"
              )
            ) {
              this.selectBodys.splice(
                this.selectBodys.findIndex(
                  (selectedItem) => selectedItem.formNm !== "비공개"
                ),
                1,
                item
              );
            } else {
              this.selectBodys.push(item);
            }
            this.selectBodys = this.selectBodys.filter(
              (selectedItem) => selectedItem.formNm === "비공개"
            );
          } else {
            this.selectBodys = this.selectBodys.filter(
              (selectedItem) => selectedItem.formNm !== "비공개"
            );
          }
        } else {
          if (this.isSelectedBody(item)) {
            this.selectBodys.splice(this.selectBodys.indexOf(item), 1);
          } else {
            if (
              !this.selectBodys.some(
                (selectedItem) => selectedItem.formNm === "비공개"
              )
            ) {
              if (this.selectBodys.length === 1) {
                this.selectBodys.splice(0, 1);
              }
              this.selectBodys.push(item);
            } else {
              this.selectBodys.splice(
                this.selectBodys.findIndex(
                  (selectedItem) => selectedItem.formNm !== "비공개"
                ),
                1,
                item
              );
            }
          }
        }
      } else if (state === "smoke") {
        /** 흡연 **/
        if (this.isSelectedSmoke(item)) {
          this.selectSmokes.splice(this.selectSmokes.indexOf(item), 1);
        } else {
          if (this.selectSmokes.length > 0) {
            this.selectSmokes.splice(0, 1);
          }
          this.selectSmokes.push(item);
        }
      } else if (state === "drinking") {
        /** 음주 **/
        if (this.isSelectedDrinking(item)) {
          this.selectDrinkings.splice(this.selectDrinkings.indexOf(item), 1);
        } else {
          if (this.selectDrinkings.length > 0) {
            this.selectDrinkings.splice(0, 1);
          }
          this.selectDrinkings.push(item);
        }
      }
    },

    /** 경고 팝업창 **/
    async warningAlert(message) {
      const alert = await this.alertController.create({
        header: "",
        subHeader: "",
        message: message,
        buttons: ["OK"]
      });
      return alert.present();
    },

    /** 아이콘 모달창 열기 **/
    openModal() {
      this.iconModalOpen = true;
    },
    /** 아이콘 모달창 닫기 **/
    closeIconSelect(item) {
      this.iconCd = item.iconCd;
      this.userIconNm = item.iconNm;
      this.userIconImgId = item.cdnThumbNm;

      this.iconModalOpen = false;
    },
    onRangeChange(event) {
      this.selectedValue = event.detail.value;
    },
    onWeightRangeChange(event) {
      this.weightValue = event.detail.value;
    },
    /** 로딩 **/
    async showLoading() {
      this.loading = await loadingController.create({
        message: "Loading...",
        duration: 0
      });
      await this.loading.present();
    }
  }
};
</script>

<style lang="scss" scoped>
ion-modal {
  padding: 0 18px;
  --height: 350px;
  --border-radius: 10px;

  ion-content {

    &::part(scroll) {
      overflow: hidden;
    }
  }
}
</style>
