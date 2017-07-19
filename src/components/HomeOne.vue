<template>
  <div class="homeOne">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'homeOne',
  data() {
    return {
      msg: ' I am HomeOne View ... ',
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
