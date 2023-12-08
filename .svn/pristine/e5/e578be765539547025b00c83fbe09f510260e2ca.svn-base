<template>
  <ion-page>
    <ion-header>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <BackButton />
          </ion-buttons>
          <ion-title>기본설정</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-header>
    <ion-content>
      <div class="layout-container">
        <JoinTitle>
          <template v-slot:title>
            기본 정보를 <br />
            작성해 주세요
          </template>
          <template v-slot:desc
          >프로필에 기본으로 등록되는 정보입니다.
          </template
          >
        </JoinTitle>
        <div class="form-wrapper">
          <ion-grid>
            <ion-row>
              <ion-col
              >
                <ion-text color="light" class="text-sm"
                >당신의 성격유형(MBTI)를 알려주세요!
                </ion-text
                >
              </ion-col
              >
            </ion-row>
            <ion-row>
              <ion-col size="3" v-for="(data, index) in mbtiList" :key="index">
                <ion-button
                  fill="clear"
                  size="small"
                  expand="block"
                  :class="[
                    'round-sm',
                    {
                      'is-selected': isSelectedMbtis(data)
                    }
                  ]"
                  :style="{
                    'background-color': data.backgroundColor || 'white'
                  }"
                  @click="toggleItem('mbti', data)"
                >
                  <ion-text>
                    {{ data.mbtiNm }}
                  </ion-text>
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-text color="light" class="text-sm"
                >외모 이상형이 어떻게 되세요? (최대2개)
                </ion-text
                >
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="3" v-for="(data, index) in faceList" :key="index">
                <ion-button
                  fill="clear"
                  size="small"
                  expand="block"
                  :class="[
                    'round-sm',
                    {
                      'is-selected': isSelectedFace(data)
                    }
                  ]"
                  :style="{
                    'background-color': data.backgroundColor || 'white'
                  }"
                  @click="toggleItem('face', data)"
                >
                  <ion-text>
                    {{ data.lookNm }}
                  </ion-text>
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-text color="light" class="text-sm">
                  체형 이상형이 어떻게 되세요? (최대2개)
                </ion-text
                >
              </ion-col
              >
            </ion-row>
            <ion-row>
              <ion-col size="3" v-for="(data, index) in bodyList" :key="index">
                <ion-button
                  fill="clear"
                  size="small"
                  expand="block"
                  :class="[
                    'round-sm',
                    {
                      'is-selected': isSelectedBody(data)
                    }
                  ]"
                  :style="{
                    'background-color': data.backgroundColor || 'white'
                  }"
                  @click="toggleItem('body', data)"
                >
                  <ion-text>
                    {{ data.formNm }}
                  </ion-text>
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-text color="light" class="text-sm">
                  성격 이상형이 어떻게 되세요? (최대2개)
                </ion-text
                >
              </ion-col
              >
            </ion-row>
            <ion-row>
              <ion-col
                size="3"
                v-for="(data, index) in personalityList"
                :key="index"
              >
                <ion-button
                  fill="clear"
                  size="small"
                  expand="block"
                  :class="[
                    'round-sm',
                    {
                      'is-selected': isSelectedPer(data)
                    }
                  ]"
                  :style="{
                    'background-color': data.backgroundColor || 'white'
                  }"
                  @click="toggleItem('personality', data)"
                >
                  <ion-text>
                    {{ data.characterNm }}
                  </ion-text>
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-text color="light" class="text-sm">
                  요즘 어떤것에 관심이 있으신가요? (최대3개)
                </ion-text
                >
              </ion-col
              >
            </ion-row>
            <ion-row>
              <ion-col size="3" v-for="(data, index) in hobbyList" :key="index">
                <ion-button
                  fill="clear"
                  size="small"
                  expand="block"
                  :class="[
                    'round-sm',
                    {
                      'is-selected': isSelectedInterest(data)
                    }
                  ]"
                  :style="{
                    'background-color': data.backgroundColor || 'white'
                  }"
                  @click="toggleItem('hobby', data)"
                >
                  <ion-text>
                    {{ data.hobbyNm }}
                  </ion-text>
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-row>
              <ion-col
              >
                <ion-text color="light" class="text-sm"
                >가장 좋아하는 음악은 무엇인가요? (선택)
                </ion-text
                >
              </ion-col
              >
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-list>
                  <ion-item
                    class="input-field"
                    counter="true"
                    :counterFormatter="customFormatter"
                  >
                    <ion-input
                      type="text"
                      maxlength="20"
                      placeholder="가수,작곡가"
                      v-model="likeSinger"
                    ></ion-input>
                  </ion-item>
                  <ion-item
                    class="input-field"
                    counter="true"
                    :counterFormatter="customFormatter"
                  >
                    <ion-input
                      type="text"
                      maxlength="20"
                      placeholder="제목"
                      v-model="likeMusic"
                    ></ion-input>
                  </ion-item>
                </ion-list>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </div>
    </ion-content>
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
import { getData, tempMap, COUNTE_FORMAT, profileMapFn } from "@/assets/js/common";
import JoinTitle from "@/components/JoinTitle.vue";

export default {
  name: "Register",
  inject: ["alertController", "loadingController"],
  components: {
    JoinTitle
  },
  data() {
    return {
      COUNTE_FORMAT,
      chevronBack,
      search,

      mbtiList: "",
      faceList: "",
      bodyList: "",
      personalityList: "",
      hobbyList: "",

      likeSinger: "",
      likeMusic: "",

      selectMbtis: [],
      selectFaces: [],
      selectBodys: [],
      selectPers: [],
      selectInterests: [],

      btnType: "",

      userMbti: "",
      userFace: "",
      userBody: "",
      userPer: "",
      userHobby: "",

      loading: null,
      btnCheckDisabled: true,
      loadingTime: 500
    };
  },

  ionViewWillEnter() {
    // 진입할 때 호출
    this.getKeywordList();
  },

  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {
  },

  methods: {
    keywordBtn(state) {
      /** 선택버튼을 다시한번누르면 리스트 숨기기 **/
      if (this.btnType === state) {
        return (this.btnType = "");
      }
      this.btnType = state;
      this.getKeywordList(state);
    },
    getResult() {
      let resultObj = {};

      resultObj.userKey = tempMap.key; // userKey

      resultObj.mbtiCd = JSON.stringify(
        this.selectMbtis.map((item) => item.mbtiCd)
      );
      resultObj.lookCd = JSON.stringify(
        this.selectFaces.map((item) => item.lookCd)
      );
      resultObj.formCd = JSON.stringify(
        this.selectBodys.map((item) => item.formCd)
      );
      resultObj.characterCd = JSON.stringify(
        this.selectPers.map((item) => item.characterCd)
      );

      resultObj.hobbyCd = JSON.stringify(
        this.selectInterests.map((item) => item.hobbyCd)
      );
      resultObj.likeSinger = this.likeSinger;
      resultObj.likeMusic = this.likeMusic;

      return resultObj;
    },

    /** 로그인 유저 정보 **/
    getSelectUser() {
      getData({
        url: "/getSettingUserInfo",
        param: {},
        target: this,
        then: (data) => {
          this.userMbti = data.mbtiNm;
          this.userFace = data.idealLookNm;
          this.userBody = data.idealFormNm;
          this.userPer = data.idealCharacterNm;
          this.userHobby = data.hobbyNm;

          this.likeSinger = data.likeSinger;
          this.likeMusic = data.likeMusic;

          /** mbti 자동선택 **/
          const mbtiObject = this.mbtiList.find(
            (item) => item.mbtiNm === this.userMbti
          );
          if (mbtiObject) {
            this.toggleItem("mbti", mbtiObject);
          }
          /** 외모 자동선택 **/
          const faceObjects = this.faceList.filter((item) =>
            this.userFace.includes(item.lookNm)
          );
          if (faceObjects.length > 0) {
            faceObjects.forEach((faceObject) => {
              this.toggleItem("face", faceObject);
            });
          }
          /** 체형 자동선택 **/
          const bodyObject = this.bodyList.filter((item) =>
            this.userBody.includes(item.formNm)
          );
          if (bodyObject.length > 0) {
            bodyObject.forEach((bodyObject) => {
              this.toggleItem("body", bodyObject);
            });
          }
          /** 성격 자동선택 **/
          const perObject = this.personalityList.filter((item) =>
            this.userPer.includes(item.characterNm)
          );
          if (perObject.length > 0) {
            perObject.forEach((perObject) => {
              this.toggleItem("personality", perObject);
            });
          }
          /** 취미 자동선택 **/
          const hobbyObject = this.hobbyList.filter((item) =>
            this.userHobby.includes(item.hobbyNm)
          );
          if (hobbyObject.length > 0) {
            hobbyObject.forEach((hobbyObject) => {
              this.toggleItem("hobby", hobbyObject);
            });
          }
        }
      });
    },

    getSave() {
      this.showLoading();
      getData({
        url: "/getUserKeywordUpdate",
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

    /** 키워드 리스트 **/
    getKeywordList() {
      getData({
        url: "/getKeywordList",
        param: {},
        target: this,
        then: (data) => {
          this.mbtiList = data.mbtiList;
          this.faceList = data.faceList;
          this.bodyList = data.bodyList;
          this.personalityList = data.perList;
          this.hobbyList = data.hobbyList;
        }
      });
      this.$nextTick(() => {
        this.getSelectUser();
      });
    },

    /** next btn **/
    checkBth() {
      this.getSave();
      // if (this.job.trim() !== '') {
      //   this.goJoin();
      // } else {
      //   this.warningAlert('직업을 선택하지 않았습니다.');
      // }
    },

    /** 글자수 체크 **/
    customFormatter(inputLength, maxLength) {
      if (inputLength > maxLength) {
        return "더이상 입력할수 없습니다.";
      } else if (inputLength < 1) {
        return `최소 ${1 - inputLength}자 / 최대 ${maxLength}자`;
      } else {
        return `최소 글자수 완료 / 최대 ${maxLength - inputLength}자`;
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

    /** 선택아이템 **/
    isSelectedMbtis(item) {
      return this.selectMbtis.includes(item);
    },
    isSelectedFace(item) {
      return this.selectFaces.includes(item);
    },
    isSelectedBody(item) {
      return this.selectBodys.includes(item);
    },
    isSelectedPer(item) {
      return this.selectPers.includes(item);
    },
    isSelectedInterest(item) {
      return this.selectInterests.includes(item);
    },

    /** mbti type 별 색상 **/
    getMbtiTypeColor(e) {
      switch (e) {
        case "INTJ":
        case "INTP":
        case "ENTJ":
        case "ENTP":
          return "type-analyzer";
        case "INFJ":
        case "INFP":
        case "ENFJ":
        case "ENFP":
          return "type-diplomat";
        case "ISTJ":
        case "ISFJ":
        case "ESTJ":
        case "ESFJ":
          return "type-manager";
        case "MOLU":
          return "type-molu";
        default:
          return "type-explorer";
      }
    },
    /** 선택 아이템들 **/
    toggleItem(state, item) {
      if (state === "mbti") {
        /** mbti **/
        if (this.isSelectedMbtis(item)) {
          this.selectMbtis.splice(this.selectMbtis.indexOf(item), 1);
        } else {
          if (this.selectMbtis.length > 0) {
            this.selectMbtis.splice(0, 1);
          }
          this.selectMbtis.push(item);
        }
      } else if (state === "face") {
        /** 이상형 얼굴 **/
        if (item.lookNm === "상관없음") {
          if (!this.isSelectedFace(item)) {
            if (
              this.selectFaces.some(
                (selectedItem) => selectedItem.lookNm === "상관없음"
              )
            ) {
              this.selectFaces.splice(
                this.selectFaces.findIndex(
                  (selectedItem) => selectedItem.lookNm !== "상관없음"
                ),
                1,
                item
              );
            } else {
              this.selectFaces.push(item);
            }
            this.selectFaces = this.selectFaces.filter(
              (selectedItem) => selectedItem.lookNm === "상관없음"
            );
          } else {
            this.selectFaces = this.selectFaces.filter(
              (selectedItem) => selectedItem.lookNm !== "상관없음"
            );
          }
        } else {
          if (this.isSelectedFace(item)) {
            this.selectFaces.splice(this.selectFaces.indexOf(item), 1);
          } else {
            if (
              !this.selectFaces.some(
                (selectedItem) => selectedItem.lookNm === "상관없음"
              )
            ) {
              if (this.selectFaces.length === 2) {
                this.selectFaces.splice(0, 1);
              }
              this.selectFaces.push(item);
            } else {
              this.selectFaces.splice(
                this.selectFaces.findIndex(
                  (selectedItem) => selectedItem.lookNm !== "상관없음"
                ),
                1,
                item
              );
            }
          }
        }
      } else if (state === "body") {
        /** 이상형 몸 **/
        if (item.formNm === "상관없음") {
          if (!this.isSelectedBody(item)) {
            if (
              this.selectBodys.some(
                (selectedItem) => selectedItem.formNm === "상관없음"
              )
            ) {
              this.selectBodys.splice(
                this.selectBodys.findIndex(
                  (selectedItem) => selectedItem.formNm !== "상관없음"
                ),
                1,
                item
              );
            } else {
              this.selectBodys.push(item);
            }
            this.selectBodys = this.selectBodys.filter(
              (selectedItem) => selectedItem.formNm === "상관없음"
            );
          } else {
            this.selectBodys = this.selectBodys.filter(
              (selectedItem) => selectedItem.formNm !== "상관없음"
            );
          }
        } else {
          if (this.isSelectedBody(item)) {
            this.selectBodys.splice(this.selectBodys.indexOf(item), 1);
          } else {
            if (
              !this.selectBodys.some(
                (selectedItem) => selectedItem.formNm === "상관없음"
              )
            ) {
              if (this.selectBodys.length === 2) {
                this.selectBodys.splice(0, 1);
              }
              this.selectBodys.push(item);
            } else {
              this.selectBodys.splice(
                this.selectBodys.findIndex(
                  (selectedItem) => selectedItem.formNm !== "상관없음"
                ),
                1,
                item
              );
            }
          }
        }
      } else if (state === "personality") {
        /** 이상형 성격 **/
        if (item.characterNm === "상관없음") {
          if (!this.isSelectedPer(item)) {
            if (
              this.selectPers.some(
                (selectedItem) => selectedItem.characterNm === "상관없음"
              )
            ) {
              this.selectPers.splice(
                this.selectPers.findIndex(
                  (selectedItem) => selectedItem.characterNm !== "상관없음"
                ),
                1,
                item
              );
            } else {
              this.selectPers.push(item);
            }
            this.selectPers = this.selectPers.filter(
              (selectedItem) => selectedItem.characterNm === "상관없음"
            );
          } else {
            this.selectPers = this.selectPers.filter(
              (selectedItem) => selectedItem.characterNm !== "상관없음"
            );
          }
        } else {
          if (this.isSelectedPer(item)) {
            this.selectPers.splice(this.selectPers.indexOf(item), 1);
          } else {
            if (
              !this.selectPers.some(
                (selectedItem) => selectedItem.characterNm === "상관없음"
              )
            ) {
              if (this.selectPers.length === 2) {
                this.selectPers.splice(0, 1);
              }
              this.selectPers.push(item);
            } else {
              this.selectPers.splice(
                this.selectPers.findIndex(
                  (selectedItem) => selectedItem.characterNm !== "상관없음"
                ),
                1,
                item
              );
            }
          }
        }
      } else {
        /** 취미 **/
        if (this.isSelectedInterest(item)) {
          // 선택된 아이템 선택 해제
          this.selectInterests.splice(this.selectInterests.indexOf(item), 1);
        } else {
          if (this.selectInterests.length > 2) {
            this.selectInterests.splice(0, 1);
          }
          this.selectInterests.push(item);
        }
      }
    },
    /** 로딩 **/
    async showLoading() {
      this.loading = await this.loadingController.create({
        message: "Loading...",
        duration: 0
      });
      await this.loading.present();
    }
  }
};
</script>
<style lang="scss" scoped></style>
