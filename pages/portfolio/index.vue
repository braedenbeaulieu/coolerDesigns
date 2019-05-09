<template>
    <div class="portfolio">
        <ul @click="highlight($event)" class="search-tags">
            <li class="highlight" @click="search=''">All</li>
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
    methods: {
        highlight: function($event) {
            if($event.target.tagName === 'LI') {
                let ul = $event.target.parentElement.children;
                for (var i = 0; i < ul.length; i++) {
                    ul[i].classList.remove('highlight');
                }
                $event.target.className += 'highlight';
                console.log($event.target.tagName);
            }
        }
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
            border-bottom: 2px solid transparent
            transition: all .3s

            &:hover
                border-bottom: 2px solid $p-colour

        .highlight
            color: $p-colour


    // label
    //     display: block
    //     text-align: center
    //     width: 100%
    //     color: $p-colour
    //     font-size: 1.2em

    //     input
    //         display: block
    //         width: 200px
    //         height: 25px
    //         margin: 10px auto
    //         border-radius: 10px
    //         border: none
    //         padding: 10px
    //         font-size: 20px
    //         text-align: center

    .projects-container
        width: 100%
        display: inline-flex
        justify-content: center
        flex-wrap: wrap
    
</style>