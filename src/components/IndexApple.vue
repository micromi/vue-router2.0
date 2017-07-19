<template>
  <div class="HomeApple">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeApple',
  data() {
    return {
      msg: ' I am IndexApple ... ',
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
