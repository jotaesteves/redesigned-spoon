<template>
  <!-- USER VIEW -->
  <div class="user">
    <div class="user__item">
      <h1>User</h1>
      <div v-if="user.avatar">
        <img :src="user.avatar" />
        <h1>{{ `${user.first_name} ${user.last_name}` }}</h1>
        <p>{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/userService";
import HttpService from "@/services/httpService";

export default {
  name: "User",
  mounted() {
    this.getUser();
  },
  data() {
    return {
      routeParam: this.$route.params.id,
      user: {}
    };
  },
  methods: {
    getUser() {
      UserService.getUser(this.routeParam)
        .then(({ data: { data } }) => {
          this.user = data;
        })
        .catch(err => {
          HttpService.handleHttpError(this, err);
        });
    }
  }
};
</script>

<style>
</style>