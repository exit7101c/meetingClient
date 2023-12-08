<template>
  <div class="ion-padding">
    <ion-grid>
      <ContestHotTitle>
        <template #title> 지원방법 </template>
        <template #desc>
          <p>
            <span>제시된 테마 안에서 세부내용은 자유롭게 구성 가능!</span><br /><br />
            <span style="color: #ddad61;">(EX. 각도, 얼굴 노출, 배경, 자세 등)</span>
          </p>
        </template>
      </ContestHotTitle>
      <div class="row-box">
        <ContestHotAddPhotoGuide />
      </div>
    </ion-grid>
    <ion-grid>
      <ContestHotTitle>
        <template #title>지원혜택</template>
        <template #desc>
          <p>
            <ion-text>'콘테스트 참가 및 순위 보상'을 통해</ion-text><br />
            <ion-text>지원하고 동일한 혜택받기!!</ion-text>
          </p>
        </template>
      </ContestHotTitle>
      <div class="row-box">
        <ion-row>
          <ion-col size="3">
            <ion-text color="light">참가자 전원</ion-text>
          </ion-col>
          <ion-col size="9">
            <ion-row class="benefit-list">
              <span class="benefit-item">
<!--                <ion-icon :icon="heartIcon" />-->
                <ion-text color="light"> - 하트 100개</ion-text>
              </span>
            </ion-row>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="3" style="text-align: center;">
            <ion-text color="light">1등</ion-text>
          </ion-col>
          <ion-col size="2">
            <ion-row class="benefit-list">
              <span class="benefit-item">
<!--                <ion-icon :icon="heartIcon" />-->
                <ion-text color="light">
                  <span>- HOT뱃지 바프촬영지원 메인배너광고</span><br />5성급호텔 숙박권, 하트 1000개
                </ion-text>
              </span>
            </ion-row>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="3" style="text-align: center;">
            <ion-text color="light">2등</ion-text>
          </ion-col>
          <ion-col size="2">
            <ion-row class="benefit-list">
              <span class="benefit-item">
<!--                <ion-icon :icon="heartIcon" />-->
                <ion-text color="light">
                  <span>- HOT뱃지 바프촬영지원 메인배너광고</span><br />에어팟or버즈 프로2, 하트 500개
                </ion-text>
              </span>
            </ion-row>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="3" style="text-align: center;">
            <ion-text color="light">3등</ion-text>
          </ion-col>
          <ion-col size="2">
            <ion-row class="benefit-list">
              <span class="benefit-item">
<!--                <ion-icon :icon="heartIcon" />-->
                <ion-text color="light">
                  <span>- HOT뱃지 바프촬영지원 메인배너광고</span><br />10만포인트, 하트 300개
                </ion-text>
              </span>
            </ion-row>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="3" style="text-align: center;">
            <ion-text color="light">4등~10등</ion-text>
          </ion-col>
          <ion-col size="2">
            <ion-row class="benefit-list">
              <span class="benefit-item">
<!--                <ion-icon :icon="heartIcon" />-->
                <ion-text color="light">
                  <span>- HOT뱃지 메인배너광고</span><br />5만포인트, 하트 200개
                </ion-text>
              </span>
            </ion-row>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="3" style="text-align: center;">
            <ion-text color="light">11등~20등</ion-text>
          </ion-col>
          <ion-col size="2">
            <ion-row class="benefit-list">
              <span class="benefit-item">
<!--                <ion-icon :icon="heartIcon" />-->
                <ion-text color="light">
                  <span>- 2만포인트, 하트 100개</span>
                </ion-text>
              </span>
            </ion-row>
          </ion-col>
        </ion-row>
      </div>
    </ion-grid>
    <ion-grid>
      <ContestHotTitle>
        <template #title> 주의사항 </template>
      </ContestHotTitle>
      <div class="row-box">
        <p class="text-sm sub-text01">
          01 본 프로그램 혜택은 당사 사정에 의하여 동등한 가치의<br />
          상품으로 변경될 수 있습니다.<br />
        </p>
        <p class="text-sm sub-text01">
          02 불건전하거나 테마와 맞지 않는 사진을 등록 시 <br />
          참가인원에서 제외될 수 있습니다.
        </p>
        <p class="text-sm sub-text01">
          03 타인의 사진을 도용할 경우 정보통신망 보호법에<br />
          의거하여 처벌의 대상이 될 수 있습니다.<br />
        </p>
      </div>
    </ion-grid>
  </div>
</template>
<script>
import ContestHotTitle from '@/components/Contest/ContestHotTitle.vue';
import ContestHotAddPhotoGuide from '@/components/Contest/ContestHotAddPhotoGuide.vue';

import IconBoost from '@/assets/img/icon/icon_boost.svg';
import IconPoint from '@/assets/img/icon/icon_my_point.svg';
import IconSuperLike from '@/assets/img/icon/icon_superlike.svg';

export default {
  name: 'ContestHotGuide',
  components: {
    ContestHotTitle,
    ContestHotAddPhotoGuide
  },
  data() {
    return {
      heartIcon: IconSuperLike,
      boostIcon: IconBoost,
      pointIcon: IconPoint
    };
  }
};
</script>
<style lang="scss" scoped>
ion-grid {
  padding-top: 40px;
  padding-bottom: 40px;
}

ion-icon {
  width: 20px;
  height: 22px;
}

.benefit-list {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: nowrap;
  .benefit-item {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    white-space: nowrap;
    gap: 8px;
  }
}
</style>
