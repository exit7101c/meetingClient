<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon size="large" :icon="homeOutline" />
        </ion-tab-button>
<!--        <ion-tab-button tab="choice" href="/choice">-->
<!--          <ion-icon size="large" :icon="choiceOutline" />-->
<!--        </ion-tab-button>-->
        <ion-tab-button v-if="this.$store.state.currentPath == '/ImsiTap'" tab="ImsiTap" href="/ImsiTap">
          <ion-icon size="large" :icon="choiceOutline" />
        </ion-tab-button>
        <ion-tab-button v-else-if="this.$store.state.currentPath != '/ImsiTap'" tab="Choice" href="/Choice">
          <ion-icon size="large" :icon="choiceOutline" />
        </ion-tab-button>
        <ion-tab-button tab="message" href="/message" class="has-badge">
          <ion-icon size="large" :icon="messageOutline"></ion-icon>
          <ion-badge
            mode="md"
            color="primary"
            v-if="
              messageBadgeCountSingle +
                messageBadgeCountOpenChat +
                messageBadgeCountAnonymous >
              99
            "
          >{{
            messageBadgeCountSingle +
            messageBadgeCountOpenChat +
            messageBadgeCountAnonymous
            }}+
          </ion-badge>
          <ion-badge
            mode="md"
            color="primary"
            v-else-if="
              messageBadgeCountSingle +
                messageBadgeCountOpenChat +
                messageBadgeCountAnonymous >
              0
            "
          >{{
            messageBadgeCountSingle +
            messageBadgeCountOpenChat +
            messageBadgeCountAnonymous
            }}
          </ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="openChat" href="/openChat">
          <ion-icon size="large" :icon="opentChatOutline" />
        </ion-tab-button>
        <ion-tab-button v-if="this.$store.state.currentPath == '/community'" tab="community" href="/community">
          <ion-icon size="large" :icon="communityOutline" />
        </ion-tab-button>
        <ion-tab-button v-else-if="this.$store.state.currentPath != '/community'" tab="feed" href="/feed">
          <ion-icon size="large" :icon="communityOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>

    <ion-modal
      ref="modal"
      v-for="item in modalList"
      :key="item.articleKey"
      :is-open="item.isPopup"
      @ionModalDidDismiss="item.isPopup = false"
      class="custom-modal"
      style="
        --height: 500px;
        --width: 95%;
        --border-radius: 15px;
        --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
          0 4px 6px -4px rgb(0 0 0 / 0.1);
      "
    >
      <ion-page v-if="item.contentType !== 'IMG'">
        <ion-toolbar>
          <ion-title class="text-lg" style="padding-inline: 0;">
            {{ item.title }}
          </ion-title>
        </ion-toolbar>
        <ion-content class="ion-padding">
          <div class="row-box">
            <p>
              <ion-text color="light" class="text-md"
              >{{ item.content }}
              </ion-text>
            </p>
          </div>
        </ion-content>
        <ion-footer>
          <ion-item lines="none">
            <ion-checkbox
              mode="ios"
              slot="start"
              @ionChange="inputChange($event, item)"
            ></ion-checkbox>
            <ion-label>다시 보지 않기</ion-label>
          </ion-item>
          <ion-button
            color="primary"
            size="large"
            expand="block"
            shape="round"
            class="close-button ion-activatable ripple-parent rounded-rectangle"
            @click="item.isPopup = false"
          >
            확인
          </ion-button>
        </ion-footer>
      </ion-page>
      <ion-page v-else>
        <ion-content>
          <ion-img :src="'https://' + item.cdnNm" />
        </ion-content>
        <ion-footer>
          <ion-item lines="none">
            <ion-checkbox
              mode="ios"
              slot="start"
              @ionChange="inputChange($event, item)"
            ></ion-checkbox>
            <ion-label>다시 보지 않기</ion-label>
          </ion-item>
          <ion-button
            color="primary"
            size="large"
            expand="block"
            shape="round"
            class="close-button ion-activatable ripple-parent rounded-rectangle"
            @click="item.isPopup = false"
          >
            확인
          </ion-button>
        </ion-footer>
      </ion-page>
    </ion-modal>
  </ion-page>
</template>

<script>
  import { getData } from '@/assets/js/common';

  import IconHome from '@/assets/img/icon/icon_tabs_home.svg';
  import IconChoice from '@/assets/img/icon/icon_tabs_choice.svg';
  import IconOpenChat from '@/assets/img/icon/icon_tabs_open_chat.svg';
  import IconCommunity from '@/assets/img/icon/icon_tabs_community.svg';
  import IconMessage from '@/assets/img/icon/icon_tabs_message.svg';
  import IconSettings from '@/assets/img/icon/icon_tabs_settings.svg';

  export default {
    name: 'Tabs',
    computed: {
      messageBadgeCountSingle() {
        let count = 0;
        for (let idx in this.$store.state.messageMainMap.single) {
          this.$store.state.messageMainMap.single[idx].badgeCount;
          if (this.$store.state.messageMainMap.single[idx].badgeCount > 0) {
            count =
              count + this.$store.state.messageMainMap.single[idx].badgeCount;
          }
        }
        return count;
      },
      messageBadgeCountOpenChat() {
        let count = 0;
        for (let idx in this.$store.state.messageMainMap.openchat) {
          this.$store.state.messageMainMap.openchat[idx].badgeCount;
          if (this.$store.state.messageMainMap.openchat[idx].badgeCount > 0) {
            count =
              count + this.$store.state.messageMainMap.openchat[idx].badgeCount;
          }
        }
        return count;
      },
      messageBadgeCountAnonymous() {
        let count = 0;
        for (let idx in this.$store.state.messageMainMap.anonymous) {
          this.$store.state.messageMainMap.anonymous[idx].badgeCount;
          if (this.$store.state.messageMainMap.anonymous[idx].badgeCount > 0) {
            count =
              count + this.$store.state.messageMainMap.anonymous[idx].badgeCount;
          }
        }
        return count;
      },
    },
    data() {
      return {
        homeOutline: IconHome,
        choiceOutline: IconChoice,
        opentChatOutline: IconOpenChat,
        communityOutline: IconCommunity,
        messageOutline: IconMessage,
        settingsOutline: IconSettings,
        modalList: []
      };
    },
    ionViewWillEnter() {
      // 진입할 때 호출
      this.getHomeNoticeList();
    },
    methods: {
      //공지사항 조회
      getHomeNoticeList() {
        // localStorageNoticeList 조회
        let localStorageNoticeList = JSON.parse(
          localStorage.getItem('localStorageNoticeList')
        );

        getData({
          url: '/getHomeNoticeList',
          param: {},
          then: (data) => {
            this.modalList = data.noticeList;

            for (let idx in data.noticeList) {
              let isShow = true;
              //세션목록에 저장되어 있는지 체크하고 없으면 팝업창을 호출한다.
              if (data.noticeList != null && data.noticeList.length > 0) {
                if (
                  localStorageNoticeList != null &&
                  localStorageNoticeList.length > 0
                ) {
                  for (let idx2 in localStorageNoticeList) {
                    if (
                      data.noticeList[idx]['articleKey'] ===
                      localStorageNoticeList[idx2]['articleKey']
                    ) {
                      isShow = false;
                    }
                  }
                }
              }
              if (isShow) {
                this.modalList[idx].isPopup = true;
              }
            }
          }
        });
      },
      inputChange(e, item) {
        //체크가 되면 localStorage 저장하고 해제되면 삭제한다.
        let localStorageNoticeList = JSON.parse(
          localStorage.getItem('localStorageNoticeList')
        );

        if (e.detail.checked) {
          //체크된
          if (
            localStorageNoticeList == null &&
            // eslint-disable-next-line valid-typeof
            typeof localStorageNoticeList !== 'array'
          ) {
            localStorageNoticeList = [];
          }
          localStorageNoticeList.push({ articleKey: item.articleKey });
        } else {
          //체크 해제됨
          for (let idx in localStorageNoticeList) {
            if (localStorageNoticeList[idx]['articleKey'] === item.articleKey) {
              localStorageNoticeList.splice(idx, 1);
            }
          }
        }
        //최종 결과물 저장
        localStorage.setItem(
          'localStorageNoticeList',
          JSON.stringify(localStorageNoticeList)
        );

        // 로컬 비우기
        // localStorage.removeItem('localStorageNoticeList')
      }
    }
  };
</script>
<style scoped lang="scss">
  ion-tabs {
    ion-tab-bar {
      border: unset;
      height: 70px;
      --background: var(--ion-color-dark);
      overflow: hidden;
    }

    ion-tab-button {
      position: relative;
      --padding-start: 0;
      --padding-end: 0;
      --color: #b2b3b8;
      --color-selected: var(--ion-color-primary);
      overflow: visible;

      &.has-badge {
        ion-badge {
          top: 10px;
        }
      }

      ion-label {
        font-size: 12px;
        font-weight: bold;
        white-space: nowrap;
      }

      &.tab-selected {
        ion-label {
          color: white;
        }
      }
    }
  }
</style>
