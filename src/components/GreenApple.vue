<template>
  <div class="greenApple">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'greenApple',
  data() {
    return {
      msg: ' I am GreenApple ... ',
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
