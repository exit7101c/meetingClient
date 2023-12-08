<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton @event="presentAlertConfirm()" :custom="true" />
        </ion-buttons>
        <ion-title>
          커뮤니티 글 {{ this.type !== "edit" ? "작성" : "수정" }}
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <GuideBanner @event="goRouter('guide')" :title="'커뮤니티를 더 즐기기 위한 가이드 보기 배너'" />
      <!--   게시판 선택   -->
      <div class="row-box">
        <div class="btn-tab-group">
          <ion-button @click.stop="openModal('main')" fill="outline">
            <span v-if="categoryBoardId === ''">게시판 선택하기</span>
            <span v-else>{{ categoryBoardNm }}</span>
          </ion-button>
          <ion-button @click.stop="openModal('sub')" fill="outline" :disabled="categoryBoardId === ''">
            <span v-if="subCategoryBoardCd === ''">서브게시판 선택하기</span>
            <span v-else>{{ subCategoryBoardNm }}</span>
          </ion-button>
        </div>
      </div>
      <!--   입력 폼   -->
      <div class="row-box">
        <ion-list>
          <ion-item
            ref="nick"
            counter="true"
            :counterFormatter="COUNTE_FORMAT"
            class="input-field"
          >
            <ion-input
              type="text"
              maxlength="8"
              placeholder="닉네임은 최대 8자까지 가능해요"
              v-model="communityNick"
              @ionChange="COM_VALIDATION(communityNick, 'nick', this)"
            />
            <ion-note slot="error">닉네임이 올바르지 않습니다.</ion-note>
          </ion-item>
          <ion-item
            ref="title"
            counter="true"
            :counterFormatter="COUNTE_FORMAT"
            class="input-field"
          >
            <ion-input
              type="text"
              maxlength="40"
              placeholder="제목은 최대 40자까지 가능해요"
              v-model="title"
              @ionChange="COM_VALIDATION(title, 'title', this)"
            />
            <ion-note slot="error">제목이 올바르지 않습니다.</ion-note>
          </ion-item>
          <ion-item
            ref="content"
            lines="none"
            counter="true"
            :counterFormatter="COUNTE_FORMAT"
            class="input-field"
          >
            <ion-textarea
              v-model="content"
              :rows="15"
              maxlength="2000"
              @ionChange="COM_VALIDATION(content, 'content', this)"
              placeholder="매너를 지켜주세요.&#10;특정인이나 집단을 비하하거나 저격하는 행위,&#10;욕설 및 비방글은 삭제됩니다."
            />
            <ion-note slot="error">더이상 입력할수 없습니다.</ion-note>
          </ion-item>
        </ion-list>
      </div>
      <!-- 사진 첨부 -->
      <div class="row-box">
        <ion-grid>
          <ion-row>
            <ion-col size="4">
              <AddPhotoButton
                @click="addPhoto('add1')"
                :name="add1imgViewFileId"
                :required="false"
              />
            </ion-col>
            <ion-col size="4">
              <AddPhotoButton
                @click="addPhoto('add2')"
                :name="add2imgViewFileId"
                :required="false"
                :subscribe="true"
              />
            </ion-col>
            <ion-col size="4">
              <AddPhotoButton
                @click="addPhoto('add3')"
                :name="add3imgViewFileId"
                :required="false"
                :subscribe="true"
              />
            </ion-col>
          </ion-row>
          <input
            type="file"
            @change="onFileChange"
            ref="photo"
            style="display: none"
          />
        </ion-grid>
      </div>
      <!--
      <div>자동 메크로 설정</div>
      -->
      <!-- 카테고리 모달 -->
      <ion-modal
        ref="modal"
        :is-open="categoryModalOpen"
        @ionModalDidDismiss="categoryModalOpen = false"
        :initial-breakpoint="1.0"
        :breakpoints="[0, 0.15, 0.5, 1.0]"
      >
        <ion-page>
          <ion-header>
            <ion-toolbar class="text-left">
              <ion-title>카테고리를 선택해 주세요</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list class="ion-padding">
              <SelectCategoryItem
                class="row-box"
                v-for="item in categoryList"
                :key="item.boardId"
                :item="item"
                @click="closeCategory(item, 'main')"
              />
            </ion-list>
          </ion-content>
        </ion-page>
      </ion-modal>
      <!-- 서브 카테고리 모달 -->
      <ion-modal
        ref="modal"
        :is-open="subCategoryModalOpen"
        @ionModalDidDismiss="subCategoryModalOpen = false"
        :initial-breakpoint="1.0"
        :breakpoints="[0, 1.0]"
        style="--height: 50%;"
      >
        <ion-page>
          <ion-header>
            <ion-toolbar class="text-left">
              <ion-title>서브 카테고리를 선택해 주세요</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list class="ion-padding">
              <SelectCategoryItem
                class="row-box"
                v-for="item in subCategoryList"
                :key="item.subBoardCd"
                :item="item"
                :type="'sub'"
                @click="closeCategory(item, 'sub')"
              />
            </ion-list>
          </ion-content>
        </ion-page>
      </ion-modal>
    </ion-content>
    <ion-footer>
      <div class="layout-container">
        <ion-button
          color="primary"
          shape="round"
          expand="block"
          size="large"
          @click="checkBth(this.type)"
          :disabled="!checkBtnDisabled"
        >
          글 {{ this.state === "edit" ? "수정하기" : "작성하기" }}
        </ion-button>
      </div>
    </ion-footer>
    <AlertMessageModal
      :is-open="subscribeMessage"
      :title="'NAVY+'"
      :message="'회원님은 현재 구독 상태가 아닙니다.'"
      :subMessage="'NAVY PASS 에 가입하시면 더많은 혜택을 받으실수 있습니다.'"
      :btnName="'이동'"
      :height="220"
      :disabledCheck="false"
      @ionModalDidDismiss="subscribeMessage = false"
      @handleClickBtn="goRouter('store')"
    />
  </ion-page>
</template>

<script>
import {
  getData,
  communityViewMap,
  setFile,
  COM_VALIDATION,
  COUNTE_FORMAT,
  communityViewMapFn,
  communityWriteMapFn,
  communityWriteMap, storeMapFn
} from "@/assets/js/common";
import GuideBanner from "@/components/Common/GuideBanner.vue";
import SelectCategoryItem from "@/components/Common/SelectCategoryItem.vue";
import AddPhotoButton from "@/components/AddPhotoButton.vue";
import PageLoadingCheck from "@/components/PageLoadingCheck.vue";

import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Filesystem, Directory, Encoding } from "@capacitor/filesystem";
import AlertMessageModal from "@/components/Modal/AlertMessageModal.vue";

export default {
  inject: ["alertController", "loadingController"],
  components: {
    GuideBanner,
    SelectCategoryItem,
    AddPhotoButton,
    PageLoadingCheck,
    AlertMessageModal
  },

  data() {
    return {
      COM_VALIDATION,
      COUNTE_FORMAT,

      displayErrors: false,

      title: "",
      content: "",
      communityNick: "익명",

      itemList: "",
      categoryList: "",

      categoryBoardId: "", // 카테고리 코드 선택값
      categoryBoardNm: "", // 카테고리 이름 선택값

      categoryModalOpen: false,

      Attachfiles: [],
      mainFileId: "",

      uploadType: "",

      imgFileId: null,

      add1imgFileId: null,
      add2imgFileId: null,
      add3imgFileId: null,
      add1imgViewFileId: null,
      add2imgViewFileId: null,
      add3imgViewFileId: null,

      type: "",
      isNicknameValid: true,

      isSaving: false, // 저장상태 체크.

      subCategoryList: "",
      subCategoryModalOpen: false,
      subCategoryBoardCd: "", // 서브 카테고리 코드 선택값
      subCategoryBoardNm: "", // 서브 카테고리 이름 선택값
      subCategoryCheck: "",

      nickValid: true,
      checkDisabled: true,
      userSubscribeYn: "",
      subscribeMessage: false,
      messageModal: false
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.type = communityWriteMap.type;

    this.$nextTick(() => {
      this.communityNick = localStorage.getItem("SS_USER_COMMUNITY_NICK");
      this.userSubscribeYn = localStorage.getItem("SS_USER_SUBSCRIBE_YN");
    });

    //this.COM_VALIDATION($event, 'nick', this)

    if (this.type === "edit") {
      this.getUpdate();
      this.getCategoryList();
    } else if (this.type === "new") {
      this.getNickname();
      this.title = "";
      this.content = "";
      this.imgFileId = null;
      this.add1imgFileId = null;
      this.add2imgFileId = null;
      this.add3imgFileId = null;
      this.add1imgViewFileId = null;
      this.add2imgViewFileId = null;
      this.add3imgViewFileId = null;
      this.categoryBoardId = "";
      this.categoryBoardNm = "";
      this.subCategoryBoardCd = "";
      this.subCategoryBoardNm = "";
      this.isSaving = false;
    }
  },

  ionViewDidLeave() {
    // 떠날 때 호출
  },
  mounted() {
  },
  computed: {
    validate() {
      return this.COM_VALIDATION([
        { value: this.communityNick, type: "nick" },
        { value: this.title, type: "title" },
        { value: this.content, type: "content" }
      ]);
    },

    checkBtnDisabled() {
      return (
        this.title !== "" &&
        this.content !== "" &&
        // this.categoryBoardNm !== "" &&
        this.checkDisabled === true
      );
    }
  },
  methods: {

    /** 완료 or 수정 버튼 **/
    checkBth(type) {
      if (this.validate) {
        //검수 통과
        if (this.categoryBoardId === "") {
          this.warningAlert("게시판을 선택해주세요.");
        } else if (this.title === "" && !this.validate) {
          this.warningAlert("제목을 입력해주세요.");
        } else if (this.content === "") {
          this.warningAlert("내용을 입력해주세요.");
        } else {
          this.confirmBtn(type, this.checkDisabled = false);
        }
      } else {
        this.warningAlert("잘못된 항목이 있습니다. 내용을 다시 확인해주세요.");
      }
    },

    getResult() {
      let resultObj = {};

      resultObj.articleKey = communityViewMap.article;

      resultObj.communityNick = this.communityNick;
      resultObj.boardId = this.categoryBoardId ? this.categoryBoardId : null;
      resultObj.subBoardCd = this.subCategoryBoardCd;

      resultObj.title = this.title;
      resultObj.content = this.content;
      // resultObj.mainFileId = this.imgFileId;
      resultObj.attr1 = this.add1imgFileId ? this.add1imgFileId : null;
      resultObj.attr2 = this.add2imgFileId ? this.add2imgFileId : null;
      resultObj.attr3 = this.add3imgFileId ? this.add3imgFileId : null;

      return resultObj;
    },

    getNickname() {
      getData({
        url: "/getCommunityUserNick",
        param: {},
        then: (data) => {
          this.communityNick = data[0].communityLastnick;
        }
      });
    },
    /** 카테고리 리스트 **/
    getCategoryList() {
      getData({
        url: "/getCategoryList",
        param: {},
        then: (data) => {
          this.categoryList = data;
        }
      });
    },
    getSubCategoryList() {
      getData({
        url: "/getSubCategoryList",
        param: { boardId: this.categoryBoardId },
        then: (data) => {
          this.subCategoryList = data;
        }
      });
    },
    /** 수정 버튼을 눌러서 페이지 진입했을때 .**/
    getUpdate() {
      getData({
        url: "/getCommunityDetail",
        param: {
          articleKey: communityWriteMap.article,
          type: communityWriteMap.type
        },
        then: (data) => {
          this.itemList = data.articleMap;

          this.communityNick = this.itemList.communityNick;
          this.title = this.itemList.title;
          this.content = this.itemList.content;
          this.categoryBoardId = this.itemList.boardId;
          this.categoryBoardNm = this.itemList.boardNm;
          this.add1imgFileId = this.itemList.attr1;
          this.add2imgFileId = this.itemList.attr2;
          this.add3imgFileId = this.itemList.attr3;
          this.add1imgViewFileId = this.itemList.attr1CdnNm;
          this.add2imgViewFileId = this.itemList.attr2CdnNm;
          this.add3imgViewFileId = this.itemList.attr3CdnNm;
          this.subCategoryBoardCd = this.itemList.subBoardCd;
          this.subCategoryBoardNm = this.itemList.subBoardNm;
        }
      });
    },

    /** 카테고리 모달창 열기 **/
    openModal(type) {
      if (type === "main") {
        this.getCategoryList();
        this.categoryModalOpen = true;
      } else if (type === "sub") {
        this.getSubCategoryList();
        this.subCategoryModalOpen = true;
      }
    },
    /** 카테고리 모달창 닫기 **/
    closeCategory(item, type) {
      if (type === "main") {
        this.categoryBoardId = item.boardId;
        this.categoryBoardNm = item.boardNm;
        if (item.boardId !== this.subCategoryCheck) {
          this.subCategoryCheck = item.boardId;
          this.subCategoryBoardCd = "";
          this.subCategoryBoardNm = "";
        }
        this.categoryModalOpen = false;
      } else if (type === "sub") {
        this.subCategoryBoardCd = item.subBoardCd;
        this.subCategoryBoardNm = item.subBoardNm;
        this.subCategoryModalOpen = false;
      }
    },

    /** 사진 업로드 **/
    addPhoto(state) {
      switch (state) {
        case "add1":
          this.uploadType = "add1";
          break;
        case "add2":
          if (this.userSubscribeYn == "Y") {
            this.uploadType = "add2";
          } else {
            this.subscribeMessage = true;
            return;
          }
          break;
        case "add3":
          if (this.userSubscribeYn == "Y") {
            this.uploadType = "add3";
          } else {
            this.subscribeMessage = true;
            return;
          }
          break;

      }

      /** 사진첩 호출 & 파일객체 변환 **/
      Camera.getPhoto({
        allowEditing: false, //사진수정여부 (안드로이드만 가능, IOS는 카메라 촬영시만 수정)
        source: CameraSource.Photos, //사진첨, 촬영, 등 설정
        resultType: CameraResultType.Uri //사진 result Type
      }).then(async (photo) => {
        let blob = await fetch(photo.webPath).then(r => r.blob());
        const file = new File([blob], "fileName." + photo.format, {
          lastModified: new Date(),
          type: blob.type
        });

        this.Attachfiles.push(file);
        this.$nextTick(() => {
          this.insertFile(this.uploadType);
        });

      });
      /** //사진첩 호출 & 파일객체 변환 **/

      //this.$refs.photo.click();
    },

    onFileChange: function onFileChange(e) {
      // TODO : 첨부 파일 개수 제한
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }

      const allowedTypes = [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/gif"
      ]; // 허용할 이미지 파일 확장자 목록
      const file = files[0];
      if (!allowedTypes.includes(file.type)) {
        // 선택한 파일이 허용된 이미지 파일 확장자 목록에 포함되지 않는 경우
        this.warningAlert("이미지 파일만 업로드 가능해요"); // 사용자에게 알림 메시지 출력
        return;
      }
      this.Attachfiles.push(files[0]);

      this.$nextTick(() => {
        this.insertFile(this.uploadType);
      });
    },
    //사진 저장
    insertFile(e) {
      this.showLoading();
      //이미지 확장자 용량 체크
      setFile({
        url: "/setImage",
        param: {},
        file: this.Attachfiles,
        then: (data) => {
          //초기화
          this.Attachfiles = [];
          this.imgFileId = data.cdnNm;
          switch (e) {
            case "add1":
              this.add1imgFileId = data.fileId;
              this.add1imgViewFileId = data.cdnNm;
              break;
            case "add2":
              this.add2imgFileId = data.fileId;
              this.add2imgViewFileId = data.cdnNm;
              break;
            case "add3":
              this.add3imgFileId = data.fileId;
              this.add3imgViewFileId = data.cdnNm;
              break;
          }
          this.loading.dismiss();
        }
      });
    },

    /** 완료 or 수정 버튼 **/
    async confirmBtn(type) {
      if (this.isSaving) {
        return; // 이미 저장 중이라면 중복 저장 방지
      }
      this.isSaving = true;

      const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: "",
        message: "게시글을 작성합니다.",
        buttons: [
          {
            text: "취소",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              this.isSaving = false;
              this.checkDisabled = true;
            }
          },
          {
            text: "완료",
            handler: () => {
              let url;
              switch (type) {
                case "new":
                  url = "/setCommunityInsert";
                  break;
                case "edit":
                  url = "/setCommunityUpdate";
                  break;
              }
              getData({
                url: url,
                param: this.getResult(),
                then: (data) => {
                  /** 작성완료되면 글 비우기 **/
                  this.title = "";
                  this.content = "";
                  this.imgFileId = null;
                  this.add1imgFileId = null;
                  this.add2imgFileId = null;
                  this.add3imgFileId = null;
                  this.add1imgViewFileId = null;
                  this.add2imgViewFileId = null;
                  this.add3imgViewFileId = null;
                  this.categoryBoardId = "";
                  this.categoryBoardNm = "";
                  this.subCategoryBoardNm = "";
                  this.isSaving = false;
                  /** 작성완료되면 글 비우기 **/

                  if (type === "new") {
                    communityViewMapFn({
                      article: data.articleKey,
                      type: "communityWrite"
                    });
                    this.$router.push("/communityView");
                  } else {
                    communityViewMapFn({
                      article: communityViewMap.article,
                      type: "communityWrite"
                    });
                    this.$router.push("/communityView");
                  }


                  setTimeout(() => {
                    this.checkDisabled = true;
                  }, 500);
                }
              });
            }
          }
        ]
      });
      return alert.present();
    },

    goRouter(type) {
      if (type == "guide") {
        communityWriteMapFn({ page: "communityWrite", type: communityWriteMap.type });
        this.$router.push("/notificationCommunityGuide");
      } else if (type == "store") {
        this.subscribeMessage = false;
        storeMapFn({ subscribeYn: "Y" });
        this.$router.push("/store");
      }
    },
    /** 로딩창 **/
    async showLoading() {
      this.loading = await this.loadingController.create({
        message: "Loading...",
        duration: 0
      });
      await this.loading.present();
    },

    async warningAlert(message) {
      const alert = await this.alertController.create({
        header: "",
        subHeader: "",
        message: message,
        buttons: ["OK"]
      });
      return alert.present();
    },

    async presentAlertConfirm() {
      const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: "",
        message: "이 화면에서 나가면 입력한 내용은 저장되지 않습니다.",
        buttons: [
          {
            text: "취소",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
            }
          },
          {
            text: "나가기",
            handler: () => {
              this.$router.push("/community");
            }
          }
        ]
      });
      return alert.present();
    }
  }
};
</script>

<style scoped></style>
