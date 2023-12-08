//var axios = require('axios');


//DB SC_SYSTEM_INFO 와 동기화 시켜야함.
export const SS_VERSION = "1.1.72";
export const SS_BUILD = "72";
export const IS_TESTING = true;//수정하지마세요, 개발시 반드시 true (구글광고 차단될수있음)

import axios from "axios";
import queryString from "qs";
//const queryString = require('qs');
export const AAA = "AAA";

export default {
  AAA
};

export const SS_USER_SEQ = localStorage.getItem("SS_USER_TOKEN");
export const SS_USER_TOKEN = localStorage.getItem("SS_USER_TOKEN");
export const SS_USER_KEY = localStorage.getItem("SS_USER_KEY");


export const IS_LOCAL = process.env.NODE_ENV !== "production";
//export const IS_LOCAL = false;//퍼블리셔 개발용

export const API_BASE_URL = IS_LOCAL ? "http://127.0.0.1:8090"
  // export const API_BASE_URL = IS_LOCAL ? "http://139.150.69.51:8034"
  // : 'http://110.10.189.102:8034';
  : localStorage.getItem("SS_USER_KEY") == "yzKydAwhQ48ngy4wzZkAdg==" ? "http://117.52.84.17:8032" : "http://139.150.69.51:8034";
// : "http://139.150.69.51:8034";
//export const API_BASE_URL = 'http://127.0.0.1:8034';
export const IMAGE_BASE_URL = "http://110.10.189.102:8080";
export const CDN_BASE_URL = "https://cmdgimg.cafe24.com/";


/** 임시 Register 에서 넘기는값 Join 으로 보내는 코드 추후 대표님이 코드 수정하신다고함 **/
export var tempMap = {};
export const joinMap = args => {
  tempMap = args;
};

export var openChatViewMap = {};
export const openChatViewMapFn = args => {
  openChatViewMap = args;
};
export var openChatMeetMap = {};
export const openChatMeetMapFn = args => {
  openChatMeetMap = args;
};
export var openChatMeetWriteMap = {};
export const openChatMeetWriteMapFn = args => {
  openChatMeetWriteMap = args;
};
export var openChatMeetViewMap = {};
export const openChatMeetViewMapFn = args => {
  openChatMeetViewMap = args;
};
export var openChatWriteMap = {};
export const openChatWriteMapFn = args => {
  openChatWriteMap = args;
};
export var communityViewMap = {};
export const communityViewMapFn = args => {
  communityViewMap = args;
};
export var communityWriteMap = {};
export const communityWriteMapFn = args => {
  communityWriteMap = args;
};
export var dailyCardInfoMap = {};
export const dailyCardInfoMapFn = args => {
  dailyCardInfoMap = args;
};
export var messageTalkMap = {};
export const messageTalkMapFn = args => {
  messageTalkMap = args;
};
export var policeMap = {};
export const policeMapFn = args => {
  policeMap = args;
};
export var profileMap = {};
export const profileMapFn = args => {
  profileMap = args;
};
export var currentMsgHeightCalc = 0;
export const currentMsgHeightCalcFn = args => {
  currentMsgHeightCalc = args;
};
export var contestDetailMap = {};
export const contestDetailMapFn = args => {
  contestDetailMap = args;
};
export var askMeMap = {};
export const askMeMapFn = args => {
  askMeMap = args;
};
export var storeMap = {};
export const storeMapFn = args => {
  storeMap = args;
};
export var badgeCertiMap = {};
export const badgeCertiMapFn = args => {
  badgeCertiMap = args;
};
// export var partnerInfoMap = {};
// export const partnerInfoMapFn = args => {
//   partnerInfoMap = args;
// };

/** 시간 계산 parameter type :: String **/
export const displayedAt = args => {
  const createdAt = new Date(args);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // check if the createdAt is in the future
  if (createdAt > today) {
    // calculate the number of days between createdAt and today
    const diffTime = Math.abs(createdAt - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      return `내일`;
    } else if (args == "2999-12-31") {
      return `상시 모집`;
    } else {
      return `${diffDays}일 후`;
    }
  } else {
    // calculate the time difference between createdAt and today
    const milliSeconds = today - createdAt;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  }
};

import { Capacitor } from "@capacitor/core";
import { AdMob, AdOptions, AdLoadInfo, InterstitialAdPluginEvents } from '@capacitor-community/admob';

export const showAdPop = async function(){

  //app_tester는 광고하지 않음
  if(localStorage.getItem("SS_USER_KEY") != "yzKydAwhQ48ngy4wzZkAdg=="){
    AdMob.addListener(InterstitialAdPluginEvents.Loaded, (info) => {
      // Subscribe prepared interstitial
    });

    //아이폰 ca-app-pub-3467073367739632/7751884007
    //안드로이드 ca-app-pub-3467073367739632/9677046054

    let adId = '';
    if (Capacitor.getPlatform() === "android") {
      adId = 'ca-app-pub-3467073367739632/9677046054'
    } else if(Capacitor.getPlatform() === "ios") {
      adId = 'ca-app-pub-3467073367739632/7751884007'
    }
    const options = {
      adId: adId,
      isTesting: IS_TESTING
      // npa: true
    };
    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
  }


}

export const getData = args => {

  const newMap = args["param"];
  newMap.userToken = localStorage.getItem("SS_USER_TOKEN");

  if (IS_LOCAL) {
    console.log(" ######URL=" + API_BASE_URL + args["url"] + " //PARAM=", queryString.stringify(newMap));
  }

  // axios로 데이터를 조회한다.
  axios.post(API_BASE_URL + args["url"], queryString.stringify(newMap), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
  }).then(function(res) {
    if (IS_LOCAL) {
      console.log(" =>=>######//THEN=", res.data);
    }

    /*if ("reject" in res.data) {
      //alert("로그인정보가 만료되었습니다. 다시 로그인 해주시기 바랍니다.")
      localStorage.removeItem("SS_USER_TOKEN");
      //this.$router.push("/start"); //this가 안됨,,
      //location.replace('/');
    }*/
    args["then"](res.data);

  });

};

export const getJoinData = args => {

  const newMap = args["param"];
  //newMap.userToken = '';
  if (IS_LOCAL) {
    console.log(" ######URL=" + API_BASE_URL + args["url"] + " //PARAM=", queryString.stringify(newMap));
  }
  // axios로 데이터를 조회한다.
  axios.post(API_BASE_URL + args["url"], queryString.stringify(newMap), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
  }).then(function(res) {
    if (IS_LOCAL) {
      console.log(" =>=>######//THEN=", res.data);
    }
    args["then"](res.data);

  });

};

export const getPurchaseData = args => {

  const newMap = args["param"];
  // newMap.userToken = localStorage.getItem("SS_USER_TOKEN");

  if (IS_LOCAL) {
    console.log(" ######URL=" + API_BASE_URL + args["url"] + " //PARAM=", queryString.stringify(newMap));
  }

  // axios로 데이터를 조회한다.
  axios.post(API_BASE_URL + args["url"], queryString.stringify(newMap), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
  }).then(function(res) {

    if (IS_LOCAL) {
      console.log(" =>=>######//THEN=", res.data);

    }

    /*if ("reject" in res.data) {
      //alert("로그인정보가 만료되었습니다. 다시 로그인 해주시기 바랍니다.")
      localStorage.removeItem("SS_USER_TOKEN");
      //this.$router.push("/start"); //this가 안됨,,
      //location.replace('/');
    }*/
    args["then"](res.data);

  });

};


// axios로 파일을 전송한다.
export const setFile = args => {
  //데이터를 조회할때 자동으로 token을 추가한다.
  const newMap = args["param"];

  newMap.userToken = localStorage.getItem("SS_USER_TOKEN");

  const file = args["file"][0];

  const formData = new FormData();

  formData.append("file", file);

  formData.append("data", JSON.stringify(newMap));

  //axios
  axios.post(API_BASE_URL + args["url"], formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }).then(function(res) {

    console.log(" =>=>######//THEN=", res.data);
    args["then"](res.data);

  });
};

export const fileDown = args => {
  const newMap = args["param"];

  axios({
    method: "post",
    url: API_BASE_URL + args["url"],
    params: { "fileId": newMap.fileId },
    responseType: "arraybuffer"
  }).then(function(response) {

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", newMap.name);
    document.body.appendChild(link);
    link.click();

  }).catch(function(r) {
    console.log(r);
  });


};

export const COM_VALIDATION = (params, ref = null, self = null) => {
  let isPass = false;

  const regexs = {
    nick: "^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{1,8}$", // 1~8자, 초성 및 모음은 허가하지 않는다.
    title: "^.{1,40}$",//모든글자 1~20자
    content: "^[\\s\\S]{1,2000}$",//모든글자 1~2000자
    select: "^.{1,20}$"//모든글자 1~20자
  };

  if (params.length !== 0 && typeof params != "object") {
    params = [
      { value: params, type: ref, error: "" }
    ];
  }

  for (let i in params) {

    if (self != null) {
      self.$refs[params[i]["type"]].$el.classList.remove("ion-valid");
      self.$refs[params[i]["type"]].$el.classList.remove("ion-invalid");
    }
    let regex = (regexs[params[i]["type"]]) ? regexs[params[i]["type"]] : ".*";
    isPass = (params[i]["value"].toString().match(regex)) ? true : false;


    if (self != null) {
      (isPass)
        ? self.$refs[ref].$el.classList.add("ion-valid")
        : self.$refs[ref].$el.classList.add("ion-invalid");
    }

    if (!isPass) return false;

  }

  return isPass;
};

export const COUNTE_FORMAT = (inputLength, maxLength) => {
  return `${maxLength - inputLength}자 남음`;

};


