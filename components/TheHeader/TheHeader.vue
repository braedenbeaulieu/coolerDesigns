<template>
    <div class="header">
        <nuxt-link class="logo link" to="/">
            <picture>
				<source class="logo" media="(min-width: 1024px)" srcset="/images/HeaderLogo.png">
				<img src="/images/logo2.png" alt="Cooler Designs" class="logo">
			</picture>
                <!-- <h1 v-on:click="slideHeader(true)"></h1> -->
        </nuxt-link>
        <div id="burger" v-on:click="slideHeader(isOpen)"><p id="navToggle">&#9776;</p></div>

        <nav id="desktop-nav">
            <ul>
                <nuxt-link class="link" id="portfolioLink" to="/portfolio">Portfolio</nuxt-link>
                <nuxt-link class="link" id="aboutLink" to="/about">About</nuxt-link>
                <nuxt-link class="link" id="contactLink" to="/contact">Contact</nuxt-link>
            </ul>
        </nav>

        <nav id="mobile-nav" ref="mobileNav" v-on:click="slideHeader(isOpen)">
            <ul>
                <nuxt-link class="link" id="portfolioLink" to="/portfolio">Portfolio</nuxt-link>
                <nuxt-link class="link" id="aboutLink" to="/about">About</nuxt-link>
                <nuxt-link class="link" id="contactLink" to="/contact">Contact</nuxt-link>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        slideHeader: function(isOpen) {
            if(!isOpen) {
                this.$refs.mobileNav.style.right = '0';
                this.isOpen = true;
            } else {
                this.$refs.mobileNav.style.right = '-60%';
                this.isOpen = false;
            }
        }
    }
}
</script>

<style lang="sass" scoped>

@import '~/assets/sass/_variables.sass'

.header
    position: fixed
    width: 100%
    height: 75px
    background: $shadow
    display: flex
    flex-direction: row
    justify-content: space-around
    align-items: center
    flex-wrap: wrap
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .2)
    z-index: 1

    picture
        .logo
            max-height: 40px

    #mobile-nav
        display: none

    #desktop-nav
        ul
            display: inline-flex
            align-items: center
            flex-wrap: wrap
            height: auto
            padding-left: 15px

            .link
                padding: 17px 15px
                margin: 0 10px
                transition: all .3s
                text-transform: uppercase

                &:hover
                    cursor: pointer
                    color: $p-colour	

            .nuxt-link-exact-active
                color: $p-colour

    #burger 
        margin: 0 12px
        height: 50px
        text-decoration: none
        font-size: 25px
        display: none
        cursor: pointer
        
        #navToggle 
            color: $white
            line-height: 50px

@media screen and (max-width: 640px)
    .header
        width: 100%
        height: 75px

        #burger
            font-size: 2em
            display: block
            position: absolute
            right: 30px

        #desktop-nav
            display: none

        #mobile-nav 
            display: block
            height: auto
            background: $shadow
            width: 50%
            position: absolute
            top: 75px
            right: -60%
            padding: 10px 0
            transition: all .3s
            border-top: 1px solid rgba(0, 0, 0, .1)
            box-shadow: -3px 5px 5px rgba(0, 0, 0, .3)
            z-index: 1

            ul
                display: block
                text-align: center
                width: 100%
                padding: 0

                .link
                    display: block
                    margin: 0
                    padding: 10px 0
                    width: 100%
                    text-transform: uppercase

                    &:active, &:hover
                        color: $p-colour
</style>
