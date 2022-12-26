<template>
    <div class="home-frame-3-wrapper">
    <h3>Подберите готовое решение:</h3>
        <div class="site-catalog">
            <div class="site-catalog__title">
                <font-awesome-icon icon="fa-solid fa-layer-group" /><p> каталог <a href="/">готовых макетов</a></p>
            </div>
            <img :src="image" alt="site catalog">
        </div>
    </div>
</template>

<script>
    import image from "/public/images/frame_3.webp";

    export default {
        name: "HomeFrame3Component",
        data: function () {
            return {
                image: image
            }
        },
        methods: {
        },
    }
</script>
