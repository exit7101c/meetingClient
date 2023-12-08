<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <BackButton />
        </ion-buttons>
        <ion-title>Store</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="sticky-top segment-round">
        <ion-segment
          v-model="categoryCd"
          mode="md"
          :scrollable="true"
          class="segment-round-button"
        >
          <ion-segment-button
            v-show="categoryList != null"
            v-for="item in categoryList"
            :value="item.categoryCd"
            @click="categoryBtn(item)"
            :key="item.categoryCd"
          >
            {{ item.categoryNm }}
          </ion-segment-button>
          <ion-segment-button
            v-show="categoryList == null"
          ></ion-segment-button>
        </ion-segment>
      </div>
      <div class="ion-padding">
        <div class="row-box">
          <ion-toolbar style="--min-height: 40px">
            <ion-buttons slot="start" class="my-point">
              <ion-icon :icon="heartIcon" size="large"></ion-icon>
              <ion-chip color="light" class="shape-round text-sm">
                <strong class="text-bold">{{
                  userPoint ? userPoint : 0
                }}</strong>
              </ion-chip>
            </ion-buttons>
            <ion-buttons slot="end">
              <ion-chip
                color="light"
                class="shape-round text-sm"
                @click="modalOpen = true"
                >쿠폰보관함
              </ion-chip>
            </ion-buttons>
          </ion-toolbar>
        </div>
        <!--        <div class="row-box" v-if="bannerList.length > 0">-->
        <!--          <StoreBanner :bannerList="bannerList" @storeCategory="storeCategory" />-->
        <!--        </div>-->
        <div class="row-box">
          <!--@click="heartConfirmBtn(item)"-->

          <ion-list lines="none" v-if="categoryCd === 'HEART'">
            <ion-list-header>
              <ion-text color="light">충전하기</ion-text>
            </ion-list-header>
            <StorePurchaseListItem
              v-for="(item, index) in storeItemList"
              :key="index"
              :icon="heartIcon"
              :item="item"
              :index="index"
              @click="startInAppPurchase(item)"
            />
          </ion-list>
          <ion-list lines="none" v-if="categoryCd === 'ITEM'">
            <ion-list-header>
              <ion-text color="light">기간한정</ion-text>
            </ion-list-header>
            <template v-if="storeVoteFilteredList.length > 0">
              <div
                v-for="(list, index) in storeVoteFilteredList"
                :key="index"
                class="row-box"
              >
                <StoreVoteList
                  :item-list="list.values"
                  :title="list.title"
                  @itemConfirmBtn="itemConfirmBtn"
                />
              </div>
            </template>

            <div
              v-for="(list, index) in storeFilteredList"
              :key="index"
              class="row-box"
            >
              <StoreListHeader
                :item="list"
                :title="list.title"
                :icon="storeIconList[list.key]"
              />
              <div style="padding: 0 3px 15px 3px">
                <ion-text color="light" class="text-sm">{{
                  list.description
                }}</ion-text>
              </div>
              <ion-grid class="gap-md">
                <ion-row>
                  <ion-col
                    size="6"
                    v-for="(item, index2) in list.values"
                    :key="index2"
                    style="padding: 8px 3px 8px 3px"
                  >
                    <StoreListItem
                      :item="item"
                      :title="list.title"
                      @click="itemConfirmBtn(item, 'USE')"
                    >
                    </StoreListItem>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </div>
          </ion-list>
          <ion-list lines="none" v-if="categoryCd === 'SUBSCRIBE'">
            <StoreSubscribedListItem
              v-for="(item, index) in storeItemList"
              :key="index"
              :selected="selected"
              :item="item"
              @click="startInAppPurchase(item)"
            />
          </ion-list>
        </div>
        <div class="row-box" v-if="categoryCd === 'SUBSCRIBE'">
          <ion-text color="light" class="text-sm">
            구독 서비스는 회원님이 스토어 설정에서 직접 취소할 때까지 <br />
            동일한 패키지 기간, 동일한 가격으로 자동 갱신되며,<br />
            "네이비" 이용약관에 동의하게 됩니다.
          </ion-text>
        </div>
      </div>
    </ion-content>
    <ion-footer>
      <div class="text-center">
        <ion-text color="light" class="text-sm">
          <span @click.stop="terms('a')">이용약관</span> /
          <span @click.stop="terms('b')">개인정보 취급방침</span> /
          <span @click.stop="purchaseRecovery()">구매복구</span>
        </ion-text>
      </div>
    </ion-footer>
    <!--  modal    -->
    <StoreCouponModal
      :is-open="modalOpen"
      @dismissedModal="modalOpen = false"
    />
    <TermsModal
      :is-open="termModalOpen"
      :termsTitle="termsTitle"
      :termsType="termsType"
      @ionModalDidDismiss="termModalOpen = false"
    />
  </ion-page>
</template>

<script>
import { getData, storeMap, storeMapFn } from '@/assets/js/common';
import StoreListHeader from '@/components/Store/StoreListHeader.vue';
import StoreListItem from '@/components/Store/StoreListItem.vue';
import StorePurchaseListItem from '@/components/Store/StorePurchaseListItem.vue';
import StoreSubscribedListItem from '@/components/Store/StoreSubscribedListItem.vue';
import StoreVoteList from '@/components/Store/StoreVoteList.vue';
import StoreCouponModal from '@/components/Store/StoreCouponModal.vue';
import StoreBanner from '@/components/Store/StoreBanner.vue';
import TermsModal from '@/components/Modal/TermsModal.vue';

import IconHeart from '@/assets/img/icon/icon_store_heart.svg';
import IconSuperLike from '@/assets/img/store/superlike.svg';

import 'cordova-plugin-purchase';

import { Capacitor } from '@capacitor/core';

export default {
  name: 'Store',
  inject: ['alertController', 'loadingController'],
  components: {
    StoreCouponModal,
    StoreListHeader,
    StoreListItem,
    StorePurchaseListItem,
    StoreSubscribedListItem,
    StoreVoteList,
    TermsModal,
    StoreBanner
  },
  computed: {
    storeFilteredList() {
      // TODO : 아이템별 배열 추출
      const result = [];
      const itemCdRegex = /^([A-Za-z0-9]+)_/;
      for (const item of this.storeItemList) {
        /** 보여줄 아이템 체크 **/
        if (item.showYn === 'Y') {
          const match = itemCdRegex.exec(item.itemCd);
          if (match) {
            const key = match[1];
            const description = item.description.split('(')[0];
            const title = item.itemNm.split('(')[0]; // 아이템별 타이틀 추출
            const existingEntry = result.find((entry) => entry.key === key);
            if (existingEntry) {
              existingEntry.values.push(item);
            } else {
              result.push({ key, title, description, values: [item] });
            }
          }
        }
      }

      return result;
    },
    storeVoteFilteredList() {
      // TODO : 아이템별 배열 추출
      const result = [];
      const itemCdRegex = /^([A-Za-z0-9]+)_/;
      for (const item of this.storeItemList) {
        /** 보여줄 아이템 체크 **/
        if (item.contestYn === 'Y') {
          const match = itemCdRegex.exec(item.itemCd);
          if (match) {
            const key = match[1];
            const title = item.itemNm.split('(')[0]; // 아이템별 타이틀 추출
            const existingEntry = result.find((entry) => entry.key === key);
            if (existingEntry) {
              existingEntry.values.push(item);
            } else {
              result.push({ key, title, values: [item] });
            }
          }
        }
      }

      return result;
    },
    userPoint() {
      return this.$store.state.userPoint;
    }
  },
  data() {
    return {
      heartIcon: IconHeart,
      storeIconList: {
        // TODO :  아이템 리스트별 아이콘
        IT001: IconSuperLike
      },
      segmentValue: 'light',

      categoryCd: '',
      categoryList: [],
      storeItemList: [],

      heartCd: '',
      heartSum: '',
      type: '',

      termsTitle: '',
      termsType: '',
      termModalOpen: false,

      modalOpen: false,
      bannerList: [],
      selected: null,

      subscribedPlan: 'NAVY_PLUS',
      isApprovedActive: false,
      isVerifyedActive: false
    };
  },
  ionViewWillEnter() {
    // 진입할 때 호출
    // this.getCategoryList();
    this.getCategoryList();
    this.getUserLastPoint();
    this.getBannerList();
  },
  ionViewDidLeave() {
    // 떠날 때 호출
    storeMapFn({});
  },
  mounted() {
    if (Capacitor.getPlatform() !== 'web') {
      if (
        !CdvPurchase.store.get(
          'navy_heart_item60',
          Capacitor.getPlatform() == 'ios'
            ? CdvPurchase.Platform.APPLE_APPSTORE
            : CdvPurchase.Platform.GOOGLE_PLAY
        )
      ) {
        //alert('없음');
        this.initStore();
      } else {
        //alert('있음');
      }
    }
  },
  methods: {
    initStore() {
      //alert('init');

      //const iaptic = new
      //CdvPurchase.store.compatibility = 11;

      //const store = CdvPurchase.store;
      //const { ProductType, Platform, LogLevel, Product, VerifiedReceipt } =
      //  CdvPurchase; // shortcuts

      getData({
        url: '/getStoreInitList',
        param: {},
        then: (dataList) => {
          /*if(InAppPurchase2.get(dataList[0]['productId'])){
            alert('이미 있음');
            return;
          }*/

          for (let idx in dataList) {
            console.log('등록 시작! [' + idx + ']');
            if (dataList[idx]['buyType'] == 'subscribe') {
              console.log(
                '구독 셋팅' +
                  idx +
                  ' /' +
                  CdvPurchase.ProductType.PAID_SUBSCRIPTION
              );
              //구독 셋팅
              CdvPurchase.store.register({
                id: dataList[idx]['productId'],
                type: CdvPurchase.ProductType.PAID_SUBSCRIPTION,
                platform:
                  Capacitor.getPlatform() == 'ios'
                    ? CdvPurchase.Platform.APPLE_APPSTORE
                    : CdvPurchase.Platform.GOOGLE_PLAY
              });
            } else {
              console.log(
                '소모성 셋팅' + idx + ' /' + CdvPurchase.ProductType.CONSUMABLE
              );
              //소모성 셋팅
              CdvPurchase.store.register({
                id: dataList[idx]['productId'],
                type: CdvPurchase.ProductType.CONSUMABLE,
                platform:
                  Capacitor.getPlatform() == 'ios'
                    ? CdvPurchase.Platform.APPLE_APPSTORE
                    : CdvPurchase.Platform.GOOGLE_PLAY
              });
            }
          }
          //CdvPurchase.store.refresh();
          const iaptic = new CdvPurchase.Iaptic({
            appName: 'cmdg.navy.client',
            apiKey: 'c83df663-2e86-4db5-98f7-5e0657d7f537'
          });
          CdvPurchase.store.validator = iaptic.validator;
          CdvPurchase.store.applicationUsername = () => 'demo-user';

          let self = this;

          let checkApprovedActive = (productId) => {
            if (
              CdvPurchase.store.get(
                productId,
                Capacitor.getPlatform() == 'ios'
                  ? CdvPurchase.Platform.APPLE_APPSTORE
                  : CdvPurchase.Platform.GOOGLE_PLAY
              )
            ) {
              return true;
            }
          };

          let isApprovedActive = false;

          CdvPurchase.store
            .when('product')
            .approved(async (transaction) => {
              if (!isApprovedActive) {
                /*if (CdvPurchase.store.get(transaction.products[0].id, Capacitor.getPlatform() == "ios"
                      ? CdvPurchase.Platform.APPLE_APPSTORE
                      : CdvPurchase.Platform.GOOGLE_PLAY)){
                  true;
                }*/

                console.log('approved : ' + JSON.stringify(transaction));
                if (
                  transaction.products[0].id != 'cmdg.navy.client' &&
                  transaction.state != 'finished'
                ) {
                  let param = {};
                  if (Capacitor.getPlatform() == 'ios') {
                    if (transaction.transactionId == 'appstore.application') {
                      //self.isApprovedActive = false;
                      transaction.finish();
                    } else {
                      param = {
                        productId: transaction.products[0]['id'],
                        transactionId: transaction.transactionId
                      };

                      console.log('조회시작!: ' + JSON.stringify(transaction));
                      getData({
                        url: '/purchase/transaction',
                        param: param,
                        then: (data) => {
                          console.log('처리결과: ' + JSON.stringify(data));
                          isApprovedActive = false;
                          //this.$store.state.loading.dismiss();
                          if (data == 'Y') {
                            //this.showLoadingStore();
                            console.log('처리결과 : 정상, vertify 시작!!');
                            transaction.verify();
                          } else {
                            this.$store.state.loading.dismiss();
                            //self.warningAlert("구매에 실패했습니다. 다시 시도해 주세요.");
                            //transaction.finish();
                          }
                        }
                      });
                    }
                  } else if (Capacitor.getPlatform() == 'android') {
                    param = {
                      productId: transaction.nativePurchase.productId,
                      transactionId: transaction.transactionId
                    };
                    getData({
                      url: '/purchase/transaction',
                      param: param,
                      then: (data) => {
                        isApprovedActive = false;
                        if (data == 'Y') {
                          //this.showLoadingStore();
                          console.log('처리결과 : 정상, vertify 시작!!');
                          transaction.verify();
                        } else {
                          self.warningAlert(
                            '구매에 실패했습니다. 다시 시도해 주세요.'
                          );
                          transaction.finish();
                        }
                      }
                    });
                  }
                } else {
                  // self.isApprovedActive = false;
                }
              }
            })
            .verified((receipt) => {
              if (!self.isVerifyedActive) {
                self.isVerifyedActive = true;
                console.log('verified : ' + JSON.stringify(receipt));

                //alert("verified");

                let sourceReceipt = receipt.sourceReceipt;
                //alert(receipt.id + "@@" + "cmdg.navy.client");
                // if (receipt.id != "cmdg.navy.client" && receipt != null) {
                let url = '';
                let param = {};

                if (Capacitor.getPlatform() == 'ios') {
                  url += '/purchase/apple';
                  param = {
                    receiptData: sourceReceipt.nativeData.appStoreReceipt
                  };
                } else if (Capacitor.getPlatform() == 'android') {
                  let transactions = sourceReceipt.transactions[0];
                  let nativePurchase = transactions.nativePurchase;
                  url += '/purchase/google';
                  param = {
                    transactionId: transactions.transactionId,
                    productId: nativePurchase.productId,
                    purchaseToken: nativePurchase.purchaseToken,
                    developerPayload: nativePurchase.developerPayload
                  };
                }

                getData({
                  url: url,
                  param: param,
                  then: (data) => {
                    //alert("isRealYn : " +data.isRealYn);
                    self.isVerifyedActive = false;
                    //this.$store.state.loading.dismiss();

                    if (data.successYn != 'Y') {
                    } else {
                      if (data.isRealYn == 'Y') {
                        if (data.lastPoint != undefined) {
                          this.$store.state.userPoint = data.lastPoint;
                          this.warningAlert('구매가 완료되었습니다.');
                          receipt.finish();
                        } else {
                          this.warningAlert('구독이 완료되었습니다.');
                          receipt.finish();
                        }
                      } else {
                        receipt.finish();
                      }
                    }
                    this.selected = null; // 선택 초기화
                    this.$store.state.loading.dismiss();
                  }
                });
                // } else {
                // this.$store.state.loading.dismiss();
                //    CdvPurchase.store.verify(receipt);
                // }

                //CdvPurchase.store.finish(receipt);
              }
            })
            .finished((transaction) => {
              //alert(" finished :: " + JSON.stringify(transaction));
              //alert('finished' + JSON.stringify(transaction));
            })
            .pending((p) => {
              //alert('pending' + JSON.stringify(p));
              this.$store.state.loading.dismiss();
            })
            .unverified((p) => {
              this.$store.state.loading.dismiss();
              //alert('unverified' + JSON.stringify(p));
            })
            .receiptsReady((p) => {
              //alert('receiptsReady' + JSON.stringify(p));
            })
            .receiptsVerified((p) => {
              //alert('receiptsVerified' + JSON.stringify(p));
            })
            .receiptUpdated((r) => {
              //r.finish();
            })
            .productUpdated((p) => {
              //alert(" productUpdated :: " + JSON.stringify(p));
            });

          CdvPurchase.store.error((err) => {
            self.isApprovedActive = false;
            self.isVerifyedActive = false;
            alert('구매가 취소되었습니다. 다시 시도해 주세요.');
            this.$store.state.loading.dismiss();
          });

          CdvPurchase.store.initialize([
            {
              platform: CdvPurchase.Platform.APPLE_APPSTORE,
              options: {
                needAppReceipt: true,
                discountEligibilityDeterminer:
                  iaptic.appStoreDiscountEligibilityDeterminer
              }
            },
            CdvPurchase.Platform.GOOGLE_PLAY
          ]);
          // CdvPurchase.store.refresh();
        }
      });
    },

    orderOffer(platform, productId, offerId) {
      const store = CdvPurchase.store;
      const offer = store.get(productId, platform)?.getOffer(offerId);
      if (offer) store.order(offer);
    },

    startInAppPurchase(item) {
      this.isApprovedActive = false;
      this.isVerifyedActive = false;
      let self = this;
      let productId = item.productId;

      console.log('구매시작 : ' + productId);

      //InAppPurchase2.refresh();

      //alert('구매시작: '+ productId)

      if (Capacitor.getPlatform() === 'web') {
        alert('웹에서는 구매할 수 없습니다.');
        //this.$store.state.loading.dismiss();
        return;
      }

      //this.orderOffer(CdvPurchase.Platform.APPLE_APPSTORE, productId, CdvPurchase.Product.offers.id);

      CdvPurchase.store.ready(() => {
        /** 로딩 **/
        this.showLoadingStore();

        const product = CdvPurchase.store.get(
          productId,
          Capacitor.getPlatform() == 'ios'
            ? CdvPurchase.Platform.APPLE_APPSTORE
            : CdvPurchase.Platform.GOOGLE_PLAY
        );

        //console.log(product);

        if (product.canPurchase) {
          CdvPurchase.store.order(product.getOffer());
        }
      });

      /*const offer = CdvPurchase.store.get(productId, CdvPurchase.Platform.APPLE_APPSTORE)?.getOffer(offerId)
      if (offer) CdvPurchase.store.order(offer)*/
      //플랫폼에 따른 분기 ? 제품코드가 동일하면 괜찮음
      //InAppPurchase2.refresh();

      /* CdvPurchase.store.order(productId)
          .then(() => {
            //주문시작

          })
          .catch(() => {
            alert(
              '구매중 오류가 발생하였습니다. 다시 시도하여 주시기 바랍니다.'
            );
            this.$store.state.loading.dismiss();
            this.selected = null; // 선택 초기화
          });*/
    },

    //하트구매처리
    setHartBuyToFinish(item) {
      //this.showLoading();
      getData({
        url: '/setBuyHeart',
        param: this.setItemBuyForm(item, 'BUY'),
        then: (data) => {
          if (data.successYn === 'N') {
            alert(data.message);
            //this.warningAlert();
          } else {
            //this.warningAlert(data.message);
            this.$store.state.userPoint = data.lastPoint;
          }
          this.$store.state.loading.dismiss();
        }
      });
    },

    getStoreItemListForm() {
      var resultObj = {};
      resultObj.categoryCd = this.categoryCd;
      return resultObj;
    },

    setItemBuyForm(item, pointCd) {
      var resultObj = {};
      resultObj.itemCd = item.itemCd;
      resultObj.pointCd = pointCd;
      //구독전용
      resultObj.subscribeCd = item.itemCd;
      return resultObj;
    },

    getCategoryList() {
      getData({
        url: '/getStoreCategoryList',
        param: {},
        then: (data) => {
          this.categoryList = data;
          // 카테고리 초기화 막아버리기
          if (this.categoryCd === '') {
            if (data.length > 0) {
              this.categoryCd = data[0].categoryCd; // 처음 선택값
              if (
                storeMap.subscribeYn != undefined &&
                storeMap.subscribeYn != null
              ) {
                this.categoryCd = 'SUBSCRIBE';
              }
              if (storeMap.categoryType == 'item') {
                this.categoryCd = 'ITEM';
              }
            }
          }
          this.$nextTick(() => {
            this.getItemList();
          });
        }
      });
    },

    getItemList() {
      this.storeItemList = [];
      getData({
        url: '/getStoreItemList',
        param: this.getStoreItemListForm(),
        then: (data) => {
          this.storeItemList = data;
          /*this.$nextTick(() => {
            this.initStore(data);
          });*/
        }
      });
    },

    getUserLastPoint() {
      getData({
        url: '/getUserLastPoint',
        param: {},
        then: (data) => {
          this.$store.state.userPoint = data.lastPoint;
        }
      });
    },
    // TODO : 배너 type 변경 필요

    getBannerList() {
      getData({
        url: '/getBannerList',
        param: { bannerType: 'HOME' },
        then: (data) => {
          this.$nextTick(() => {
            this.bannerList = data;
          });
        }
      });
    },

    storeCategory() {
      this.categoryCd = 'SUBSCRIBE';
    },

    /** 하트 구매  **/
    async heartConfirmBtn(heart) {
      const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: '',
        message: '하트 ' + heart.sumPayment + ' 개를 정말 구매하시겠습니까?',
        buttons: [
          {
            text: '취소',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {}
          },
          {
            text: '구매',
            handler: () => {
              this.showLoading();
              getData({
                url: '/setBuyHeart',
                param: this.setItemBuyForm(heart, 'BUY'),
                then: (data) => {
                  if (data.successYn === 'N') {
                    this.warningAlert(data.message);
                  } else {
                    this.warningAlert(data.message);
                    this.userPoint = data.lastPoint;
                  }
                  this.loading.dismiss();
                }
              });
            }
          }
        ]
      });
      return alert.present();
    },

    /** 구독 완료 처리 **/
    finishSubscribe(item) {
      //this.showLoading();
      getData({
        url: '/buySubscribeComplete',
        param: this.setItemBuyForm(item, 'BUY'),
        then: (data) => {
          if (data.successYn === 'NE') {
            this.warningAlert(data.message);
          } else if (data.successYn === 'NH') {
            //this.heartPageConfirmBtn(data);
          } else {
            this.warningAlert(data.message);
            if (data.lastPoint != undefined) {
              //this.userPoint = data.lastPoint;
            }
          }

          this.$store.state.loading.dismiss();
        }
      });
    },

    /** 아이템, 패키지 구매  **/
    async itemConfirmBtn(item, heartType) {
      let url = '';
      if (this.categoryCd === 'ITEM') {
        url = '/setBuyItem';
      } else if (this.categoryCd === 'PACKAGE') {
        url = '/setBuyPackage';
      } else if (this.categoryCd === 'SUBSCRIBE') {
        url = '/buySubscribeComplete';
      }

      const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: '',
        message: item.itemNm + ' 을 정말 구매하시겠습니까?',
        buttons: [
          {
            text: '취소',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {}
          },
          {
            text: '구매',
            handler: () => {
              this.showLoading();
              getData({
                url: url,
                param: this.setItemBuyForm(item, heartType),
                then: (data) => {
                  if (data.successYn === 'NE') {
                    this.warningAlert(data.message);
                  } else if (data.successYn === 'NH') {
                    this.heartPageConfirmBtn(data);
                  } else {
                    this.warningAlert(data.message);
                    if (data.lastPoint != undefined) {
                      this.$store.state.userPoint = data.lastPoint;
                    }

                    // 투표권 구매 시
                    if (data.buyCnt != undefined) {
                      for (let i = 0; this.storeFilteredList.length > i; i++) {
                        if (this.storeFilteredList[i].key == 'IT012') {
                          this.storeFilteredList[i].values[0].buyCnt =
                            data.buyCnt;
                          break;
                        }
                      }
                    }
                  }

                  this.loading.dismiss();
                }
              });
            }
          }
        ]
      });
      return alert.present();
    },

    /** 하트페이지로 이동  **/
    async heartPageConfirmBtn(data) {
      const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: '',
        message: data.message,
        buttons: [
          {
            text: '취소',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {}
          },
          {
            text: '이동',
            handler: () => {
              this.categoryCd = this.categoryList[0].categoryCd;
              this.getItemList();
            }
          }
        ]
      });
      return alert.present();
    },

    async warningAlert(message) {
      const alert = await this.alertController.create({
        header: '',
        subHeader: '',
        message: message,
        buttons: ['OK']
      });
      return alert.present();
    },

    /** 카테고리 선택 아이템 **/
    categoryBtn(e) {
      this.categoryCd = e.categoryCd;

      // this.$nextTick(() => {
      this.getItemList();
      // });
    },

    terms(type) {
      if (type === 'a') {
        this.termsType = 'service';
        this.termsTitle = '서비스 이용약관';
      } else if (type === 'b') {
        this.termsType = 'info';
        this.termsTitle = '개인정보 보호정책';
      } else if (type === 'c') {
        this.termsType = 'marketing';
        this.termsTitle = '홍보 및 마케팅 목적';
      } else if (type === 'd') {
        this.termsType = 'push';
        this.termsTitle = '광고성 정보 수신';
      }
      this.termModalOpen = true;
    },
    purchaseRecovery() {
      getData({
        url: '/purchase/purchaseRecoveryOne',
        param: {},
        then: (data) => {
          if (data != null) {
            CdvPurchase.store.order(data.productId).then(() => {
              alert('처리되었습니다.');
            });
          } else {
            alert('처리되었습니다.');
          }
        }
      });
    },
    /** 로딩창 **/
    async showLoading() {
      this.loading = await this.loadingController.create({
        message: 'Loading...',
        duration: 0
      });
      await this.loading.present();
    },
    /** 로딩창 공용 **/
    async showLoadingStore() {
      this.$store.state.loading = await this.loadingController.create({
        message: 'Loading...',
        duration: 0
      });
      await this.$store.state.loading.present();
    },
    setSwiperRef(swiper) {
      this.swiperRef = swiper;
    }
  }
};
</script>

<style lang="scss" scoped>
ion-list {
  ion-list-header {
    padding: 0;
    margin: 0 0 16px;
    font-size: 18px;
    font-weight: bold;
    min-height: 0;
  }
}

.my-point {
  position: relative;

  ion-chip {
    min-width: 80px;
    overflow: visible;
    contain: inherit;
    margin-left: -20px;
    padding-left: 12px;
    text-align: center;
    justify-content: center;
  }

  ion-icon {
    width: 40px;
    height: 38px;
    margin-top: -4px;
  }
}
</style>
