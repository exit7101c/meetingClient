import Vuex from "vuex";

export const store = new Vuex.Store({
  state: {
    currentChatroomId: 0,
    currentMeetMainTab: null,
    messageMainMap: {},
    messageList: [],
    currentMsgHeightCalc: 0,
    joinMap: {},
    alarmList: {},
    alarmCount: 0,
    loading: null,
    userPoint: 0,
    likeReceivedList: [],
    partnerInfoMap: {},
    intervalId: null,

    // TODO: 소모임 검색 모달 
    searchModalOpen: false,

    // TODO: 커뮤니티 검색 모달
    communitySearchModalOpen: false,

    // TODO: 피드 검색 모달
    feedSearchModalOpen: false,

    // TODO: 현재 path
    currentPath: ""
  },
  mutations: {
    addMessage(state, map) {
      state.messageList.push(map);
    },
    addAlarm(state, map) {
      state.alarmList.push(map);
      state.alarmCount = state.alarmCount + 1;
    },

    setIntervalId(state, intervalId) {
      state.intervalId = intervalId;
    },
    clearIntervalId(state) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    }
  },
  actions: {
    setAndStartInterval({ commit }, intervalId) {
      commit("setIntervalId", intervalId);
    },
    clearAndStopInterval({ commit }) {
      commit("clearIntervalId");
    }
  },
  getters: {
    isIntervalRunning: (state) => state.intervalId !== null
  }
});