<template>
  <Header />
  <Sidebar :probs_isVisible=false :probs_isVisible2=true />
  <div :style="{ 'margin-left': sidebarWidth }" class="row ps-4">
    <!-- <div class="container p-0" style="width: 200rem"> -->
    <div class="row p-1" style="width: 100%">
      <div class="col text-left">&nbsp;</div>
    </div>
    <div class="row p-1" style="width: 100%">
      <div class="col text-left">
        <h3>รายงานคงคลัง</h3>
      </div>
    </div>
    <div class="row p-1" style="width: 100%">
      <div class="col d-flex justify-content-end">
        <!-- <a :href="DownloadLink" target="blank" class="text-decoration-none text-gray fs-5" style="cursor: pointer">
            <h4>ตัวอย่างไฟล์อัพโหลด</h4>
          </a>&nbsp;<h4>|
          </h4>&nbsp;&nbsp;&nbsp;<i class="fas fa-file-upload" data-bs-toggle="modal"
            style="cursor: pointer; width: 1.5rem; height: 1.5rem;"></i>
          &nbsp;<h4 data-bs-target="#myModal" data-bs-toggle="modal" style="cursor: pointer">อัพโหลด</h4>&nbsp;<h4>|
          </h4>-->&nbsp;
      </div>
    </div>
    <div class="row p-1" style="width: 100%">
      <div class="col-1">
        CCT Name:
      </div>
      <div class="col-2">
        <select id="CCT_Data" class="form-select form-select-sm" style="width:15rem;" v-model="Criteria.CCT_Data">
          <!-- <option selected="selected" value="">ธนาคาร</option> -->
          <option selected="selected" value="">ศูนย์เงินสด</option>
          <option v-for="data in Criteria.CCT_DataSource" :key="data.gfc_cct" :value="data.gfc_cct"
            :selected="data.gfc_cct === Criteria.CCT_Data">{{
                data.gfc_cct
            }}
          </option>
        </select>
      </div>
      <div class="col-1">
        Job Date:
      </div>
      <div class="col-2">
        <datepicker v-model="Criteria.JobDate" id="JobDate" class="form-control" style="width:15rem;"
          input-format="dd/MM/yyyy" />
      </div>
      <div class="col-1">
        <button class="btn btn-primary" style="width:4rem; height:2rem;">ค้นหา</button>
      </div>
      <div class="col-1">
        <a @click="DownloadReports" target="blank" class="text-decoration-none text-gray fs-5" style="cursor: pointer">
          <h4>ตัวอย่างไฟล์อัพโหลด</h4>
        </a>&nbsp;
      </div>
    </div>
    <div class="row p-0" style="width: 100%">
      <div class="col-12">
        <div style="text-align: right">
          <label>SearchBy:</label>&nbsp;&nbsp;<input v-model="searchTerm" />
        </div>
        <table-lite :is-static-mode="true" :has-checkbox="true" :is-loading="table.isLoading" :columns="table.columns"
          :rows="table.rows" :total="table.totalRecordCount" :sortable="table.sortable"
          @is-finished="tableLoadingFinish" @return-checked-rows="updateCheckedRows"
          class="table table-striped table-hover">
        </table-lite>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
import Sidebar from '../components/sidebar/Sidebar'
import { collapsed, toggleSidebar, sidebarWidth } from '../components/sidebar/state'
import Header from '../components/Header'
// import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'
import { defineComponent, reactive, ref, computed, watch } from "vue";
import TableLite from "../components/TableLite.vue";
import { useRouter } from 'vue-router'
import Datepicker from 'vue3-datepicker'
import cors from 'cors';
import fs from 'fs';
// Vue.prototype.axios = axios;

export default defineComponent({
  name: 'ReportInv',
  components: { TableLite, Sidebar, Header, collapsed, toggleSidebar, sidebarWidth, Datepicker },
  setup() {
    //upload data
    const file = ref(File | null)//ref('')
    const error = ref(false)
    const checkstatus_send_to_checker = ref(false)
    const error_addManual = ref(false)
    const error_editOrder = ref(false)
    const message = ref('')
    const message_addManual = ref('')
    const message_editOrder = ref('')
    const OrderCategory = ref('BankBranch')
    const OrderType = ref('')
    const BankType = ref('')
    const DownloadLink = ref('')
    const JobDate = ref(new Date())
    const user_id = ref(localStorage.getItem('user_id'))
    const department_id = ref(localStorage.getItem('department_id'))
    const position_id = ref(localStorage.getItem('position_id'))
    const CustomerID = ref(localStorage.getItem('CustomerID'))
    const gfc_cct = ref(localStorage.getItem('gfc_cct'))
    const router = useRouter()
    const rowData = reactive([])
    const Criteria = reactive({
      CCT_Data: "",
      JobDate: new Date(),
      CCT_DataSource: []
    })
    const Id = ref(0)
    const rowDataEdit = ref([])
    // const NewOrderDet = reactive([])
    const DownloadReports = async () => {
      console.log('DownloadReports')
      const params = {
        CCT_Data: Criteria.CCT_Data,
        JobDate: moment(Criteria.JobDate).format('YYYY-MM-DD')
      };
      //alert( params.CCT_Data+" : "+params.JobDate);
      const res = await axios.get('/getdownloadreports', { params })
        .then((res) => {
          //Data_.value = JSON.parse(JSON.stringify(res.data))
          console.log("res.data: ", res.data)
          //Data_
          // console.log(fakeData)
        }, (res) => {
          // error callback
          console.log(res.data)
        })
    }
    // const DownloadLink_ = async () => { 
    //   let filesrcs=[{
    //       title: 'template.zip',
    //       src: 'http://localhost:4000/dd',//require('~/assets/images/template.zip'),
    //     }]
      
    //   await axios.get(filesrcs.src,{responseType: 'blob'}).then((response) => {
    //     let fileurl = window.URL.createObjectURL(new Blob([response.data]))
    //     let filelink = document.createElement('a')
    //     filelink.href = fileurl
    //     filelink.setAttribute('download', filesrcs.title)
    //     document.body.appendChild(filelink)
    //     filelink.click()
    //   })
    // }
    const format_date = (date_) => {
      // console.log('date_: ' + date_)
      let date__ = null
      let day = null//date__.getDate();
      let month = null//date__.getMonth() + 1;
      let year = null//date__.getFullYear();
      if (date_) {
        date__ = moment(new Date(date_)).format('DD-MM-YYYY')
        console.log('date__: ' + date__)
        console.log('moment: ' + moment(date_).format('DD-MM-YYYY'))
        day = moment(date_).format('DD');//date__.getDate();
        month = moment(date_).format('MM')//date__.getMonth() + 1;
        year = moment(date_).format('YYYY')//date__.getFullYear();
        console.log('day: ' + day)
        console.log('month: ' + month)
        console.log('year: ' + year)
      }
      else {
        date__ = moment(new Date()).format('DD-MM-YYYY')//new Date(date_)
        //const date__ = moment(date_).format('DD-MM-YYYY')
        ///console.log('moment: ' + moment(date_).format('DD-MM-YYYY') )
        day = date__.getDate();
        month = date__.getMonth() + 1;
        year = date__.getFullYear();
        console.log('day: ' + day)
        console.log('month: ' + month)
        console.log('year: ' + year)
      }
      // console.log(`${day}/${month}/${year}`)
      return `${day}/${month}/${year}`;
      // return `${year}-${month}-${day}`;
      // date_ = new Date(date_)
      // date_ = moment(date_).format('MM/DD/YYYY')
      // return date_
    }
    const formatdate_show = (date_) => {
      console.log('date_: ' + date_)
      let date__ = null
      let day = null//date__.getDate();
      let month = null//date__.getMonth() + 1;
      let year = null//date__.getFullYear();
      // if (date_) {
      date__ = moment(date_).format('DD/MM/YYYY')
      // console.log('date__: ' + date__)
      // console.log('moment: ' + moment(date_).format('DD-MM-YYYY') )
      // day = moment(date_).format('DD');//date__.getDate();
      // month = moment(date_).format('MM')//date__.getMonth() + 1;
      // year = moment(date_).format('YYYY')//date__.getFullYear();
      return date__;
      //return `${day}/${month}/${year}`;
      // return `${year}-${month}-${day}`;
    }
    const searchTerm = ref(""); // Search text
    // Fake data
    const data = reactive({
      rows: [],
    });
    let Data_ = ref([]);//[]
    /**
     * Get server data request
     */
    const myRequest = async (keyword) => {
      //const fakeData = [];      
      const params = {
        user_id: user_id.value,
        CustomerID: CustomerID.value
      };
      const res = await axios.get('/getcct_data', { params })
        .then((res) => {
          Criteria.CCT_DataSource = JSON.parse(JSON.stringify(res.data))
          console.log("Criteria.CCT_DataSource: ", Criteria.CCT_DataSource)
          //Data_
          // console.log(fakeData)
        }, (res) => {
          // error callback
          console.log(res.data)
        })
      //-------------get banktypedata
      const params_banktypedata = {
        user_id: user_id.value
      };


      return await new Promise((resolve, reject) => {
        try {
          table.isLoading = true;
          // Remove setTimeout() and change to your Axios request or AJAX request on here.
          setTimeout(() => {
            table.isLoading = false;
            let newData = Data_.value.filter(
              (x) =>
                x.AutoID.toString().toLowerCase().includes(keyword.toLowerCase()) ||
                x.servicetype.toLowerCase().includes(keyword.toLowerCase()) ||
                x.branchorigin_name.toLowerCase().includes(keyword.toLowerCase()) ||
                x.branchdest_name.toLowerCase().includes(keyword.toLowerCase()) ||
                formatPrice(x.total_by_branch).toString().toLowerCase().includes(keyword.toLowerCase()) ||
                x.order_date.toLowerCase().includes(keyword.toLowerCase()) ||
                x.remark.toLowerCase().includes(keyword.toLowerCase())
            );
            resolve(newData);
          }, 100);
        } catch (error) {
          console.log("Fetch error", error);
          reject();
        }
      });
    };
    // Table config
    // Table config
    const table = reactive({
      isLoading: false,
      columns: [
        {
          label: "Job Date",
          field: "AutoID",
          width: "10%",
          sortable: true,
          isKey: true,
        },
        {
          label: "Vendor",
          field: "servicetype",
          width: "5%",
          sortable: true,
        },
        {
          label: "CCT Name",
          field: "branchorigin_name",
          width: "15%",
          sortable: true,
        },
        {
          label: "Type Of Report",
          field: "branchdest_name",
          width: "15%",
          sortable: true,
        },
        {
          label: "",
          //field: "quick",
          width: "10%",
          display: function (row) {
            return (
              // '<button type="button" data-id="' +
              // row.AutoID +
              // '" class="btn btn-warning is-rows-el rejectorder" style="width:5rem; height:2rem">Reject</button>'
              // +
              '<button type="button" data-id="' +
              row.AutoID +
              '" class="btn btn-danger is-rows-el cancelorder" style="width:5rem; height:2rem">Cancel</button>'
              +
              '<button type="button" data-id="' +
              row.AutoID +
              '" class="btn btn-info is-rows-el editorder" style="width:5rem; height:2rem" data-bs-target="#ModalEditOrder" data-bs-toggle="modal">Edit</button>'
            );
          },
        },
      ],
      rows: computed(() => {
        return data.rows;
      }),
      totalRecordCount: computed(() => {
        return table.rows.length;
      }),
      sortable: {
        order: "AutoID",
        sort: "asc",
      },
    });
    /**
 * Use vue.js watch to watch your state's change
*/
    watch(
      () => searchTerm.value,
      (val) => {
        myRequest(val).then((newData) => {
          data.rows = newData;
        });
      }
    );
    const tableLoadingFinish = (elements) => {
      table.isLoading = false;
      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("name-btn")) {
          element.addEventListener("click", function () {
            console.log(this.dataset.id + " name-btn click!!");
          });
        }
        if (element.classList.contains("rejectorder")) {
          element.addEventListener("click", async function () {
            //  console.log(this.dataset.id + " rejectorder!!");
            if (confirm("คุณต้องการ Reject รายการคำสั่ง?")) {
              const params = {
                Id: this.dataset.id,
                Type_: 'reject'
              };
              try {
                await axios.get('/update_cashstatus_order', { params })
                  .then((res) => {
                    // success callback
                    let obj = JSON.parse(JSON.stringify(res.data))
                    console.log(obj[0])
                    // router.push('/listorder')
                    location.reload()
                    // addEditItem
                  }, (res) => {
                    // error callback
                    console.log(res.data)
                  }).finally(() => {
                    //
                  });
              }
              catch (err) {
                console.log(err)
              }
            }
          });
        }
        if (element.classList.contains("cancelorder")) {
          element.addEventListener("click", async function () {
            // console.log(this.dataset.id + " rejectorder!!");
            if (confirm("คุณต้องการยกเลิกรายการคำสั่ง?")) {
              const params = {
                Id: this.dataset.id,
                Type_: 'cancel'
              };
              try {
                await axios.get('/update_cashstatus_order', { params })
                  .then((res) => {
                    // success callback
                    let obj = JSON.parse(JSON.stringify(res.data))
                    console.log(obj[0])
                    // router.push('/listorder')
                    location.reload()
                    // addEditItem
                  }, (res) => {
                    // error callback
                    console.log(res.data)
                  }).finally(() => {
                    //
                  });

              }
              catch (err) {
                console.log(err)
              }

            }
          });

        }
        //----------------------------------------------------------------------event click button edit
        if (element.classList.contains("editorder")) {
          element.addEventListener("click", async function () {
            const params = {
              Id: this.dataset.id
            };
            let Id_ = this.dataset.id
            //console.log( params )
            try {
              await axios.get('/getcashorder', { params })
                .then((res) => {
                  // success callback
                  let obj = JSON.parse(JSON.stringify(res.data))
                  console.log("obj[0], getcashorder: ", obj[0])
                  OrderDataExisting.orderId = Id_
                  OrderDataExisting.BankType = obj[0].customerID
                  OrderDataExisting.OrderCategory = obj[0].order_category
                  OrderDataExisting.OrderType = obj[0].servicetype
                  OrderDataExisting.RefNo = obj[0].refno
                  OrderDataExisting.JobDate = new Date(obj[0].order_date)
                  // OrderDataExisting.JobDate =  obj[0].order_date
                  OrderDataExisting.BranchOriginText = obj[0].branchorigin_name
                  OrderDataExisting.BranchOriginId = obj[0].branchorigin_code
                  OrderDataExisting.BranchDestText = obj[0].branchdest_name
                  OrderDataExisting.BranchDestId = obj[0].branchdest_code
                  OrderDataExisting.Remark = obj[0].remark
                  OrderDataExisting.Cashstatus = obj[0].cashstatus
                  if (obj[0].cashstatus === '1') {
                    checkstatus_send_to_checker.value = true
                  }
                  else {
                    checkstatus_send_to_checker.value = false
                  }
                  console.log("obj[0].Cashstatus: ", obj[0].cashstatus)
                  console.log("checkstatus_send_to_checker: ", checkstatus_send_to_checker.value)
                  Id.value = OrderDataExisting.OrderDataDet.length
                  console.log('OrderDataExisting.OrderDataDet.length: ' + OrderDataExisting.OrderDataDet.length)
                  console.log("OrderDataExisting.BankType: ", OrderDataExisting.BankType)

                  // addEditItem
                }, (res) => {
                  // error callback
                  console.log(res.data)
                }).finally(() => {
                  //
                });
              // onMounted(getBranchAndCashEdit)
            }
            catch (err) {
              console.log(err)
            }
          });
        }

      });
    };
    // Get data on first rendering
    myRequest("").then((newData) => {
      data.rows = newData;
    });
    const formatPrice = (value) => {
      let val = (value / 1).toFixed(2)
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    const dateTime = (value) => {
      return moment(value).format("DD-MM-YYYY");
    }
    const updateCheckedRows = (rowsKey) => {
      console.log('rowsKey: ', rowsKey);
    };
    const formatPrice_noFixed = (value) => {
      let val = (value / 1)
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    return {
      searchTerm, table, sidebarWidth, Data_, updateCheckedRows, tableLoadingFinish
      //, DownloadLink_
      , formatPrice, router, format_date, file, error, error_addManual
      , message, message_addManual, message_editOrder, error_editOrder, DownloadReports
      , OrderCategory, OrderType, BankType, JobDate, Criteria
      , user_id, department_id, position_id, CustomerID, gfc_cct, formatdate_show, formatPrice_noFixed, DownloadLink
      , rowData, Id, rowDataEdit, checkstatus_send_to_checker//,NewOrderDet
    }
  },
})

</script>
<style scoped lang="css">
@import '../assets/css/style.css';

::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  background-color: #5D6D7E;
  border-color: #EAEDED;
  vertical-align: middle;
}

/* #formFile::before {
  content: "Pick file";
  position: absolute;
  z-index: 2;
  display: block;
  background-color: #eee;
  width: 80px;
} */
</style>
