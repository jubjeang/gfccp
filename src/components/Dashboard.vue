<template>
  <Header />
 <Sidebar />




</template>

<script>

import Sidebar from './sidebar/Sidebar'
import { collapsed, toggleSidebar } from './sidebar/state'
import Header from './Header'

export default {
  name: 'Dashboard',
  components: { Sidebar,Header },
  setup() {
    return { collapsed, toggleSidebar }
  },
}
</script>
<style scoped>
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: .5rem;
}
</style>
