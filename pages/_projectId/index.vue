<template>
    <section class="project">
        <nuxt-link to="/portfolio" class="back"><p>Back to portfolio</p></nuxt-link>
        <h2 v-html="title" class="title"></h2>
        <div class="tags">
            <p v-for="tag in tags" :key="tag">{{ tag }}</p>
        </div>
        <p v-html="description" class="description"></p>
        <div class="images" v-for="image in images" :key="image.filename">
            <img :src="image.filename" :alt="image.name">
        </div>
    </section>
</template>

<script>
export default {
    asyncData(context) {
        return context.app.$storyapi.get('cdn/stories/portfolio/' + context.params.projectId, {
            version: 'draft'
        })
        .then(res => {
            return {
                thumbnail: res.data.story.content.thumbnail,
                title: res.data.story.content.title,
                tags: (res.data.story.content.tags).split(','),
                description: res.data.story.content.description,
                images: res.data.story.content.images,
            }
        })
    }
}
</script>

<style lang="sass" scoped>
.project

    .back
        position: absolute
        top: 100px
        left: 30px
        font-size: 1.1em
        color: $p-colour

    .title
        font-weight: bolder

    .tags
        margin-top: 20px
        width: 100%
        display: flex
        flex-direction: row
        justify-content: center

        p
            display: block
            margin: 0 5px

    .description
        padding: 20px 0

    .images
        display: flex
        justify-content: center

        img
            max-width: 640px
            max-height: 400px
            padding: 30px 0

</style>
