<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>알림 설정</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <!--      <ion-list lines="none" v-for="(item, idx) in alarmList" :key="item.setCd">-->
      <!--        <ion-item>-->
      <!--          <div>-->
      <!--            <ion-text color="light" class="text-md text-bold">-->
      <!--              {{ item.setNm }}-->
      <!--            </ion-text>-->
      <!--            <br />-->
      <!--            <ion-text class="sub-text01 text-sm">-->
      <!--              {{ item.setDesc }}-->
      <!--            </ion-text>-->
      <!--          </div>-->
      <!--          <ion-toggle-->
      <!--            slot="end"-->
      <!--            mode="ios"-->
      <!--            :checked="alarmCheck[idx]"-->
      <!--            @click="setSettingUserSet(item)"-->
      <!--          ></ion-toggle>-->
      <!--        </ion-item>-->
      <!--      </ion-list>-->
      <ion-list lines="none">
        <SettingAlarmItem
          v-for="item in alarmList"
          :key="item.setCd"
          :item="item"
          @toggle="setSettingUserSet($event, item)"
        />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { chevronBack } from 'ionicons/icons';
import { getData } from '@/assets/js/common.js';
import { alertController } from '@ionic/core';
import SettingAlarmItem from '@/components/Setting/SettingAlarmItem.vue';

export default {
  name: 'SettingAlarm',
  components: {
    SettingAlarmItem
  },
  data() {
    return {
      chevronBack,
      alarmList: [],
      alarmCheck: Boolean
    };
  },
  ionViewWillEnter() {
    // 초기화
    this.alarmList = [];
    // 진입할 때 호출
    this.getSettingUserSet();
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  methods: {
    //알람정보 조회
    getSettingUserSet() {
      getData({
        url: '/getSettingUserSet',
        param: {},
        then: (data) => {
          this.$nextTick(() => {
            this.alarmList = data;
            for (let i = 0; this.alarmList.length; i++) {
              this.alarmList[i].valBoolean =
                this.alarmList[i].val === 'Y' ? true : false;
            }
          });
        }
      });
    },
    /** 경고 팝업창 **/
    async warningAlert(message) {
      const alert = await alertController.create({
        header: '',
        subHeader: '',
        message: message,
        buttons: ['OK']
      });
      return alert.present();
    },
    //알람정보 수정
    setSettingUserSet(item) {
      getData({
        url: '/setSettingUserSet',
        param: { codeType: item.setCd },
        then: (data) => {
          if (data.successYn === 'N') {
            this.warningAlert(data.message);
          } else {
            item.valBoolean = data.updatedValue === 'Y' ? true : false;
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;

  + ion-item {
    margin-top: 20px;
  }
}
</style>
