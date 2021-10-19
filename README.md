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



================================
pnotify
=================
Animate Module
Fluid CSS animations using Animate.css.

npm install --save-dev @pnotify/animate
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
PNotifyAnimate.defaults = {

inClass: null
The class to use to animate the notice in. If only one of these is set, it will be used for both.
outClass: null
The class to use to animate the notice out. If only one of these is set, it will be used for both.
}

The Animate module also creates a method, attention(aniClass, callback), on notices which accepts an attention grabber class and an animation completed callback.


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