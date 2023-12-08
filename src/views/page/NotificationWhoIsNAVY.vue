<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="join-toolbar">
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>NAVY 알아보기</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-label>
        <h4>
          <ion-text color="warning" class="text-bold text-lg">
            NAVY
          </ion-text>
        </h4>
        <ion-text color="light" class="text-bold text-lg">
          <h1 style="font-size: 30px">성공과 신뢰를 추구하는 하이엔드 데이팅 플랫폼</h1>
        </ion-text>
        <br /><br />
        <ion-text color="light" class="text-md">
          네이비는 독특한 기능과 서비스를 제공하여 데이트 경험을 더욱 특별하고 의미 있는 것으로 만들어줍니다. 이제 네이비의 주요 기능을 간략히 소개하겠습니다.<br /><br />

          취향이 비슷한 사람들끼리 매칭하여 다양한 대화를 즐길 수 있습니다 또한 철저한 알고리즘을 통해 조화로운 파트너를 배정하며, 관심사를 공유하는 다양한 만남과 경험을 제공합니다.<br />
          100% 신뢰할 수 있는 회원들과 안심하고 만날 수 있도록 프로필 인증을 통해 가입하는 회원제를 운영하고, 서류 인증 뱃지 시스템을 통해 신뢰성 있는 만남을 만들어냅니다.<br /><br />

          네이비에서는 다양한 분야에서 참가자들끼리 경쟁하고 투표를 통해 인기를 겨루며, 인증된 이미지를 대중에게 전달하는 콘테스트를 마련하고 있습니다.<br />
          또한, 비매너 회원들을 철저히 관리하기 위해 프로필 인증, 신고 처리 시스템 및 알바 및 유령 회원 금지 정책을 시행하고 있습니다.<br />

          회원들의 능력을 검증하여 안전한 만남을 제공하며, 다양한 모임 지원을 통해 소통이 원활하고 일정 관리가 편리한 환경을 구축합니다. 이를 통해 회원과 적극적인 활동과 일정을 공유할 수
          있습니다.<br /><br />


          이제 네이비가 여러분에게 행복한 데이트험을 안겨줄 시간입니다. 지금 바로 네이비에서 특별한 만남을 시작하세요.

        </ion-text>
      </ion-label>
    </ion-content>
    <ion-footer>
      <ion-grid>
        <div class="text-center">
          <ion-text color="light" class="text-md">
            - NAVY -
          </ion-text>
        </div>
      </ion-grid>
    </ion-footer>
  </ion-page>
</template>

<script>
export default {
  name: "NotificationWhoIsNAVY",
  components: {},
  data() {
    return {};
  },
  ionViewWillEnter() {
    // 진입할 때 호출
  },
  ionViewDidLeave() {
    // 떠날 때 호출
  },
  methods: {}
};
</script>

<style scoped lang="scss">

ion-icon {
  color: black;
}
</style>
