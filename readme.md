# Angular boilerplate

Шаблон изоморфного проекта на Angular. 

Используется:
1. Angular 5
2. Express 4
3. Webpack 3
4. Gulp 3
5. Bootstrap 4

Сборка осуществляется в несколько этапов. Webpack не используется для компиляция js и css, 
только для разрешения зависимостей.

1. Ngc компилирует ts > js (es6), создает source maps
2. Webpack подбирает source maps, создает файл `browser.js`
3. Gulp компилирует scss > css для библиотек и проекта, создает `styles.css` и `loading.css`
4. Gulp вставляет ссылки на ресурсы в `browser.pug` и `server.pug` и генерирует `*.html` 

Для старта приложения запускать `start.js`  
Клиентское приложение `client/index.js` монтируется на url `/`  
Серверное приложение `server/index.js` монтируется на url `/api`

Используется express рендерер angular шаблонов `@nguniversal/express-engine`

 