﻿# expense-tracker

記帳本
=

介紹
-
紀錄自身喜愛的餐廳，可以用於新增、瀏覽、刪除各餐廳的名稱、地址、電話、風格以及評分

### 功能
+ 使用關鍵字來搜尋餐廳
+ 內容有電話、網址，方便直接聯繫和前往餐廳
+ 編輯/新增/刪除餐廳

環境建置
-
+ [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
+ [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
+ [Connect-flash](https://www.npmjs.com/package/connect-flash)
+ [Dayjs](https://www.npmjs.com/package/dayjs)
+ [Express](https://expressjs.com/zh-tw/)
+ [Express-handlebars](https://www.npmjs.com/package/express-handlebars)
+ [Express-session](https://www.npmjs.com/package/express-session)
+ [Mongoose](https://mongoosejs.com/)
+ [Node.js](https://nodejs.org/en/)
+ [Passport-local](https://www.npmjs.com/package/passport-local)
+ [Passport-facebook](https://www.npmjs.com/package/passport-facebook)



開始使用
-
1. 先確認是否已安裝 [Node.js](https://nodejs.org/en/).

2. 開啟終端機，將專案 clone 到本地：
 ```bash 
 git clone https://github.com/dandywhy/expense-tracker
 ```
3. 將路徑改到此專案資料夾：
 ```bash 
 cd expense-tracker
 ```
4. 安裝 Npm 套件：
 ```bash 
 npm install
 ```
5. 執行 Node.js：
 ```bash 
 node app.js
 ```
6. 先執行 seeds :
 ```bash
 npm run seed
 ```
7. 打開伺服器 :
 ```bash
 npm run dev
 ```
9. 當終端機出現以下文字，代表伺服器成功啟動：
 ```bash 
 App is running on http://localhost:3000
 ```
![](https://github.com/dandywhy/expense-tracker/blob/main/public/img/%E7%99%BB%E5%85%A5.jpg)
![](https://github.com/dandywhy/expense-tracker/blob/main/public/img/%E4%B8%BB%E9%A0%81.jpg)
![](https://github.com/dandywhy/expense-tracker/blob/main/public/img/%E7%B7%A8%E8%BC%AF.jpg)
