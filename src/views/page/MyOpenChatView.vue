<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton @event="prevPage" :custom="true" />
        </ion-buttons>
        <ion-title>{{ chatDetailMap.partitionNm }}</ion-title>
        <ion-buttons slot="end">
          <custom-button color="medium" id="myopenChat-popover-button">
            <ion-icon slot="icon-only" :icon="menuIcon" color="light" />
          </custom-button>
          <ion-popover
            trigger="myopenChat-popover-button"
            :dismiss-on-select="true"
            mode="ios"
          >
            <ion-content>
              <ion-list lines="full">
                <!-- todo : 글 내용 조회해서 넘기기 -->
                <template v-if="ssUserYn === 'Y'">
                  <ion-item
                    :button="true"
                    :detail="false"
                    @click="editOpenChat(chatDetailMap)"
                    >수정
                  </ion-item>
                  <ion-item
                    :button="true"
                    :detail="false"
                    @click="presentAlertConfirm()"
                    >삭제
                  </ion-item>
                </template>
                <template v-else>
                  <ion-item :button="true" :detail="false">신고</ion-item>
                </template>
              </ion-list>
            </ion-content>
          </ion-popover>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <!--  메인  -->
    <ion-content class="ion-padding">
      <!-- 상단 작성자   -->
      <OpenChatViewUserInfo
        v-if="userInfoMap"
        :user="userInfoMap"
        :reg-date="regDate"
        :thumbnail="userInfoMap?.cdnThumbNm"
        @event="profileInfo(this.regUserKey)"
      />
      <!--   내용    -->
      <div>
        <ion-img
          :src="
            cdnNm !== ''
              ? 'https://' + cdnNm
              : require('../../assets/img/Loading_icon.gif')
          "
          @ionError="
            $event.srcElement.src = require('../../assets/img/Loading_icon.gif')
          "
        ></ion-img>
        <!--   제목   -->
        <div class="row-box">
          <ion-row class="ion-align-items-center ion-justify-content-between">
            <ion-text color="light" class="text-xl text-bold">
              {{ chatDetailMap.title }}
            </ion-text>
            <ion-label @click="openUseOpenChatModal">
              <ion-chip class="chip-xs chip-secondary"
                >🔥현재 {{ openchatRank }}위 모임
              </ion-chip>
            </ion-label>
          </ion-row>
        </div>
        <!--   내용    -->
        <div class="row-box">
          <p>
            <ion-text color="light" class="text-sm"
              >{{ chatDetailMap.content }}
            </ion-text>
          </p>
        </div>
        <!-- 참여 신청자 -->
        <div class="row-box" v-if="attendInfoList.length > 0">
          <OpenChatViewAttendList>
            <template #content>
              <OpenChatViewAttendItem
                v-for="(item, idx) in attendInfoList"
                :key="idx"
                :item="item"
                @event="profileInfo(item.userKey)"
                @ok="agreeYn('Y', item.userKey)"
                @cancel="agreeYn('N', item.userKey)"
              />
            </template>
          </OpenChatViewAttendList>
        </div>
        <!--   하단 시간 및 장소   -->
        <div class="row-box">
          <CustomCardItem :clear="true">
            <ion-label>
              <ion-row class="gap-md ion-align-items-center">
                <ion-icon color="secondary" :icon="calendarIcon"></ion-icon>
                <ion-text color="light">
                  <template v-if="dueDate === '상시 모집'">
                    {{ dueDate }}
                  </template>
                  <template v-else>
                    {{ chatDetailMap.dueDate }} {{ dueDate }}
                  </template>
                </ion-text>
              </ion-row>
            </ion-label>
          </CustomCardItem>
        </div>
        <div class="row-box">
          <CustomCardItem :clear="true">
            <ion-label>
              <ion-row class="gap-md ion-align-items-center">
                <ion-icon color="secondary" :icon="locationOutline"></ion-icon>
                <ion-text color="light">
                  <template v-if="chatDetailMap.location === ''">
                    아직 장소가 정해지지 않았어요!
                  </template>
                  <template v-else>
                    {{ chatDetailMap.location }}
                  </template>
                </ion-text>
              </ion-row>
            </ion-label>
          </CustomCardItem>
        </div>
      </div>
      <PageLoadingCheck
        v-if="lodingCheck !== false"
        style="position: fixed; top: 48%; left: 48%; z-index: 9999"
      />
    </ion-content>
    <ion-footer>
      <ion-grid>
        <ion-row>
          <ion-col size="3">
            <custom-button
              @click="eyeOn"
              size="large"
              expand="block"
              :fill="bookmarkYn === 'Y' ? 'solid' : 'outline'"
              :color="bookmarkYn === 'Y' ? 'primary' : 'secondary'"
            >
              <ion-icon
                slot="icon-only"
                :icon="heartOutline"
                size="large"
                color="light"
              ></ion-icon>
            </custom-button>
          </ion-col>
          <ion-col size="9">
            <custom-button
              v-if="inviteYn === 'Y' && this.ssUserYn === 'N'"
              @click="joinIn"
              size="large"
              expand="block"
              color="danger"
            >
              <ion-ripple-effect></ion-ripple-effect>
              취소할래요
            </custom-button>
            <custom-button
              v-else
              @click="joinIn"
              size="large"
              expand="block"
              color="secondary"
              class="ion-activatable ripple-parent rounded-rectangle"
            >
              <ion-ripple-effect></ion-ripple-effect>
              참여하기
            </custom-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  heartOutline,
  starOutline,
  checkmarkOutline,
  locationOutline,
  ellipsisVertical
} from 'ionicons/icons';
import OpenChatViewUserInfo from '@/components/OpenChatView/OpenChatViewUserInfo.vue';
import OpenChatViewAttendList from '@/components/OpenChatView/OpenChatViewAttendList.vue';
import OpenChatViewAttendItem from '@/components/OpenChatView/OpenChatViewAttendItem.vue';
import IconCalCheck from '@/assets/img/icon/icon_cal_check.svg';
import PageLoadingCheck from '@/components/PageLoadingCheck.vue';

import {
  getData,
  openChatViewMap,
  openChatWriteMapFn,
  dailyCardInfoMapFn,
  API_BASE_URL
} from '@/assets/js/common';

export default {
  inject: ['loadingController', 'alertController'],
  components: {
    OpenChatViewUserInfo,
    OpenChatViewAttendList,
    OpenChatViewAttendItem,
    PageLoadingCheck
  },
  ionViewWillEnter() {
    this.getOpenChatDetail();
  },
  ionViewDidLeave() {
    // 초기화
    this.itemList = [];
  },
  data() {
    return {
      calendarIcon: IconCalCheck,
      heartOutline,
      starOutline,
      locationOutline,
      checkmarkOutline,
      ellipsisVertical,
      API_BASE_URL,
      chatDetailMap: {},
      bookmarkYn: '',
      msg: '',
      regDate: '',
      dueDate: '',
      inviteYn: '',
      ssUserYn: '',
      cdnNm: '',
      isPopover: false,
      regUserKey: '',
      userInfoMap: null,
      attendInfoList: [],
      loading: null,
      lodingCheck: true
    };
  },

  methods: {
    getOpenChatDetail() {
      getData({
        url: '/getOpenChatDetail',
        param: {
          openChatKey: openChatViewMap.openChatKey,
          viewAddYn: 'Y'
        },
        then: (data) => {
          // this.regDate = displayedAt(data.regDateStr);
          // this.dueDate = displayedAt(data.dueDate);
          this.regDate = data.regDateStr;
          this.dueDate = data.dueDateStr;

          this.inviteYn = data.attenderCancelYn === 'N' ? 'Y' : 'N';
          this.bookmarkYn = data.bookmarkYn;
          this.chatDetailMap = data;
          this.ssUserYn = data.ssUserKey === data.regUserKey ? 'Y' : 'N';
          this.regUserKey = data.regUserKey;

          this.cdnNm = data.cdnNm;

          this.$nextTick(() => {
            this.getAttendInfo();
          });
        }
      });
    },
    getAttendInfo() {
      getData({
        url: '/getAttendInfo',
        param: {
          openChatKey: openChatViewMap.openChatKey
        },
        then: (data) => {
          this.attendInfoList = data;
          // this.regDate = displayedAt(data.regDateStr);
          // this.dueDate = displayedAt(data.dueDate);
          //
          // this.inviteYn = data.attenderCancelYn === 'N' ? 'Y' : 'N'
          // this.bookmarkYn = data.bookmarkYn;
          // this.chatDetailMap = data;
          // this.ssUserYn = data.ssUserKey == data.regUserKey ? 'Y' : 'N';
          // this.regUserKey = data.regUserKey;
          //
          // this.mainFileId = data.mainFileId;

          this.$nextTick(() => {
            this.getUserInfo();
          });
        }
      });
    },
    getUserInfo() {
      getData({
        url: '/getUserInfo',
        param: {
          regUserKey: this.regUserKey
        },
        then: (data) => {
          this.userInfoMap = data;
        }
      });
    },
    prevPage() {
      this.$router.push('/myOpenChat');
    },

    agreeYn(type, userKey) {
      this.showLoading();
      /** 수락/거절 이벤트
       * param으로 참여신청자ID, 오픈챗ID, 타입 **/
      getData({
        url: '/updateOpenChatAttendYn',
        param: {
          openChatKey: openChatViewMap.openChatKey,
          userKey: userKey,
          type: type,
          fileId: 0
        },
        then: (data) => {
          if (data.successYn === 'Y') {
            if (data.confirmYn === 'Y') {
              this.warningAlert('😘', '수락 처리 되었습니다');
            } else {
              this.warningAlert('😢', '거절 처리 되었습니다');
            }
          } else {
            this.warningAlert('😢', data.message);
          }
          this.loading.dismiss();
          this.$nextTick(() => {
            this.getAttendInfo();
          });
        }
      });
    },
    /** 로딩 **/
    async showLoading() {
      this.loading = await this.loadingController.create({
        message: 'Loading...',
        duration: 0
      });

      await this.loading.present();
    },
    /**북마크이벤트**/
    eyeOn() {
      this.showLoading();
      getData({
        url: '/setOpenChatBookmark',
        param: {
          openChatKey: openChatViewMap.openChatKey
        },
        then: (data) => {
          this.bookmarkYn = data.bookmarkYn;
          this.msg = data.message;
          this.loading.dismiss();
        }
      });
    },
    /**참여신청이벤트(마이오픈챗뷰에선 사용안함)**/
    joinIn() {
      this.lodingCheck = false;

      getData({
        url: '/setOpenChatInvite',
        param: {
          openChatKey: openChatViewMap.openChatKey
        },
        then: (data) => {
          this.inviteYn = data.inviteYn;

          this.lodingCheck = true;
        }
      });
    },
    profileInfo(userKey) {
      dailyCardInfoMapFn({ type: 'openChatView', userKey: userKey });
      this.$router.push('/dailyCardInfo');
    },
    editOpenChat(item) {
      // if(openChatViewMap.type == 'openChat'){
      //     openChatWriteMapFn({ openChatKey: openChatViewMap.openChatKey, type: 'edit' });
      // } else if(openChatViewMap.type == 'myOpenChat'){
      //     openChatWriteMapFn({ openChatKey: openChatViewMap.openChatKey, type: 'edit' });
      // }
      openChatWriteMapFn({
        openChatKey: openChatViewMap.openChatKey,
        type: 'edit',
        item: item
      });
      this.$router.push('/openChatWrite');
    },
    async presentAlertConfirm() {
      const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: '',
        message: '삭제하시겠습니까?',
        buttons: [
          {
            text: '취소',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {}
          },
          {
            text: '삭제',
            handler: () => {
              getData({
                url: '/setOpenChatDel',
                param: {
                  openChatKey: openChatViewMap.openChatKey
                },
                then: () => {}
              });

              this.presentAlert('삭제되었습니다.');

              this.$router.go(-1);
            }
          }
        ]
      });
      return alert.present();
    },
    // 알림창
    async presentAlert(msg) {
      const alert = await this.alertController.create({
        header: '',
        message: msg,
        buttons: [
          {
            text: 'OK',
            role: 'Okay',
            handler: () => {}
          }
        ]
      });
      return alert.present();
    },

    /** 경고 팝업창 **/
    async warningAlert(title, message) {
      const alert = await this.alertController.create({
        header: title,
        subHeader: '',
        message: message,
        buttons: ['OK']
      });
      return alert.present();
    }
  }
};
</script>

<style scoped></style>
