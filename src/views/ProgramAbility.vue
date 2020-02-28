<template>
  <div>
    <b-row class="m-0">
      <b-col md="6" class="p-0">
        <b-card no-body class="mx-2 my-2">
          <b-card-header style="text-align:left" class="bg-info text-white cardHeader p-1">Program Ability</b-card-header>
          <b-card-text class="p-2">
            <h3>HTML</h3>
            <li>Use pug to write programs</li>
            <li>Develop RWD using bootstrap</li>
            <h3>CSS</h3>
            <li>Develop with SASS</li>
            <li>Will use grid & flex cut version</li>
            <li>@media screen Develop RWD</li>
            <h3>Javascript</h3>
            <li>Jquery controls DOM elements (reference ajax catch api)</li>
            <li>Native JS program (reference axios catch api)</li>
            <h3>Vue</h3>
            <li>Data rendering</li>
            <li>V-on v-bind data listening and binding</li>
            <li>vue cli & vue router</li>
            <h3>git</h3>
            <li>Version management</li>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
// import courses from "./experience.js";
export default {
  data() {
    return {
      // courses
    };
  }
};
</script>
<style>
.group {
  display: flex;
  flex-flow: row nowrap;
  font-size: 12px;
  margin: 1em 0;
  align-items: center;
  justify-content: center;
}
label {
  flex: 0 0 40px;
  text-align: right;
  padding-right: 10px;
}
</style>
