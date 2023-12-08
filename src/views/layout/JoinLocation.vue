<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>지역설정</ion-title>
      </ion-toolbar>
      <ProgressBar
        :currIdx="selectedAddressGu != null ? 8 : 7"
      ></ProgressBar>
    </ion-header>
    <ion-content>
      <div class="layout-container">
        <JoinTitle>
          <template v-slot:title>
            내가 살고있는 지역을 <br />
            설정해 주세요!
          </template>
          <template v-slot:desc> 가까운 거리의 상대를 추천해드려요!</template>
        </JoinTitle>
        <ion-list>
          <ion-item lines="none" class="input-field has-icon-button">
            <ion-input
              @click="openModal('address')"
              type="text"
              placeholder="구 까지만 표시돼요!"
              v-model="selectedAddressGu"
              readonly
            >
            </ion-input>
            <ion-button
              fill="clear"
              slot="end"
              @click="openModal('address')"
            >
              <ion-img :src="require('@/assets/img/icon/icon_location.svg')" />
            </ion-button>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
    <ion-footer class="join-footer">
      <div class="layout-container">
        <div class="btn-group">
          <custom-button
            fill="outline"
            color="primary"
            size="large"
            expand="block"
            shape="round"
            :disabled="!selectedAddressGu?.length"
            @click="validateAndNavigate"
          >
            다음으로
          </custom-button>
          <custom-button
            fill="clear"
            color="secondary"
            size="large"
            expand="block"
            shape="round"
            @click="this.$router.push('/joinProfile')"
          >
            건너뛰기
          </custom-button>
        </div>
      </div>
    </ion-footer>
    <!-- 주소 검색 모달 -->
    <ion-modal
      class="location-modal"
      :is-open="modalOpen"
      @ionModalDidDismiss="modalOpen = false"
      @ionModalDidPresent="mapOpen"
      :initial-breakpoint="1"
      :breakpoints="[0, 1]"
    >
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="closeModal()">
              <ion-icon slot="icon-only" :icon="chevronBack" />
            </ion-button>
          </ion-buttons>
          <ion-title>지도에서 위치 확인</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <PageLoadingCheck v-if="lodingCheck !== false"
                          style="display: flex; align-items: center; justify-content: center; margin: 0 auto; height: 80%;" />
        <div id="joinLocationMap" style="width: 100%; height: 80%" />
      </ion-content>
      <ion-footer class="location-modal-footer" style="height: 110px; background-color: #191a39; padding: 5px;">
        <div class="layout-container">
          <ion-grid>
            <ion-row class="ion-align-items-end ion-justify-content-between" style="padding: 0 15px 0 15px;">
              <ion-text color="light">
                {{ locationView }}
              </ion-text>
              <ion-text color="light" @click="jibunGuCheck">
                <ion-icon
                  :icon="swapHorizontalOutline"
                  class="v-middle"
                ></ion-icon>
                <span class="v-middle">{{ checkBtnText }}</span>
              </ion-text>
            </ion-row>
          </ion-grid>
          <div class="btn-group">
            <ion-button
              color="primary"
              size="large"
              expand="block"
              shape="round"
              @click="saveLocationBtn"
            >
              <ion-ripple-effect></ion-ripple-effect>
              이 위치로 주소 설정
            </ion-button>
          </div>
        </div>
      </ion-footer>
    </ion-modal>
  </ion-page>
</template>

<script>
import { loadingController } from "@ionic/vue";
import { chevronBack, swapHorizontalOutline } from "ionicons/icons";
import JoinTitle from "@/components/JoinTitle.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import PageLoadingCheck from "@/components/PageLoadingCheck.vue";


// GPS
import { Geolocation } from "@capacitor/geolocation";
import { Capacitor } from "@capacitor/core";

export default {
  name: "JoinLocation",
  inject: ["alertController"],
  components: {
    JoinTitle,
    ProgressBar,
    PageLoadingCheck
  },
  data() {
    return {
      chevronBack,
      swapHorizontalOutline,
      location: "", // input location
      inputType: "", // 버튼 누르는 타입 address, location

      message: "",

      showModal: false,
      modalOpen: false,
      visible: false,

      locationView: "",

      // 초기값 gps 값으로 변경필요
      // currLat: 37.5539385, // 로그인 유저 기본 위치의 위도
      // currLon: 126.9776688, // 로그인 유저 기본 위치의 경도

      selectedLat: null, // 클릭한 위치의 위도
      selectedLng: null, // 클릭한 위치의 경도

      selectedjibunAddress: null, // 클릭한 위치의 지번 주소
      selectedroadAddress: null, // 클릭한 위치의 도로명 주소

      selectedAddressGu: null, // 클릭한 위치의 지번 주소 구까지
      selectedjibunAddressDong: null, // 클릭한 위치의 지번 주소 동까지만
      selectedroadAddressDong: null, // 클릭한 위치의 도로명 주소 동까지만

      checkBtn: "dong", // 버튼상태
      checkBtnText: "구까지 표시",
      lodingCheck: false,

      checkLatlng: "",

      gpsLat: "",
      gpsLon: ""
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    // if (tempMap.state !== "ing") {
    this.selectedjibunAddressDong = null;
    this.selectedAddressGu = null;
    // }
    // this.getGps();
  },

  ionViewDidLeave() {
    // 떠날 때 호출
  },


  mounted() {
  },

  methods: {

    goRouter() {

      // tempMap.item.addr1 = this.selectedjibunAddressDong;
      // tempMap.item.shotaddr1 = this.selectedAddressGu;
      // tempMap.item.addr2 = "";
      // tempMap.item.shotaddr2 = "";
      // tempMap.item.lat = this.selectedLat;
      // tempMap.item.lon = this.selectedLng;

      this.$store.state.joinMap["addr1"] = this.selectedjibunAddressDong;
      this.$store.state.joinMap["shotaddr1"] = this.selectedAddressGu;
      this.$store.state.joinMap["addr2"] = "";
      this.$store.state.joinMap["shotaddr2"] = "";
      this.$store.state.joinMap["lat"] = this.selectedLat;
      this.$store.state.joinMap["lon"] = this.selectedLng;

      this.$router.push("/joinProfile");
    },
    /** gps **/
    async getGps() {
      if (Capacitor.getPlatform() !== "web") {
        await Geolocation.getCurrentPosition().then((position) => {
          //console.log('capacitor : ' + position.coords.latitude);
          this.gpsLat = position.coords.latitude;
          this.gpsLon = position.coords.longitude;
        });
      } else {
        console.log("[개발환경] web 에서 GPS는 활성화 되지 않습니다.");
        clearInterval(this.intervalLatLon);
      }
    },

    /** 모달 시작 **/
    openModal(type) {
      this.getGps();
      this.inputType = type;
      this.lodingCheck = true;
      this.modalOpen = true;
    },

    mapOpen() {
      let lat;
      let lon;

      this.lodingCheck = false;

      this.$nextTick(() => {
        if (this.gpsLat === "" || this.gpsLon === "") {
          /** 값이 없을때 광화문으로 고정값 **/
          lat = 37.5751959;
          lon = 126.9764627;
        } else {
          lat = this.gpsLat;
          lon = this.gpsLon;
        }
        this.naverMap(lat, lon);
      });
    },

    /** 모달창 닫기 **/
    closeModal() {
      this.modalOpen = false;
    },

    /** 주소 검색 결과를 선택했을 때 호출되는 내용 **/
    selectAddress(addressInfo) {
      if (this.inputType === "address") {
        this.addr1 = addressInfo.address; // 사는지역 전체주소
        this.shotaddr1 = addressInfo.newAddress; // 사는지역 시, 도

        this.address = this.addr1; // input 에서 보여지는값
      } else if (this.inputType === "location") {
        this.addr2 = addressInfo.location; // 활동지역 전체주소
        this.shotaddr2 = addressInfo.newLocation; // 활동지역 시, 도

        this.location = this.shotaddr2; // input 에서 보여지는값
      }
      this.modalOpen = false;
    },
    /** 모달 **/

    /** next btn **/
    validateAndNavigate() {
      if (Object.keys(this.locationView).length > 0) {
        this.goRouter();
      } else {
        this.warningAlert("주소를 입력하지 않았습니다.");
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
    saveLocationBtn() {
      this.location = this.locationView;
      this.modalOpen = false;
    },

    jibunGuCheck() {
      if (this.checkBtn === "dong") {
        if (this.selectedAddressGu !== null) {
          this.locationView = this.selectedAddressGu;
        }
        this.checkBtnText = "동까지 표시";
        this.checkBtn = "gu";
      } else {
        if (this.selectedjibunAddressDong !== null) {
          this.locationView = this.selectedjibunAddressDong;
        }
        this.checkBtnText = "구까지 표시";
        this.checkBtn = "dong";
      }
    },
    /** 로딩창 **/
    async showLoading(time) {
      this.loading = await loadingController.create({
        message: "Loading...",
        duration: time
      });
      await this.loading.present();
    },

    /** naver map **/
    naverMap(lat, lng) {
      const navermaps = window.naver.maps;
      // if (this.selectedLat !== null || this.selectedLng !== null) {
      //   lat = this.selectedLat;
      //   lng = this.selectedLng;
      // }

      let mapOptions = {
        center: new navermaps.LatLng(lat, lng),
        zoom: 17,
        /** 줌 컨트롤러 **/
        zoomControl: true,
        zoomControlOptions: {
          style: navermaps.ZoomControlStyle.LARGE,
          position: navermaps.Position.TOP_RIGHT
        }
      };

      /** 맵 생성 **/
      this.map = new navermaps.Map("joinLocationMap", mapOptions);

      // 지도 초기화 후 커스텀 컨트롤 생성
      // navermaps.Event.once(this.map, 'init', () => {
      //
      //   /** 현재위치로 이동 버튼 **/
      //   let locationBtnHtml =
      //       `<a style="
      //           z-index: 100;
      //           overflow: hidden;
      //           display: inline-block;
      //           position: absolute;
      //           top: 7px;
      //           left: 5px;
      //           width: 34px;
      //           height: 34px;
      //           border: 1px solid rgba(58,70,88,.45);
      //           border-radius: 2px;
      //           background: #fcfcfd;
      //             background-clip: border-box;
      //           text-align: center;
      //           -webkit-background-clip: padding;
      //           background-clip: padding-box;
      //         "
      //       >
      //       <span style="
      //           overflow: hidden;
      //           display: inline-block;
      //           color: transparent !important;
      //           vertical-align: top;
      //           background: url(https://ssl.pstatic.net/static/maps/m/spr_trff_v6.png) 0 0;
      //           background-position-x: 0px;
      //           background-position-y: 0px;
      //           background-size: auto;
      //           background-size: 200px 200px;
      //           -webkit-background-size: 200px 200px;
      //           width: 20px;
      //           height: 20px;
      //           margin: 7px 0 0 0;
      //           background-position: -153px -31px;
      //         ">중심위치</span>
      //      </a>`;
      //   let customControl = new navermaps.CustomControl(locationBtnHtml, {
      //     position: naver.maps.Position.TOP_LEFT // 버튼의 위치 설정
      //   });
      //
      //   customControl.setMap(this.map); // 버튼을 지도에 추가
      //   /** 현재위치로 이동 버튼 **/
      //
      //   naver.maps.Event.addDOMListener(customControl.getElement(), 'click', () => {
      //     this.map.setCenter(new navermaps.LatLng( lat, lng )); // 버튼 클릭 시 지도 중심 변경
      //   });
      // });

      // 마커 객체 생성
      const marker = new navermaps.Marker({
        position: this.map.getCenter(), // 중심 좌표에 마커 설정
        map: this.map, // 지도에 마커 추가
        icon: {
          url: "https://navermaps.github.io/maps.js.ncp/docs/img/example/pin_default.png", // 마커의 이미지 URL
          size: new navermaps.Size(24, 37), // 이미지의 원래 크기
          scaledSize: new navermaps.Size(24, 37), // 화면에 표시될 이미지 크기
          origin: new navermaps.Point(0, 0), // 이미지의 시작점
          anchor: new navermaps.Point(12, 37) // 마커를 지도에 고정시킬 위치
        }
      });
      /** 이동없이 그냥 완료 누를때 좌표값 저장 **/
      this.selectedLat = lat;
      this.selectedLng = lng;

      let latlng = new navermaps.LatLng(lat, lng);
      this.reverseGeocodes(latlng);

      navermaps.Event.addListener(this.map, "drag", () => {
        marker.setPosition(this.map.getCenter()); // 마커 위치 변경
      });
      // 클릭 이벤트 핸들러 설정
      navermaps.Event.addListener(this.map, "dragend", () => {
        // 마커 위치 변경
        // marker.setMap(null); // 이전 마커를 지도에서 제거
        // marker.setPosition(e.coord); // 마커 위치 변경
        // marker.setMap(this.map); // 마커를 지도에 추가

        // 클릭한 위치의 좌표 저장
        // this.selectedLat = e.coord.y; // e.coord.lat();
        // this.selectedLng = e.coord.x; //e.coord.lng();
        //
        // let latlng = new window.naver.maps.LatLng(e.coord.y, e.coord.x);
        this.selectedLat = this.map.getCenter().y;
        this.selectedLng = this.map.getCenter().x;
        let latlng = new navermaps.LatLng(this.map.getCenter().y, this.map.getCenter().x);

        this.reverseGeocodes(latlng);

      });
    },

    /** 좌표값 주소로 변환 **/
    reverseGeocodes(latlng) {
      let self = this;

      const navermaps = window.naver.maps;
      navermaps.Service.reverseGeocode(
        {
          coords: latlng,
          orders: [
            navermaps.Service.OrderType.ADDR,
            navermaps.Service.OrderType.ROAD_ADDR
          ].join(",")
        },
        function(status, response) {
          if (status === navermaps.Service.Status.ERROR) {
            return alert("Something Wrong!");
          }

          let idx = response.v2.results.length > 1 ? 1 : 0;
          // 지번 주소 구까지
          self.selectedAddressGu =
            response.v2.results[idx].region.area1.name +
            " " +
            response.v2.results[idx].region.area2.name;

          // 지번 주소 동까지
          self.selectedjibunAddressDong =
            response.v2.results[idx].region.area1.name +
            " " +
            response.v2.results[idx].region.area2.name +
            " " +
            response.v2.results[idx].region.area3.name;

          // 도로명 주소
          self.selectedroadAddressDong =
            response.v2.results[idx].region.area1.name +
            " " +
            response.v2.results[idx].region.area2.name +
            " " +
            response.v2.results[idx].land.name;

          if (self.checkBtn === "dong") {
            self.locationView = self.selectedjibunAddressDong;
          } else {
            self.locationView = self.selectedAddressGu;
          }
        }
      );
    }
  }
};
</script>

<style scoped></style>
