<template>
  <div class="row-box">
    <ion-row>
      <ion-text color="light">
        <h3>{{ item.nick }} · {{ item.age }} · </h3>
      </ion-text>
      <ion-avatar v-if="item.cdnThumbNm">
        <img :src="require('@/assets/img/' + item.fileNm)" />
      </ion-avatar>
    </ion-row>
  </div>
</template>
<script>
import { search } from "ionicons/icons";

export default {
  name: "MessageTalkMapUserInfo",
  computed: {},
  props: {
    item: {
      type: String
    },
    thumbnail: {
      type: String
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>

ion-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 10px;

  h3 {
    font-size: 22px;
    font-weight: bold;
    margin: 0;
  }

  ion-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
  }
}

h3 {
  line-height: 1.6;
  font-size: 22px;
}

p {
  ion-text {
    + ion-icon {
      margin-left: 4px;
    }
  }

  ion-icon {
    + ion-text {
      margin-left: 4px;
    }
  }
}
</style>
