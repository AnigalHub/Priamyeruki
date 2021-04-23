<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <myfooter></myfooter>
  </div>
</template>

<script>
    import Navbar from "./components/navbar";
    import Myfooter from "./components/myfooter"
    export default {
  name: 'App',
  components: {
      Myfooter,
      Navbar}
}
</script>

<style>
  /*ячейки таблиц и заголовки таблиц*/
  td,th{border: 1px solid #173e4e !important;}
  /*таблицы*/
  table{margin-bottom: 0.05% !important;}
  /*ячейки таблиц*/
  table td {padding: 0.35rem !important;}
  /*заголовки таблиц*/
  th{border-collapse: collapse;}
  /*заголовки таблиц при наведении*/
  th:hover{
    background: #152534 !important;
    color: white;
  }
  /*строки таблиц*/
  tr{
    background: rgba(255, 255, 255, 0.77) !important;
    text-align: left !important;
  }
  /*строки таблиц при наведении*/
  tr:hover{
    background: rgba(199, 245, 255, 0.4) !important;
    color: white;
  }
  /*первые ячейки в строке таблиц*/
  tr td:first-child{
    min-height: 10em;
    display: table-cell;
    text-align: center !important;
    vertical-align: middle
  }
  /*заголовки таблиц*/
  th{
    color: white !important;
    text-align: center !important;
    background: #152534 !important;
  }
  /*строки таблиц*/
  tr td,th {text-align: center !important;}
  /*ссылки*/
  a{color: #152534 !important;}
  /*карточка*/
  .card {
    background: none !important;
    border: 1px solid #173e4e !important;
  }
  /*верх карточки*/
  .card-header {
    border-bottom: 1px solid #173e4e !important;
    background: none !important;
  }
  /*заголовок в теле карточки*/
  .card-body h5{display: none !important;}
  /*активные пункты карточки в верху (меню)*/
  .nav-tabs .nav-link.active{
    color: #152534 !important;
    font-weight: 800 !important;
    border-color: #173e4e #173e4e  !important;
  }
  /*активные пункты карточки в верху (меню)*/
  .nav-link.active{background: rgba(17, 53, 67, 0.32) !important;}
  /*вкладки*/
  .nav-tabs{
    font-family: 'Noto Serif TC', serif;
    font-size: 1.3rem;
  }

  /************* АДАПТИВНОСТЬ **********/
  @media screen and (max-width: 500px) {
    /*строки таблиц при наведении*/
    tr:hover {background: rgba(255, 255, 255, 0.87) !important;}
    /*ячейки таблиц и заголовки таблиц*/
    td,th{border: 0.4px solid #173e4e !important;}
    /*последние заголовки таблиц и последние ячейки таблиц*/
    th:last-child, td:last-child {display: none !important;}
  }
  @media screen and (min-height: 992px){
    /*ячейки таблиц*/
    .table td {padding: 0.75rem !important;}
    .tab-content > .tab-pane {display: block !important;}
    /*заголовок в теле карточки*/
    .card-body h5{display: block !important;}
    /*тело карточки*/
    .card-body{padding: 0.25rem !important;}
    /*верх карточки*/
    .card-header{display: none !important;}
    /*карточка*/
    .card {
      background: none !important;
      border: none !important;
    }
  }
</style>
<style lang="scss">
  /*все страницы*/
  #app{
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
    background: rgba(27, 82, 101, 0.2);
  }
  /*контейнер на блоки на всю площадь экрана*/
  .container-fluid{
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  /*контейнер на блоки посередине экрана*/
  .container{
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
  /*параметры сетки бутстрап*/
  .row {margin: 0 !important;}
  /*ссылки*/
  a{text-decoration: none !important;}
  /*картинки*/
  img{
    width: 100%;
    height: auto;
    filter:  contrast(115%);
  }
  /*абзацы*/
  p{margin-bottom: .25rem !important;}
  /*все страницы - Услуги, страница - "Контакты", страница - "Образцы работ"*/
  #processing, #modeling, #chrome_plating, #aquaprint, #laser,
  #sandblasing, #painting, #drawing,
  #contacts,  #company, #samples{
    padding-bottom: 2.5%;
  }
  /*блок с фразой о цене (от чего она зависит)*/
  .price{
    color: #152534;
    font-size: 1.25rem;
    line-height: 1.5rem;
    text-shadow: 0.2px 0.2px 0.2px #152534;
    font-family: 'Noto Serif TC', serif;
    background: white;
    padding: 1.5%;
    text-indent: 0.8%;
    font-weight: 600;
    margin-top: 3.5%;
  }
  /*текст по всему сайту, ячейки и заголовки таблиц, заголовки*/
  .text,.text_light,.text_night, td,th,h3,h5,h6{
    font-family: 'Noto Serif TC', serif;
    cursor: default;
  }
  /*текст по всему сайту */
  .text{
    color: #152534;
    text-shadow: 0.3px 0.3px 0.3px #ffffff;
    font-weight: 400;
    font-size: 1.45rem;
    line-height: 1.7rem;
    padding-bottom: 1.5%;
  }
  /*текст на темном фоне на главной странице*/
  .text_light{
    color: rgba(255, 255, 255, 0.85);
    text-shadow: 1.2px 1.2px 1.2px #152534;
  }
  /*текст на светлом фоне на главной странице*/
  .text_night{color: #152534;}
  /*текст на темном и светлом фоне на главной странице*/
  .text_light,.text_night{
    font-weight: 500;
    line-height: 1.5rem;
    font-size: 1.4rem;
  }
  /*ячейки таблиц и заголовки таблиц*/
  td,th{
    color: #152534;
    font-weight: 500;
    font-size: 1.35rem;
  }
  /*параметры сетки бутстрап (изменена ширина)*/
  .col-2 {
    flex: 0 0 12% !important;
    max-width: 12% !important;
    padding: 0 !important;
  }
  /*параметры сетки бутстрап (убраны отступы)*/
  .col-5{padding: 0 !important;}
  /*заголовок*/
  h2{
    font-family: "Lora", serif;
    font-weight: 700 !important;
    color: #152534;
    padding: 2.5% 0 1% 0;
  }
  /*+текст*/
  h2,h4,h5,h6,.text{letter-spacing: -.5px;}
  /*заголовки*/
  h2,h5{text-align: left !important;}
  h3{
    font-weight: 700 !important;
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.74);
    color: #152534;
    font-size: 1.5rem;
    padding: 1.5% 0 1.5% 0;
  }
  h4{
    text-decoration: underline !important;
    font-weight: 500 !important;
    letter-spacing: -0.8px;
    text-align: left !important;
    font-size: 1.45rem !important;
    padding-top: 1%;
    font-family: 'Lora', serif;
    cursor: default;
  }
  h5{
    font-size: 1.5rem !important;
    font-weight: 700 !important;
    letter-spacing: -0.5px;
  }
  h5,h6{margin-left: 0;}
  h6{
    text-align: center !important;
    font-weight: 700 !important;
    font-size: 1.45rem !important;
  }
  /*контейнер, который включает в себя повтор блоков*/
  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }
  /*картинка на страницах услуг (самая первая, описывающая услугу)*/
  .descr_img{
    float: left;
    width: 38%;
    height: auto;
    margin: 0 2% 0 0
  }
  /*список, который находится описании услуги (справа от картинки)*/
  .ul_descr{margin-left: 38%;}
  /*текст, который не будет переносится вверх, если вверху мало текста*/
  .clear{clear:left;}
  /*анимация*/
  @keyframes bounce-in {
    0%   {transform: scale(0);}
    50%  {transform: scale(1.05);}
    100% {transform: scale(1);}
  }
  @keyframes bounce-out {
    0%   {transform: scale(0);}
    50%  {transform: scale(1.3);}
    100% {transform: scale(1);}
  }
  /*стили для главной страницы*/
  #LandingPage{
    /*заголовки*/
    h2 {
      font-weight: 700 !important;
      text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.74);
      color: #152534;
    }
    h4 {text-align: center;}
    h5 {font-weight: 700 !important;}
    /*компонент (самый первый - главный) с фразой и 2-мя кнопками*/
    #home{
      background: url("../public/images/background/background.jpg") 100% 100% no-repeat;
      background-attachment: fixed;
      background-position: 100%;
      background-size: 100%;
      /*затемнение компонента*/
      #background{
        background-color: rgba(0, 0, 0, 0.35);
        padding: 8.5% 0 8.5% 0;
        border-bottom: 2px solid #152534;
      }
      /*фраза - Изготовление разнообразного декора, рекламных вывесок, сувенирной продукции, реставрация, брендирование*/
      .description{
        text-align: center;
        color: rgba(255, 255, 255, 0.95);
        font-weight: 600;
        cursor: default;
        line-height: 3rem;
        font-family: "Lora", serif;
        text-shadow: 1.4px 1.4px 1.4px #152534;
        font-size: 2.6rem;
      }
      /*кнопки*/
      button {
        width: 45%;
        background: radial-gradient(50% 70%, #ffffff, rgb(160, 156, 161));
        border: 2px solid white !important;
        font-family: "Lora", serif;
        border-radius: 7px;
        margin-top: 6%;
        font-weight: 700;
        color: #0d2331;
        text-shadow: .2px .2px 1px #193647;
        margin-left: 2% !important;
        margin-right: 2% !important;
        padding: 0.8%;
        font-size: 1.45rem;
        /*при наведении*/
        &:hover {
          background: #ffffff !important;
          color: black;
          text-shadow: 1.5px 1.5px 2px white;
          border: 2px solid #193647;
          box-shadow: 5px 5px 5px #696969;
        }
      }
      /*блок под кнопки*/
      .buttons{margin: 0 20% !important;}
    }
    /*компоненты - "Направления деятельности","Обратная связь"*/
    #activity,#feedback{
      padding: .25% 0 2% 0;
      /*заголовок (название компонента)*/
      h2{text-align: center !important;}
    }
    /*компонент - "Направления деятельности"*/
    #activity{
      /*заголовок (назавание услуг-направлений деятельности)*/
      h3{
        font-size: 1.4rem;
        cursor: pointer !important;
        height: 90px;
        padding: 0 0.25%;
        margin-bottom: 0 !important;
        background: radial-gradient(70% 70%, #ffffff, rgb(210, 206, 211));
        text-shadow: 1.2px 1.2px 1.2px rgba(255, 255, 255, 0.74);
        display: flex;
        text-align: center !important;
        align-items: center;
        justify-content: center;
        color: #152534;
      }
      /*картинки*/
      img{
        filter: brightness(80%);
        width: 100%;
        height: auto;
        box-shadow: none !important;
      }
      /*блоки под каждую услугу - направление деятельности*/
      .flex-container > div {
        background: radial-gradient(70% 70%, #ffffff, rgb(196, 192, 197));
        width: 31.7%;
        margin: 0 .8% 1.6% .8% !important;
        box-shadow: 5px 5px 5px #696969;
        cursor: pointer !important;
        &:nth-child(4){
          margin-left: 15% !important;
        }
        /*при наведении*/
        &:hover {
          box-shadow: 0 0 9px 7px #1A394B;
          /*заголовок (назавание услуг-направлений деятельности)*/
          h3 {background: white;}
          /*картинки*/
          img {filter: brightness(100%) contrast(130%);}
          /*картинки,заголовок (назавание услуг-направлений деятельности), блоки под каждую услугу - направление деятельности */
          img, h3, div {animation: bounce-in .4s;}
        }
      }
    }
    /*компонент - "Преимущества"*/
    #advantages{
      background: url("../public/images/background/background_2.jpg") 100% 100% no-repeat;
      background-size: 100% 100%;
      /*затемнение компонента*/
      #background{
        background-color: rgba(0, 0, 0, 0.7);
        padding: 1.5% 0 2% 0;
        border-bottom: 2px solid #152534;
        border-top: 2px solid #152534;
      }
      /*заголовок (названия преимущества)*/
      h4{
        color: white;
        text-align: center !important;
        font-weight: 700 !important;
      }
      /*текст на темном фоне на главной странице*/
      .text_light {text-align: center;}
      /*параметры сетки бутстрап (блоки на каждое преимущество - при наведении)*/
      .col:hover{
        cursor: default;
        /*svg преимуществ*/
        svg{animation: bounce-out 1.2s;}
      }
      /*svg преимуществ*/
      svg{
        width: 105px;
        height: 105px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
    /*компонент - "Обратная связь"*/
    #feedback{
      /*заголовок (название компонента)*/
      h2{padding: 1.5% 0 1% 0 !important;}
      /*поле ввода в форме заявки (фио, телефон, почта, текст)*/
      .form-control {
        border: 1px solid #1a3346 !important;
      }
      /*поле ввода в форме заявки (фио, телефон, почта)*/
      input{
        padding: 25px 10px;
        min-height: 32px;
        margin-bottom: 1%;
      }
      /*поле ввода в форме заявки (текст)*/
      textarea{height: 88% !important;}
      /*наведение на любое поле ввода в форме заявки*/
      input:hover, textarea:hover{box-shadow: 7px 7px 7px #696969;}
      /*метка в форме заявки*/
      label{
        font-weight: 800;
        letter-spacing: -1px;
        font-family: "Lora", serif;
      }
      /*абзац*/
      p{margin-bottom: 0.5rem !important;}
      /*параметры сетки бутстрап (блок под текст - textarea)*/
      .col{padding-bottom: 0.5%;}
      /*параметры сетки бутстрап (блок под фио, телефон, почту)*/
      .col-4{padding: 0 !important;}
      /*кнопка*/
      button{
        font-family: "Lora", serif;
        background: radial-gradient(70% 70%, #1f3e57,  #152534);
        border: none !important;
        font-weight: 700;
        color: #ffffff;
        border-radius: 7px;
        display: block;
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
        padding: 1% 2%;
        font-size: 1.2rem;
        /*при наведении*/
        &:hover {
          background: radial-gradient(70% 70%, #215570, #152534);
          box-shadow: 7px 7px 7px #696969;
        }
      }
    }
    /*компонет - "Карта"*/
    #mymap{
      /*место под карту*/
      .map {
        background-color: #0e111d;
        /*карта с гугл-карт*/
        iframe {
          min-height: 400px;
          height: auto;
          width:100% !important;
          border:0;
          filter: brightness(95%);
          box-shadow: none !important;
        }
      }
    }
  }
  /*стили для страницы - "О нас"*/
  #company{
    /*наведение на svg*/
    .flex-container > div:hover svg{animation: bounce-out 1.2s;}
    /*заголовок - Этапы работы с клиентом*/
    h5{text-align: center !important;}
    /*заголовок - Этапы работы с клиентом, название этапов*/
    h5,h6{cursor: default;}
    /*картинка*/
    img{
      width: 45%;
      float: left;
      margin: 0 2% 1% 0;
    }
    /*блоки на каждый этап работы с клиентами*/
    .flex-container > div {
      width: 18%;
      margin: 0 0.5% 1% 0.5% !important;
    }
    /*svg этапов работы с клиентами*/
    svg{
      width: 120px;
      height: 100px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
  /*стили для страницы - "Оборудование"*/
  #equipment{
    padding-bottom: 2%;
    /*картинки*/
    img{
      width: 100%;
      height: auto;
      box-shadow: none !important;
    }
    /*абзац*/
    p{
      margin-bottom: -0.2rem !important;
      text-align:left !important;
    }
  }
  /*стили для страницы - (услуги) Малярно-покрасочные работы*/
  #painting{
    /*список*/
    ul{margin-bottom: 0 !important;}
    /*пункты списка*/
    li{padding-bottom: 1.8%;}
  }
  /*стили для страницы - (услуги) Обработка дерева, металла и пластика на фрезерном станке ЧПУ*/
  #processing{
    /*пункты списка*/
    li {text-indent: 0 !important;}
  }
  /*стили для страницы - "Образцы работ"*/
  #samples{
    h2{padding-left: 15px;}
    /*картинки*/
    img {
      filter: contrast(120%);
      box-shadow: 3px 3px 3px #696969;
      /*при наведении*/
      &:hover {
        box-shadow: 6px 6px 6px #1A394B;
        filter: contrast(150%);
      }
    }
    /*блоки под образцы работ (картинки)*/
    .flex-container > div {
      background: radial-gradient(70% 70%, #ffffff, rgb(210, 206, 211));
      width: 30%;
      margin: 0 1.5% 2.2% 1.5% ;
    }
  }
  /*стили для страницы - "Контакты"*/
  #contacts{
    /*ссылки*/
    a {
      color: #152534;
      /*при наведении*/
      &:hover{
        color: rgba(23, 8, 133, 0.9);
        font-weight: 600;
      }
    }
    /*текст по всему сайту */
    .text{text-indent: 0 !important;}
    /*параметры сетки бутстрап (колонки на адреса)*/
    .col{padding-left: 0 !important;}
    /*место под карту*/
    .map {
      /*карта с гугл-карт*/
      iframe {
        min-height: 700px;
        box-shadow: none !important;
        height: auto;
        width:100%;
        border:0;
        filter: brightness(99%);
        border-radius: 0.5rem;
      }
    }
  }

  /*************** АДАПТИВНОСТЬ ******************/
  @media (min-width: 1200px){
    /*контейнер (посередине экрана)*/
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 1200px !important;
      max-height: 100% !important;
    }
  }
  @media screen and (max-width: 380px) {
    /*ячейки таблицы*/
    td {
      font-size: 0.8rem;
      line-height: 1rem !important;
      padding: 0.15rem !important;
      /*первые ячейки*/
      &:first-child {padding: 0 !important;}
    }
    /*таблицы*/
    table{
      margin-right: auto;
      margin-left: auto;
    }
    /*стили для главной страницы*/
    #LandingPage{
      /*компонент - "Направления деятельности"*/
      #activity{
        /*заголовок (назавание услуг-направлений деятельности)*/
        h3{margin-top: 5% !important;}
      }
    }
  }
  @media screen and (max-width: 550px) {
    /*заголовки*/
    h2{
      padding: 3% 0 0.2% 0;
      font-size: 1.2rem !important;
    }
    h3,h4,h5{font-size: 0.9rem !important;}
    h6{
      font-size: 0.8rem !important;
      letter-spacing: -.3px;
    }
    /*текст на темном и светлом фоне на главной странице*/
    .text_light,.text_night{
      line-height: 0.8rem;
      font-size: 0.8rem;
    }
    /*текст на темном фоне на главной странице*/
    .text_light{font-weight: 400 !important;}
    /*блок с фразой о цене (от чего она зависит), текст*/
    .price,.text{
      font-size: 0.95rem;
      line-height: 0.9rem;
    }
    /*ячейки таблиц*/
    td{
      font-size: 0.8rem;
      line-height: 0.9rem;
      padding: 0.05rem !important;
    }
    /*заголовки таблиц*/
    th{
      font-size: 0.65rem;
      line-height: 1rem;
      padding: 0.18rem !important;
    }
    /*таблица*/
    table{
      margin-right: auto;
      margin-left: auto;
    }
    /*блок с информацией которую двигаем*/
    .important_row {
      flex-direction: column;
      /*параметры сетки бутстрап*/
      .col,.col-4{padding: 0 !important;}
      /*параметры сетки бутстрап*/
      .col-6,.col-5,.col-4{max-width: 100% ;}
    }
    /*на страницах услуг - каждый этап*/
    .description_row{
      display: block !important;
      img{
        float: left;
        margin-right: 10%;
      }
      .col,.col-2 {
        padding: 0 !important;
        float: none;
      }
      .col-2{
        flex: 0 0 25% !important;
        max-width: 25% !important;
      }
    }
    /*картинка на страницах услуг (самая первая, описывающая услугу)*/
    .descr_img{
      width: 70%;
      float: none;
    }
    ul{margin-left: -5% !important;}
    /*стили для главной страницы*/
    #LandingPage{
      /*компонент (самый первый - главный) с фразой и 2-мя кнопками*/
      #home{
        /*затемнение компонента*/
        #background{padding: 9% 0 9% 0;}
        /*фраза - Изготовление разнообразного декора, рекламных вывесок, сувенирной продукции, реставрация, брендирование*/
        .description{
          font-weight: 600;
          line-height: 1.8rem;
          font-size: 1.4rem;
          padding-bottom: 7%;
        }
        /*кнопки*/
        button{
          width: 47%;
          margin-left: 1.5% !important;
          margin-right: 1.5% !important;
          margin-bottom: 2%;
          padding: 0.8%;
          font-size: 1rem;
          background: radial-gradient(50% 70%, #ffffff, rgb(144, 140, 145));
        }
        /*блок под кнопки*/
        .buttons{margin: 0 5% !important;}
      }
      /*компонент - "Направления деятельности"*/
      #activity{
        /*заголовок (назавание услуг-направлений деятельности)*/
        h3 {
          height: 45px;
          display: flex;
          margin-top: 3%;
          border: none !important;
          background: none !important;
        }
        /*блоки под каждую услугу - направление деятельности*/
        .flex-container > div {
          width: 100%;
          margin: 0 1.5% 5% 1.5% !important;
          box-shadow: 5px 5px 5px #8a8a8a;
          &:hover{
            h3{background: none;}
          }
          &:nth-child(4){margin: 0 1.5% 5% 1.5% !important;}
        }
        /*картинки*/
        img{
          height: 80px !important;
          width: 30% !important;
          float: left;
        }
      }
      /*компонент - "Преимущества"*/
      #advantages{
        /*svg преимуществ*/
        svg{
          margin-top: 0 !important;
          width: 22%;
          float: left;
          height: 90px;
        }
        /*параметры сетки бутстрап (все преимущества)*/
        .row{
          flex-direction: column;
          margin-bottom: 0 !important;
        }
        /*параметры сетки бутстрап (блоки на каждое преимущество)*/
        .col{padding: 6px 0 6px 0;}
        /*параметры сетки бутстрап (последний блок, второй блок)*/
        .row:last-child .col:nth-child(2), .col:last-child{margin-top: -5%;}
        /*текст на темном фоне на главной странице*/
        .text_light{margin-top: -2%;}
      }
      /*компонент - "Обратная связь"*/
      #feedback{
        /*поле ввода в форме заявки (фио, телефон, почта)*/
        input{
          padding: 17px 5px;
          min-height: 28px;
          height: 28px;
        }
        /*кнопка*/
        button{
          margin-top: 2%;
          font-size: 1rem;
        }
        /*параметры сетки бутстрап (блок под форму)*/
        .row{
          flex-direction: column;
          /*параметры сетки бутстрап (блок под текст - textarea)*/
          .col{padding: 0 !important;}
          /*параметры сетки бутстрап (блок под фио, телефон, почту)*/
          .col-4{max-width: 100% !important;}
          /*поле ввода в форме заявки (текст)*/
          textarea{height: 150px !important;}
        }
      }
      /*компонет - "Карта"*/
      #mymap{
        /*место под карту*/
        .map {
          /*карта с гугл-карт*/
          iframe {
            min-height: 250px !important;
            border-radius: 0.625rem !important;
          }
        }
      }
    }
    /*стили для страницы - "О нас"*/
    #company{
      /*картинка*/
      img{
        width: 70%;
        float: none;
      }
      /*абзац*/
      p{margin-bottom: .25rem !important;}
      /*svg этапов работы с клиентами*/
      svg{
        width: 50px;
        height: 50px;
      }
      /*блоки на каждый этап работы с клиентами*/
      .flex-container > div {
        width: 31.2%;
        margin-bottom: 0 !important;
        &:nth-child(4){margin-left: 15% !important;}
      }
    }
    /*стили для страницы - "Оборудование"*/
    #equipment{
      /*таблица*/
      table{padding-top: 2%;}
    }
    /*стили для страницы - "Контакты"*/
    #contacts{
      /*параметры сетки бутстрап (2 адреса)*/
      .row{flex-direction: column;}
    }
  }
  @media screen and (min-width: 550px)and (max-width: 768px) {
    /*заголовки*/
    h2{
      padding: 1.5% 0 0.5% 0;
      font-size: 1.5rem !important;
    }
    h5,h6{font-size: 1.15rem !important;}
    h3,h4{font-size: 1.2rem !important;}
    /*текст на темном и светлом фоне на главной странице*/
    .text_light,.text_night{
      line-height: 0.9rem;
      font-size: 1rem;
    }
    /*текст на темном фоне на главной странице*/
    .text_light{font-weight: 400 !important;}
    /*блок с фразой о цене (от чего она зависит), текст*/
    .price,.text{
      font-size: 1.15rem;
      line-height: 1.2rem;
    }
    /*ячейки таблиц*/
    td {
      font-size: 0.9rem;
      line-height: 1.2rem;
      padding: 0.2rem !important;
    }
    /*заголовки таблиц*/
    th{
      font-size: 0.95rem;
      padding: 0.2rem !important;
      line-height: 1.2rem;
    }
    /*таблица*/
    table{
      margin-right: auto;
      margin-left: auto;
      /*картинки*/
      img{width: 60% !important;}
    }
    /*блок с информацией которую двигаем*/
    .important_row {
      flex-direction: column;
      /*параметры сетки бутстрап*/
      .col,.col-4{padding: 0 !important;}
      /*параметры сетки бутстрап*/
      .col-6,.col-5,.col-4{max-width: 80% ;}
    }
    /*на страницах услуг - каждый этап*/
    .description_row{
      display: block !important;
      /*картинки*/
      img{
        float: left;
        margin-right: 10%;
      }
      /*параметры сетки бутстрап (блок под картинку)*/
      .col-2 {
        flex: 0 0 25% !important;
        max-width: 25% !important;
      }
    }
    /*картинка на страницах услуг (самая первая, описывающая услугу)*/
    .descr_img{width: 50%;}
    /*стили для страницы - (услуги) Малярно-покрасочные работы (первый пункт списка)*/
    #painting .ul_descr li:first-child{margin-left: 18%;}
    /*стили для страницы - (услуги) Малярно-покрасочные работы (все, кроме первого пункта списка)*/
    #painting .ul_descr li:not(:first-child){
      clear: left;
      margin-left: -70%;
    }
    /*список на странице "Проектирование и моделирование"*/
    #modeling .ul_descr {
      clear: left;
      li{margin-left: -70%;}
    }
    /*стили для главной страницы*/
    #LandingPage{
      /*компонент (самый первый - главный) с фразой и 2-мя кнопками*/
      #home{
        /*затемнение компонента*/
        #background{padding:9.5% 0 9.5% 0;}
        /*фраза - Изготовление разнообразного декора, рекламных вывесок, сувенирной продукции, реставрация, брендирование*/
        .description{
          line-height: 2rem;
          font-size: 1.7rem;
        }
        /*кнопки*/
        button{
          width: 48%;
          margin-left: 0.8% !important;
          margin-right: 0.8% !important;
          background: radial-gradient(50% 70%, #ffffff, rgb(144, 140, 145));
          padding: 0.8%;
          font-size: 1.2rem;
        }
        /*блок под кнопки*/
        .buttons{margin: 0 15% !important;}
      }
      /*компонент - "Направления деятельности"*/
      #activity{
        /*блоки под каждую услугу - направление деятельности*/
        .flex-container > div {
          background-color: white;
          width: 46%;
          margin: 0 1.5% 2.5% 1.5% !important;
          box-shadow: 5px 5px 5px #8a8a8a;
          &:nth-child(4){
            margin: 0 1.5% 2.5% 1.5% !important;
          }
        }
      }
      /*компонент - "Преимущества"*/
      #advantages{
        /*svg преимуществ*/
        svg{
          margin-top: 0 !important;
          width: 15%;
          float: left;
          height: 90px;
        }
        /*параметры сетки бутстрап (все преимущества)*/
        .row{
          flex-direction: column;
          margin-bottom: 0 !important;
        }
        /*параметры сетки бутстрап (блоки на каждое преимущество)*/
        .col{padding: 4px 0 4px  0;}
      }
      /*компонент - "Обратная связь"*/
      #feedback{
        /*поле ввода в форме заявки (фио, телефон, почта)*/
        input{padding: 17px 5px;}
        /*параметры сетки бутстрап (блок под форму)*/
        .row{
          flex-direction: column;
          /*параметры сетки бутстрап (блок под текст - textarea)*/
          .col{padding: 0 !important;}
          /*параметры сетки бутстрап (блок под фио, телефон, почту)*/
          .col-4{max-width: 100% !important;}
          /*поле ввода в форме заявки (текст)*/
          textarea{height: 180px !important;}
        }
        /*кнопка*/
        button{margin-top: 2%;}
      }
      /*компонет - "Карта"*/
      #mymap{
        /*место под карту*/
        .map {
          /*карта с гугл-карт*/
          iframe {
            min-height: 330px !important;
            border-radius: 0.625rem !important;
          }
        }
      }
    }
    /*стили для страницы - "О нас"*/
    #company{
      /*картинка*/
      img{width: 50%;}
      /*svg этапов работы с клиентами*/
      svg{
        width: 75px;
        height: 75px;
      }
    }
    /*стили для страницы - "Контакты"*/
    #contacts{
      /*параметры сетки бутстрап (2 адреса)*/
      .row{flex-direction: column;}
    }
  }
  @media screen and (min-width: 768px)and (max-width: 992px) {
    /*заголовки*/
    h2{
      padding: 1.5% 0 0.5% 0;
      font-size: 1.5rem !important;
    }
    h6{font-size: 1.2rem !important;}
    h3,h4,h5{
      font-size: 1.25rem !important;
    }
    /*текст на темном и светлом фоне на главной странице*/
    .text_light,.text_night{
      font-weight: 400 !important;
      line-height: 1.1rem;
      font-size: 1.2rem;
    }
    /*блок с фразой о цене (от чего она зависит), ячейки и заголовки таблиц, текст*/
    .price,td,th,.text{
      font-size: 1.2rem;
      line-height: 1.35rem;
    }
    /*блок с информацией которую двигаем*/
    .important_row {
      flex-direction: column;
      /*параметры сетки бутстрап*/
      .col{padding: 0 !important;}
      /*параметры сетки бутстрап*/
      .col-6,.col-5,.col-4{max-width: 65% ;}
    }
    /*на страницах услуг - каждый этап*/
    .description_row{
      .col-2 {
        flex: 0 0 18% !important;
        max-width: 18% !important;
      }
    }
    /*последний пункт списка на странице "Проектирование и моделирование"*/
    #modeling .ul_descr li:last-child{margin-left: -70% !important;}
    /*стили для главной страницы*/
    #LandingPage{
      /*компонент - "Направления деятельности"*/
      #activity{
        /*заголовок (назавание услуг-направлений деятельности)*/
        h3{height: 95px;}
      }
      /*компонент - "Преимущества"*/
      #advantages{
        /*svg преимуществ*/
        svg{
          margin-top: 0 !important;
          width: 90px;
          height: 90px;
        }
        /*параметры сетки бутстрап (блоки на каждое преимущество)*/
        .col{padding: 0 5px 0 5px;}
      }
      /*компонент - "Обратная связь"*/
      #feedback{
        /*поле ввода в форме заявки (фио, телефон, почта)*/
        input{padding: 20px 10px;}
      }
    }
    /*стили для страницы - "О нас"*/
    #company{
      /*svg этапов работы с клиентами*/
      svg{
        width: 85px;
        height: 85px;
      }
    }
    /*стили для страницы - "Образцы работ"*/
    #samples{
      /*блоки под образцы работ (картинки)*/
      .flex-container > div {
        margin: 0 2% 3.8% 2% !important;
        width: 28%;
      }
    }
    /*стили для страницы - "Контакты"*/
    #contacts{
      /*параметры сетки бутстрап (2 адреса)*/
      .row{flex-direction: column;}
    }
  }
  @media screen and (min-width: 992px)and (max-width: 1200px) {
    /*заголовки*/
    h2{
      padding: 1.5% 0 0.5% 0;
      font-size: 1.8rem !important;
    }
    h6{font-size: 1.25rem !important;}
    h5{font-size: 1.3rem !important;}
    h3,h4{font-size: 1.35rem !important;}
    .text_light,.text_night{line-height: 1.2rem;}
    /*блок с фразой о цене (от чего она зависит), ячейки и заголовки таблиц, текст*/
    .price, td,th,.text{
      font-size: 1.25rem;
      line-height: 1.4rem;
    }
    /*стили для главной страницы*/
    #LandingPage{
      /*компонент - "Направления деятельности"*/
      #activity{
        /*заголовок (назавание услуг-направлений деятельности)*/
        h3{height: 70px;}
      }
      /*компонент - "Преимущества"*/
      #advantages{
        /*svg преимуществ*/
        svg{margin-top: 0 !important;}
      }
    }
    /*стили для страницы - "О нас"*/
    #company{
      /*svg этапов работы с клиентами*/
      svg{
        width: 95px;
        height: 95px;
      }
    }
  }
  @media screen and (min-width: 1200px)and (max-width: 1400px) {
    /*заголовок*/
    h4{font-size: 1.35rem !important;}
  }
  @media screen and (min-width: 768px){
    /*на страницах услуг - каждый этап*/
    .description_row{
      /*параметры сетки бутстрап (текст)*/
      .col{
        display: flex;
        align-items: center
      }
    }
  }
  @media screen and (max-width: 768px) {
    /*стили для страницы - "Образцы работ"*/
    #samples{
      /*контейнер, который включает в себя повтор блоков*/
      .flex-container {
        margin: 0 2.5%;
        /*блоки под образцы работ (картинки)*/
        & > div{
          width: 42%;
          margin: 0 2.5% 3.2% 2.5% !important;
        }
      }
    }
  }
  @media screen and (min-height: 992px){
    /*стили для страницы - "Образцы работ"*/
    #samples{
      /*блоки под образцы работ (картинки)*/
      .flex-container > div {
        margin: 0 2% 3.8% 2% !important;
        width: 28%;
      }
    }
  }
  @media screen and (min-width: 768px)and (max-width: 1200px) {
    /*стили для главной страницы*/
    #LandingPage{
      /*компонент (самый первый - главный) с фразой и 2-мя кнопками*/
      #home{
        /*фраза - Изготовление разнообразного декора, рекламных вывесок, сувенирной продукции, реставрация, брендирование*/
        .description{
          line-height: 2.5rem;
          font-size: 2rem;
        }
      }
    }
  }
  @media screen and (max-width: 1300px) {
    /*стили для главной страницы*/
    #LandingPage{
      /*компонент (самый первый - главный) с фразой и 2-мя кнопками*/
      #home{
        background: url("../public/images/background/background_double.jpg") 100% 100% no-repeat;
        background-attachment: initial;
        background-position: 100%;
        background-size: 100% 100%;
      }
    }
  }
  @media screen and (max-width: 1600px) and (min-height: 992px){
    /*стили для страницы - "О нас"*/
    #company{
      /*svg этапов работы с клиентами*/
      svg{
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 1.5% !important;
      }
      /*блоки на каждый этап работы с клиентами*/
      .flex-container > div {
        width: 31.2%;
        margin-bottom: 5% !important;
        &:nth-child(4) {margin-left: 15% !important;}
      }
    }
  }
  @media screen and (min-width: 2000px) and (min-height: 992px){
    /*текст,текст на темном фоне на главной странице, текст на светлом фоне на главной странице, заголовки*/
    .text,.text_light,.text_night,h5,h6{
      font-size: 1.4rem !important;
      line-height: 1.65rem !important;
    }
    /*стили для страницы - "Контакты"*/
    #contacts{
      /*параметры сетки бутстрап (2 адреса)*/
      .row {flex-direction: column;}
      /*место под карту*/
      .map {
        /*карта с гугл-карт*/
        iframe {min-height: 1250px;}
      }
    }
    /*на страницах услуг - каждый этап*/
    .description_row {margin-bottom: 2% !important;}
  }
</style>
