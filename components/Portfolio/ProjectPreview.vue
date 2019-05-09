<template>
    <nuxt-link :to="id">
        <div class="project-preview">
            <div :style="{backgroundImage: 'url(' + thumbnail + ')'}" class="thumbnail"></div>
            <div class="card-container">
                <p>{{title}}</p>
                <ul>
                    <li v-for="tag in tags" :key="tag">{{ tag }}</li>
                </ul>
            </div>
        </div>
        
    </nuxt-link>
</template>

<script>
export default {
    name: 'PostPreview',
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="sass" scoped>

.project-preview
    width: 320px
    height: 200px
    display: inline-flex
    justify-content: center
    align-items: center
    border-radius: 4px
    margin: 20px
    cursor: pointer
    background: white
    position: relative
    box-shadow: 5px 5px 20px $shadow
    transition: all .3s

    &:hover
        box-shadow: 2px 2px 10px $shadow

    .thumbnail
        width: 100%
        height: 100%
        display: inline-flex
        justify-content: center
        align-items: center
        border-radius: 3px
        cursor: pointer
        background: white
        position: relative
        background-position: center
        background-size: cover
        background-repeat: no-repeat

    .card-container
        position: absolute
        background: transparent
        width: 100%
        height: 100%
        transition: all .4s

        &:hover
            opacity: 0

        p
            position: absolute
            bottom: 30px
            width: 100%
            margin: 0 auto
            text-align: center
            z-index: 1
            font-size: 1.7em
            color: black
            margin-bottom: 7px

        ul
            position: absolute
            bottom: 10px
            width: 100%
            display: flex
            flex-direction: row
            justify-content: center

            li
                z-index: 1
                color: $shadow
                margin: 0 5px 7px

    .card-container::before
        content: ''
        display: block
        text-align: center
        background: rgba(255, 255, 255, .7)
        border-radius: 4px 4px 0 0
        box-shadow: 0 -2px 5px rgba(0, 0, 0, .2)
        positon: absolute
        left: 20px
        height: 80px
        width: 85%
        margin: 120px auto 0

@media screen and (max-width: 350px)
    .project-preview
        width: 290px
</style>
