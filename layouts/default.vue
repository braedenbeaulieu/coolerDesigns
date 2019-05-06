<template>
  <div>
    <TheHeader />
    <div class="content">
      <nuxt />
    </div>
    
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>


<style lang="sass">
div
  .content
    padding-top: 80px
</style>
