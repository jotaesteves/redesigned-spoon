<template>
  <div class="about">
    <ul :style="gridStyle" class="card-list">
      <li v-for="(card, index) in random_list" :key="index">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by4">
              <span class="square" :style="{'background-color': card.color }"></span>
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="title is-6">{{ card.name }} - {{ card.color }} <br> Pantone {{ card.pantone_value }}</p>
              <p class="subtitle is-7">Year {{ card.year }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
  name: "RandomList",
  data() {
    return {
      numberOfColumns: 3,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right'
    };
  },
  mounted() {
    this.handleData();
  },
  computed: {
    ...mapGetters("random", [
        "random_list",
        "total_pages",
        "per_page",
        "page"
    ]),
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(${this.numberOfColumns}, minmax(100px, 1fr))`
      };
    }
  },
  methods: {
    handleData() {
      this.$store.dispatch("random/getRandomList");
    },

    changePage(page) {
      console.log(page)
      this.$store.dispatch("random/setPage", page);
    }
  }
};
</script>

<style lang="scss">
.card-list {
  display: grid;
  grid-gap: 1em;
}

.card-item {
  background-color: dodgerblue;
  padding: 2em;
}

ul {
  list-style-type: none;
}

.square {
  width: 100%;
  height: 12rem;
  display: block;
}

.title {
  text-transform: capitalize;
}

.subtitle {
  margin-top: -0.7rem!important;
}

</style>