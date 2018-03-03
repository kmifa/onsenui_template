<template>
  <v-ons-page>
    <p class="test">
      This is a kitchen sink example <span>that</span> shows off the Vue bindings for Onsen UI.<br><br>
    </p>
  </v-ons-page>
</template>

<script>

</script>

<style lang="scss" sco>
.intro {
  text-align: left;
  padding: 0 22px;
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.4;
  color: rgba(0, 0, 0, .54);
}

ons-card {
  cursor: pointer;
  color: #333;
}

.test {
  color: blue;
  
  span {
    color: $test;
  }
}

.card__title, .card--material__title {
  font-size: 20px;
}
</style>
