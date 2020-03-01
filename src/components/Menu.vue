<template>
  <div class="menu">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand style="color:black" to="/">HOME</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/profile">Thomas Profile</b-nav-item>
          <b-nav-item to="/experience">Work Experience</b-nav-item>
          <b-nav-item to="/program">Program Ability</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style lang="scss" scope>
.menu {
  // height: 50px;
}
.navbar.navbar-dark.navbar-expand-lg {
  border-bottom: 1px solid black;
  height: 40px;
}
/*a {
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
} */
// .navbar-nav.ml-auto {
//   .nav-item {
//     color: red;
//   }
// }
//.navbar-dark .navbar-nav .nav-link (和這個一樣下列為scss寫法)
.navbar-dark {
  .navbar-nav {
    .nav-link {
      color: blue;
    }
  }
}
</style>
