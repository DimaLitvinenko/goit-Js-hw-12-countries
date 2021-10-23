<h1 align="center">Webpack kit</h1>  

# goit-Js-hw-12-countries

# Критерии приема

- Создан репозиторий `goit-js-hw-12-countries`.
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую
  страницу на GitHub pages.
- При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и
  предупреждений.
- Имена переменных и функций понятные, описательные.
- Проект собран с помощью
  [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- Код отформатирован с помощью `Prettier`.
- Добавь минимальную стилизацию.
- Есть файл `fetchCountries.js` с дефолтным экспортом функции
  `fetchCountries(searchQuery)`, возвращающей промис с массивом стран, результат
  запроса к API.

## Поиск стран

Создай небольшое приложение поиска данных о стране по ее частичному или полному
имени. Используй [Rest Countries API](https://restcountries.com/), а именно
вторую версию (v2) и ендпоинт
[/name](https://restcountries.com/#api-endpoints-v3-name), возвращающий массив
объектов стран попавших под критерий поиска.

Достаточно чтобы приложение работало для большинства стран. Некоторые страны,
такие как `Sudan`, могут создавать проблемы, поскольку название страны является
частью названия другой страны, `South Sudan`. Не нужно беспокоиться об этих
исключениях.

Интерфейс очень простой. Название страны для поиска пользователь вводит в
текстовое поле.

⚠️ **ВНИМАНИЕ!** HTTP-запросы на бекенд происходят не по сабмиту формы, формы
нет, а при наборе имени страны в инпуте, то есть по событию `input`. Но делать
HTTP-запрос при каждом нажатии клавиши нельзя, так как одновременно получится
много HTTP-запросов которые будут выполняться в непредсказуемом порядке (race
conditions). Поэтому на обработчик события необходимо применить подход
`debounce` и делать HTTP-запрос спустя `500мс` после того, как пользователь
перестал вводить текст. Используй npm-пакет
[lodash.debounce](https://www.npmjs.com/package/lodash.debounce).

Если бекенд вернул больше чем 10 стран подошедших под критерий введенный
пользователем, в интерфейсе отображается нотификация о том, что необходимо
сделать запрос более специфичным. Для оповещений используй плагин
[pnotify](https://github.com/sciactive/pnotify).

![оповещение](assets/query-prompt.png)

Если бекенд вернул от 2-х до 10-х стран, под инпутом отображается список имен
найденных стран.

![список стран](assets/country-list.png)

Если бекенд вернул массив с одной страной, в интерфейсе рендерится разметка с
данными о стране: название, столица, население, языки и флаг.

![информация о стране](assets/country-info.png)


=======================
<p align="center">
 <a href="https://github.com/dimalitvinenko/goit-Js-hw-09-Webpack/blob/main/LICENSE?screen_name=shields_io">
        <img src="https://img.shields.io/static/v1?labelColor=lightgrey&logoColor=black&color=grey&message=License&label=MIT&style=plastic&logo=monster&url=https://github.com/dimalitvinenko/goit-Js-hw-09-Webpack/blob/main/LICENSE"
             alt="GitHub license">
</a> 
<a href="https://https://webpack.js.org/?screen_name=shields_io">
  <img alt="Webpack" src="https://img.shields.io/static/v1?labelColor=darkblue&color=blue&message=v5.53.0&label=Webpack&style=plastic&logo=webpack&url=https://webpack.js.org">
</a> 
 <a href="https://sass-lang.com//?screen_name=shields_io">
  <img alt="SASS" src="https://img.shields.io/static/v1?labelColor=darkviolet&color=violet&message=v1.42.1&label=sass&style=plastic&logo=sass&url=https://sass-lang.com">
</a> 
<a href="https://nodejs.org/en/about/?screen_name=shields_io">
        <img src="https://img.shields.io/static/v1?labelColor=purple&color=darkorchid&message=v14.17.6&label=Node.js&style=plastic&logo=nodedotjs&url=https://nodejs.org/en/about"
             alt="Node.js">
</a>
<a href="https://www.npmjs.com/?screen_name=shields_io">
        <img src="https://img.shields.io/static/v1?label=npm&logo=npm&message=v6.14.13&labelColor=olive&color=darkkhaki&style=plastic" 
             alt="NPM version">
</a>
  
<a href="https://github.com/simple-icons/simple-icons/actions?query=workflow%3AVerify+branch%3Adevelop">
  <img src="https://img.shields.io/github/workflow/status/simple-icons/simple-icons/Verify/develop?logo=github&style=plastic" alt="Build status"/>
</a>
</p>


## Developing

### • [Настройка Webpack 5 с нуля](https://habr.com/ru/post/524260/)
### • [How to use Webpack 5](https://www.taniarascia.com/how-to-use-webpack/)

### Prerequisites

Для корректной работы SASS-компилятора и других инструментов, необходимо один
раз глобально поставить дополнительные пакеты, выполнив в терминале следующие
команды. Пользователям MacOS ничего делать не нужно.

Пользователям **Windows**, в режиме администратора.
[Как запусттить Powershell](https://youtu.be/p2tFnxcymwk) в режиме
администратора.

```shell
npm install --global --production windows-build-tools
```

Вот как выглядит процесс успешной установки для пользователей **Windows**.

![Установка windows-build-tools](https://user-images.githubusercontent.com/1426799/45007904-bde9f280-afb4-11e8-8a35-c77dffaffa2a.gif)

Пользователям **Linux**.

```shell
sudo apt-get install gcc g++ make
```

### Setting up Dev

Для быстрого старта необходимо склонировать репозиторий.

```shell
git clone https://github.com/luxplanjay/webpack-starter-kit.git
```

Переименовать папку сборки именем вашего проекта.

```shell
mv webpack-starter-kit имя_проекта
```

Затем перейти в папку проекта.

```shell
cd имя_проекта
```

Находясь в папке проекта удалить папку `.git` связанную с репозиторием сборки
выполнив следующую команду.

```shell
npx rimraf .git
```

Установить все зависимости.

```shell
npm install
```

И запустить режим разработки.

```shell
npm start
```

Во вкладке браузера перейти по адресу
[http://localhost:4040](http://localhost:4040).

### Building

Для того чтобы создать оптимизированные файлы для хостинга, необходимо выполнить
следующую команду. В корне проекта появится папка `build` со всеми
оптимизированными ресурсами.

```shell
npm run build
```

### Deploying/Publishing

Сборка может автоматически деплоить билд на GitHub Pages удаленного (remote)
репозитория. Для этого необходимо в файле `package.json` отредактировать поле
`homepage`, заменив имя пользователя и репозитория на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
```

После чего в терминале выполнить следующую команду.

```shell
npm run deploy
```

Если нет ошибок в коде и свойство `homepage` указано верно, запустится сборка
проекта в продакшен, после чего содержимое папки `build` будет помещено в ветку
`gh-pages` на удаленном (remote) репозитории. Через какое-то время живую
страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`.

[Введение в инфраструктуру проектов](https://youtu.be/XpPC4QBCfo4)

  
 ### Libs:
    ▴  https://github.com/mattboldt/typed.js
    ▴  https://atomiks.github.io/tippyjs/
    ▴  https://flatpickr.js.org/
    ▴  https://sciactive.com/pnotify/
    ▴  ttps://pawelgrzybek.github.io/siema/
    ▴  https://basiclightbox.electerious.com/


   ###  [Шпаргалка Bach](https://tproger.ru/translations/bash-cheatsheet/)
   ###  [Шпаргалка Bach 2](https://habr.com/ru/company/ruvds/blog/445270/)
   
   ## + Терминал
   ### • Открыть:
        ▪ (Ctrl + ~) (Ctrl + `)
        ▪ view > teminal
        ▪ через палитру (Ctrl + Shift + p)
   ### • Выйти из REPL:
        ▪ (Ctrl + c)
   ### • Основные полезные команды:
        ▪ путь (pwd)
        ▪ лист (ls)
        ▪ навигация (cd): 
            ▴ (cd ~) - перемещение в домашний каталог; 
            ▴ (cd -) - в предыдущий каталог; 
            ▴ (cd ..) - на один уровень выше;
            ▴ (cd Directory1/Directory2) - в каталог Directory2 по указанному пути;  
        ▪ очистка (clear) или (Ctrl + l)
        ▪ создание файлов (touch)
        ▪ создание папок (mkdir)
        ▪ переименование/перемещение (mv) (mv file src/file)
        ▪ удаление (rm):  
            ▴ (rm -rf src) - удаление со всем комплектующим 
        ▪ информация о команде (man) (man mkdir)

## + [Node.js и npm:](https://nodejs.org/en/about/)
   ### • [npmjs.com](https://www.npmjs.com/) - сайт с документацией о пакетах
   ### • работа с пакетами:
        ▪ установка (npm install namePackage)
        ▪ удаление (npm uninstall namePackage)
   ### • CommonJS модули
   ### • npm-скрипты:
        ▪ pre и post

## + Транспиляция кода:
   ### • [Babel](https://babeljs.io/) - компилятор JavaScript
   ### • CLI и npm-скрипты
   ### • Пресеты
   ### • [Browserslist](https://github.com/browserslist/browserslist) 

## + [Сборщик Parcel](https://parceljs.org/)

## + [Сборщик Webpack](https://webpack.js.org/):

## + [ECMAScript модули](https://exploringjs.com/es6/ch_modules.html):
   ### • Дефолтный (default) експорт и импорт
   ### • Именованный (named) експорт и импорт
   ### • Импорт пространства имён (namespace)

<div align="center">
  <img src="includes/logo.png" alt="PNotify" />
<div>



========================================


```js
const type = document.getElementById('countdown_type').value;
const anchor = document.getElementById('countdown_anchor').value;
const reverse = document.getElementById('countdown_reverse').checked;
PNotify.alert({
  type: type,
  title: 'Countdown Notice',
  text: 'I\'ve got a countdown display.',
  modules: new Map([
    ...PNotify.defaultModules,
    [PNotifyCountdown, {
      anchor: anchor,
      reverse: reverse
    }]
  ])
});
```
================================

## Confirm Module

Confirmation dialogs and prompts.

```sh
npm install --save-dev @pnotify/confirm
```

```js
import {notice, defaultModules} from '@pnotify/core';
import * as PNotifyConfirm from '@pnotify/confirm';

const myNotice = notice({
  text: "I'm a notice.",
  modules: new Map([
    ...defaultModules,
    [PNotifyConfirm, {
      // Confirm Module Options
    }]
  ])
});
```

`PNotifyConfirm.defaults = {`
* `confirm: false`<br>
  Make a confirmation box.
* `focus: null`<br>
  For confirmation boxes, true means the first button or the button with promptTrigger will be focused, and null means focus will change only for modal notices. For prompts, true or null means focus the prompt. When false, focus will not change.
* `prompt: false`<br>
  Make a prompt.
* `promptClass: ''`<br>
  Classes to add to the input element of the prompt.
* `promptValue: ''`<br>
  The value of the prompt. (Note that this is two-way bound to the input.)
* `promptMultiLine: false`<br>
  Whether the prompt should accept multiple lines of text.
* `align: 'flex-end'`<br>
  Where to align the buttons. (flex-start, center, flex-end, space-around, space-between)

```js
buttons: [
  {
    text: 'Ok',
    primary: true,
    promptTrigger: true,
    click: (notice, value) => {
      notice.close();
      notice.fire('pnotify:confirm', {notice, value});
    }
  },
  {
    text: 'Cancel',
    click: (notice) => {
      notice.close();
      notice.fire('pnotify:cancel', {notice});
    }
  }
]
```
* The buttons to display, and their callbacks. If a button has promptTrigger set to true, it will be triggered when the user hits enter in a prompt (unless they hold shift).

`}`

Because the default buttons fire notice events on confirmation and cancellation, you can listen for them like this:

```js
import { alert } from '@pnotify/core';
const notice = alert({
  title: 'Confirmation Needed',
  text: 'Are you sure?',
  hide: false,
  modules: {
    Confirm: {
      confirm: true
    }
  }
});
notice.on('pnotify:confirm', () => {
  // User confirmed, continue here...
});
notice.on('pnotify:cancel', () => {
  // User canceled, continue here...
});
```

## Paginate Module

Provide an index and count of the notices in the stack, and/or buttons to let the user page through them.

```sh
npm install --save-dev @pnotify/paginate
```

```js
import {notice, defaultModules} from '@pnotify/core';
import * as PNotifyPaginate from '@pnotify/paginate';

const myNotice = notice({
  text: "I'm a notice.",
  modules: new Map([
    ...defaultModules,
    [PNotifyPaginate, {
      // Paginate Module Options
    }]
  ])
});
```

`PNotifyPaginate.defaults = {`
* `buttons: true`<br>
  Show next and previous buttons.
* `count: true`<br>
  Show the stack notice count.
* `immediateTransition: true`<br>
  Immediately transition to the next/previous notice (without animations).
* `waiting: true`<br>
  After transitioning, set the closed notice to "waiting" state.
* `labels: {previous: 'Previous', next: 'Next', of: 'of'}`<br>
  Various texts. Allows for internationalization.
`}`

## Vanilla JS (ES6)

[PNotify in vanilla ES6+](https://codesandbox.io/s/pnotify-5-in-vanilla-es6-x4ipu)

```html
<link href="node_modules/@pnotify/core/dist/PNotify.css" rel="stylesheet" type="text/css" />
<link href="node_modules/@pnotify/mobile/dist/PNotifyMobile.css" rel="stylesheet" type="text/css" />
<script type="module">
  import { alert, defaultModules } from 'node_modules/@pnotify/core/dist/PNotify.js';
  import * as PNotifyMobile from 'node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

  defaultModules.set(PNotifyMobile, {});
  alert({
    text: 'Notice me, senpai!'
  });
</script>
```

# Styles

## Bright Theme

The default theme, Bright Theme. Supports dark mode. Include the CSS file in your page:

```html
<link href="node_modules/@pnotify/core/dist/BrightTheme.css" rel="stylesheet" type="text/css" />
```

Or if you're using a packager that imports CSS:

```js
import '@pnotify/core/dist/BrightTheme.css';
```

## Material

The Material theme. Supports dark mode. Requires [material-design-icons](https://www.npmjs.com/package/material-design-icons) and optionally the Roboto font. Include the CSS file in your page:

```html
<link href="node_modules/@pnotify/core/dist/Material.css" rel="stylesheet" type="text/css" />
```

Or if you're using a packager that imports CSS:

```js
import '@pnotify/core/dist/Material.css';
```

Then set the default styling and icons to 'material':

```js
import { defaults } from '@pnotify/core';
// or
const { defaults } = require('@pnotify/core');

// Set default styling.
defaults.styling = 'material';
// This icon setting requires the Material Icons font. (See below.)
defaults.icons = 'material';
```

### Material Icons

To use the Material Style icons, include the Material Design Icons Font in your page.

```sh
# The official Google package:
npm install --save material-design-icons

# OR, An unofficial package that only includes the font:
npm install --save material-design-icon-fonts
```

```html
<link rel="stylesheet" href="node_modules/material-design-icons/iconfont/material-icons.css" />
```

Or if you're using a packager that imports CSS:

```js
import 'material-design-icons/iconfont/material-icons.css';
```

Alternatively, you can use the Google Fonts CDN:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
```

Or a clone from jsDelivr:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/material-icons-font@2.0.0/material-icons-font.css" />

```

### Roboto Font

The Material style uses the "400" and "500" weights of Roboto. It will fall back to "sans-serif".

You can use the Google Font CDN:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" />
```

## Angeler

The Angeler theme. Supports dark mode. Include the CSS file in your page:

```html
<link href="node_modules/@pnotify/core/dist/Angeler.css" rel="stylesheet" type="text/css" />
```

Or if you're using a packager that imports CSS:

```js
import '@pnotify/core/dist/Angeler.css';
```

It's recommended that you set the close button to not hide by default, as that is how Angela designed the theme to look best.

```js
import { defaults } from '@pnotify/core';
// or
const { defaults } = require('@pnotify/core');

defaults.closerHover = false;
```

You can use the `angeler-extended` class to use the alternate, more spacious styling for the Angeler theme. This works great for big, center of the page notices, like page errors.

```js
alert({
  text: "I'll be more expanded than normal, with a separated title line.",
  addClass: 'angeler-extended'
});
```

> :info: It's named after Angela Murrell, who designed it, and it's pronounced like An-jel-er.

## Bootstrap

```sh
npm install --save-dev @pnotify/bootstrap3 @pnotify/glyphicon
# or
npm install --save-dev @pnotify/bootstrap4
```

Styling for the popular Bootstrap library. Doesn't support dark mode (but you can use a Bootstrap theme).

Include the CSS:

```html
<link rel="stylesheet" href="node_modules/@pnotify/bootstrap4/dist/PNotifyBootstrap4.css" />
```

Or if you're using a packager that imports CSS:

```js
import '@pnotify/bootstrap4/dist/PNotifyBootstrap4.css';
```

Include the appropriate line(s) from below:

```js
import { defaultModules } from '@pnotify/core';
import * as PNotifyBootstrap4 from '@pnotify/bootstrap4';
// or
const { defaultModules } = require('@pnotify/core');
const PNotifyBootstrap4 = require('@pnotify/bootstrap4');
```

Then set it as a default module:

```js
defaultModules.set(PNotifyBootstrap4, {});
```

Change the "4" to "3" for Bootstrap 3, and also import and set `PNotifyGlyphicon` to use Bootstrap 3's glyphicons. `PNotifyGlyphicon` doesn't have any CSS to import.

## Font Awesome 4 (Icons)

```sh
npm install --save-dev @pnotify/font-awesome4
```

To set Font Awesome 4 as the default icons, include the appropriate line from below:

```js
import { defaultModules } from '@pnotify/core';
import * as PNotifyFontAwesome4 from '@pnotify/font-awesome4';
// or
const { defaultModules } = require('@pnotify/core');
const PNotifyFontAwesome4 = require('@pnotify/font-awesome4');
```

Then set it as a default module:

```js
defaultModules.set(PNotifyFontAwesome4, {});
```

## Font Awesome 5 (Icons)

```sh
npm install --save-dev @pnotify/font-awesome5 @pnotify/font-awesome5-fix
```

To set Font Awesome 5 as the default icons, include the appropriate line from below:

```js
import { defaultModules } from '@pnotify/core';
import * as PNotifyFontAwesome5Fix from '@pnotify/font-awesome5-fix';
import * as PNotifyFontAwesome5 from '@pnotify/font-awesome5';
// or
const { defaultModules } = require('@pnotify/core');
const PNotifyFontAwesome5Fix = require('@pnotify/font-awesome5-fix');
const PNotifyFontAwesome5 = require('@pnotify/font-awesome5');
```

Then set them as default modules:

```js
defaultModules.set(PNotifyFontAwesome5Fix, {});
defaultModules.set(PNotifyFontAwesome5, {});
```

If you don't want to use Font Awesome 5 as your default icons, but you still want support for them in your notices, you should include only the `@pnotify/font-awesome5-fix` package. Font Awesome 5 does some mysterious magic in its code that breaks PNotify. This module has a workaround for it.

# Creating Notices

To make a notice, use the factory functions. Each one takes an options object as its only argument. It will return a PNotify notice instance.

```js
import { alert, notice, info, success, error } from '@pnotify/core';
// or
const { alert, notice, info, success, error } = require('@pnotify/core');

// Manually set the type.
const myAlert = alert({
  text: "I'm an alert.",
  type: 'info'
});

// Automatically set the type.
const myNotice = notice({
  text: "I'm a notice."
});

const myInfo = info({
  text: "I'm an info message."
});

const mySuccess = success({
  text: "I'm a success message."
});

const myError = error({
  text: "I'm an error message."
});
```

# How toright group the noticfication!

```js
function showStackTopLeft(type) {
    if (typeof window.stackTopLeft === 'undefined') {
    window.stackTopLeft = new PNotify.Stack({
      dir1: 'down',
      dir2: 'right',
      firstpos1: 25,
      firstpos2: 25,
      push: 'top',
      maxStrategy: 'close'
    });
  }
  const opts = {
    title: 'Over Here',
    text: "Check me out. I'm in a different stack.",
    stack: window.stackTopLeft
  };
  switch (type) {
    case 'error':
      opts.title = 'Oh No';
      opts.text = 'Watch out for that water tower!';
      opts.type = 'error';
      break;
    case 'info':
      opts.title = 'Breaking News';
      opts.text = 'Have you met Ted?';
      opts.type = 'info';
      break;
    case 'success':
      opts.title = 'Good News Everyone';
      opts.text =
        "I've invented a device that bites shiny metal asses.";
      opts.type = 'success';
      break;
  }
  PNotify.alert(opts);
}
```

# Options

PNotify options and default values.

`defaults = {`
* `type: 'notice'`<br>
  Type of the notice. 'notice', 'info', 'success', or 'error'.
* `title: false`<br>
  The notice's title. Can be a string, an element, or `false` for no title.
* `titleTrusted: false`<br>
  Whether to trust the title or escape its contents. (Not allow HTML.)
* `text: false`<br>
  The notice's text. Can be a string, an element, or `false` for no text.
* `textTrusted: false`<br>
  Whether to trust the text or escape its contents. (Not allow HTML.)
* `styling: 'brighttheme'`<br>
  What styling classes to use. (Can be 'brighttheme', 'material', another string provided by a module, or a styling object.)
* `icons: 'brighttheme'`<br>
  What icons classes to use (Can be 'brighttheme', 'material', another string provided by a module, or an icon object.)
* `mode: 'no-preference'`<br>
  Light or dark version of the theme, if supported by the styling. This overrides the CSS media query when a preference is given. (Can be 'no-preference', 'light', or 'dark'.)
* `addClass: ''`<br>
  Additional classes to be added to the notice. (For custom styling.)
* `addModalClass: ''`<br>
  Additional classes to be added to the notice, only when in modal.
* `addModelessClass: ''`<br>
  Additional classes to be added to the notice, only when in modeless.
* `autoOpen: true`<br>
  Open the notice immediately when it is created.
* `width: '360px'`<br>
  Width of the notice.
* `minHeight: '16px'`<br>
  Minimum height of the notice. It will expand to fit content.
* `maxTextHeight: '200px'`
  Maximum height of the text container. If the text goes beyond this height, scrollbars will appear. Use null to remove this restriction.
* `icon: true`<br>
  Set icon to true to use the default icon for the selected style/type, false for no icon, or a string for your own icon class.
* `animation: 'fade'`<br>
  The animation to use when displaying and hiding the notice. 'none' and 'fade' are supported through CSS. Others are supported through the Animate module and Animate.css.
* `animateSpeed: 'normal'`<br>
  Speed at which the notice animates in and out. 'slow', 'normal', or 'fast'. Respectively, 400ms, 250ms, 100ms.
* `shadow: true`<br>
  Display a drop shadow.
* `hide: true`<br>
  After a delay, close the notice.
* `delay: 8000`<br>
  Delay in milliseconds before the notice is removed. If set to `Infinity`, the notice will not close, but it will not be considered sticky, so it will be closed along with all unstuck notices if the modal backdrop is clicked.
* `mouseReset: true`<br>
  Reset the hide timer if the mouse moves over the notice.
* `closer: true`<br>
  Provide a button for the user to manually close the notice.
* `closerHover: true`<br>
  Only show the closer button on hover.
* `sticker: true`<br>
  Provide a button for the user to manually stick the notice.
* `stickerHover: true`<br>
  Only show the sticker button on hover.
* `labels: {close: 'Close', stick: 'Pin', unstick: 'Unpin'}`<br>
  The various displayed text, helps facilitating internationalization.
* `remove: true`<br>
  Remove the notice's elements from the DOM after it is closed.
* `destroy: true`<br>
  Whether to remove the notice from the stack (and therefore, stack history) when it is closed.
* `stack: defaultStack`<br>
  The stack on which the notices will be placed. Also controls the direction the notices stack.
* `modules: defaultModules`<br>
  This is where modules and their options should be added. It is a map of `module => options` entries.


# Exported Methods and Properties

* `alert(options)`<br>
  Create and return a notice with the default type.
* `notice(options)`<br>
  Create and return a notice with 'notice' type.
* `info(options)`<br>
  Create and return a notice with 'info' type.
* `success(options)`<br>
  Create and return a notice with 'success' type.
* `error(options)`<br>
  Create and return a notice with 'error' type.
* `defaults`<br>
  Defaults for options.
* `defaultStack`<br>
  The default stack object.
* `styles`<br>
  Styles objects.
* `icons`<br>
  Icons objects.

# Instance Methods and Properties

* `notice.open(immediate)`<br>
  Open the notice. Returns a promise that is rejected on failure or resolved on completion.
* `notice.close(immediate, timerHide, waitAfterward)`<br>
  Close the notice. Returns a promise that is rejected on failure or resolved on completion.
* `notice.update(options)`<br>
  Update the notice with new options.
* `notice.on(eventName, callback)`<br>
  Invokes the callback whenever the notice dispatches the event. Callback receives an `event` argument with a `detail` prop. Returns a function that removes the handler when invoked.
* `notice.fire(eventName, detail)`<br>
  Fire an event.
* `notice.getState()`<br>
  Returns the state of the notice. Can be 'waiting', 'opening', 'open', 'closing', or 'closed'.
* `notice.addModuleClass(element, ...classNames)`<br>
  This is for modules to add classes to the notice or container element.
* `notice.removeModuleClass(element, ...classNames)`<br>
  This is for modules to remove classes from the notice or container element.
* `notice.hasModuleClass(element, ...classNames)`<br>
  This is for modules to test classes on the notice or container element.
* `notice.refs.elem`<br>
  The notice's DOM element.
* `notice.refs.container`<br>
  The container DOM element.
* `notice.refs.content`<br>
  The content DOM element. (Title and text containers are in here.)
* `notice.refs.titleContainer`<br>
  The title container DOM element.
* `notice.refs.textContainer`<br>
  The text container DOM element.
* `notice.refs.iconContainer`<br>
  The icon container DOM element.


## Desktop Module

Notifications that display even when the web page is not visible. Implements the [Web Notifications spec](http://www.w3.org/TR/notifications/).

If the user's browser doesn't support Web Notifications, or they deny permission to show them, they will see regular in-browser notices, unless `fallback` is false.

```sh
npm install --save-dev @pnotify/desktop
```

```js
import {notice, defaultModules} from '@pnotify/core';
import * as PNotifyDesktop from '@pnotify/desktop';

const myNotice = notice({
  text: "I'm a notice.",
  modules: new Map([
    ...defaultModules,
    [PNotifyDesktop, {
      // Desktop Module Options
    }]
  ])
});
```

`PNotifyDesktop.defaults = {`
* `fallback: true`<br>
  If desktop notifications are not supported or allowed, fall back to a regular notice.
* `icon: null`<br>
  The URL of the icon to display. If false, no icon will show. If null, a default icon will show.
* `tag: null`<br>
  Using a tag lets you update an existing notice, or keep from duplicating notices between tabs. If you leave tag null, one will be generated, facilitating the `update` function.
* `title: null`<br>
  Optionally display a different title for the desktop.
* `text: null`<br>
  Optionally display different text for the desktop.
* `options: {}`<br>
  Any additional options to be passed to the Notification constructor.
`}`


## Mobile Module

Notices on mobile phones and tablets.

```sh
npm install --save-dev @pnotify/mobile
```

```js
import {notice, defaultModules} from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';

const myNotice = notice({
  text: "I'm a notice.",
  modules: new Map([
    ...defaultModules,
    [PNotifyMobile, {
      // Mobile Module Options
    }]
  ])
});
```

`PNotifyMobile.defaults = {`
* `swipeDismiss: true`<br>
  Let the user swipe the notice away.

`}`


## Animate Module  

// import * as PNotifyAnimate from '@pnotify/animate';

Fluid CSS animations using [Animate.css](https://daneden.github.io/animate.css/).

```sh
npm install --save-dev @pnotify/animate
```

```js
import {notice, defaultModules} from '@pnotify/core';
import * as PNotifyAnimate from '@pnotify/animate';

const myNotice = notice({
  text: "I'm a notice.",
  modules: new Map([
    ...defaultModules,
    [PNotifyAnimate, {
      // Animate Module Options
    }]
  ])
});
```

`PNotifyAnimate.defaults = {`
* `inClass: null`<br>
  The class to use to animate the notice in. If only one of these is set, it will be used for both.
* `outClass: null`<br>
  The class to use to animate the notice out. If only one of these is set, it will be used for both.

`}`

The Animate module also creates a method, `attention(aniClass, callback)`, on notices which accepts an attention grabber class and an animation completed callback.


## dynNotice()

```js
function dynNotice() {
  let percent = 0;
  const notice = PNotify.info({
    text: 'Please Wait',
    icon: 'fas fa-spinner fa-pulse',
    hide: false,
    shadow: false,
    width: '200px',
    closer: false,
    sticker: false
  });

  notice.on('pnotify:afterOpen', () => {
    setTimeout(() => {
      notice.update({
        title: false
      });
      const interval = setInterval(() => {
        percent += 2;
        const options = {
          text: percent + '% complete.'
        };
        if (percent === 80) {
          options.title = 'Almost There';
        }
        if (percent >= 100) {
          window.clearInterval(interval);
          options.title = 'Done!';
          options.type = 'success';
          options.hide = true;
          options.icon = 'fas fa-check';
          options.shadow = true;
          options.width = PNotify.defaults.width;
          options.closer = true;
          options.sticker = true;
        }
        notice.update(options);
      }, 120);
    }, 2000);
  });
}
```
## Vanilla JS (ES6)

[PNotify in vanilla ES6+](https://codesandbox.io/s/pnotify-5-in-vanilla-es6-x4ipu)

```html
<link href="node_modules/@pnotify/core/dist/PNotify.css" rel="stylesheet" type="text/css" />
<link href="node_modules/@pnotify/mobile/dist/PNotifyMobile.css" rel="stylesheet" type="text/css" />
<script type="module">
  import { alert, defaultModules } from 'node_modules/@pnotify/core/dist/PNotify.js';
  import * as PNotifyMobile from 'node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

  defaultModules.set(PNotifyMobile, {});

  alert({
    text: 'Notice me, senpai!'
  });
</script>
```

# Styles

## Bright Theme

The default theme, Bright Theme. Supports dark mode. Include the CSS file in your page:

```html
<link href="node_modules/@pnotify/core/dist/BrightTheme.css" rel="stylesheet" type="text/css" />
```

Or if you're using a packager that imports CSS:

```js
import '@pnotify/core/dist/BrightTheme.css';
```

## Material

The Material theme. Supports dark mode. Requires [material-design-icons](https://www.npmjs.com/package/material-design-icons) and optionally the Roboto font. Include the CSS file in your page:

```html
<link href="node_modules/@pnotify/core/dist/Material.css" rel="stylesheet" type="text/css" />
```

Or if you're using a packager that imports CSS:

```js
import '@pnotify/core/dist/Material.css';
```

Then set the default styling and icons to 'material':

```js
import { defaults } from '@pnotify/core';
// or
const { defaults } = require('@pnotify/core');

// Set default styling.
defaults.styling = 'material';
// This icon setting requires the Material Icons font. (See below.)
defaults.icons = 'material';
```

### Material Icons

To use the Material Style icons, include the Material Design Icons Font in your page.

```sh
# The official Google package:
npm install --save material-design-icons

# OR, An unofficial package that only includes the font:
npm install --save material-design-icon-fonts
```

```html
<link rel="stylesheet" href="node_modules/material-design-icons/iconfont/material-icons.css" />
```

Or if you're using a packager that imports CSS:

```js
import 'material-design-icons/iconfont/material-icons.css';
```

Alternatively, you can use the Google Fonts CDN:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
```

Or a clone from jsDelivr:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/material-icons-font@2.0.0/material-icons-font.css" />

```

### Roboto Font

The Material style uses the "400" and "500" weights of Roboto. It will fall back to "sans-serif".

You can use the Google Font CDN:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" />
```

## Angeler

The Angeler theme. Supports dark mode. Include the CSS file in your page:

```html
<link href="node_modules/@pnotify/core/dist/Angeler.css" rel="stylesheet" type="text/css" />
```

Or if you're using a packager that imports CSS:

```js
import '@pnotify/core/dist/Angeler.css';
```

It's recommended that you set the close button to not hide by default, as that is how Angela designed the theme to look best.

```js
import { defaults } from '@pnotify/core';
// or
const { defaults } = require('@pnotify/core');

defaults.closerHover = false;
```

You can use the `angeler-extended` class to use the alternate, more spacious styling for the Angeler theme. This works great for big, center of the page notices, like page errors.

```js
alert({
  text: "I'll be more expanded than normal, with a separated title line.",
  addClass: 'angeler-extended'
});
```

> :info: It's named after Angela Murrell, who designed it, and it's pronounced like An-jel-er.

## Bootstrap

```sh
npm install --save-dev @pnotify/bootstrap3 @pnotify/glyphicon
# or
npm install --save-dev @pnotify/bootstrap4
```

Styling for the popular Bootstrap library. Doesn't support dark mode (but you can use a Bootstrap theme).

Include the CSS:

```html
<link rel="stylesheet" href="node_modules/@pnotify/bootstrap4/dist/PNotifyBootstrap4.css" />
```

Or if you're using a packager that imports CSS:

```js
import '@pnotify/bootstrap4/dist/PNotifyBootstrap4.css';
```

Include the appropriate line(s) from below:

```js
import { defaultModules } from '@pnotify/core';
import * as PNotifyBootstrap4 from '@pnotify/bootstrap4';
// or
const { defaultModules } = require('@pnotify/core');
const PNotifyBootstrap4 = require('@pnotify/bootstrap4');
```

Then set it as a default module:

```js
defaultModules.set(PNotifyBootstrap4, {});
```

Change the "4" to "3" for Bootstrap 3, and also import and set `PNotifyGlyphicon` to use Bootstrap 3's glyphicons. `PNotifyGlyphicon` doesn't have any CSS to import.

## Font Awesome 4 (Icons)

```sh
npm install --save-dev @pnotify/font-awesome4
```

To set Font Awesome 4 as the default icons, include the appropriate line from below:

```js
import { defaultModules } from '@pnotify/core';
import * as PNotifyFontAwesome4 from '@pnotify/font-awesome4';
// or
const { defaultModules } = require('@pnotify/core');
const PNotifyFontAwesome4 = require('@pnotify/font-awesome4');
```

Then set it as a default module:

```js
defaultModules.set(PNotifyFontAwesome4, {});
```

## Font Awesome 5 (Icons)

```sh
npm install --save-dev @pnotify/font-awesome5 @pnotify/font-awesome5-fix
```

To set Font Awesome 5 as the default icons, include the appropriate line from below:

```js
import { defaultModules } from '@pnotify/core';
import * as PNotifyFontAwesome5Fix from '@pnotify/font-awesome5-fix';
import * as PNotifyFontAwesome5 from '@pnotify/font-awesome5';
// or
const { defaultModules } = require('@pnotify/core');
const PNotifyFontAwesome5Fix = require('@pnotify/font-awesome5-fix');
const PNotifyFontAwesome5 = require('@pnotify/font-awesome5');
```

Then set them as default modules:

```js
defaultModules.set(PNotifyFontAwesome5Fix, {});
defaultModules.set(PNotifyFontAwesome5, {});
```

If you don't want to use Font Awesome 5 as your default icons, but you still want support for them in your notices, you should include only the `@pnotify/font-awesome5-fix` package. Font Awesome 5 does some mysterious magic in its code that breaks PNotify. This module has a workaround for it.

# Creating Notices

To make a notice, use the factory functions. Each one takes an options object as its only argument. It will return a PNotify notice instance.

```js
import { alert, notice, info, success, error } from '@pnotify/core';
// or
const { alert, notice, info, success, error } = require('@pnotify/core');

// Manually set the type.
const myAlert = alert({
  text: "I'm an alert.",
  type: 'info'
});

// Automatically set the type.
const myNotice = notice({
  text: "I'm a notice."
});

const myInfo = info({
  text: "I'm an info message."
});

const mySuccess = success({
  text: "I'm a success message."
});

const myError = error({
  text: "I'm an error message."
});
```

# Options

PNotify options and default values.

`defaults = {`
* `type: 'notice'`<br>
  Type of the notice. 'notice', 'info', 'success', or 'error'.
* `title: false`<br>
  The notice's title. Can be a string, an element, or `false` for no title.
* `titleTrusted: false`<br>
  Whether to trust the title or escape its contents. (Not allow HTML.)
* `text: false`<br>
  The notice's text. Can be a string, an element, or `false` for no text.
* `textTrusted: false`<br>
  Whether to trust the text or escape its contents. (Not allow HTML.)
* `styling: 'brighttheme'`<br>
  What styling classes to use. (Can be 'brighttheme', 'material', another string provided by a module, or a styling object.)
* `icons: 'brighttheme'`<br>
  What icons classes to use (Can be 'brighttheme', 'material', another string provided by a module, or an icon object.)
* `mode: 'no-preference'`<br>
  Light or dark version of the theme, if supported by the styling. This overrides the CSS media query when a preference is given. (Can be 'no-preference', 'light', or 'dark'.)
* `addClass: ''`<br>
  Additional classes to be added to the notice. (For custom styling.)
* `addModalClass: ''`<br>
  Additional classes to be added to the notice, only when in modal.
* `addModelessClass: ''`<br>
  Additional classes to be added to the notice, only when in modeless.
* `autoOpen: true`<br>
  Open the notice immediately when it is created.
* `width: '360px'`<br>
  Width of the notice.
* `minHeight: '16px'`<br>
  Minimum height of the notice. It will expand to fit content.
* `maxTextHeight: '200px'`
  Maximum height of the text container. If the text goes beyond this height, scrollbars will appear. Use null to remove this restriction.
* `icon: true`<br>
  Set icon to true to use the default icon for the selected style/type, false for no icon, or a string for your own icon class.
* `animation: 'fade'`<br>
  The animation to use when displaying and hiding the notice. 'none' and 'fade' are supported through CSS. Others are supported through the Animate module and Animate.css.
* `animateSpeed: 'normal'`<br>
  Speed at which the notice animates in and out. 'slow', 'normal', or 'fast'. Respectively, 400ms, 250ms, 100ms.
* `shadow: true`<br>
  Display a drop shadow.
* `hide: true`<br>
  After a delay, close the notice.
* `delay: 8000`<br>
  Delay in milliseconds before the notice is removed. If set to `Infinity`, the notice will not close, but it will not be considered sticky, so it will be closed along with all unstuck notices if the modal backdrop is clicked.
* `mouseReset: true`<br>
  Reset the hide timer if the mouse moves over the notice.
* `closer: true`<br>
  Provide a button for the user to manually close the notice.
* `closerHover: true`<br>
  Only show the closer button on hover.
* `sticker: true`<br>
  Provide a button for the user to manually stick the notice.
* `stickerHover: true`<br>
  Only show the sticker button on hover.
* `labels: {close: 'Close', stick: 'Pin', unstick: 'Unpin'}`<br>
  The various displayed text, helps facilitating internationalization.
* `remove: true`<br>
  Remove the notice's elements from the DOM after it is closed.
* `destroy: true`<br>
  Whether to remove the notice from the stack (and therefore, stack history) when it is closed.
* `stack: defaultStack`<br>
  The stack on which the notices will be placed. Also controls the direction the notices stack.
* `modules: defaultModules`<br>
  This is where modules and their options should be added. It is a map of `module => options` entries.

# Exported Methods and Properties

* `alert(options)`<br>
  Create and return a notice with the default type.
* `notice(options)`<br>
  Create and return a notice with 'notice' type.
* `info(options)`<br>
  Create and return a notice with 'info' type.
* `success(options)`<br>
  Create and return a notice with 'success' type.
* `error(options)`<br>
  Create and return a notice with 'error' type.
* `defaults`<br>
  Defaults for options.
* `defaultStack`<br>
  The default stack object.
* `styles`<br>
  Styles objects.
* `icons`<br>
  Icons objects.