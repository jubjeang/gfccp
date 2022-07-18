<template>
  <div>
    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidth }"></div>
  </div>
</template>
<script>
import Sidebar from './sidebar/Sidebar'
import { sidebarWidth } from './sidebar/state'
export default {
  name: 'Main',
  components: { Sidebar },
  setup() {
    return { sidebarWidth }
  }
}
</script>
