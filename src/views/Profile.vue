<template>
  <div class="profile">
    <div class="top">
      <div class="myimg"></div>
      <div class="info">
        <p>English name: thomas</p>
        <p>birthdaty: 1989 / 05 /16</p>
        <p>relationship: couple</p>
        <p>github: thomas-chu-30</p>
        <p>moble: 0982-457-XXX</p>
      </div>
    </div>
    <div class="content">
      Although there was a desire to write a web page during the inter-university period, there was only a simple reading of the book, and there was not a lot of time to
      write the code, but the interest in the writing test began. During the past four years of work, I helped the factory solve a lot of problems, learned how to work
      with the team, and also trained me to find resources to solve problems. Later, I started to analysis a lot of data, using vba, python as data, I feel the joy of
      writing code and started to transfer to the IT industry. Because his wife was in the field of graphic design, he often received the need for web page modification,
      and he decided to become the front-end engineers. Although I started late in the programming language, I feel excited when I start writing code every time. Even if
      I encounter a bug, I don’t feel hard. Instead, I will try my best to solve it. I can also feel the sense of accomplishment that the web page is gradually forming.
      This year, I also decided to let go of my past efforts in the factory. I hope to re-learn in the field of webpages. I have been learning web-related languages since
      last year, and I have completed some small works. The following are works written using codepen web, HTML uses pug, CSS uses SASS, which reduces a lot of
      development time, and can also clearly grasp the code content.
      <li>Jquery - Mybuy list</li>
      <li>AJAX - Todo List</li>
      <li>Vue - hahow</li>
    </div>

    <div class="content">I hope that the supervisor can give me an opportunity to continue learning in the field of front-end web pages.</div>
  </div>
</template>

<style lang="scss" scope>
* {
  /* display: relative;
  vertical-align: top; */
}
.profile {
  margin: 10px;
  .top {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .info {
      margin: 3% 0px;
      display: grid;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    }
    p {
      margin: 5px;
    }
  }
  .content {
    padding: 20px;
  }
}
router-link {
  color: black;
}
.myimg {
  border-radius: 5px;
  height: 200px;
  width: 200px;
  background: url("../assets/images/myphoto.jpg");
  background-size: cover;
  margin: 20px;
}
.info {
}
</style>
