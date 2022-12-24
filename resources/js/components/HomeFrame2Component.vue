<template>
    <div class="home-frame-2-wrapper">
        <p class="frame-2-title">Выберите тип сайта</p>
        <div class="cards">
            <div class="card card1">
                <div class="card-title">Сайт-Визитка</div>
                <div class="card-icon"><font-awesome-icon icon="fa-regular fa-paste" /></div>
                <div class="card-description-1">1-3 дня</div>
                <div class="card-description-2">1 страница</div>
                <div class="card-price">500 грн.</div>
                <div class="card-button"><div class="btn btn-outline-dark">Подробнее</div></div>
            </div>
            <div class="card card1">
                <div class="card-title">Лендинг пейдж</div>
                <div class="card-icon"><font-awesome-icon icon="fa-solid fa-rocket" /></div>
                <div class="card-description-1">3-5 дней</div>
                <div class="card-description-2">1 страница</div>
                <div class="card-price">2000 грн.</div>
                <div class="card-button"><div class="btn btn-outline-dark">Подробнее</div></div>
            </div>
            <div class="card card1">
                <div class="card-title">Сайт-Бизнесс</div>
                <div class="card-icon"><font-awesome-icon icon="fa-brands fa-shopify" /></div>
                <div class="card-description-1">от 5 дней</div>
                <div class="card-description-2">многостраничный сайт</div>
                <div class="card-price"><em>от </em>3500 грн.</div>
                <div class="card-button"><div class="btn btn-outline-dark">Подробнее</div></div>
            </div>
            <div class="card card1">
                <div class="card-title">Интернет-Магазин</div>
                <div class="card-icon"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></div>
                <div class="card-description-1">от 7 дней</div>
                <div class="card-description-2">корзина, оплата, доставка</div>
                <div class="card-price"><em>от </em>4500 грн.</div>
                <div class="card-button"><div class="btn btn-outline-dark">Подробнее</div></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeFrame2Component",
        data: function () {
            return {

            }
        },
        mounted() {
        }
    }
</script>
