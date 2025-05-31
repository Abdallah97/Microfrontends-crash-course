<template>
  <button @click="handleClick" class="new-vue-button">
    {{ message }}
  </button>
</template>

<script>
export default {
  name: 'NewVueButton',
  data() {
    return {
      message: 'Click me (from Vue!)'
    };
  },
  methods: {
    handleClick() {
      this.message = 'Clicked! (Vue says hi)';
      console.log('NewVueButton clicked');
    }
  }
};
</script>

<style scoped>
.new-vue-button {
  background-color: #42b983;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;
}
.new-vue-button:hover {
  background-color: #3aa873;
}
</style>
