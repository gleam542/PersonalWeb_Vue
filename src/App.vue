<template>
  <h2 class="mb-5">contacts me</h2>
  <form @submit.prevent="submitForm">
    <label for="name">Name:</label>
    <input v-model="name" type="text" name="name" required><br><br>
    <label for="email">Email:</label>
    <input v-model="email" type="email" name="email" required><br><br>
    <label for="message">Message:</label><br>
    <textarea v-model="message" name="message" rows="5" cols="30" required></textarea><br><br>
    <input type="submit" name="submit" value="Submit">
  </form>
</template>

<script>
import ContactService from './services/ContactService';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      ContactService.submitForm(this.name, this.email, this.message)
        .then(data => {
          console.log(data);
          // 清空表单数据
          this.name = '';
          this.email = '';
          this.message = '';
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style>
</style>