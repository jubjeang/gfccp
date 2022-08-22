<template>
  <div>
    <HeaderMain />
    <Sidebar />
   
    <div :style="{ 'margin-left': sidebarWidth }">
     <div>&nbsp;</div>
      <div class="d-flex justify-content-start">
        <h3 class="d-flex justify-content-start ps-3">ยินดีต้อนรับคุณ {{ user_name }}</h3>
      </div>

    </div>
  </div>
</template>
<script>
import Sidebar from '../components/sidebar/Sidebar'
import { sidebarWidth } from '../components/sidebar/state'
import HeaderMain from '../components/HeaderMain'
export default {
  name: 'Main',
  components: { Sidebar, HeaderMain },
  data() {
    return {
      user_name: localStorage.getItem('user_name'),
    }
  },
  setup() {
    let var_ = localStorage.getItem('user_id')
    console.log(var_)
    return { sidebarWidth }
  }
}
</script>
