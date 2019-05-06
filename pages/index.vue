<template>
  <div class="landing">
    <img src="/images/CoolerDesignV2.png" alt="">
    <ul>
      <li><nuxt-link to="/portfolio">portfolio</nuxt-link></li>
      <li><nuxt-link to="/about">about</nuxt-link></li>
      <li><nuxt-link to="/contact">contact</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'landing',
  components: {
  }
}
</script>

<style lang="sass">
.landing
  width: 100%
  height: 100vh
  margin: -80px auto 0
  display: flex
  flex-direction: column
  align-items: center
  background: url('/images/EnviromentComposition.jpg')
  background-size: cover
  background-position: center

  img
    display: block
    width: auto
    margin: 0 auto
    padding: 120px 0 50px

  ul
    width: 100%
    text-align: center
    margin: 80px 0

    li
      font-size: 1.6em
      color: $white
      font-weight: 200
      text-transform: uppercase
      margin: 10px 0
      transition: color .3s

      a

        &:hover
          color: $p-colour

@media screen and (max-width: 800px)
  .landing
    background: 

    img
      width: 300px
      padding-top: 80px

    ul
      margin: 10px

</style>