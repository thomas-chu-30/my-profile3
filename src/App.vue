<template>
  <div>
    <Menu id="menu"></Menu>
    <router-view />
  </div>
</template>
<script>
import Menu from "@/components/Menu";
export default {
  components: { Menu }
};
</script>
<style scope>
* {
  /* border: 1px solid; */
}
html,
body {
  /* width: 100%;
  height: 100%; */
  padding: 0px;
  margin: 0px;
  background-color: #eee;
}
.menu {
  text-align: right;
  position: sticky;
  top: 0px;
  z-index: 999;
}
a {
  display: inline-block;
  font-size: 16px;
  padding: 5px;
  color: #42b983;
  text-decoration: none;
  margin: 5px;
}
a:hover {
  background-color: #42b983;
  color: white;
}
</style>
