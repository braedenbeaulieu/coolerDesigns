<template>
    <div class="portfolio">
        <ProjectPreview v-for="project in projects"
            :key="project.id"
            :id="project.id" 
            :title="project.title" 
            :thumbnail="project.thumbnail"
            :tags="(project.tags).split(',')"
        />
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
            projects: []
        }
    }
}
</script>

<style lang="sass" scoped>
.portfolio
    width: 100%
    display: inline-flex
    justify-content: center
    flex-wrap: wrap
</style>

