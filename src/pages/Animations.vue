<template>
  <v-ons-page>
    <v-ons-list>
      <v-ons-list-header>Transitions</v-ons-list-header>
      <v-ons-list-item v-for="animation in animations" :key="animation"
        modifier="chevron"
        @click="transition(animation)"
      >
        {{ animation }}
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
const transitionPage = {
  template: `
    <v-ons-page>
      <custom-toolbar backLabel="Anim">
        {{ animation }}
      </custom-toolbar>
      <p style="text-align: center">
        Use the VOnsBackButton
      </p>
    </v-ons-page>
    `
}

export default {
  data () {
    return {
      animations: ['none', 'default', 'slide-ios', 'slide-md', 'lift-ios', 'lift-md', 'fade-ios', 'fade-md']
    }
  },
  methods: {
    transition (name) {
      this.$store.commit('navigator/options', {
        // Sets animations
        animation: name,
        // Resets default options
        callback: () => this.$store.commit('navigator/options', {})
      })

      this.$store.commit('navigator/push', {
        extends: transitionPage,
        data () {
          return {
            animation: name
          }
        }
      })
    }
  }
}
</script>
