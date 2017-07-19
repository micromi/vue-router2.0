<template>
  <div class="apple">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'apple',
  data() {
    return {
      msg: ' I am RedApple ... ',
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
