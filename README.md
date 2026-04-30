# Employee Directory CRUD

這是一個簡單的員工資料 CRUD 練習專案。

這次在製作這個專案時，主要是用比較偏 **vibe coding** 的方式完成，也就是先讓功能跑起來、邊做邊調整，遇到問題再一步一步修正，而不是一開始就追求很完整、很工程化的設計。

## 專案介紹

這個專案的目的是練習最基本的 CRUD 功能，內容包含：

- 查看員工資料列表
- 新增員工資料
- 編輯員工資料
- 刪除員工資料

整體來說，就是一個前後端可以互相串接的小型練習作品。

## 使用技術

- ASP.NET Core Minimal API
- Entity Framework Core
- SQLite
- HTML
- CSS
- JavaScript
- Fetch API

## 功能說明

這個專案目前可以做到：

- 顯示員工清單
- 新增員工資料
- 修改既有員工資料
- 刪除員工資料
- 前端透過 API 和後端溝通

前端頁面和後端程式放在同一個 ASP.NET Core 專案中，方便練習整體開發流程。[web:10]

## 專案結構

```bash
EmployeeAPI/
├── Data/
├── Models/
├── wwwroot/
│   ├── index.html
│   ├── app.js
│   └── style.css
├── Program.cs
├── appsettings.json
└── employees.db
```

## API 路由

| 方法 | 路徑 | 說明 |
|------|------|------|
| GET | `/employees` | 取得全部員工資料 |
| GET | `/employees/{id}` | 取得單筆員工資料 |
| POST | `/employees` | 新增員工資料 |
| PUT | `/employees/{id}` | 更新員工資料 |
| DELETE | `/employees/{id}` | 刪除員工資料 |

這種 GET、POST、PUT、DELETE 的 CRUD API 寫法，也是 ASP.NET Core Minimal API 很常見的練習方式。[web:10]

## 如何執行

1. 先把專案 clone 下來
2. 用 Visual Studio 開啟
3. 還原 NuGet 套件
4. 確認 SQLite 資料庫可以正常使用
5. 執行專案
6. 打開瀏覽器，進入 ASP.NET Core 顯示的本機網址

## 這個專案主要在練習什麼

這個專案主要是拿來練習：

- 熟悉 ASP.NET Core Minimal API 的基本寫法
- 練習 EF Core 搭配 SQLite 做資料存取
- 練習前端用 JavaScript 的 `fetch()` 呼叫 API
- 理解一個簡單全端 CRUD 專案的基本結構

## 補充說明

這個專案是以學習和作品練習為主，不是以正式商業專案的規格去設計。

開發過程中比較偏向先做出功能，再慢慢調整細節，所以整體寫法會比較直覺，也比較接近個人練習時的開發節奏。

## 之後可以再加強的方向

- 搜尋功能
- 排序與篩選
- 表單驗證
- 更完整的 UI/UX
- 部署到雲端平台

- This project is for learning and portfolio practice
- The frontend is served from `wwwroot`
- SQLite is used as a lightweight local database for development

## Future Improvements

- Search function
- Sorting and filtering
- Form validation improvements
- Better UI/UX
- Deployment to a cloud platform
