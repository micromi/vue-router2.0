<template>
  <div class="notfound">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'notfound',
  data() {
    return {
      msg: ' 404 NotFound!',
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
