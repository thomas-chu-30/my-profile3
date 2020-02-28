<template>
  <div class="experience">
    <div class="content" v-for="(item, idx) in experience" :key="idx">
      <b-row class="m-0">
        <b-col class="p-2" md="5" lg="4">
          <div class="img" :style="imgStyle(item.img)" />
        </b-col>
        <b-col class="p-2" md="5" lg="8">
          <div class="text">
            <router-link :to="`/Experience/${item.id}`">{{ item.name }}</router-link>
            <p>{{ item.content }}</p>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import experience from "@/assets/DataSource/Experience.js";
export default {
  data() {
    return {
      experience
    };
  },
  methods: {
    imgStyle(img) {
      return {
        backgroundImage: `url('${img}')`
      };
    }
  }
};
</script>
<style lang="scss" scope>
.experience {
  padding-bottom: 5%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.img {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  height: 150px;
  max-width: 320px;
  background: center center;
  background-size: cover;
}
</style>