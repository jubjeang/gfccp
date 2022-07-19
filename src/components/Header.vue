<template>
<nav class="navbar navbar-expand-sm navbar-dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="mynavbar">
      <div class="navbar-nav me-auto">
      </div>
      <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search">
        <button class="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>

</template>
<script>
import { collapsed, toggleSidebar, sidebarWidth }   from './sidebar/state'
export default {
  name: 'Header'
}
</script>
<style scoped>
nav{  background-color:darkgrey}
#nav {
  padding: 0px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: 0.5rem;
}
</style>
