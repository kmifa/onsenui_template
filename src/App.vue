<template>
  <v-ons-page id="app">
    <navigation></navigation>
  </v-ons-page>
</template>

<script>
import Navigation from './AppNavigator'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
/* @import 'scss/variables.scss';
@import 'scss/mixin.scss'; */
body {
  -webkit-text-size-adjust: 100%;
}

#app {
  font-family: "Helvetica Neue" , Helvetica , Arial , Verdana , Roboto , "游ゴシック" , "Yu Gothic" , "游ゴシック体" , "YuGothic" , "ヒラギノ角ゴ Pro W3" , "Hiragino Kaku Gothic Pro" , "Meiryo UI" , "メイリオ" , Meiryo , "ＭＳ Ｐゴシック" , "MS PGothic" , sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  text-decoration: none;
}

</style>
