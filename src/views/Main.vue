<template>
  <div>
    <HeaderMain />
    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidth }" class="row ps-4">
      <div class="row p-1" style="width: 100%">
        <div class="col text-left">&nbsp;</div>
      </div>
      <div class="d-flex justify-content-start">
        <h3 class="d-flex justify-content-start ps-3">ยินดีต้อนรับคุณ {{ user_name }}</h3>
      </div>
      <div class="row p-1" style="width: 100%">
        <div class="col text-center">
          <iframe title="Home" width="1200rem" height="550rem" src="https://app.powerbi.com/view?r=eyJrIjoiMGI1YTg0MjQtOTRhMy00MWM0LWJhZmEtY2ExZjUwNTM1MDE0IiwidCI6IjE5NjkwZWQwLTQzODctNDhkMi1iMmM5LWUzZGM2Y2EzOGNkZiIsImMiOjEwfQ%3D%3D&pageName=ReportSection&filter=VHome%2FCustomerID%20eq%20%27ea0087c9-4172-4c03-92c5-4cc0cd9ac62d%27" frameborder="0" allowFullScreen="true"></iframe>
        </div>
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
