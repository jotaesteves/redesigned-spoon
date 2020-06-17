<template>
<!-- USER VIEW -->
  <div class="user">
    <div
      class="user__item"
    >
        <img :src="user.avatar">
        <h1>{{ user.first_name }}</h1>
        <h1>{{ user.last_name }}</h1>
        <p>{{ user.email }}</p>
        <p> {{ user }} </p>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/userService';
import HttpService from '@/services/httpService';

export default {
    data() {
        return {
            routeParam: this.$route.params.id
        };
    },
    methods: {
        getUsers () {
            UserService.getUser({ page: this.page })
                .then(({
                    data: {
                        data,
                        page,
                        per_page,
                        total_pages
                } }) => {
          this.users = data

          this.page = page
          this.per_page = per_page
          this.total_pages = total_pages
        })
        .catch((err) => {
          HttpService.handleHttpError(this, err)
        })
    },
    },
};
</script>

<style>

</style>