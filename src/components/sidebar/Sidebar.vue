<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }, data() {
    return {
      isVisible: false,
      isVisible2: false,
    }
  },
  methods: {
    toggleVisible() {
      setTimeout(() => this.isVisible = !this.isVisible, 200);
    },
    toggleVisible2() {
      setTimeout(() => this.isVisible2 = !this.isVisible2, 200);
    },
    gotoMainPage() {
      this.$router.push('/main')
    },
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <div>&nbsp;</div>

    <span v-if="collapsed">
      <h3>
        <div @click="gotoMainPage" style="cursor: pointer;">G</div>
        <div @click="gotoMainPage" style="cursor: pointer;">F</div>
      </h3>
    </span>
    <span v-else>
      <h1 @click="gotoMainPage" style="cursor: pointer;">Guardforce</h1>
    </span>
    <SidebarLink to="" icon="fas fa-wallet" @click="toggleVisible" class="nav-link align-middle">งานศูนย์เงินสด
    </SidebarLink>
    <transition name="fade">
      <ul class="nav flex-column ms-1" id="submenu1" v-show="isVisible">
        <li class="w-100">
          <SidebarLink to="/listorder" icon="fas fa-genderless" class="nav-link px-4" data-bs-parent="#submenu1">
            รายการคำสั่ง</SidebarLink>
          <!-- 
          <i class="fas fa-cloud-hail-mixed"></i>
          <a href="#" class="nav-link px-0">
          <span class="d-none d-sm-inline">Item</span>
          1
        </a> -->
        </li>
        <li>
          <SidebarLink to="/approvelist" icon="fas fa-genderless" class="nav-link px-4" data-bs-parent="#submenu1">รายการอนุมัติ
          </SidebarLink>
        </li>
      </ul>
    </transition>

    <SidebarLink to="/ordertracking" icon="fa fa-tags">ติดตามคำสั่ง</SidebarLink>
    <SidebarLink to="" icon="fas fa-coins" class="nav-link align-middle" @click="toggleVisible2">
      สถานะคงคลัง</SidebarLink>
    <transition name="fade">
      <ul class=" nav flex-column ms-1" id="submenu2" v-show="isVisible2">
        <li class="w-100">
          <SidebarLink to="/inventorystatus" icon="fas fa-genderless" class="nav-link px-4" data-bs-parent="#submenu2">
            สถานะคลังปัจจุบัน
          </SidebarLink>
          <!-- 
          <i class="fas fa-cloud-hail-mixed"></i>
          <a href="#" class="nav-link px-0">
          <span class="d-none d-sm-inline">Item</span>
          1
        </a> -->
        </li>
        <li>
          <SidebarLink to="/invhistorical" icon="fas fa-genderless" class="nav-link px-4" data-bs-parent="#submenu2">
            ประวัติคงคลัง
          </SidebarLink>
        </li>
      </ul>
    </transition>
    <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
      <i class="fas fa-angle-double-left" style="cursor: pointer;" />
    </span>
  </div>

</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 1s ease;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 0.4s ease;
}

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
