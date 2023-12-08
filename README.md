<pre>
개발 진행 중

프로젝트 명 : CMDG - Navy App
웹 브라우저 지원 : IE9 이상, Chrome, FireFox, Safari

웹 브라우저 최적 해상도 : iphone 12 pro (390 * 844)

기본 vue Template 양식 : ??? views/BasicTemplate.vue
기본 page layout : ??? views/layout/DefaultPageLayout.vue
</pre>

<hr/>

#install package.json
npm i

#install ionic-cli
npm i -g @ionic/cli

#start server
ionic serve

#build (client)
<pre>
ionic build
</pre>

#android
###빌드방법

<pre>
1. ionic build
2. ionic capacitor copy android
3. ionic capacitor open android
</pre>
<pre>
-> android studio
build -> generate signed bundle... -> .aab 
</pre>법

###배포방법
<pre>
build.gradle 파일에 versionCode, versionName 변경 
File -> Sync project with Gradle File
</pre>

####Android Key
<code>
Alias : NavyKey
</code>
<code>
Password : cronies!@34
</code>

###라이브로 실행
ionic capacitor run android -l —external

크롬 디버그 도구(콘솔)
chrome://inspect/#devices


# IOS
###ionic capacitor add ios
<pre>
ionic build -- copy하면 자동 build
ionic capacitor copy ios
ionic capacitor update -- sync (네이티브 동기화)
ionic capacitor open ios
</pre>

