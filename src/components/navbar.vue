<template>
    <b-navbar class="navbar-expand-xl sticky-top " toggleable>
        <b-container>
            <b-navbar-brand to="/">
                <img src="favicon.jpg"  alt="логотип_компании" style="float: left" rel="preload"/>
                <div class="name_company">Аваконт</div>
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                <template v-slot:default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" class="justify-content-end" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/company">О нас</b-nav-item>
                    <b-nav-item to="/equipment">Оборудование</b-nav-item>
                    <b-nav-item>
                        <b-dropdown text="Услуги">
                            <b-dropdown-item to="../processing_on_a_cnc_milling_machine">Обработка на фрезерном станке ЧПУ</b-dropdown-item>
                            <b-dropdown-item to="../design_and_modeling">Проектирование и моделировани</b-dropdown-item>
                            <b-dropdown-item to="../chrome_plating">Химическая металлизация (хромирование)</b-dropdown-item>
                            <b-dropdown-item to="../aquaprint">Аквапринт (иммерсионная печать)</b-dropdown-item>
                            <b-dropdown-item to="../laser_engraving">Лазерная гравировка </b-dropdown-item>
                            <b-dropdown-item to="../sandblasing">Пескоструйная обработка</b-dropdown-item>
                            <b-dropdown-item to="../painting_works">Малярно-покрасочные работы</b-dropdown-item>
                            <b-dropdown-item to="../drawing_with_a_UV_printer">Нанесение графики с помощью УФ принтера</b-dropdown-item>
                        </b-dropdown>
                    </b-nav-item>
                    <b-nav-item to="/samples_of_work">Образцы работ</b-nav-item>
                    <b-nav-item>Отзывы</b-nav-item>
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
    /*кнопка - "Услуги"*/
    .dropdown-toggle {
        color: #152534 !important;
        padding-right: 0.5rem !important;
        padding-left: 0.5rem !important;
        font-weight: 600 !important;
        font-size: 1.25rem !important;
        font-family: 'Tenor Sans', sans-serif;
        letter-spacing: -.5px;
        background: none !important;
        border: none !important;
    }
    /*все кнопки в меню при наведении*/
    .nav-link:hover{
        text-decoration: underline !important;
    }
    /*все кнопки в меню (dropdown)*/
    .dropdown-item {
        color: #152534 !important;
        font-weight: 600 !important;
        font-size: 1.2rem;
        border: 0.5px solid rgba(75, 105, 119, 0.66) !important;
    }
    /*все кнопки в меню (dropdown) при наведении*/
    .dropdown-item:hover{
        background:  rgba(240, 240, 240, 0.97) !important;
    }
    /*кнопки*/
    .btn {padding: 0 !important;}
    /*меню (dropdown)*/
    .dropdown-menu {
        background-color:white !important;
        padding: 0 !important;
    }

    /****************** АДАПТИВНОСТЬ *******************/
    @media screen and (max-width: 500px) {
        /*блок под кнопки меню (collapse)*/
        #navbar-toggle-collapse{padding-bottom: 2%;}
        /*все кнопки в меню,все кнопки в меню (dropdown)*/
        .nav-link,.dropdown-item {font-size: 0.8rem !important;}
        /*все кнопки в меню при наведении*/
        .nav-link:hover{
            background:  rgba(240, 240, 240, 0.97) !important;
            text-decoration: none !important;
        }
        /*кнопка - "Услуги"*/
        .dropdown-toggle{font-size: 0.85rem !important;}
        /*все кнопки в меню,все кнопки в меню (dropdown),кнопка - "Услуги"*/
        .nav-link,.dropdown-item,.dropdown-toggle{
            padding: 0.25rem 0.1rem !important;
            white-space: normal !important;
        }
        /*все кнопки в меню, все кнопки в меню (dropdown)*/
        .nav-link,.dropdown-item{border-radius: 4px !important;}
        /*меню (dropdown)*/
        .dropdown-menu{
            border: none !important;
            margin: 0.3rem 0 0 !important;
        }
        /*все кнопки в меню (dropdown)*/
        .dropdown-item {border: none !important;}
        /*кнопка - "Услуги"*/
        .btn-group {display: block !important;}
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        /*блок под кнопки меню (collapse)*/
        #navbar-toggle-collapse{padding-bottom: 2%;}
        /*все кнопки в меню,*/
        .nav-link,.dropdown-item{font-size: 0.9rem !important;}
        /*кнопка - "Услуги"*/
        .dropdown-toggle{font-size: 0.95rem !important;}
        /*все кнопки в меню при наведении*/
        .nav-link:hover{
            background:  rgba(240, 240, 240, 0.97) !important;
            text-decoration: none !important;
        }
        /*все кнопки в меню, все кнопки в меню (dropdown), кнопка - "Услуги"*/
        .nav-link,.dropdown-item,.dropdown-toggle{
            padding: 0.2rem 0.2rem !important;
            white-space:  normal !important;
        }
        /*все кнопки в меню, все кнопки в меню (dropdown)*/
        .nav-link,.dropdown-item{border-radius: 4px !important;}
        /*меню (dropdown)*/
        .dropdown-menu{
            border: none !important;
            margin: 0.3rem 1.5rem 0 !important;
        }
        /*все кнопки в меню (dropdown)*/
        .dropdown-item {border: none !important;}
        /*кнопка - "Услуги"*/
        .btn-group {display: block !important;}
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        /*блок под кнопки меню (collapse)*/
        #navbar-toggle-collapse{padding-bottom: 2%;}
        /*все кнопки в меню, все кнопки в меню (dropdown)*/
        .nav-link,.dropdown-item{font-size: 1.15rem !important;}
        /*все кнопки в меню при наведении*/
        .nav-link:hover{
            background:  rgba(240, 240, 240, 0.97) !important;
            text-decoration: none !important;
        }
        /*кнопка - "Услуги"*/
        .dropdown-toggle{font-size: 1rem !important;}
        /*все кнопки в меню, все кнопки в меню (dropdown), кнопка - "Услуги"*/
        .nav-link,.dropdown-item,.dropdown-toggle{white-space:  normal !important;}
        /*все кнопки в меню, все кнопки в меню (dropdown)*/
        .nav-link,.dropdown-item{border-radius: 4px !important;}
        /*меню (dropdown)*/
        .dropdown-menu{
            border: none !important;
            margin: 0.3rem 0 0 !important;
        }
        /*все кнопки в меню (dropdown)*/
        .dropdown-item {border: none !important;}
        /*кнопка - "Услуги"*/
        .btn-group {display: block !important;}
    }
    @media screen and (min-width: 992px)and (max-width: 1200px) {
        /*блок под кнопки меню (collapse)*/
        #navbar-toggle-collapse{padding-bottom: 2%;}
        /*все кнопки в меню, все кнопки в меню (dropdown)*/
        .nav-link,.dropdown-item{font-size: 1.2rem !important;}
        /*все кнопки в меню при наведении*/
        .nav-link:hover{
            background:  rgba(240, 240, 240, 0.97) !important;
            text-decoration: none !important;
        }
        /*кнопка - "Услуги"*/
        .dropdown-toggle{font-size: 1.1rem !important;}
        /*все кнопки в меню, все кнопки в меню (dropdown),кнопка - "Услуги"*/
        .nav-link,.dropdown-item,.dropdown-toggle{white-space:  normal !important;}
        /*все кнопки в меню, все кнопки в меню (dropdown)*/
        .nav-link,.dropdown-item{border-radius: 4px !important;}
        /*все кнопки в меню (dropdown)*/
        .dropdown-item {border: none !important;}
        /*меню (dropdown)*/
        .dropdown-menu{
            border: none !important;
            margin: 0.3rem 0 0 !important;
        }
        /*кнопка - "Услуги"*/
        .btn-group {display: block !important;}
    }
</style>

<style scoped lang="scss">
    /*меню на всех экранах (которое будет и складываться на маленьких экранах и раскрываться на больших)*/
    .navbar{
        background: #ffffff;
        border-bottom: 2px solid #152534;
        background-size:cover;
        padding: 0 !important;
    }
    /*блок под логотип(картинка, название компании)*/
    .navbar-brand {padding-right: 5% !important;}
    /*все кнопки в меню*/
    .nav-link{
        color: #152534 !important;
        padding-right: 0.8rem !important;
        padding-left: 0.8rem !important;
        font-weight: 600;
        font-size: 1.25rem ;
        font-family: 'Tenor Sans', sans-serif;
        &:hover{font-weight: 700;}
    }
    /*название компании (Аваконт) в логотипе*/
    .name_company{
        font-size: 1.65rem;
        color: #152534;
        font-weight: 500;
        font-style: italic;
        letter-spacing: 7px;
        font-family: Caveat,cursive;
    }
    /*картинка в логотипе*/
    img{
        width: 35px !important;
        height: 35px !important;
        border: 1px solid rgba(163, 163, 163, 0.75);
        box-shadow: 0.1em 0.1em 0.2em #e0e0e0;
        margin-right: 4px;
        border-radius: 7px;
    }
    /****************** АДАПТИВНОСТЬ ****************/
    @media screen and (max-width: 500px) {
        /*название компании (Аваконт) в логотипе*/
        .name_company{
            font-size: 1.32rem;
            letter-spacing: 3px;
        }
        /*картинка в логотипе*/
        img{
            width: 28px !important;
            height: 28px !important;
        }
    }
    @media screen and (min-width: 500px)and (max-width: 768px) {
        /*название компании (Аваконт) в логотипе*/
        .name_company{font-size: 1.45rem;}
        /*картинка в логотипе*/
        img {
            width: 30px !important;
            height: 30px !important;
        }
    }
    @media screen and (min-width: 768px)and (max-width: 992px) {
        /*название компании (Аваконт) в логотипе*/
        .name_company{font-size: 1.5rem;}
    }
</style>