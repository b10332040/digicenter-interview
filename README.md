# 面試題目
共兩題
1. 圖表：完成指定圖片中的圖表。
2. 3D 街景圖：依提供的圖片當底，上面放幾個大樓，放置位置、顏色和形狀沒有限制，只要可以呈現出來即可。

---
### Route 設定
- /charts - 圖表，使用 Chart.js + react-chartjs-2。
- /street-view - 3D 街景圖，使用 three + @react-three/drei + @react-three/fiber。

---
### Environment - 環境建置
1. nvm(Windows)

[nvm-windows](https://github.com/coreybutler/nvm-windows/releases)，點擊`nvm-setup.zip`下載安裝。開啟終端機(Terminal)，輸入下述指令以確定安裝成功。
```
nvm version
```

2. Node.js

開啟終端機(Terminal)，輸入下述指令查看可安裝的Node.js的版本。下載並使用Node.js，這裡下載14.18.1版本。
```
nvm list available
nvm install 14.18.1
nvm use 14.18.1
```

---
### Installing - 專案建置
1.開啟終端機(Terminal)，Clone 此專案至本機電腦。
```
git clone https://github.com/b10332040/digicenter-interview.git
```

2.進入專案資料夾。
```
cd [專案資料夾]
```

3.下載相關套件。
```
npm install
```

４.啟動專案
```
npm run dev
```

---
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh