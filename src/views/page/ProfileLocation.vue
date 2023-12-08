<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>지역설정</ion-title>
      </ion-toolbar>
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
              v-model="locationView"
              readonly
            >
            </ion-input>
            <ion-button fill="clear" slot="end" @click="openModal('address')">
              <ion-img :src="require('@/assets/img/icon/icon_location.svg')" />
            </ion-button>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
    <ion-footer class="join-footer">
      <div class="layout-container">
        <div class="btn-group">
          <ion-button
            color="primary"
            size="large"
            expand="block"
            shape="round"
            :disabled="!selectedAddressGu?.length"
            @click="validateAndNavigate"
          >
            <ion-ripple-effect></ion-ripple-effect>
            저장
          </ion-button>
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
        <PageLoadingCheck
          v-if="lodingCheck !== false"
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            height: 80%;
          "
        />
        <div id="profileLocationMap" style="width: 100%; height: 80%" />
      </ion-content>
      <ion-footer
        class="location-modal-footer"
        style="height: 110px; background-color: #191a39; padding: 5px"
      >
        <div class="layout-container">
          <ion-grid>
            <ion-row
              class="ion-align-items-end ion-justify-content-between"
              style="padding: 0 15px 0 15px"
            >
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
            <custom-button
              color="primary"
              size="large"
              expand="block"
              shape="round"
              @click="saveLocationBtn"
            >
              이 위치로 주소 설정
            </custom-button>
          </div>
        </div>
      </ion-footer>
    </ion-modal>
  </ion-page>
</template>

<script>
import { chevronBack, swapHorizontalOutline } from "ionicons/icons";
import { getData, profileMapFn } from "@/assets/js/common";
import JoinTitle from "@/components/JoinTitle.vue";
import PageLoadingCheck from "@/components/PageLoadingCheck.vue";

export default {
  name: "ProfileLocation",
  inject: ["alertController"],
  components: {
    JoinTitle,
    PageLoadingCheck
  },
  data() {
    return {
      chevronBack,
      swapHorizontalOutline,

      inputType: "", // 버튼 누르는 타입 address, location

      message: "",

      showModal: false,
      modalOpen: false,
      visible: false,

      locationView: "",

      currLat: "", // 로그인 유저 기본 위치의 위도
      currLon: "", // 로그인 유저 기본 위치의 경도

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

      map: null
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    this.getSelectList();
    this.getLoginUser();
  },
  ionViewDidLeave() {
    // 떠날 때 호출
    this.map = null;
  },
  mounted() {
  },

  methods: {
    getResult() {
      let resultObj = {};

      resultObj.addr1 = this.selectedjibunAddressDong;
      resultObj.shotaddr1 = this.selectedAddressGu;

      // resultObj.addr1 = this.addr1 !== null && this.addr1 !== '' ? this.addr1 : this.address; // 사는곳 전체주소
      // resultObj.shotaddr1 = this.shotaddr1 !== null && this.shotaddr1 !== '' ? this.shotaddr1 : this.addressCheck; // 사는곳 주소(구)
      resultObj.addr2 = "";
      resultObj.shotaddr2 = "";

      resultObj.lat = this.selectedLat;
      resultObj.lon = this.selectedLng;


      return resultObj;
    },

    getSelectList() {
      getData({
        url: "/getSettingUserInfo",
        param: {},
        then: (data) => {
          this.address = data.addrLiveSum; // 사는곳
          // this.location = data.addrActiveSum; // 활동하는곳
          // this.addressCheck = data.addrLive; // 사는곳
          // this.locationCheck = data.addrActive; //
        }
      });
    },


    /** 모달 시작 **/
    openModal(type) {
      // this.getGps();
      this.inputType = type;
      this.lodingCheck = true;
      this.modalOpen = true;

    },

    mapOpen() {
      this.lodingCheck = false;
      this.getLoginUser();

      this.$nextTick(() => {
        this.naverMap(this.currLat, this.currLon);
      });
    },

    /** 모달창 닫기 **/
    closeModal() {
      this.modalOpen = false;
    },

    /** next btn **/
    validateAndNavigate() {
      // if (this.address.trim() !== '' && this.location.trim() !== '') {
      if (this.locationView.trim() !== "") {
        this.confirmBtn();
      } else {
        this.warningAlert("주소를 입력하지 않았습니다.");
      }
    },

    async confirmBtn() {
      const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: "",
        message: "저장하시겠습니까?",
        buttons: [
          {
            text: "취소",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
            }
          },
          {
            text: "저장",
            handler: () => {
              getData({
                url: "/getUserUpdate",
                param: this.getResult(),
                then: (data) => {
                  if (data.successYn === "Y") {
                    profileMapFn({ pageType: "profileEdit" });
                    this.$router.push("/profile");
                    this.warningAlert("수정완료");
                  } else {
                    this.warningAlert("수정실패");
                  }
                }
              });
            }
          }
        ]
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
              this.$router.go(-1);
            }
          }
        ]
      });
      return alert.present();
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

    /** naver map **/
    naverMap(lat, lng) {
      let self = this;
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
      self.map = new navermaps.Map("profileLocationMap", mapOptions);

      // 마커 객체 생성
      const marker = new navermaps.Marker({
        position: self.map.getCenter(), // 중심 좌표에 마커 설정
        map: self.map, // 지도에 마커 추가
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

      navermaps.Event.addListener(self.map, "drag", () => {
        marker.setPosition(self.map.getCenter()); // 마커 위치 변경
      });
      // 클릭 이벤트 핸들러 설정
      navermaps.Event.addListener(self.map, "dragend", () => {
        // 마커 위치 변경
        // marker.setMap(null); // 이전 마커를 지도에서 제거
        // marker.setPosition(e.coord); // 마커 위치 변경
        // marker.setMap(this.map); // 마커를 지도에 추가

        // 클릭한 위치의 좌표 저장
        this.selectedLat = self.map.getCenter().y; // e.coord.lat();
        this.selectedLng = self.map.getCenter().x; //e.coord.lng();

        let latlng = new navermaps.LatLng(self.map.getCenter().y, self.map.getCenter().x);

        this.reverseGeocodes(latlng);
      });
    },

    getLoginUser() {
      // this.showLoading()

      getData({
        url: "/getOpenChatUserAddr",
        param: {},
        then: (data) => {
          this.addrItem = data[0];
          this.locationView = this.addrItem.addrLiveSum;
          /** 위치업데이트값 null 인경우 기본주소로 **/
          if (
            this.addrItem.currLat === null ||
            this.addrItem.currLon === null
          ) {
            this.currLat = this.addrItem.currLat;
            this.currLon = this.addrItem.currLon;
          } else {
            this.currLat = this.addrItem.lat;
            this.currLon = this.addrItem.lon;
          }

        }
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
