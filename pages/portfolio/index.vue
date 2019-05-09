<template>
    <div class="portfolio">
        <!-- <label>Search by tag
            <input type="text" v-model="search" placeholder="">
        </label> -->
        <ul class="search-tags">
            <li @click="search=''">All</li>
            <li @click="search='branding'">Branding</li>
            <li @click="search='personal'">Personal</li>
            <li @click="search='layout'">Layout</li>
            <li @click="search='illustration'">Illustration</li>
            <li @click="search='motion graphics'">Motion Graphics</li>
        </ul>
        
        <div class="projects-container">
            <ProjectPreview v-for="project in filteredProjects"
                :key="project.id"
                :id="project.id" 
                :title="project.title" 
                :thumbnail="project.thumbnail"
                :tags="(project.tags).split(',')"
            />
        </div>
        
    </div>
</template>

<script>
import ProjectPreview from '@/components/Portfolio/ProjectPreview'

export default {
    
    components: {
        ProjectPreview
    },
    layout: 'default',
    asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/', {
        version: 'draft',
        token: 'OOJdwwtg8Qk5aNmUcWnt4gtt',
        starts_with: 'portfolio/'
    })
    .then(res => {
        return { 
            projects: res.data.stories.map(project => {
                return {
                    id: project.slug,
                    title: project.content.title,
                    thumbnail: project.content.thumbnail,
                    tags: project.content.tags
                }
            })
        };
    });
    },
    data() {
        return {
            projects: [],
            search: ''
        }
    },
    computed: {
        filteredProjects: function() {
            return this.projects.filter((project) => {
                let lowercaseTags = project.tags.toLowerCase();
                let lowercaseSearch = this.search.toLowerCase();
                return lowercaseTags.match(lowercaseSearch);
            })
        },
        filterByTag: function() {
            return this.projects.filter((project) => {
                let lowercaseTags = project.tags.toLowerCase();
                let lowercaseSearch = this.search.toLowerCase();
                return lowercaseTags.match(lowercaseSearch);
            })
        }
    }
}
</script>

<style lang="sass" scoped>
.portfolio
    width: 100%

    .search-tags
        display: flex
        justify-content: center
        flex-wrap: wrap
        flex-direction: row

        li
            padding: 10px
            margin: 10px 0
            color: $white
            cursor: pointer

    label
        display: block
        text-align: center
        width: 100%
        color: $p-colour
        font-size: 1.2em

        input
            display: block
            width: 200px
            height: 25px
            margin: 10px auto
            border-radius: 10px
            border: none
            padding: 10px
            font-size: 20px
            text-align: center

    .projects-container
        width: 100%
        display: inline-flex
        justify-content: center
        flex-wrap: wrap
    
</style>

