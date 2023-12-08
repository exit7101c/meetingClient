<template>
    <ion-page>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button @click="$router.go(-1)">
                    <ion-icon slot="icon-only" :icon="chevronBack" />
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
        <ion-content >
            <div class="ion-padding">
                <span style="font-weight: bolder; font-size: 28px">이용 내역</span>
                <p style="font-weight: bolder; color: gray;">내 다이아 <span style="color: black;">240 개</span></p>
            </div>

            <!-- 이용내역 -->
            <ion-list lines="none" style="margin-top: -20px">
                <template v-for="(group, index) in groupedItems" :key="index">

                    <!-- 이용 날짜 -->
                    <ion-toolbar style="text-align: center">
                        <ion-title>
                            <span class="linebox">{{ group.date }}</span>
                            <div class="line"></div>
                        </ion-title>
                    </ion-toolbar>
                    <!-- 이용 날짜 -->

                    <!-- 날짜별 사용 내역 -->
                    <ion-item v-for="item in group.items" :key="item.id" style="margin-top: -12px">
                        <ion-label>
                            <div style="font-weight: bolder; font-size: 18px;">
                                {{ item.title }}
                            </div>
                            <div style="color: #cccccc; font-size: 14px;">
                                {{ item.date }}
                            </div>
                        </ion-label>
                        <ion-label v-if="item.type === 'minus'" style="position: absolute; right: 5%; font-weight: bolder; color: red" >
                            -{{ item.amount }}
                        </ion-label>
                        <ion-label v-else-if="item.type === 'plus'" style="position: absolute; right: 5%; font-weight: bolder; color: blue" >
                            +{{ item.amount }}
                        </ion-label>
                    </ion-item>
                    <!-- 날짜별 사용 내역 -->

                </template>
            </ion-list>
            <!-- 이용내역 -->


        </ion-content>


    </ion-page>
</template>
  
<script>
import { IonButtons, IonHeader, IonMenuButton, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
import { chevronBack } from 'ionicons/icons'

export default {
    components: {
        IonButtons, IonHeader, IonMenuButton, IonToolbar, IonTitle, IonContent,
        IonPage, chevronBack
    },
    data() {
        return {
            chevronBack,

            dummyitems: [
                { id: 1, title: '연락처 보기', date: '2022-03-01', type: 'minus', amount: 20 },
                { id: 2, title: '보상 다이아 지급', date: '2022-03-01', type: 'plus', amount: 50 },
                { id: 3, title: '보상 다이아 지급', date: '2022-03-02', type: 'plus', amount: 75 },
                { id: 4, title: '연락처 보기', date: '2022-03-02', type: 'minus', amount: 20 },
                { id: 5, title: '연락처 보기', date: '2022-03-03', type: 'minus', amount: 20 },
                { id: 6, title: '보상 다이아 지급', date: '2022-03-03', type: 'plus', amount: 300 },
                { id: 7, title: '연락처 보기', date: '2022-03-03', type: 'minus', amount: 20 },
                { id: 8, title: '연락처 보기', date: '2022-03-03', type: 'minus', amount: 20 },
                { id: 9, title: '연락처 보기', date: '2022-03-02', type: 'minus', amount: 20 },
                { id: 10, title: '연락처 보기', date: '2022-03-01', type: 'minus', amount: 20 },
            ],
            groupedItems: [], // 더미 데이터 날짜별로 그룹분류
        };
    },

    created() {
        this.groupItems();
    },

    methods: {
        groupItems() {
            const groups = {};
            this.dummyitems.forEach((item) => {
                const date = item.date;
                if (!groups[date]) {
                    groups[date] = [];
                }
                groups[date].push(item);
            });
            const groupedItems = [];
            for (const date in groups) {
                if (Object.hasOwnProperty.call(groups, date)) {
                    const items = groups[date];
                    const group = {
                        date,
                        items,
                    };
                    groupedItems.push(group);
                }
            }
            this.groupedItems = groupedItems;
        },
    },
};
</script>
  
<style scoped>
.example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

ion-toolbar {
  --background: #fff;
}
ion-icon {
    color: black;
}

.linebox {
    background-color: #cccccc;
    color: white;
    padding: 3px 30px 3px 30px;
    text-align: center;
    border-radius: 10px;
    font-size: 16px;
}
.line{
    display: block;
    width: 150%;
    border:1px solid #e7e7e7;
}

</style>
  