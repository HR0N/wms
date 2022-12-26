<template>
    <div class="home-frame-4-wrapper">
        <div class="wrap-4-title">
            <span> Technologies </span>
            <!--It's easier to name what we can't do-->
        </div>
        <div class="tech-rows">
            <div class="row row-1" ref="row1" id="row1">
                <span>HTML 5</span>
                <span>CSS 3</span>
                <span>Flex</span>
                <span>Grid</span>
                <span>Responsive</span>
                <span>Bootstrap</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>Figma etc</span>
            </div>
            <div class="row row-2" ref="row2" id="row2">
                <span>Prototyping</span>
                <span>UI/UX Design</span>
                <span>jQuery</span>
                <span>Angular</span>
                <span>React</span>
                <span>NextJS</span>
                <span>VueJS</span>
                <span>API</span>
            </div>
            <div class="row row-3" ref="row3" id="row3">
                <span>Python</span>
                <span>PHP</span>
                <span>SQL</span>
                <span>Laravel</span>
                <span>Node JS</span>
                <span>Parsers</span>
                <span>Telegram Bots</span>
                <span>CRM</span>
                <span>SEO</span>
            </div>
        </div>
    </div>
</template>

<script>
    import '/public/jquery';
    export default {
        name: "HomeFrame4Component",
        data: function () {
            return {
            }
        },
        methods: {
            handleScroll: function () {
                let row1 =  document.getElementById('row1');
                let row2 =  document.getElementById('row2');
                let row3 =  document.getElementById('row3');
                let distance = row2.getBoundingClientRect();
                if(distance.y < 800 && distance.y > 50){
                    let dis = distance.y - 325;
                    let screen = Math.round(window.innerWidth / 300);
                    let topDis = Math.round((dis / 325) * 100 / screen);
                    let extra = 20 * (4 / screen);
                    $(row1).css({'transform': `translateX(${(-extra - 10) + topDis}%)`});
                    $(row2).css({'transform': `translateX(${-topDis - extra}%)`});
                    $(row3).css({'transform': `translateX(${(-extra - 5) + topDis}%)`});
                }

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
