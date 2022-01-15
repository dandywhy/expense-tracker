# expense-tracker
記帳本
=

介紹
-
可以註冊自己的帳號，來紀錄一些個人的日常花費

### 功能
+ 記帳本可使用的分類有家居物業、交通出行、休閒娛樂、餐飲食品、其他
+ 可以編輯/新增/刪除記帳

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
5. 安裝 nodemon：
 ```bash 
 npm install -g nodemon
 ```
6. 先執行 seeds，會出現兩次 MongoDB connected 和 categoryseed done/recordseeder done :
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
 MongoDB connected!
 ```
10. 測試用信箱密碼 :
 ```bash
 Email: user1@test.com
 Password: 123
 Email: user2@test.com 
 Password: 123 
 ```
![](https://github.com/dandywhy/expense-tracker/blob/main/public/img/%E7%99%BB%E5%85%A5.jpg)
![](https://github.com/dandywhy/expense-tracker/blob/main/public/img/%E4%B8%BB%E9%A0%81.jpg)
![](https://github.com/dandywhy/expense-tracker/blob/main/public/img/%E7%B7%A8%E8%BC%AF.jpg)
