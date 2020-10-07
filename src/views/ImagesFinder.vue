<template>
  <div class="image">
    <h1>IMAGES</h1>

    <form @keyup="searchImage()">
      <input id="input" v-model="query" type="text" placeholder="Find.." />
    </form>

    <ul class="container">
      <li v-for="img in images" :key="img" class="images">
        <img :src="img" alt="obr" class="obrazek" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { debounce } from "lodash-es";

export default {
  data() {
    return {
      query: "",
      maxlimit: 15,
      images: []
    };
  },

  methods: {
    getImage() {
      axios
        .get(
          `https://pixabay.com/api/?key=18387541-e7a144354f002cf0653cc186d&q=${this.query}&image_type=photo&per_page=${this.maxlimit}`
        )
        .then(response => {
          this.images = [];

          let finded = response.data.hits;
          finded.map(img => this.images.push(img.webformatURL));
          console.log(response);
        });
    },
    searchImage: debounce(function() {
      this.getImage();
    }, 700)
  }
};
</script>

<style lang="scss" scoped></style>
