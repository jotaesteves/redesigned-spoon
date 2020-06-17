<template>
  <!-- USERS -->
  <div class="users">
    <router-link
      v-for="user in users"
      :to="{ path: '/user/' + user.id }"
      class="users__link"
      :key="user.id"
    >
      <div class="users__item">
        <div class="users__item--image">
          <img
            :src="user.avatar"
            alt
            height="100"
          />
        </div>
        <div class="users__item__body">
          <p class="users__item--title">{{ user.first_name }} {{ user.last_name }}</p>
          <p class="users__item--title">{{ user.email }} </p>
        </div>
      </div>
    </router-link>

    <b-pagination
      :total="total_pages"
      :current.sync="page"
      :range-before="1"
      :range-after="1"
      order="asc"
      :per-page="per_page"
      icon-prev='chevron-left'
      icon-next='chevron-right'
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      @change="handleData"
    >
    </b-pagination>
  </div>
</template>

<script>
import UserService from '@/services/userService'
import HttpService from '@/services/httpService'

export default {
  name: 'UsersList',
  data () {
    return {
      users: '',
      page: 1,
      per_page: 0,
      per_page_options: [5, 10, 15],
      total_pages: 0,
    }
  },
  mounted () {
    this.handleData()
  },
  methods: {

    handleData () {
      this.getUsers();
    },

    getUsers () {
      UserService.getUsers({ page: this.page })
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

    formatDate (date) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let _date = new Date(date);
      return `${months[_date.getMonth()]} ${_date.getFullYear()}`
    }
  },
};
</script>

<style lang="scss">
.client {
  &__item {
    &--image {
      max-width: 50px;
    }
  }
}
</style>