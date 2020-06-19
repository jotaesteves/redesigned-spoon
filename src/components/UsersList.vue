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
      :total="total"
      :current.sync="current"
      range-before="3"
      range-after="3"
      order="asc"
      :per-page="perPage"
      icon-prev='chevron-left'
      icon-next='chevron-right'
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      @change="changePage"
    >
    </b-pagination>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UsersList',
  data () {
    return {
      current: 1,
      total: 50,
      perPage: 20,
    }
  },
  mounted () {
    this.handleData()
  },
  computed: {
    ...mapGetters('user', [
      'users',
      'total_pages',
      'per_page',
      'page'
    ])
  },
  methods: {
    ...mapActions('user',['getUsers, setPage']),

    handleData () {
      this.$store.dispatch('user/getUsers')
    },

    changePage (page) {
      console.log(page)
      console.log(this.setPage)
      this.$store.dispatch('user/setPage', page)
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