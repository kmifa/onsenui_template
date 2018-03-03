<template>
  <v-ons-navigator swipeable swipe-target-width="50px"
    :page-stack="pageStack"
    :pop-page="storePop"
    :options="options"
  ></v-ons-navigator>
</template>

<script>
import SignUp from './pages/SignUp.vue'

export default {
  beforeCreate () {
    this.$store.commit('navigator/push', SignUp)
  },
  data () {
    return {
      shutUp: this.md,
      navi_state: this.$store.state.navigator.navi_swaip
    }
  },
  computed: {
    pageStack () {
      return this.$store.state.navigator.stack
    },
    options () {
      return this.$store.state.navigator.options
    }
  },
  methods: {
    storePop () {
      this.$store.commit('navigator/pop')
    }
  }
}
</script>
