<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <div>&nbsp;</div>
    <h1>
      <span v-if="collapsed">
        <div>G</div>
        <div>F</div>
      </span>
      <span v-else>Guardforce</span>
    </h1>

    <SidebarLink to="/main" icon="fas fa-wallet" href="#submenu1" data-bs-toggle="collapse"
      class="nav-link align-middle">งานศูนย์เงินสด</SidebarLink>
     <ul class="collapse nav flex-column ms-1" id="submenu1">
      <li class="w-100">
        <SidebarLink to="/" icon="fa fa-minus" class="nav-link px-4" data-bs-parent="#submenu1">รายการคำสั่ง</SidebarLink>
        <!-- 
          <i class="fas fa-cloud-hail-mixed"></i>
          <a href="#" class="nav-link px-0">
          <span class="d-none d-sm-inline">Item</span>
          1
        </a> -->
      </li>
      <li>
        <SidebarLink to="/" icon="fa fa-minus" class="nav-link px-4" data-bs-parent="#submenu1">รายการอนุมัติ</SidebarLink>
      </li>
    </ul>
    <SidebarLink to="/dashboard" icon="fa fa-tags">ติดตามคำสั่ง</SidebarLink>
    <SidebarLink to="/#" icon="fas fa-coins" data-bs-toggle="collapse"
      class="nav-link align-middle" href="#submenu2">สถานะคงคลัง</SidebarLink>
    <ul class="collapse nav flex-column ms-1" id="submenu2">
      <li class="w-100">
        <SidebarLink to="/" icon="fa fa-minus" class="nav-link px-4" data-bs-parent="#submenu2">สถานะคลังปัจจุบัน</SidebarLink>
        <!-- 
          <i class="fas fa-cloud-hail-mixed"></i>
          <a href="#" class="nav-link px-0">
          <span class="d-none d-sm-inline">Item</span>
          1
        </a> -->
      </li>
      <li>
        <SidebarLink to="/" icon="fa fa-minus" class="nav-link px-4" data-bs-parent="#submenu2">ประวัติคงคลัง</SidebarLink>
      </li>
    </ul>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>

</template>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}



</style>
