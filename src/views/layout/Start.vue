<template>
  <ion-page>
    <div class="home">
      <FullscreenVideo ref="fullscreenVideo" :videoCheck="showVideo" />
    </div>
  </ion-page>
</template>

<script>
import FullscreenVideo from "@/views/layout/FullscreenVideo.vue";

// import { tempMap } from '@/assets/js/common.js';

export default {
  name: "Start",
  components: {
    FullscreenVideo
  },
  data() {
    return {
      showVideo: true
    };
  },
  ionViewWillEnter() {
    //세션이 있는지 체크하고 이미 로그인이 되어있다면 home으로 이동시킨다.
    let userToken = localStorage.getItem("SS_USER_TOKEN");
    if (userToken != "" && userToken != null && userToken != undefined) {
      this.$router.push("/home");
    }
    // 진입할 때 호출
    this.showVideo = true;
  },
  ionViewDidLeave() {
    // 떠날 때 호출
    this.showVideo = false;
  },
  mounted() {
    /*if (SS_USER_SEQ != null) {
    location.replace("/home");
  }*/
  },
  methods: {}
};
</script>

<style scoped></style>
