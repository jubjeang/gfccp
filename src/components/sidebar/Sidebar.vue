<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
import { ref, computed } from "vue";
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  props: {
    probs_isVisible: { type: Boolean, required: true, default: false },
    probs_isVisible2: { type: Boolean, required: true, default: false },
    probs_isVisible3: { type: Boolean, required: true, default: false }
  },
  components: { SidebarLink },
  setup(props) {
    const isVisible = ref(props.probs_isVisible)
    const isVisible2 = ref(props.probs_isVisible2)
    const isVisible3 = ref(props.probs_isVisible3)
    const approve_level = ref(localStorage.getItem('approve_level'))
    const RoleId = ref(localStorage.getItem('RoleId'))
    const pagename = ref('')
    const output = ref([])
    const out_put = ref([])
    const output__ = ref([])
    // const department_id = ref(localStorage.getItem('department_id'))
    // const position_id = ref(localStorage.getItem('position_id'))
    // const CustomerID = ref(localStorage.getItem('CustomerID'))
    // const gfc_cct = ref(localStorage.getItem('gfc_cct'))
    // const gfc_cct_code = ref(localStorage.getItem('gfc_cct_code'))    
    const get_permission_access = async (value) => {
      // try {
      const params = {
        RoleId: localStorage.getItem('RoleId'),
        user_id: localStorage.getItem('user_id')
      }
      out_put.value = await axios.get(process.env.VUE_APP_API_URL+'/get_permission_access', { params })
        .then((res) => {
          // success callback
          let a_ = res.data          
          return (JSON.parse(JSON.stringify(a_[0].page_name))).split('|') 
        }, (res) => {
          // error callback
          console.log(res.data)
        }).finally(() => {
          //
        });
      console.log('out_put: ', out_put.value)
        // output__.value = computed(() => { 
      output__.value =  Object.values(out_put.value) 
      let output_final = output__.value.length > 0 ? true : false
      console.log('555 output__: ', output__.value)
    } 
    
    console.log('out_put.value: ',out_put.value)

    const router = useRouter()
    const toggleVisible = () => {
      setTimeout(() => isVisible.value = !isVisible.value, 200);
    }
    const toggleVisible2 = () => {
      setTimeout(() => isVisible2.value = !isVisible2.value, 200);
    }
    const toggleVisible3 = () => {
      setTimeout(() => isVisible3.value = !isVisible3.value, 200);
    }
    const gotoMainPage = () => {
      router.push('/main')
    }
    // onMounted(() => {
    //   get_permission_access
    // })
    return { get_permission_access, collapsed, toggleSidebar, sidebarWidth, isVisible, isVisible2, isVisible3, router, toggleVisible, toggleVisible2, toggleVisible3, gotoMainPage, approve_level, RoleId }
  },
  //  onMounted(() => {
  //     get_permission_access
  //   })
  // onMounted() { 
  //   get_permission_access
  // },
  // created() {

  //   get_permission_access
  // },
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
      <h1 @click="gotoMainPage" style="cursor: pointer;"><img src="@/assets/images/sl_logo.png"
          style="display: block; max-width: auto height: auto;" /></h1>
    </span>
    <SidebarLink to="" icon="fas fa-wallet" @click="toggleVisible" class="nav-link align-middle">งานศูนย์เงินสด
    </SidebarLink>
    <transition name="fade">
      <ul class="nav flex-column ms-1" id="submenu1" v-show="isVisible">
        <li class="w-100">
          <SidebarLink to="/listorder" icon="fas fa-genderless" class="nav-link px-4" data-bs-parent="#submenu1"
              v-show="approve_level === '1'">
              รายการสร้างคำสั่ง</SidebarLink>
          <!-- <SidebarLink to="/listorder" icon="fas fa-genderless" class="nav-link px-4" data-bs-parent="#submenu1"
            v-show="get_permission_access('listorder')">
            รายการสร้างคำสั่ง</SidebarLink> -->
        </li>
        <li>
          <SidebarLink to="/approvelist" icon="fas fa-genderless" class="nav-link px-4" data-bs-parent="#submenu1"
              v-show="approve_level !== '1'">รายการอนุมัติ
            </SidebarLink>
          <!-- <SidebarLink to="/approvelist" icon="fas fa-genderless" class="nav-link px-4" data-bs-parent="#submenu1"
            v-show="get_permission_access('approvelist')">รายการอนุมัติ
          </SidebarLink> -->
        </li>
        <li>
          <SidebarLink to="/approvenlist" icon="fas fa-genderless" class="nav-link px-4" data-bs-parent="#submenu1">
                รายการคำสั่ง
              </SidebarLink>
        </li>
      </ul>
    </transition>
    <SidebarLink to="/ordertracking" icon="fa fa-tags">ติดตามคำสั่ง</SidebarLink>
    <SidebarLink to="" icon="fas fa-coins" class="nav-link align-middle" @click="toggleVisible2" v-show="RoleId === '11'">
      สถานะคงคลัง</SidebarLink>
    <transition name="fade">
      <ul class=" nav flex-column ms-1" id="submenu2" v-show="isVisible2">
        <li class="w-100">
          <SidebarLink to="/inventorystatus" icon="fas fa-genderless" class="nav-link px-4" data-bs-parent="#submenu2">
            สถานะคลังปัจจุบัน
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/invhistorical" icon="fas fa-genderless" class="nav-link px-4" data-bs-parent="#submenu2">
            ประวัติคงคลัง
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/dayliactivity" icon="fas fa-genderless" class="nav-link px-4" data-bs-parent="#submenu2">
            กิจกรรมรายวัน
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/reportinv" icon="fas fa-genderless" class="nav-link px-4" data-bs-parent="#submenu2">
            รายงานคงคลัง
          </SidebarLink>
        </li>
      </ul>
    </transition>
    <SidebarLink to="" icon="fa fa-check-square" class="nav-link align-middle" @click="toggleVisible3"
      v-show="RoleId === '7'">
      กระบวนการอนุมัติ</SidebarLink>
    <transition name="fade">
      <ul class=" nav flex-column ms-1" id="submenu3" v-show="isVisible3">
        <li class="w-100">
          <SidebarLink to="/approveprocess" icon="fas fa-genderless" class="nav-link px-4" data-bs-parent="#submenu3"
            v-show="RoleId === '7'">
            ตั้งค่ารายการอนุมัติ
          </SidebarLink>
        </li>
      </ul>
    </transition>
    <!-- <SidebarLink to="/ordertracking" icon="fa fa-user-circle">บัญชีผู้ใช้</SidebarLink> -->
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
