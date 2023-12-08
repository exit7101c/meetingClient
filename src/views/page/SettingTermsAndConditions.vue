<template>
    <ion-page>
         <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button @click="$router.go(-1)">
                    <ion-icon slot="icon-only" :icon="closeOutline" />
                    </ion-button>
                </ion-buttons>
                <ion-title style="font-weight: bolder; color: black;">서비스 이용약관</ion-title>
            </ion-toolbar>
         </ion-header>

        <ion-content>
            <ion-toolbar>
                <ion-icon slot="start" :icon="receiptOutline" style="font-size: 30px; margin: 0px 0px 0px 20px"/>
                <ion-buttons slot="end">
                    <ion-button>
                        <ion-icon slot="icon-only" :icon="search" />
                    </ion-button>
                    <ion-button>
                        <ion-icon slot="icon-only" :icon="ellipsisHorizontal" />
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
            <ion-list lines="none">
                <ion-item style="margin-top: -10px;">
                    <ion-label>
                        <ion-row>
                            <ion-col size="12">
                                <ion-text style="font-weight: bolder; font-size: 24px;">
                                    <ion-icon :icon="receiptOutline" style="color: black; font-size: 80px; margin-bottom: -10px"  />
                                </ion-text>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col size="12">
                                <ion-text style="font-weight: bolder; font-size: 24px;">
                                    이용약관
                                </ion-text>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col size="12" class="wrap-text">
                                <ion-text>
                                    모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다.
                                    법관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며,
                                    징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다.
                                    나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의 증진 및
                                    민족문화의 창달에 노력하여 대통령으로서의 직책을 성실히 수행할 것을 국민 앞에 엄숙히
                                    선서합니다. 국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한
                                    소비자보호운동을 법률이 정하는 바에 의하여 보장한다. 국회에 제출된 법률안 기타의
                                    의안은 회기중에 의결되지 못한 이유로 폐기되지 아니한다. 다만, 국회의원의 임기가
                                    만료된 때에는 그러하지 아니하다.
                                    </ion-text>
                            </ion-col>
                        </ion-row>
                    </ion-label>
                </ion-item>
            </ion-list>

            <ion-list lines="none">
                <ion-item style="margin-top: -10px;" v-for="item in dummyData" :key="item.id">
                    <ion-label>
                        <ion-row>
                            <ion-col size="12">
                                <ion-text style="font-weight: bolder;">
                                    {{item.title}}
                                </ion-text>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col size="12" class="wrap-text">
                                <ion-text>
                                    {{item.content}}
                                </ion-text>
                            </ion-col>
                        </ion-row>
                    </ion-label>
                </ion-item>
            </ion-list>


        </ion-content>
    </ion-page>
</template>

<script>
    import {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel,
    } from '@ionic/vue';
    import { chevronBack, chevronForward, receiptOutline, ellipsisHorizontal, search, closeOutline } from 'ionicons/icons';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Setting',
        components: {
            IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel,
        },

        data(){
            return{
                chevronBack,
                chevronForward,
                receiptOutline,
                ellipsisHorizontal,
                search,
                closeOutline,

                dummyData:[
                    { title:'제 1조', content:'또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다. 나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의 직책을 성실히 수행할 것을 국민 앞에 엄숙히 선서합니다. 국가' },
                    { title:'제 2조', content:'또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다. 나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의 직책을 성실히 수행할 것을 국민 앞에 엄숙히 선서합니다. 국가' },
                    { title:'제 3조', content:'또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다. 나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의 직책을 성실히 수행할 것을 국민 앞에 엄숙히 선서합니다. 국가' },
                    { title:'제 4조', content:'또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다. 나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의 직책을 성실히 수행할 것을 국민 앞에 엄숙히 선서합니다. 국가' },
                    { title:'제 5조', content:'또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다. 나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의 직책을 성실히 수행할 것을 국민 앞에 엄숙히 선서합니다. 국가' },
                ],

            }
        },
        methods:{

        },
    });
</script>
<style scoped>
    ion-thumbnail {
        --border-radius : 30px;
    }
    ion-note {
        font-weight: lighter;
        font-size:medium;
    }

    ion-icon {
        color: black;

    }
    .wrap-text {
        white-space: pre-wrap;
        word-wrap: break-word;
    }

</style>