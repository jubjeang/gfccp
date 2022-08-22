<template>
  <Header />
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <div class="container p-0" style="width: 100%">
      <div class="row p-1" style="width: 100%">
        <div class="col text-left">&nbsp;</div>
      </div>
      <div class="row p-1" style="width: 100%">
        <div class="col text-left">
          <h3>รายการคำสั่ง</h3>
        </div>
      </div>

      <div class="row p-1" style="width: 100%">
        <div class="col d-flex justify-content-end">          
            <i class="fas fa-file-upload" data-bs-toggle="modal" style="cursor: pointer; width: 1.5rem; height: 1.5rem;" ></i>
            &nbsp;<h4 data-bs-target="#myModal" data-bs-toggle="modal" style="cursor: pointer">อัพโหลด</h4>
          
        </div>
      </div>
      <div class="row p-1">
        <div class="col">
          <div class="card  p-0" style="width: 100%">
            <div class="card-header text-right">
              <!-- <label>SearchBy:</label><input v-model="searchTerm" /> -->
            </div>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">เลขที่คำสั่ง</th>
                  <th scope="col">ต้นทาง</th>
                  <th scope="col">ปลายทาง</th>
                  <th scope="col">ยอดเงิน</th>
                  <th scope="col">วันปฎิบัติงาน</th>
                  <th scope="col">อนุมัติโดย</th>
                  <th scope="col">สถานะคำสั่ง</th>
                  <th scope="col">หมายเหตุ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="data in Data_" :key="data.AutoID">
                  <td scope="col">{{ data.AutoID }}</td>
                  <td scope="col" v-if="data.servicetype === 'Deposit'" >{{data.branch_name}}</td>
                  <td scope="col" v-else><span>{{data.cash_center}}</span></td>
                  <td scope="col" v-if="data.servicetype === 'Deposit'" ><span>{{data.cash_center}}</span></td>
                  <td scope="col" v-else>{{data.branch_name}}</td>
                  <td scope="col">{{ formatPrice(data.total_by_branch) }}</td>
                  <td scope="col" >{{ dateTime(data.order_date) }}</td>
                  <td scope="col">-</td>
                  <td scope="col">-</td>
                  <td scope="col">-</td>
                </tr>
              </tbody>
            </table>
            <div style="text-align: left">

            </div>
            <div>
              <!-- <table-lite class="table table-striped table-hover" :is-static-mode="true" :columns="table.columns" :rows="table.rows"
                :total="table.totalRecordCount" :sortable="table.sortable"></table-lite> -->
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
  <div class="container py-2">
    <div class="py-2">
      <form @submit.prevent="sendFile" enctype="multipart/form-data" id="form0">
        <div class="modal" id="myModal">
          <div class="modal-dialog  modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Import</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container">
                  <div class="row p-2" v-if="message">
                    <div class="col">
                      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                          <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </symbol>
                        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                          <path
                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                        </symbol>
                        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                          <path
                            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </symbol>
                      </svg>
                      <div :class="`alert ${error ? 'alert-danger' : 'alert-success'}`">{{ message }}</div>
                    </div>
                  </div>
                  <div class="row p-2">
                    <div class="col">
                      ประเภทกิจกรรม
                    </div>
                    <div class="col">
                      <select class="form-select form-select-sm" name="OrderCategory" style="width:15rem;"
                        v-model="OrderCategory">
                        <option value="BankBranch">Bank Branch</option>
                        <!-- <option value="ForexCounting">Forex Counting</option> -->
                      </select>
                    </div>
                  </div>
                  <div class="row p-2">
                    <div class="col">
                      ประเภทบริการ
                    </div>
                    <div class="col">
                      <select class="form-select form-select-sm" id="OrderType" style="width:15rem;"
                        v-model="OrderType">
                        <option value="">Please Select One Type</option>
                        <option value="Withdraw">Withdraw</option>
                        <option value="Deposit">Deposit</option>
                      </select>
                    </div>
                  </div>
                  <div class="row p-2">
                    <div class="col">
                      เลือกธนาคาร
                    </div>
                    <div class="col">
                      <select id="BankType" class="form-select form-select-sm" style="width:15rem;" v-model="BankType">
                        <option selected="selected" value="">Please Select One Bank</option>
                        <!-- <option value="5b5480c6-6460-4377-89b6-9ff1062d65f2">AEON</option>
                        <option value="9e6f6cff-6e64-41f1-a7be-c07335764423">AIRA</option>
                        <option value="58194020-9eaf-4a6c-a5cc-b8fa6f628ba9">BAY</option>
                        <option value="045426c5-9fd9-4c26-b4f0-dc0015ee96b8">BOC</option>
                        <option value="1493f524-c52e-4c06-aee8-8ef962929242">BOT</option>
                        <option value="ea0087c9-4172-4c03-92c5-4cc0cd9ac62d">CIMB</option>
                        <option value="2c164463-ef08-4cb6-a200-08e70aece9ae">GSB</option>
                        <option value="08daa272-2c66-486f-b992-a540cd25bd6c">IBANK</option>
                        <option value="c05896c4-72ec-4b4a-8a5d-5b8f9212ce24">KBANK</option>
                        <option value="fb790fb5-76e4-4d0e-8651-0259d73dc0b6">LHB</option>
                        <option value="64956e74-51fe-42d5-8445-90c90740c5db">TBANK</option>
                        <option value="40bde8fc-8a97-45e7-9907-524167975791">TTB</option> -->
                        <option value="38bfc1b0-e86e-48b8-9a28-afbeb01770ef">UOB</option>
                        <!-- <option value="836a2c05-0f18-4077-98f0-881c1bff365e">ธ.แบงก์ออฟอเมริกา</option>
                        <option value="80cb96dd-ea99-401a-9615-bba6db501acd">ธนาคารเจพีมอร์แกนเชส</option>
                        <option value="00399a06-5496-478b-885d-7c008a106505">ธนาคารไทยพาณิชย์</option> -->
                      </select>
                    </div>
                  </div>
                  <div class="row p-2">
                    <div class="col">
                      วันที่ปฎิบัติการ
                    </div>
                    <div class="col">
                      <input type="date" id="JobDate" class="form-control" style="width:15rem;" v-model="JobDate">
                      <!-- <date-pick :format="'YYYY.MM.DD'"></date-pick> -->
                    </div>
                  </div>
                  <div class="row p-2">
                    <div class="col">
                      แนบไฟล์
                    </div>
                    <div class="col">
                      <input class="form-control form-control-sm form-control-file" @change="selectFile" ref="file"
                        style="width:15rem;" type="file" id="formFile" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button class="btn btn-primary">บันทึก</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar/Sidebar'
import { collapsed, toggleSidebar, sidebarWidth } from '../components/sidebar/state'
import Header from '../components/Header'
import axios from 'axios'
import moment from 'moment'
import { defineComponent, reactive, ref, computed } from "vue";
import TableLite from "../components/TableLite.vue";
    let var_ = localStorage.getItem('user_id')
        console.log(var_)

export default  {
  name: 'ListOrder',
  components: { TableLite, Sidebar, Header, collapsed, toggleSidebar, sidebarWidth },
  data() {
    return {
      file: "",
      error: false,
      message: "",
      OrderCategory: "BankBranch",
      OrderType: "",
      BankType: "",
      JobDate: null,
      Data_: [],
    }
  },
  setup() {
    const searchTerm = ref(""); // Search text
    //  console.log(this.Data_.length())
    // Fake data
    const data = reactive([]);
    for (let i = 0; i < 126; i++) {
      data.push({
        id: i,
        name: "TEST" + i,
        email: "test" + i + "@example.com",
      });
    }
    // const Data2_ = []
    const Data_ = reactive([]);
    try {
      axios.get('/orderlist')
        .then((res) => {
          // success callback
          //this.Data_ = res.data
          // console.log(this.Data_)
          //Data2_.push(res.data)
          console.log(res.data[0].branch_name)
          return res.data
        }, (res) => {
          // error callback
          console.log(res.data)
        });
    }     
    catch (err) {
      console.log(err)
      this.message = "Something went wrong"
      this.error = true
    }
    // console.log(Data2_.length)

    // Table config
    const table = reactive({
      columns: [
        {
          label: "ID",
          field: "id",
          width: "3%",
          sortable: true,
          isKey: true,
        },
        {
          label: "Name",
          field: "name",
          width: "10%",
          sortable: true,
        },
        {
          label: "Email",
          field: "email",
          width: "15%",
          sortable: true,
        },
      ],
      rows: computed(() => {
        return data.filter(
          (x) =>
            x.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            x.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
      }),
      totalRecordCount: computed(() => {
        return table.rows.length;
      }),
      sortable: {
        order: "id",
        sort: "asc",
      },
    });
    return { searchTerm, table, collapsed, toggleSidebar, sidebarWidth }
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0]
      this.error = false
      this.message = ""
    },
    async sendFile() {
      const formData = new FormData()
      formData.append('file', this.file)
      formData.append('OrderCategory', this.OrderCategory)
      formData.append('OrderType', this.OrderType)
      formData.append('BankType', this.BankType)
      formData.append('JobDate', this.JobDate)
      formData.forEach(element => console.log(element))
      try {
        await axios.post('/upload', formData)
          .then((res) => {
            // success callback
            console.log(res.data.message)
          }, (res) => {
            // error callback
            console.log(res.data.message)
          });
        console.log(formData)
        console.log(this.OrderCategory)
        this.message = "File has been upload"
        this.file = ""
        this.error = false
      }
      catch (err) {
        console.log(err)
        this.message = "Something went wrong"
        this.error = true
      }
    },
    dateTime(value) {
      return moment(value).format("DD-MM-YYYY");
    },
    formatPrice(value) {
        let val = (value/1).toFixed(2)
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  },
  created() {
    try {
      axios.get('/orderlist')
        .then((res) => {
          // success callback
          this.Data_ = res.data
          console.log(this.Data_)
        }, (res) => {
          // error callback
          console.log(res.data)
        });
    }
    catch (err) {
      console.log(err)
      this.message = "Something went wrong"
      this.error = true
    }
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
