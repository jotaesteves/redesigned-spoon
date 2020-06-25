<template>
  <div>
    <!-- USERS -->
    <div class="users">
      <router-link
        v-for="user in users"
        :to="{ path: '/user/' + user.id }"
        class="users__link"
        :key="user.id"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by4">
              <img :src="user.avatar" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="title is-6">{{ user.first_name }} {{ user.last_name }}</p>
              <p class="subtitle is-7">{{ user.email }}</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <b-pagination
      class="pagination"
      :total="per_page*total_pages"
      :current.sync="page"
      range-before="3"
      range-after="3"
      order="asc"
      :per-page="per_page"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      @change="changePage"
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UsersList",
  data() {
    return {
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right'
    };
  },
  mounted() {
    this.handleData();
  },
  computed: {
    ...mapGetters("user", [
        "users",
        "total_pages",
        "per_page",
        "page"
      ])
  },
  methods: {
    handleData() {
      this.$store.dispatch("user/getUsers");
    },

    changePage(page) {
      this.$store.dispatch("user/setPage", page);
    }
  }
};
</script>

<style lang="scss">
  .card {
    width: 14rem;
    margin: 2rem auto;
    &:hover{
      background-color: #42b983;
      color: white;
    }
  }

  .pagination {
    margin-bottom: 20px;
  }
</style>