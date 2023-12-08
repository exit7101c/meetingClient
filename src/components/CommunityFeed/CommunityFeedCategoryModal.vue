<template>
  <ion-modal
    :is-open="isOpen"
    ref="modal"
    @ionModalDidDismiss="ionModalDidDismiss"
    :initial-breakpoint="0.7"
    :breakpoints="[0, 0.15, 0.5, 1.0]"
    mode="md"
  >
    <ion-toolbar>
      <ion-buttons slot="start" @click="ionModalDidDismiss">
        <ion-text color="secondary">취소</ion-text>
      </ion-buttons>
      <ion-buttons slot="end" @click="ionModalDidDismiss">
        <ion-text color="light"> 완료</ion-text>
      </ion-buttons>
    </ion-toolbar>
    <ion-content class="ion-padding">

      <ion-item lines="none" :detail="true" class="text-center">
        <ion-label>
          <ion-text color="light" class="text-lg" style="font-size: 20px; font-weight: 700;"
          >아직 준비중입니다.</ion-text
          ><br />
          <ion-text color="secondary" class="text-sm"
          >다음에는 이용이 가능하도록 하겠습니다!</ion-text
          >
        </ion-label>
      </ion-item>

      <div class="text-center">
        <h4>
          <ion-text color="light" class="text-lg"
            >어떤 주제를 좋아하세요?</ion-text
          >
        </h4>
        <p>
          <ion-text color="secondary" class="text-md"
            >나에게 딱 맞는 피드를 추천해드려요.<br />관심 주제를 탭해서
            설정하세요</ion-text
          >
        </p>
      </div>
      <div class="row-box">
        <ion-list v-for="(cate, index) in category" :key="index">
          <h5>
            <ion-text color="light" class="text-md">
              {{ cate.cateNm }}</ion-text
            >
          </h5>
          <div class="row-box">
            <ion-row>
              <ion-button
                :color="
                  selectedCategories.includes(subCate.subCateNm)
                    ? 'primary'
                    : 'secondary'
                "
                :fill="
                  selectedCategories.includes(subCate.subCateNm)
                    ? 'solid'
                    : 'outline'
                "
                shape="round"
                size="small"
                v-for="(subCate, index2) in cate.subCategory"
                :key="index2"
                @click="toggleItem(subCate.subCateNm)"
              >
                <ion-text>
                  {{ subCate.subCateNm }}
                </ion-text>
              </ion-button>
            </ion-row>
          </div>
        </ion-list>
      </div>
    </ion-content>
  </ion-modal>
</template>
<script>
export default {
  props: {
    isOpen: {
      type: Boolean
    }
  },
  name: '',
  data() {
    return {
      selectedCategories: [],
      category: [
        {
          cateNm: '취미',
          subCategory: [
            {
              subCateNm: '독서'
            },
            {
              subCateNm: '글쓰기'
            },
            {
              subCateNm: '드론/액션캠/RC'
            },
            {
              subCateNm: 'DIY/공예'
            },
            {
              subCateNm: '바둑/장기'
            },
            {
              subCateNm: '가죽/목공'
            }
          ]
        },
        {
          cateNm: '팬클럽',
          subCategory: [
            {
              subCateNm: '유튜브/BJ'
            },
            {
              subCateNm: '가수/뮤지션'
            },
            {
              subCateNm: '배우'
            },
            {
              subCateNm: '해외리그'
            },
            {
              subCateNm: '국내리그'
            },
            {
              subCateNm: '프로야구'
            }
          ]
        }
      ]
    };
  },
  computed: {},
  methods: {
    ionModalDidDismiss() {
      this.$emit('ionModalDidDismiss');
    },
    toggleItem(item) {
      if (this.selectedCategories.indexOf(item) > -1) {
        this.selectedCategories.splice(
          this.selectedCategories.indexOf(item),
          1
        );
      } else {
        this.selectedCategories.push(item);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
ion-modal {
  --background: #1d1f29;
  ion-toolbar {
    --background: var(----background);
  }
  ion-list {
    background: var(----background);
  }
  ion-content {
    height: calc(100% - 60px);
  }
}
</style>
