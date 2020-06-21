<template>
  <!-- RANDOM VIEW -->
  <div class="user">
    <div class="user__item">
      <h1>Color</h1>
      <div v-if="randomResource.color">
        <figure class="image is-4by4">
            <span class="square" :style="{'background-color': randomResource.color }"></span>
        </figure>
        <h1>{{ `${randomResource.name} ${randomResource.color}` }}</h1>
        <h1>{{ `Pantone ${randomResource.pantone_value}` }}</h1>
        <p>{{ `Year ${randomResource.year}` }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import unknownService from "@/services/unknownService";
import HttpService from "@/services/httpService";

export default {
  name: "RandomPage",
  mounted() {
    this.getRandomResource();
  },
  data() {
    return {
      routeParam: this.$route.params.id,
      randomResource: {}
    };
  },
  methods: {
    getRandomResource() {
      unknownService.getRandomResource(this.routeParam)
        .then(({ data: { data } }) => {
          this.randomResource = data;
        })
        .catch(err => {
          HttpService.handleHttpError(this, err);
        });
    }
  }
};
</script>

<style lang="scss">
.square {
    width: 12rem;
    height: 12rem;
    display: block;
    margin: 0 auto;
}

h1{
    text-transform: capitalize;
}


</style>