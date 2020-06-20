<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1> Redesigned-spoon </h1>
    <div class="container">
      <UsersList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UsersList from '@/components/UsersList.vue'

export default {
  name: 'Users',
  components: {
    UsersList
  },
}
</script>

<style lang="scss">
  h1 {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
</style>