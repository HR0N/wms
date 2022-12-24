<template>
    <div class="home-frame-1-wrapper">
        <div class="bg-image">
            <img :src="imgBg">
            <img :src="img1">
            <img :src="img2">
            <img :src="img3">
            <div class="frame5"></div>
<!--            <img :src="img4">-->
        </div>
<!--        <div class="boost"></div>-->
    </div>
</template>

<script>
    import imgBg from "/public/mn-frames/minimal_nature.webp";
    import imgFrame1 from "/public/mn-frames/bg-frame-1-1.webp";
    import imgFrame2 from "/public/mn-frames/bg-frame-1-2.webp";
    import imgFrame3 from "/public/mn-frames/bg-frame-1-3.webp";
    // import imgFrame4 from "/public/mn-frames/next_img_1.png";

    export default {
        name: "HomeFrame1Component",
        data: function () {
            return {
                imgBg: imgBg,
                img1: imgFrame1,
                img2: imgFrame2,
                img3: imgFrame3,
                // img4: imgFrame4,
            }
        },
        mounted() {
        }
    }
    window.addEventListener('scroll', e => {
        document.body.style.cssText = `--scrollTop: -${window.scrollY}px`;
    });
</script>

<style scoped>
</style>
