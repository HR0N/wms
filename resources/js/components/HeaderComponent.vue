<template>
    <header :class="{header_sticky: header}">
        <nav>
            <div class="item"><a href="/">Home</a></div>
            <div class="item"><a href="/">Prices</a></div>
            <div class="item"><a href="/">Contacts</a></div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "HeaderComponent",

        data: function () {
            return {
                header: false,
                header2: null,
            }
        },

        methods: {
            handleScroll: function () {
                this.header = window.scrollY > 380;
            }
        },

        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        unmounted() {
            window.removeEventListener('scroll', this.handleScroll);
        },
    }
</script>

<style scoped>
</style>
