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
    td,th{
        border: 1px solid #173e4e !important;
    }
    .table{
      margin-bottom: 0.05% !important;
    }
    .table td {
      padding: 0.35rem !important;
    }
    th{
        border-collapse: collapse;
    }
    th:hover{
        background: #152534 !important;
        color: white;
    }
    tr{
        background: rgba(255, 255, 255, 0.77) !important;
        text-align: left !important;
    }
    tr td:first-child{
        min-height: 10em;
        display: table-cell;
        text-align: center !important;
        vertical-align: middle
    }
    tr:hover{
        background: rgba(199, 245, 255, 0.4) !important;
        color: white;
    }
    th{
        color: white !important;
        text-align: center !important;
        background: #152534 !important;
    }
    tr td,th {
        text-align: center !important;
    }
    @media screen and (min-height: 992px){
      .table td {
        padding: 0.75rem !important;
      }
    }
</style>
<style lang="scss">
  @media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 1180px !important;
      max-height: 100%;
    }
  }
  #app{
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
    background: rgba(27, 82, 101, 0.18);
  }
  .container-fluid{
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .container{
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
  .row {
    margin: 0 !important;
  }
  a {
     text-decoration: none !important;
  }
  img{
    width: 100%;
    filter:  contrast(115%);

  }
  #processing, #modeling, #chrome_plating, #aquaprint, #laser,
  #sandblasing, #painting, #drawing,
  #contacts,  #company, #samples{
      padding-bottom: 2.5%;
  }
  .price{
    padding-top: 0.1%;
    color: #152534;
    font-size: 1.25rem;
    line-height: 1.5rem;
    text-shadow: 0.2px 0.2px 0.2px #152534;
    font-family: 'Noto Serif TC', serif;
    padding-bottom: 1.5%;
  }
  .price{
      background: white;
      padding: 1.5%;
      text-indent: 0.8%;
      font-weight: 600;
      margin-top:1%;
  }
  .text,.text_light,.text_night,
  td,th,h3,h5,h6{
    font-family: 'Noto Serif TC', serif;
    cursor: default;
  }
  .text{
    color: #152534;
    text-shadow: 0.3px 0.3px 0.3px #ffffff;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.45rem;
    padding-bottom: 1.5%;
  }

  .text_after_video{
      padding-top: 1.5%;
  }
  .text_light{
    color: rgba(255, 255, 255, 0.85);
    text-shadow: 1.2px 1.2px 1.2px #152534;
  }
  .text_night{
    color: #152534;
  }
  .text_light,.text_night{
    font-weight: 500;
    line-height: 1.5rem;
    font-size: 1.25rem;
  }
  td,th{
    color: #152534;
    font-weight: 500;
    font-size: 1.25rem;
  }
  .col-2 {
    flex: 0 0 12% !important;
    max-width: 12% !important;
    padding: 0 !important;
  }
  .col-5{
      padding: 0 !important;
  }
  video{
    width: 100%;
    box-shadow: 5px 5px 5px #8a8a8a;
  }
  h2{
    font-weight: 700 !important;
    color: #152534;
    padding: 2.5% 0 1% 0;
  }
  h2,h5{
      text-align: left !important;
  }
  h3{
    font-weight: 700 !important;
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.74);
    color: #152534;
    font-size: 1.5rem !important;
    padding: 1.5% 0 1.5% 0;
  }
  h4{
    text-decoration: underline !important;
    font-weight: 500 !important;
    letter-spacing: -0.8px;
    text-align: left !important;
    font-size: 1.3rem !important;
    padding-top: 1%;
    font-family: 'Lora', serif;
    cursor: default;
  }
  h5{
    font-size: 1.25rem !important;
    font-weight: 700 !important;
    letter-spacing: -0.5px;
  }
  h5,h6{
    margin-left: 0;
  }
  h6{
    text-align: center !important;
    font-weight: 700 !important;
    font-size: 1.25rem !important;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
  @media screen and (min-width: 2000px) and (min-height: 992px){
    .text,.text_light,.text_night,h5,h6{
      font-size: 1.4rem !important;
      line-height: 1.65rem !important;
    }
  }
  @media screen and (max-width: 380px) {
  td{
      font-size: 0.8rem;
      line-height: 1rem !important;
      padding: 0.15rem !important;
    }
    td:first-child{
      padding: 0rem !important;
    }
    table{
      margin-right: auto;
      margin-left: auto;
      img{
        width: 60% !important;
      }
    }
  }
  @media screen and (max-width: 500px) {
    h2{
      padding: 3% 0 0.2% 0;
      font-size: 1.2rem !important;
    }
    h5{
      font-size: 0.8rem !important;
    }
    h6{
      font-size: 0.8rem !important;
      letter-spacing: -.3px;
    }
    h4{
      font-size: 0.9rem !important;
    }
    .text_light,.text_night{
      line-height: 0.8rem;
      font-size: 0.8rem;
    }
    .text_light{
      font-weight: 400 !important;
    }
    .price,.text{
        font-size: 0.8rem;
        line-height: 0.9rem;
      }
    td{
      font-size: 0.8rem;
      line-height: 0.9rem;
    }
   .table td {
     padding: 0.05rem !important;
   }
    th{
      font-size: 0.65rem;
      line-height: 1rem;
      padding: 0.18rem !important;
    }
    table{
      margin-right: auto;
      margin-left: auto;
      img{
        width: 60% !important;
      }
    }
    .important_row {
      flex-direction: column;
      .col,.col-4{
        padding: 0 !important;
      }
      .col-6,.col-5,.col-4{
        max-width: 100% ;

      }
    }
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
  }
  @media screen and (min-width: 500px)and (max-width: 768px) {
    h2{
      padding: 0.5% 0 0.5% 0;
      font-size: 1.5rem !important;
    }
    h5{
      font-size: 0.9rem !important;
    }
    h6{
      font-size: 0.75rem !important;
    }
    h4{
      font-size: 1rem !important;
    }
    .text_light,.text_night{
      line-height: 0.9rem;
      font-size: 1rem;
    }
    .text_light{
      font-weight: 400 !important;
    }
    .price,.text{
      font-size: 0.95rem;
      line-height: 1.2rem;
    }
    td{
      font-size: 0.9rem;
      line-height: 1.2rem;
    }
    .table td {
      padding: 0.2rem !important;
    }
    th{
      font-size: 0.95rem;
      padding: 0.2rem !important;
      line-height: 1.2rem;
    }
    table{
      margin-right: auto;
      margin-left: auto;
      img{
        width: 60% !important;
      }
    }
    .important_row {
      flex-direction: column;
      .col,.col-4{
        padding: 0 !important;
      }
      .col-6,.col-5,.col-4{
        max-width: 80% ;
      }
    }
    .description_row{
     display: block !important;
      img{
        float: left;
        margin-right: 10%;
      }
      .col-2 {
        flex: 0 0 25% !important;
        max-width: 25% !important;
      }
    }
  }
  @media screen and (min-width: 768px){
      .description_row{
          .col{
              display: flex;
              align-items: center
          }
      }
  }
  @media screen and (min-width: 768px)and (max-width: 992px) {
    h6{
      font-size: 1.15rem !important;
    }
    h4,h5{
      font-size: 1.2rem !important;
    }
    .text_light,.text_night{
      font-weight: 400 !important;
      line-height: 1.1rem;
      font-size: 1.15rem;
    }
    .price,td,th,.text{
      font-size: 1.15rem;
      line-height: 1.35rem;
    }
    .important_row {
      flex-direction: column;
      .col{
        padding: 0 !important;
      }
      .col-6,.col-5,.col-4{
        max-width: 65% ;
      }
    }
    .description_row{
      .col-2 {
        flex: 0 0 18% !important;
        max-width: 18% !important;
      }
    }
  }
  @media screen and (min-width: 992px)and (max-width: 1200px) {
    h6{
      font-size: 1.2rem !important;
    }
    h5{
      font-size: 1.25rem !important;
    }
    h4{
      font-size: 1.3rem !important;
    }
    .text_light,.text_night{
      line-height: 1.2rem;
    }
    .price, td,th,.text{
        font-size: 1.2rem;
        line-height: 1.4rem;
    }
  }
  @media screen and (min-width: 1200px)and (max-width: 1400px) {
    h4{
      font-size: 1.35rem !important;
    }
  }

</style>
