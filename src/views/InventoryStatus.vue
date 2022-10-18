<template>
    <Header />
    <Sidebar :probs_isVisible=false :probs_isVisible2=true />
    <div :style="{ 'margin-left': sidebarWidth }">

        <div class="container p-0" style="width: 100%">
            <div class="row p-1" style="width: 100%">
                <div class="col text-left">&nbsp;</div>
            </div>
            <div class="row p-1" style="width: 100%">
                <div class="col text-left">
                    <h3>สถานะคลังปัจจุบัน</h3>
                </div>
            </div>
            <div class="row p-1">
                <!-- <div class="col">
                    <div class="p-0" style="width: 100%; border-radius: 5px; border:1px solid black;">
                        <canvas id="myChart_doughnut" width="200" height="200"></canvas>
                    </div>
                </div>
                <div class="col">
                    <div class="p-0" style="width: 100%; border-radius: 5px; border:1px solid black;">
                        <canvas id="myChart_bar" width="200" height="200"></canvas>
                    </div>
                </div> -->
                <div class="col m-0 p-0">
                    <!-- <iframe class="m-0 p-0" title="กราฟ GFCCP - Inventory Overview" width="1300" height="1000"
                        src="https://app.powerbi.com/view?r=eyJrIjoiZThiYWQxNzAtMTAxMy00MTU4LWEyNDctY2E1MDMwNWZhMmYwIiwidCI6IjE5NjkwZWQwLTQzODctNDhkMi1iMmM5LWUzZGM2Y2EzOGNkZiIsImMiOjEwfQ%3D%3D"
                        frameborder="0" allowFullScreen="true"></iframe> -->
                    <iframe class="m-0 p-0" title="กราฟ GFCCP - Inventory Overview" width="1300" height="1000" 
                    :src="data.pbi_url" 
                        frameborder="0" allowFullScreen="true"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/sidebar/Sidebar'
import { sidebarWidth } from '../components/sidebar/state'
import Header from '../components/Header'
import axios from 'axios'
import { reactive, ref } from "vue"
export default {
  name: 'InventoryStatus',
  components: { Sidebar, Header },
  data() {
    return {
      user_name: localStorage.getItem('user_name'),
    }
  },
  setup() { 
    const data = reactive({
      user_name: localStorage.getItem('user_name'),
      user_id: localStorage.getItem('user_id'),
      CustomerID: localStorage.getItem('CustomerID'),
      pbi_url: '',      
    })
    const params = {
          CustomerID: data.CustomerID,
          pagname: 'inventorystatus'
        };
    axios.get('/get_pbi_url', { params })
      .then((res) => {
        data.pbi_url = JSON.parse(JSON.stringify(res.data[0].pbi_url))
        //console.log( data.pbi_url )
        // console.log("Data_: ",Data_)
        //Data_
        // console.log(fakeData)
      }, (res) => {
        // error callback
        console.log(res.data)
      })
    return { sidebarWidth,data }
  }
}
</script>

<style scoped lang="css">
@import '../assets/css/style.css';
/* #formFile::before {
  content: "Pick file";
  position: absolute;
  z-index: 2;
  display: block;
  background-color: #eee;
  width: 80px;
} */
</style>