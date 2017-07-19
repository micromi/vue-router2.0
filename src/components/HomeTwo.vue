<template>
  <div class="homeTwo">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'homeTwo',
  data() {
    return {
      msg: ' I am homeTwo View ... ',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

</style>
