<template>
    <section class="about">
        <h2>{{ title }}</h2>
        <p>{{ body }}</p>
        <h2>Recent Clients</h2>
        <div class="recent">
            <nuxt-link 
                v-for="client in recent" 
                :key="client.name"
                :to="'/' + client.name">

                <img :src="client.filename" />

            </nuxt-link>
        </div>
    </section>
</template>

<script>
export default {
    layout: 'default',
    asyncData(context) {
        return context.app.$storyapi.get('cdn/stories/about', {
            version: 'draft'
        })
        .then(res => {
            return {
                title: res.data.story.content.title,
                avatar: res.data.story.content.avatar,
                body: res.data.story.content.body,
                recent: res.data.story.content.recent
            }
        })
    }
}
</script>


<style lang="sass" scoped>
    .about
        background: white

        h2
            font-size: 1.6em
            color: $p-colour
            border-bottom: 1px solid $p-colour
            margin-bottom: 30px
            padding-bottom: 8px
            text-transform: uppercase

        .avatar
            width: 100px
            height: 100px
            background-size: cover
            border-radius: 50%

        p
            text-align: center
            margin-bottom: 30px

        .recent
            display: flex
            flex-direction: row
            justify-content: center

            img
                height: 100px

    @media screen and (max-width: 1024px)
        .about
            width: 75%
            p
                width: 100%
                text-align: left
                text-indent: 25px

</style>

