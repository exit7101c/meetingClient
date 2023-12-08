<template>
  <div>
      <h2 style="text-align: center;">내 위치를 찍어보아요</h2>
      <div id="map"></div>
  </div>
</template>

<script>
  import {getData} from "@/assets/js/common";

  export default {
  name: 'KakaoMap',
  data(){
    return{
        map: null,
        currLat: 0,
        currLon: 0,
    };
  },
      // created() {
      //     this.getLocation();
      // },
      mounted() {
        if (window.kakao && window.kakao.maps) {
            // 카카오 객체가 있고, 카카오 맵을 그릴 준비가 되어있다면 맵 실행
            this.loadMap();
        } else {
            // 없다면 카카오 스크립트 추가 후 맵 실행
            this.loadScript();
        }
      },
      methods: {
          getLocation() {
              getData({
                  url: '/getMyLocation',
                  param: {},
                  then: (data) => {
                      this.currLat = data.currLat;
                      this.currLon = data.currLon;
                  }
              });
          },
          loadScript() {
              const script = document.createElement('script');
              script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=97fa4b2c67b476a253da5ab5b1eb3439&autoload=false"; //&autolaod=false api를 로드한 후 맵을 그리는 함수가 실행되도록
              script.onload = () => window.kakao.maps.load(this.loadMap); // 스크립트 로드가 끝나고 지도를 실행될 준비가 되어있다면 실행되도록

              document.head.appendChild(script);  // html>head 안에 스크립트 소스를 추가
          },
          loadMap() {
            getData({
                url: '/getMyLocation',
                param: {},
                then: (data) => {
                    this.currLat = data.currLat;
                    this.currLon = data.currLon;

                    const container = document.getElementById('map'); // 지도를 담을 DOM 영역
                    const options = {
                        // 지도를 생성할 때 필요한 기본 옵션
                        center: new window.kakao.maps.LatLng(this.currLat, this.currLon),  // 지도의 중심좌표
                        level: 3, // 지도의 레벨(확대, 축소 정도)
                    };
                    this.map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

                    this.loadMaker(); // 지도가 로드되면서 마커가 생성되도록 함수 추가
                }
            });
          },
          loadMaker() {
              let self = this;
              // 마커 표시 위치
              const markerPosition = new window.kakao.maps.LatLng(self.currLat, self.currLon);

              // 마커 생성
              const marker = new window.kakao.maps.Marker({
                  position: markerPosition
              });

              // 마커가 지도 위에 표시되도록 설정
              marker.setMap(this.map);
          }
      }
};
</script>

<style scoped>
#map {
    width: 100%;
    height: 400px;
}
</style>
