<template>
  <div id="messageTalkMap" style="width: 100%; height: 100%;"></div>
</template>
<script>

import { getData } from "@/assets/js/common";
// import MarkerClustering from "../../assets/js/MarkerClustering";
import { MarkerClustering } from "@/assets/js/MarkerClustering";
import { Browser } from "@capacitor/browser";

export default {
  name: "MessageTalkMaps",
  props: {
    chatroomId: { type: Number }
  },
  components: {},
  data() {
    return {
      map: null,
      interval: null,

      itemList: [],
      addrItem: {},
      currLat: "",
      currLon: "",

      markers: [],
      cluster: [],
      markerClustering: [],

      htmlMarker1: {
        content: "<div class='marker' style='display: flex; align-items: center; justify-content: center; background-color: #191A37; color: #fff; font-size: 20px; font-weight: 700; box-shadow: 6px 6px 10px rgba(color: #000000, alpha: 0.16);'></div>",
        size: window.naver.maps.Size(40, 40),
        anchor: window.naver.maps.Point(20, 20)
      },
      htmlMarker2: {
        content: "<div class='marker' style='display: flex; align-items: center; justify-content: center; background-color: #191A37; color: #fff; font-size: 20px; font-weight: 700; box-shadow: 6px 6px 10px rgba(color: #000000, alpha: 0.16);'></div>",
        size: window.naver.maps.Size(40, 40),
        anchor: window.naver.maps.Point(20, 20)
      },
      htmlMarker3: {
        content: "<div class='marker' style='display: flex; align-items: center; justify-content: center; background-color: #191A37; color: #fff; font-size: 20px; font-weight: 700; box-shadow: 6px 6px 10px rgba(color: #000000, alpha: 0.16);'></div>",
        size: window.naver.maps.Size(40, 40),
        anchor: window.naver.maps.Point(20, 20)
      },
      htmlMarker4: {
        content: "<div class='marker' style='display: flex; align-items: center; justify-content: center; background-color: #191A37; color: #fff; font-size: 20px; font-weight: 700; box-shadow: 6px 6px 10px rgba(color: #000000, alpha: 0.16);'></div>",
        size: window.naver.maps.Size(40, 40),
        anchor: window.naver.maps.Point(20, 20)
      },
      htmlMarker5: {
        content: "<div class='marker' style='display: flex; align-items: center; justify-content: center; background-color: #191A37; color: #fff; font-size: 20px; font-weight: 700; box-shadow: 6px 6px 10px rgba(color: #000000, alpha: 0.16);'></div>",
        size: window.naver.maps.Size(40, 40),
        anchor: window.naver.maps.Point(20, 20)
      }
    };
  },
  mounted() {
    this.getLoginUser();
  },
  unmounted() {
    clearInterval(this.interval);
  },
  updated() {
    this.createMarker();
  },
  methods: {

    getLoginUser() {
      // this.showLoading();

      getData({
        url: "/messageMain/getMessageUserAddr",
        param: {},
        then: (data) => {
          this.addrItem = data[0];

          /** 위치업데이트값 null 인경우 기본주소로 **/
          if (this.addrItem.currLat !== null || this.addrItem.currLon !== null) {
            this.currLat = this.addrItem.currLat;
            this.currLon = this.addrItem.currLon;
          } else {
            this.currLat = this.addrItem.lat;
            this.currLon = this.addrItem.lon;
          }
          this.$nextTick(() => {
            this.getMessageLatLon();
          });
        }
      });

    },

    getMessageLatLon() {

      getData({
        url: "/messageMain/getRoomUserLocation",
        param: { "chatroomId": this.chatroomId },
        then: (data) => {
          this.itemList = data;

          this.$nextTick(() => {
            this.naverMap(this.currLat, this.currLon);
          });
        }
      });

      if (this.interval == null) {
        this.interval = setInterval(() => {
          getData({
            url: "/messageMain/getRoomUserLocation",
            param: { "chatroomId": this.chatroomId },
            then: (data) => {
              this.itemList = data;
            }
          });
        }, 5000);
      }

    },

    /** naver map **/
    async naverMap(lat, lng) {
      let self = this;
      const navermaps = window.naver.maps;

      let mapOptions = {
        center: new navermaps.LatLng(lat, lng),
        zoom: 15,
        /** 줌 컨트롤러 **/
        zoomControl: true,
        zoomControlOptions: {
          style: navermaps.ZoomControlStyle.SMALL,
          position: navermaps.Position.TOP_RIGHT
        }
      };

      /** 맵 생성 **/
      this.map = new navermaps.Map("messageTalkMap", mapOptions);

      // 지도 초기화 후 커스텀 컨트롤 생성
      navermaps.Event.once(this.map, "init", () => {

        /** 현재위치로 이동 버튼 **/
        let locationBtnHtml =
          `<a style="
                z-index: 100;
                overflow: hidden;
                display: inline-block;
                position: absolute;
                top: 7px;
                left: 5px;
                width: 34px;
                height: 34px;
                border: 1px solid rgba(58,70,88,.45);
                border-radius: 2px;
                background: #fcfcfd;
                  background-clip: border-box;
                text-align: center;
                -webkit-background-clip: padding;
                background-clip: padding-box;
              "
            >
            <span style="
                overflow: hidden;
                display: inline-block;
                color: transparent !important;
                vertical-align: top;
                background: url(https://ssl.pstatic.net/static/maps/m/spr_trff_v6.png) 0 0;
                background-position-x: 0px;
                background-position-y: 0px;
                background-size: auto;
                background-size: 200px 200px;
                -webkit-background-size: 200px 200px;
                width: 20px;
                height: 20px;
                margin: 7px 0 0 0;
                background-position: -153px -31px;
              ">중심위치</span>
           </a>`;
        let customControl = new navermaps.CustomControl(locationBtnHtml, {
          position: window.naver.maps.Position.TOP_LEFT // 버튼의 위치 설정
        });

        customControl.setMap(this.map); // 버튼을 지도에 추가
        /** 현재위치로 이동 버튼 **/

        window.naver.maps.Event.addDOMListener(customControl.getElement(), "click", () => {
          this.map.setCenter(new navermaps.LatLng(lat, lng)); // 버튼 클릭 시 지도 중심 변경
        });
      });

      navermaps.Event.addListener(self.map, "zoom_changed", function() {
        self.updateMarkers(self.markers);
      });

      navermaps.Event.addListener(self.map, "dragend", function() {
        self.updateMarkers(self.markers);
      });

      await this.createMarker();
      // await this.useGetClusterIcon();
      // await this.asdf();

    },

    createMarker() {
      const navermaps = window.naver.maps;
      this.clearMarker();
      this.markers = [];

      /** 마커 생성 **/
      this.itemList.forEach(markerInfo => {
        const markerLatLng = new navermaps.LatLng(markerInfo.currLat, markerInfo.currLon);

        const marker = new navermaps.Marker({
          position: markerLatLng,
          map: this.map,
          icon: {
            // TODO: class marker 추가 => 추후 cluster 작업시 아래와 같은 구조로 작업해주시면 됩니다
            content: `<div class="marker"><img src="https://${markerInfo.cdnThumbNm}" /></div>`,
            // url: "https://" + markerInfo.cdnThumbNm, // 마커의 이미지 URL
            size: new navermaps.Size(60, 60), // 이미지의 원래 크기
            scaledSize: new navermaps.Size(60, 60), // 화면에 표시될 이미지 크기
            origin: new navermaps.Point(0, 0),  // 이미지의 시작점
            anchor: new navermaps.Point(12, 37), // 마커를 지도에 고정시킬 위치
            draggable: true
          },
          title: markerInfo.title
        });

        /** 마커 이벤트 **/
        window.naver.maps.Event.addListener(marker, "click", () => {
          // this.modalInfo(markerInfo);
          this.$emit("modalInfo", markerInfo);
        });

        this.markers.push(marker);
      });

      let markerClustering = new MarkerClustering({
        minClusterSize: 2,
        maxZoom: 16,
        map: self.map,
        markers: self.markers,
        disableClickZoom: false,
        gridSize: 30,
        icons: [self.htmlMarker1, self.htmlMarker2, self.htmlMarker3, self.htmlMarker4, self.htmlMarker5],
        stylingFunction: function(clusterMarker, count) {
          const el = clusterMarker.getElement().children[0];
          el.innerHTML = count;

        }
      });
    },

    // clusteringMarker() {
    //   let self = this;
    //   self.cluster = new MarkerClustering({
    //     minClusterSize: 2,
    //     maxZoom: 15, // 조절하면 클러스터링이 되는 기준이 달라짐 (map zoom level)
    //     map: self.map,
    //     markers: self.markers, // 클러스터화 할 마커들
    //     disableClickZoom: false,
    //     gridSize: 120,
    //     icons: [  // 클러스터 아이콘 세팅
    //       self.htmlMarker1,
    //       self.htmlMarker2,
    //       self.htmlMarker3,
    //       self.htmlMarker4,
    //       self.htmlMarker5
    //     ],
    //     indexGenerator: [10, 100, 200, 500, 1000], // 클러스터링 기준 세팅
    //     stylingFunction: function(clusterMarker, count) {
    //       clusterMarker
    //         .getElement()
    //         .querySelector("div:first-child").innerText = count;
    //     }
    //   });
    // },
    // asdf() {
    //   let self = this;
    //
    //   self.markerClustering = new MarkerClustering({
    //     minClusterSize: 2,
    //     maxZoom: 8,
    //     map: self.map,
    //     markers: self.markers,
    //     disableClickZoom: false,
    //     gridSize: 120,
    //     icons: [self.htmlMarker1, self.htmlMarker2, self.htmlMarker3, self.htmlMarker4, self.htmlMarker5],
    //     indexGenerator: [10, 100, 200, 500, 1000],
    //     stylingFunction: function(clusterMarker, count) {
    //       (clusterMarker.getElement()).find("div:first-child").text(count);
    //     }
    //   });
    // },

    // useGetClusterIcon() {
    //   const navermaps = window.naver.maps;
    //   this.htmlMarker1 = {
    //     content: "<div style=\"cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-1.png);background-size:contain;\"></div>",
    //     size: navermaps.Size(40, 40),
    //     anchor: navermaps.Point(20, 20)
    //   };
    //   this.htmlMarker2 = {
    //     content: "<div style=\"cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-2.png);background-size:contain;\"></div>",
    //     size: navermaps.Size(40, 40),
    //     anchor: navermaps.Point(20, 20)
    //   };
    //   this.htmlMarker3 = {
    //     content: "<div style=\"cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-3.png);background-size:contain;\"></div>",
    //     size: navermaps.Size(40, 40),
    //     anchor: navermaps.Point(20, 20)
    //   };
    //   this.htmlMarker4 = {
    //     content: "<div style=\"cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-4.png);background-size:contain;\"></div>",
    //     size: navermaps.Size(40, 40),
    //     anchor: navermaps.Point(20, 20)
    //   };
    //   this.htmlMarker5 = {
    //     content: "<div style=\"cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-5.png);background-size:contain;\"></div>",
    //     size: navermaps.Size(40, 40),
    //     anchor: navermaps.Point(20, 20)
    //   };
    // },

    updateMarkers() {
      let mapBounds = this.map.getBounds();
      let marker, position;

      for (let i = 0; i < this.markers.length; i++) {
        marker = this.markers[i];
        position = marker.getPosition();

        if (mapBounds.hasLatLng(position)) {
          this.showMarker(marker);
        } else {
          this.hideMarker(marker);
        }
      }
    },

    showMarker(marker) {
      if (marker.setMap()) return;
      marker.setMap(this.map);
    },

    hideMarker(marker) {
      if (!marker.setMap()) return;
      marker.setMap(null);
    },

    clearMarker() {
      for (let i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
    }


  }
};
</script>
<style scoped lang="scss">
.swiper {
  padding: 0;
  margin: 0;

  ion-img {
    border-radius: 0;
  }
}
</style>
