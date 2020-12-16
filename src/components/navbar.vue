<template>
    <b-navbar class="navbar-expand-xl sticky-top " toggleable>
        <b-container>
            <b-navbar-brand to="/">
                <img src="../../public/images/hands.jpg"  style="float: left"/>
                <div class="name_company">Аваконт</div>
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                <template v-slot:default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" class="justify-content-center" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/company">О нас</b-nav-item>
                    <b-nav-item to="/equipment">Оборудование</b-nav-item>
                    <b-nav-item>
                        <b-dropdown text="Услуги">
                            <b-dropdown-item to="../processing_on_a_cnc_milling_machine">Обработка на фрезерном станке ЧПУ</b-dropdown-item>
                            <b-dropdown-item to="../design_and_modeling">Проектирование и моделировани</b-dropdown-item>
                          <!--  <b-dropdown-item to="../chrome_plating">Химическая металлизация (хромирование)</b-dropdown-item>
                            <b-dropdown-item to="../aquaprint">Аквапринт (иммерсионная печать)</b-dropdown-item> -->
                            <b-dropdown-item to="../laser_engraving">Лазерная гравировка </b-dropdown-item>
                            <b-dropdown-item to="../sandblasing">Пескоструйная обработка</b-dropdown-item>
                            <b-dropdown-item to="../painting_works">Малярно-покрасочные работы</b-dropdown-item>
                           <!-- <b-dropdown-item to="../drawing_with_a_UV_printer">Нанесение графики с помощью УФ принтера</b-dropdown-item> -->
                        </b-dropdown>
                       </b-nav-item>
                    <b-nav-item to="/samples_of_work">Образцы работ</b-nav-item>
                    <!-- <b-nav-item>Отзывы</b-nav-item> -->
                     <b-nav-item to="/contacts">Контакты</b-nav-item>
                 </b-navbar-nav>
             </b-collapse>
         </b-container>
     </b-navbar>

 </template>

 <script>
     export default {
         name: "navbar"
     }
 </script>
 <style>
     .dropdown-toggle {
         color: #152534 !important;
         padding-right: 0.5rem !important;
         padding-left: 0.5rem !important;
         font-weight: 600 !important;
         font-size: 1.2rem !important;
         font-family: 'Tenor Sans', sans-serif;
         background: none !important;
         border: none !important;
     }
     .nav-link:hover{
         text-decoration: underline !important;
     }
     .dropdown-item {
         color: #152534 !important;
         font-weight: 600 !important;
         font-size: 1.1rem;
         border: 0.5px solid rgba(75, 105, 119, 0.66) !important;
     }
     .dropdown-item:hover{
         background:  rgba(240, 240, 240, 0.97) !important;
     }
     .btn {
         padding: 0 !important;
     }
     .dropdown-menu {
         background-color:white !important;
         padding: 0 !important;
     }

     @media screen and (max-width: 500px) {
         #navbar-toggle-collapse{
             padding-bottom: 2%;
         }
        .nav-link,.dropdown-item {
             font-size: 0.8rem !important;
         }
        .nav-link:hover{
            background:  rgba(240, 240, 240, 0.97) !important;
            text-decoration: none !important;
        }
         .dropdown-toggle{
             font-size: 0.85rem !important;
         }
         .nav-link,.dropdown-item,.dropdown-toggle{
             padding: 0.2rem 0.1rem !important;
             white-space:  normal !important;
         }
         .nav-link,.dropdown-item{
             border-radius: 4px !important;
         }
         .dropdown-menu{
             border: none !important;
             margin: 0.3rem 0 0 !important;
         }
         .dropdown-item {
             border: none !important;
         }
         .btn-group {
             display: block !important;
         }
     }
     @media screen and (min-width: 500px)and (max-width: 768px) {
         #navbar-toggle-collapse{
             padding-bottom: 2%;
         }
         .nav-link,.dropdown-item{
             font-size: 0.9rem !important;
         }
         .dropdown-toggle{
             font-size: 0.95rem !important;
         }
         .nav-link:hover{
             background:  rgba(240, 240, 240, 0.97) !important;
             text-decoration: none !important;
         }
         .nav-link,.dropdown-item,.dropdown-toggle{
             padding: 0.2rem 0.2rem !important;
             white-space:  normal !important;
         }
         .nav-link,.dropdown-item{
             border-radius: 4px !important;
         }
         .dropdown-menu{
             border: none !important;
             margin: 0.3rem 1.5rem 0 !important;
         }
         .dropdown-item {
             border: none !important;
         }
         .btn-group {
             display: block !important;
         }
         .btn-group {
             display: block !important;
         }
     }
     @media screen and (min-width: 768px)and (max-width: 992px) {
         #navbar-toggle-collapse{
             padding-bottom: 2%;
         }
         .nav-link,.dropdown-item{
             font-size: 1.15rem !important;
         }
         .nav-link:hover{
             background:  rgba(240, 240, 240, 0.97) !important;
             text-decoration: none !important;
         }
         .dropdown-toggle{
             font-size: 1rem !important;
         }
         .nav-link,.dropdown-item,.dropdown-toggle{
             white-space:  normal !important;
         }
         .nav-link,.dropdown-item{
             border-radius: 4px !important;
         }
         .dropdown-menu{
             border: none !important;
             margin: 0.3rem 0 0 !important;
         }
         .dropdown-item {
             border: none !important;
         }
         .btn-group {
             display: block !important;
         }
         .btn-group {
             display: block !important;
         }
     }
     @media screen and (min-width: 992px)and (max-width: 1200px) {
         #navbar-toggle-collapse{
             padding-bottom: 2%;
         }
         .nav-link,.dropdown-item{
             font-size: 1.2rem !important;
         }
         .nav-link:hover{
             background:  rgba(240, 240, 240, 0.97) !important;
             text-decoration: none !important;
         }
         .dropdown-toggle{
             font-size: 1.1rem !important;
         }
         .nav-link,.dropdown-item,.dropdown-toggle{
             white-space:  normal !important;
         }
         .nav-link,.dropdown-item{
             border-radius: 4px !important;
         }
         .dropdown-item {
             border: none !important;
         }
         .dropdown-menu{
             border: none !important;
             margin: 0.3rem 0 0 !important;
         }
         .btn-group {
             display: block !important;
         }
         .btn-group {
             display: block !important;
         }
     }
 </style>

 <style scoped lang="scss">
     .navbar{
         background: #ffffff;
         border-bottom: 2px solid #152534;
         background-size:cover;
         padding: 0 !important;
     }
     .navbar-brand {
         padding-right: 5% !important;
     }
     .nav-link{
         color: #152534 !important;
         padding-right: 0.8rem !important;
         padding-left: 0.8rem !important;
         font-weight: 600;
         font-size: 1.25rem ;
         font-family: 'Tenor Sans', sans-serif;
     }
     .nav-link:hover{
         font-weight: 700;
     }

     .name_company{
         font-size: 1.6rem;
         color: #152534;
         font-weight: 700;
         letter-spacing: 5px;
         font-family: 'Caveat', cursive;
     }

     img{
         width: 35px !important;
         height: 35px !important;
         border: 1px solid rgba(163, 163, 163, 0.75);
         box-shadow: 0.1em 0.1em 0.2em #e0e0e0;
         margin-right: 4px;
         border-radius: 7px;
     }
     @media screen and (max-width: 500px) {
         .name_company{
             font-size: 1.32rem;
             letter-spacing: 3px;
         }
         img {
             width: 28px !important;
             height: 28px !important;
         }
     }
     @media screen and (min-width: 500px)and (max-width: 768px) {
         .name_company{
             font-size: 1.45rem;
         }
         img {
             width: 30px !important;
             height: 30px !important;
         }
     }
     @media screen and (min-width: 768px)and (max-width: 992px) {
         .name_company{
             font-size: 1.5rem;
         }
     }
 </style>