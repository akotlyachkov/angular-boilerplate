# Angular boilerplate

Шаблон изоморфного проекта на Angular. 

Используется:
1. Angular 4
2. Express 4
3. Webpack 3
4. Gulp 3
5. Bootstrap 4

Сборка осуществляется в несколько этапов. Webpack не используется для компиляция js и css, 
только для разрешения зависимостей.

В дебаг режиме:

1. Tsc компилирует ts > js (es6), создает source maps
2. Webpack подбирает source maps, обрабатывает html шаблоны Angular, создает файл `browser.js`
3. Gulp компилирует scss > css для библиотек и проекта, создает `libs.css` и `styles.css`

В релиз режиме:

1. Ngc создает файлы `*.ngFactory.ts`
2. Tsc компилирует ts > js (es5) без source maps
3. Webpack разрешает зависимости без доп обработки, создает 2 файла `browser.js` и `server.js`
(Еще `ie.js` с полифиллами)
4. Gulp компилирует scss > css для библиотек и проекта. Минифицирует js и css. 
Вставляет ссылки на ресурсы в `index.html`

Для старта приложения запускать `start.js`  
Клиентское приложение `client/index.js` монтируется на url `/`  
Серверное приложение `server/index.js` монтируется на url `/api`

Для запуска в режиме рендера на сервере используется переменная окружения `mode = server`  
Используется express рендерер angular шаблонов `@nguniversal/express-engine`

 