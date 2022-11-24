<template>
  <Header />
  <Sidebar :probs_isVisible="false" :probs_isVisible2="false" :probs_isVisible3="true" />
  <div :style="{ 'margin-left': sidebarWidth }" class="row ps-4">
    <!-- <div class="container p-0" style="width: 200rem"> -->
    <div class="row p-1" style="width: 100%">
      <div class="col text-left">&nbsp;</div>
    </div>
    <div class="row p-1" style="width: 100%">
      <div class="col text-left">
        <h3>ตั้งค่ารายการอนุมัติ</h3>
      </div>
    </div>
    <div class="row p-1" style="width: 100%">
      <div class="col d-flex justify-content-end">
        &nbsp;
        <h4 data-bs-target="#myModalNew" data-bs-toggle="modal" class="text-decoration-none text-gray fs-5"
          style="cursor: pointer">
          สร้างรายการอนุมัติใหม่
        </h4>
      </div>
    </div>
    <div class="row p-1 mb-5" style="width: 100%">
      <div class="accordion" id="CreateApproveProcess">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button text-black-50" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne" style="background-color:lightgrey;">
              สร้างรายการอนุมัติใหม่
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              <div class="container-fluid">
                <div class="row p-2 d-flex ">
                  <div class="col-1">ชื่อการอนุมัติ</div>
                  <div class="col">
                    <input type="text" id="RefNo" class="form-control" style="width: 30rem" v-model="NewOrder.RefNo" />
                  </div>
                </div>
                <div class="row p-2">
                  <div class="col-1">กิจกรรม</div>
                </div>
                <div class="row p-2">
                  <div class="col-2">
                    <input type="checkbox" id="john" value="John" v-model="checkedNames" class="form-check-input" />
                    <label for="john" class="form-check-label">
                      สาขา-ศูนย์เงินสด
                    </label>
                  </div>
                  <div class="col-2">
                    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" class="form-check-input" />
                    <label for="jack" class="form-check-label">
                      ศูนย์เงินสด-ศูนย์เงินสด
                    </label>
                  </div>
                  <div class="col-2">
                    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" class="form-check-input" />
                    <label for="mike" class="form-check-label">
                      ธปท-ศูนย์เงินสด
                    </label>
                  </div>
                  <div class="col-2">
                    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" class="form-check-input" />
                    <label for="mike" class="form-check-label">
                      สาขา-สาขา
                    </label>
                  </div>
                </div>
                <div class="row p-2">
                  <div class="col-2">
                    <input type="checkbox" id="john2" value="John2" v-model="checkedNames" class="form-check-input" />
                    <label for="john2" class="form-check-label">
                      ศูนย์เงินสด-สาขา
                    </label>
                  </div>
                  <div class="col-1"></div>
                  <div class="col-4">
                    <input type="checkbox" id="mike2" value="Mike2" v-model="checkedNames" class="form-check-input" />
                    <label for="mike2" class="form-check-label">
                      ศูนย์เงินสด-ธปท
                    </label>
                  </div>
                  <div class="col"></div>
                </div>
                <div class="row p-2">
                  <div class="col-2  align-middle"><a href="#" class="pe-auto" data-bs-target="#addApproveProc" data-bs-toggle="modal"><i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ตั้งค่ารายการอนุมัติ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-0" style="width: 100%">
      <div class="col-12">
        <div style="text-align: right">
          <label>SearchBy:</label>
          &nbsp;&nbsp;
          <input v-model="searchTerm" />
        </div>
        <table-lite :is-static-mode="true" :has-checkbox="true" :is-loading="table.isLoading" :columns="table.columns"
          :rows="table.rows" :total="table.totalRecordCount" :sortable="table.sortable"
          @is-finished="tableLoadingFinish" @return-checked-rows="updateCheckedRows"
          class="table table-striped table-hover"></table-lite>
      </div>
    </div>
    <!-- </div> -->
  </div>
  <!--<div class="modal fade" id="myModalNew">--------Add Order Manual--->
  <div class="container py-2">
    <div class="py-2">
      <form @submit.prevent="addManualOrder" enctype="multipart/form-data" id="form1">
        <div class="modal fade" id="addApproveProc">
          <div class="modal-dialog  modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">กำหนดผู้อนุมัติ</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container">
                  <div class="row p-2">
                    <div class="col ps-4 d-flex">
                      <h5 class="ps-1 text-gray"> </h5>
                    </div>
                  </div>
                  <div class="row p-2">
                    <div class="col-sm-2">
                      ลำดับอนุมัติ
                    </div>
                    <div class="col ps-4 d-flex">
                      &nbsp;<select id="BankTypeNew" class="form-select form-select-sm" style="width:15rem;" v-model="NewOrder.BankTypeNew">
                        <option selected="selected" value="">ธนาคาร</option>
                        <option v-for="data in NewOrder.BankTypeData" :key="data.customerID" :value="data.customerID"
                          :selected="data.customerID === BankType">{{
                              data.customer_name
                          }}
                        </option>
                      </select>
                    </div>
                    <div class="col">
                      เลือกผู้ใช้งาน
                    </div>
                    <div class="col">
                      <select class="form-select form-select-sm" name="OrderCategoryNew" style="width:15rem;"
                        v-model="NewOrder.OrderCategoryNew" @click="getOrderType()">
                        <option value="BankBranch">Bank Branch</option>
                        <option value="BOT">BOT</option>
                        <!-- <option value="ForexCounting">Forex Counting</option> -->
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer pt-0 justify-content-center">
                <div class="align-top pt-1 d-flex justify-content-center">
                  <button class="btn btn-primary" style="width:4rem; height:2rem;">บันทึก</button><button
                    class="btn btn-secondary" data-bs-dismiss="modal" type="reset" ref="ClosemyModalNew"
                    style="width:4rem; height:2rem;" id="ClosemyModalNew">ยกเลิก</button>
                </div>
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
import {
  collapsed,
  toggleSidebar,
  sidebarWidth
} from '../components/sidebar/state'
import Header from '../components/Header'
import axios from 'axios'
import moment from 'moment'
import { defineComponent, reactive, ref, computed, watch } from 'vue'
import TableLite from '../components/TableLite.vue'
import { useRouter } from 'vue-router'
import Datepicker from 'vue3-datepicker'
// var user_id = localStorage.getItem('user_id')
// console.log(user_id)
export default defineComponent({
  name: 'ApproveProcess',
  components: {
    TableLite,
    Sidebar,
    Header,
    collapsed,
    toggleSidebar,
    sidebarWidth,
    Datepicker
  },
  setup() {
    //upload data
    const file = ref(File | null) //ref('')
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
    const JobDate = ref(new Date())
    const user_id = ref(localStorage.getItem('user_id'))
    const department_id = ref(localStorage.getItem('department_id'))
    const position_id = ref(localStorage.getItem('position_id'))
    const CustomerID = ref(localStorage.getItem('CustomerID'))
    const gfc_cct = ref(localStorage.getItem('gfc_cct'))
    const gfc_cct_code = ref(localStorage.getItem('gfc_cct_code'))
    const RoleId = ref(localStorage.getItem('RoleId'))
    const router = useRouter()
    const rowData = reactive([])
    const NewOrder = reactive({
      OrderCategoryNew: 'BankBranch',
      OrderTypeNew: '',
      BankTypeNew: '',
      JobDateNew: new Date(),
      RefNo: '',
      RemarkNew: '',
      DataBranchToOrigin: [],
      DataBranchToDest: [],
      BranchOrigin: '',
      BranchDest: ''
    })
    // const NewOrderDet = reactive([])
    const Id = ref(0)
    const rowDataEdit = ref([])
    const OrderDataExisting = reactive({
      orderId: '',
      BankType: '',
      OrderCategory: 'BankBranch',
      OrderType: '',
      RefNo: '',
      JobDate: null,
      BranchOriginText: '',
      BranchOriginId: '',
      BranchDestText: '',
      BranchDestId: '',
      DataBranchToOrigin: [],
      DataBranchToDest: [],
      Remark: '',
      OrderDataDet: [],
      Cashstatus: ''
    })
    const sendFile = async (e) => {
      // console.log( moment( JobDate.value ).format('YYYY-MM-DD') )
      const target = e.target
      if (target && target.files) {
        file.value = target.files[0]
      }
      let formData = new FormData()
      formData.append('file', file.value)
      formData.append('OrderCategory', OrderCategory.value)
      formData.append('OrderType', OrderType.value)
      formData.append('BankType', BankType.value)
      formData.append('JobDate', moment(JobDate.value).format('YYYY-MM-DD'))
      formData.append('gfc_cct', gfc_cct.value)
      formData.append('gfc_cct_code', gfc_cct_code.value)
      formData.append('user_id', user_id.value)
      formData.append('CustomerID', CustomerID.value)
      console.log('sendFile')
      formData.forEach((element) => console.log(element))
      try {
        await axios.post('/upload', formData).then(
          (res) => {
            // success callback
            console.log(res.data)
            document.getElementById('ClosemyModal').click()
            // router.push('/listorder')
            location.reload()
          },
          (res) => {
            // error callback
            console.log(res.data.message)
          }
        )
        message.value = 'File has been upload'
        file.value = ''
        error.value = false
      } catch (err) {
        console.log(err)
        message.value = 'Something went wrong'
        error.value = true
      }
    }
    const sendApprove = async (e) => {
      // alert( OrderDataExisting.orderId )
      if (confirm('คุณต้องการส่งอนุมัติรายการคำสั่ง?')) {
        const params = {
          Id: OrderDataExisting.orderId,
          Type_: 'send_to_check'
        }
        try {
          await axios
            .get('/update_cashstatus_order', { params })
            .then(
              (res) => {
                // success callback
                let obj = JSON.parse(JSON.stringify(res.data))
                console.log(obj[0])
                // router.push('/listorder')
                location.reload()
                // addEditItem
              },
              (res) => {
                // error callback
                console.log(res.data)
              }
            )
            .finally(() => {
              //
            })
        } catch (err) {
          console.log(err)
        }
      }
    }
    const selectFile = (e) => {
      // file.value = this.$refs.file.files[0]
      file.value = e.target.files[0]
      //headline.value.textContent
      error.value = false
      message.value = ''
    }
    const format_date = (date_) => {
      // console.log('date_: ' + date_)
      let date__ = null
      let day = null //date__.getDate();
      let month = null //date__.getMonth() + 1;
      let year = null //date__.getFullYear();
      if (date_) {
        date__ = moment(new Date(date_)).format('DD-MM-YYYY')
        console.log('date__: ' + date__)
        console.log('moment: ' + moment(date_).format('DD-MM-YYYY'))
        day = moment(date_).format('DD') //date__.getDate();
        month = moment(date_).format('MM') //date__.getMonth() + 1;
        year = moment(date_).format('YYYY') //date__.getFullYear();
        console.log('day: ' + day)
        console.log('month: ' + month)
        console.log('year: ' + year)
      } else {
        date__ = moment(new Date()).format('DD-MM-YYYY') //new Date(date_)
        day = date__.getDate()
        month = date__.getMonth() + 1
        year = date__.getFullYear()
        console.log('day: ' + day)
        console.log('month: ' + month)
        console.log('year: ' + year)
      }

      return `${day}/${month}/${year}`
    }
    const formatdate_show = (date_) => {
      console.log('date_: ' + date_)
      let date__ = null
      let day = null //date__.getDate();
      let month = null //date__.getMonth() + 1;
      let year = null //date__.getFullYear();
      date__ = moment(date_).format('DD/MM/YYYY')
      return date__
    }
    const searchTerm = ref('') // Search text
    // Fake data
    const data = reactive({
      rows: []
    })
    let Data_ = ref([]) //[]
    /**
     * Get server data request
     */
    const myRequest = async (keyword) => {
      //const fakeData = [];
      const params = {
        user_id: user_id.value,
        CustomerID: CustomerID.value,
        RoleId: RoleId.value
      }
      // const res = await axios.get('/orderlist', { params })
      const res = await axios.get('/approvelist', { params }).then(
        (res) => {
          Data_.value = JSON.parse(JSON.stringify(res.data))
          console.log('Data_: ', Data_)
          //Data_
          // console.log(fakeData)
        },
        (res) => {
          // error callback
          console.log(res.data)
        }
      )
      // Data_.value
      // Data_.value.forEach((item) => {
      //   console.log("found: ", item)
      //   console.log("found AutoID: ", item.AutoID)
      // });
      //fakeData.push(Data_.value)
      //console.log('fakeData: ', fakeData)
      return await new Promise((resolve, reject) => {
        try {
          table.isLoading = true
          // Remove setTimeout() and change to your Axios request or AJAX request on here.
          setTimeout(() => {
            table.isLoading = false
            let newData = Data_.value.filter(
              (x) =>
                x.AutoID.toString()
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                x.servicetype.toLowerCase().includes(keyword.toLowerCase()) ||
                x.branchorigin_name
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                x.branchdest_name
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                formatPrice(x.total_by_branch)
                  .toString()
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                x.order_date.toLowerCase().includes(keyword.toLowerCase()) ||
                x.remark.toLowerCase().includes(keyword.toLowerCase())
            )
            resolve(newData)
          }, 100)
        } catch (error) {
          console.log('Fetch error', error)
          reject()
        }
      })
    }
    // Table config
    const table = reactive({
      isLoading: false,
      columns: [
        {
          label: 'เลขที่คำสั่ง',
          field: 'AutoID',
          width: '10%',
          sortable: true,
          isKey: true
        },
        {
          label: 'ประเภทบริการ',
          field: 'servicetype',
          width: '5%',
          sortable: true
        },
        {
          label: 'ต้นทาง',
          field: 'branchorigin_name',
          width: '15%',
          sortable: true
        },
        {
          label: 'ปลายทาง',
          field: 'branchdest_name',
          width: '15%',
          sortable: true
        },
        {
          label: 'ยอดเงิน',
          field: 'total_by_branch',
          width: '15%',
          sortable: true,
          display: function (row) {
            return formatPrice(row.total_by_branch)
          }
        },
        {
          label: 'วันปฎิบัติงาน',
          field: 'order_date',
          width: '10%',
          sortable: true,
          display: function (row) {
            return dateTime(row.order_date)
          }
        },
        {
          label: 'อนุมัติโดย',
          //field: "order_date",
          width: '10%',
          sortable: true
        },
        {
          label: 'สถานะคำสั่ง',
          //field: "order_date",
          width: '10%',
          sortable: true,
          display: function (row) {
            let sOutput = ''
            if (row.cashstatus === '1') {
              sOutput = 'สร้างรายการคำสั่ง'
            }
            if (row.cashstatus === '2') {
              sOutput = 'รอ Checker อนุมัติ'
            }
            if (row.cashstatus === '3') {
              sOutput = 'รอ Approve1 อนุมัติ'
            }
            if (row.cashstatus === '4') {
              sOutput = 'รอ Approve2 อนุมัติ'
            }
            if (row.cashstatus === '5') {
              sOutput = 'รอ ApproveN อนุมัติ'
            }
            sOutput = '<span>' + sOutput + '</span>'
            return sOutput
          }
        },
        {
          label: 'หมายเหตุ',
          field: 'remark',
          width: '10%',
          sortable: true
        },
        {
          label: '',
          //field: "quick",
          width: '10%',
          display: function (row) {
            return (
              '<button type="button" data-id="' +
              row.AutoID +
              '" class="btn btn-warning is-rows-el reject_order" style="width:5em; height:2rem">Reject</button>' +
              '<button type="button" data-id="' +
              row.AutoID +
              '" class="btn btn-success is-rows-el approve_order" style="width:6rem; height:2rem">อนุมัติ</button>' +
              '<button type="button" data-id="' +
              row.AutoID +
              '" class="btn btn-info is-rows-el editorder" style="width:5rem; height:2rem" data-bs-target="#ModalEditOrder" data-bs-toggle="modal">View</button>'
            )
          }
        }
      ],
      rows: computed(() => {
        return data.rows
      }),
      totalRecordCount: computed(() => {
        return table.rows.length
      }),
      sortable: {
        order: 'AutoID',
        sort: 'asc'
      }
    })
    /**
     * Use vue.js watch to watch your state's change
     */
    watch(
      () => searchTerm.value,
      // (val) => {
      //   //Data_.value
      //   const res = axios.get('/orderlist')
      //     .then((res) => {
      //       Data_.value = JSON.parse(JSON.stringify(res.data))
      //       console.log("Data_: ", Data_)
      //       //Data_
      //       // console.log(fakeData)
      //     }, (res) => {
      //       // error callback
      //       console.log(res.data)
      //     })
      // },
      (val) => {
        myRequest(val).then((newData) => {
          data.rows = newData
        })
      }
    )
    const tableLoadingFinish = (elements) => {
      table.isLoading = false
      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains('name-btn')) {
          element.addEventListener('click', function () {
            console.log(this.dataset.id + ' name-btn click!!')
          })
        }
        if (element.classList.contains('reject_order')) {
          element.addEventListener('click', async function () {
            //  console.log(this.dataset.id + " rejectorder!!");
            if (confirm('คุณต้องการ Reject รายการคำสั่ง?')) {
              const params = {
                Id: this.dataset.id,
                Type_: 'reject'
              }
              try {
                await axios
                  .get('/update_cashstatus_order', { params })
                  .then(
                    (res) => {
                      // success callback
                      let obj = JSON.parse(JSON.stringify(res.data))
                      console.log(obj[0])
                      // router.push('/listorder')
                      location.reload()
                      // addEditItem
                    },
                    (res) => {
                      // error callback
                      console.log(res.data)
                    }
                  )
                  .finally(() => {
                    //
                  })
              } catch (err) {
                console.log(err)
              }
            }
          })
        }
        if (element.classList.contains('approve_order')) {
          element.addEventListener('click', async function () {
            // console.log(this.dataset.id + " rejectorder!!");
            if (confirm('คุณต้องการอนุมัติรายการคำสั่ง?')) {
              const params = {
                Id: this.dataset.id,
                Type_: RoleId.value
              }
              try {
                await axios
                  .get('/update_cashstatus_order', { params })
                  .then(
                    (res) => {
                      // success callback
                      let obj = JSON.parse(JSON.stringify(res.data))
                      console.log(obj[0])
                      // router.push('/listorder')
                      location.reload()
                      // addEditItem
                    },
                    (res) => {
                      // error callback
                      console.log(res.data)
                    }
                  )
                  .finally(() => {
                    //
                  })
              } catch (err) {
                console.log(err)
              }
            }
          })
        }
        if (element.classList.contains('editorder')) {
          element.addEventListener('click', async function () {
            const params = {
              Id: this.dataset.id
            }
            let Id_ = this.dataset.id
            //console.log( params )
            try {
              await axios
                .get('/getcashorder', { params })
                .then(
                  (res) => {
                    // success callback
                    let obj = JSON.parse(JSON.stringify(res.data))
                    console.log('obj[0], getcashorder: ', obj[0])
                    OrderDataExisting.orderId = Id_
                    OrderDataExisting.BankType = obj[0].customerID
                    OrderDataExisting.OrderCategory = obj[0].order_category
                    OrderDataExisting.OrderType = obj[0].servicetype
                    OrderDataExisting.RefNo = obj[0].refno
                    OrderDataExisting.JobDate = new Date(obj[0].order_date)
                    // OrderDataExisting.JobDate =  obj[0].order_date
                    OrderDataExisting.BranchOriginText =
                      obj[0].branchorigin_name
                    OrderDataExisting.BranchOriginId = obj[0].branchorigin_code
                    OrderDataExisting.BranchDestText = obj[0].branchdest_name
                    OrderDataExisting.BranchDestId = obj[0].branchdest_code
                    OrderDataExisting.Remark = obj[0].remark
                    OrderDataExisting.Cashstatus = obj[0].cashstatus
                    if (obj[0].cashstatus === '1') {
                      checkstatus_send_to_checker.value = true
                    } else {
                      checkstatus_send_to_checker.value = false
                    }
                    console.log('obj[0].Cashstatus: ', obj[0].cashstatus)
                    console.log(
                      'checkstatus_send_to_checker: ',
                      checkstatus_send_to_checker.value
                    )

                    // console.log('OrderDataExisting.BranchOriginText: ',OrderDataExisting.BranchOriginText)
                    // console.log('OrderDataExisting.BranchOriginId: ',OrderDataExisting.BranchOriginId)
                    // console.log('OrderDataExisting.BranchDestText: ',OrderDataExisting.BranchDestText)
                    // console.log('OrderDataExisting.BranchDestId: ',OrderDataExisting.BranchDestId)
                    // console.log('editorder OrderDataExisting: ', OrderDataExisting);//OrderDataDet
                    getBranchAndCashEdit()
                    OrderDataExisting.OrderDataDet = []
                    if (obj[0].note_new_1000 > 0) {
                      //--note new
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '1000',
                        QualityMoneyType: 'New',
                        PackageMoneyType: obj[0].unit_note_new_1000,
                        Quantity: obj[0].pcs_note_new_1000,
                        Amount: obj[0].note_new_1000
                      })
                    }
                    if (obj[0].note_new_500 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '500',
                        QualityMoneyType: 'New',
                        PackageMoneyType: obj[0].unit_note_new_500,
                        Quantity: obj[0].pcs_note_new_500,
                        Amount: obj[0].note_new_500
                      })
                    }
                    if (obj[0].note_new_100 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '100',
                        QualityMoneyType: 'New',
                        PackageMoneyType: obj[0].unit_note_new_100,
                        Quantity: obj[0].pcs_note_new_100,
                        Amount: obj[0].note_new_100
                      })
                    }
                    if (obj[0].note_new_50 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '50',
                        QualityMoneyType: 'New',
                        PackageMoneyType: obj[0].unit_note_new_50,
                        Quantity: obj[0].pcs_note_new_50,
                        Amount: obj[0].note_new_50
                      })
                    }
                    if (obj[0].note_new_20 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '20',
                        QualityMoneyType: 'New',
                        PackageMoneyType: obj[0].unit_note_new_20,
                        Quantity: obj[0].pcs_note_new_20,
                        Amount: obj[0].note_new_20
                      })
                    }
                    if (obj[0].note_new_10 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '10',
                        QualityMoneyType: 'New',
                        PackageMoneyType: obj[0].unit_note_new_10,
                        Quantity: obj[0].pcs_note_new_10,
                        Amount: obj[0].note_new_10
                      })
                    }
                    if (obj[0].note_fit_1000 > 0) {
                      //--note fit
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '1000',
                        QualityMoneyType: 'Fit',
                        PackageMoneyType: obj[0].unit_note_fit_1000,
                        Quantity: obj[0].pcs_note_fit_1000,
                        Amount: obj[0].note_fit_1000
                      })
                    }
                    if (obj[0].note_fit_500 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '500',
                        QualityMoneyType: 'Fit',
                        PackageMoneyType: obj[0].unit_note_fit_500,
                        Quantity: obj[0].pcs_note_fit_500,
                        Amount: obj[0].note_fit_500
                      })
                    }
                    if (obj[0].note_fit_100 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '100',
                        QualityMoneyType: 'Fit',
                        PackageMoneyType: obj[0].unit_note_fit_100,
                        Quantity: obj[0].pcs_note_fit_100,
                        Amount: obj[0].note_fit_100
                      })
                    }
                    if (obj[0].note_fit_50 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '50',
                        QualityMoneyType: 'Fit',
                        PackageMoneyType: obj[0].unit_note_fit_50,
                        Quantity: obj[0].pcs_note_fit_50,
                        Amount: obj[0].note_fit_50
                      })
                    }
                    if (obj[0].note_fit_20 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '20',
                        QualityMoneyType: 'Fit',
                        PackageMoneyType: obj[0].unit_note_fit_20,
                        Quantity: obj[0].pcs_note_fit_20,
                        Amount: obj[0].note_fit_20
                      })
                    }
                    if (obj[0].note_fit_10 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '10',
                        QualityMoneyType: 'Fit',
                        PackageMoneyType: obj[0].unit_note_fit_10,
                        Quantity: obj[0].pcs_note_fit_10,
                        Amount: obj[0].note_fit_10
                      })
                    }
                    if (obj[0].note_unfit_1000 > 0) {
                      //--note unfit
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '1000',
                        QualityMoneyType: 'Unfit',
                        PackageMoneyType: obj[0].unit_note_unfit_1000,
                        Quantity: obj[0].pcs_note_unfit_1000,
                        Amount: obj[0].note_unfit_1000
                      })
                    }
                    if (obj[0].note_unfit_500 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '500',
                        QualityMoneyType: 'Unfit',
                        PackageMoneyType: obj[0].unit_note_unfit_500,
                        Quantity: obj[0].pcs_note_unfit_500,
                        Amount: obj[0].note_unfit_500
                      })
                    }
                    if (obj[0].note_unfit_100 > 0) {
                      console.log({
                        MoneyType: '100',
                        QualityMoneyType: 'Unfit',
                        PackageMoneyType: obj[0].unit_note_unfit_100,
                        Quantity: obj[0].pcs_note_unfit_100,
                        Amount: obj[0].note_unfit_100
                      })
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '100',
                        QualityMoneyType: 'Unfit',
                        PackageMoneyType: obj[0].unit_note_unfit_100,
                        Quantity: obj[0].pcs_note_unfit_100,
                        Amount: obj[0].note_unfit_100
                      })
                    }
                    if (obj[0].note_unfit_50 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '50',
                        QualityMoneyType: 'Unfit',
                        PackageMoneyType: obj[0].unit_note_unfit_50,
                        Quantity: obj[0].pcs_note_unfit_50,
                        Amount: obj[0].note_unfit_50
                      })
                    }
                    if (obj[0].note_unfit_20 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '20',
                        QualityMoneyType: 'Unfit',
                        PackageMoneyType: obj[0].unit_note_unfit_20,
                        Quantity: obj[0].pcs_note_unfit_20,
                        Amount: obj[0].note_unfit_20
                      })
                    }
                    if (obj[0].note_unfit_10 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '10',
                        QualityMoneyType: 'Unfit',
                        PackageMoneyType: obj[0].unit_note_unfit_10,
                        Quantity: obj[0].pcs_note_unfit_10,
                        Amount: obj[0].note_unfit_10
                      })
                    }
                    if (obj[0].note_uncount_1000 > 0) {
                      //--note uncount
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '1000',
                        QualityMoneyType: 'Uncount',
                        PackageMoneyType: obj[0].unit_note_uncount_1000,
                        Quantity: obj[0].pcs_note_uncount_1000,
                        Amount: obj[0].note_uncount_1000
                      })
                    }
                    if (obj[0].note_uncount_500 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '500',
                        QualityMoneyType: 'Uncount',
                        PackageMoneyType: obj[0].unit_note_uncount_500,
                        Quantity: obj[0].pcs_note_uncount_500,
                        Amount: obj[0].note_uncount_500
                      })
                    }
                    if (obj[0].note_uncount_100 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '100',
                        QualityMoneyType: 'Uncount',
                        PackageMoneyType: obj[0].unit_note_uncount_100,
                        Quantity: obj[0].pcs_note_uncount_100,
                        Amount: obj[0].note_uncount_100
                      })
                    }
                    if (obj[0].note_uncount_50 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '50',
                        QualityMoneyType: 'Uncount',
                        PackageMoneyType: obj[0].unit_note_uncount_50,
                        Quantity: obj[0].pcs_note_uncount_50,
                        Amount: obj[0].note_uncount_50
                      })
                    }
                    if (obj[0].note_uncount_20 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '20',
                        QualityMoneyType: 'Uncount',
                        PackageMoneyType: obj[0].unit_note_uncount_20,
                        Quantity: obj[0].pcs_note_uncount_20,
                        Amount: obj[0].note_uncount_20
                      })
                    }
                    if (obj[0].note_uncount_10 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '10',
                        QualityMoneyType: 'Uncount',
                        PackageMoneyType: obj[0].unit_note_uncount_10,
                        Quantity: obj[0].pcs_note_uncount_10,
                        Amount: obj[0].note_uncount_10
                      })
                    }
                    if (obj[0].coin_new_10 > 0) {
                      //--coin new
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '10',
                        QualityMoneyType: 'New',
                        PackageMoneyType: obj[0].unit_coin_new_10,
                        Quantity: obj[0].pcs_coin_new_10,
                        Amount: obj[0].coin_new_10
                      })
                    }
                    if (obj[0].coin_new_5 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '5',
                        QualityMoneyType: 'New',
                        PackageMoneyType: obj[0].unit_coin_new_5,
                        Quantity: obj[0].pcs_coin_new_5,
                        Amount: obj[0].coin_new_5
                      })
                    }
                    if (obj[0].coin_new_2 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '2',
                        QualityMoneyType: 'New',
                        PackageMoneyType: obj[0].unit_coin_new_2,
                        Quantity: obj[0].pcs_coin_new_2,
                        Amount: obj[0].coin_new_2
                      })
                    }
                    if (obj[0].coin_new_1 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '1',
                        QualityMoneyType: 'New',
                        PackageMoneyType: obj[0].unit_coin_new_1,
                        Quantity: obj[0].pcs_coin_new_1,
                        Amount: obj[0].coin_new_1
                      })
                    }
                    if (obj[0].note_new_20 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '20',
                        QualityMoneyType: 'New',
                        PackageMoneyType: obj[0].unit_note_new_20,
                        Quantity: obj[0].pcs_note_new_20,
                        Amount: obj[0].note_new_20
                      })
                    }
                    if (obj[0].coin_new_05 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '0.5',
                        QualityMoneyType: 'New',
                        PackageMoneyType: obj[0].unit_coin_new_05,
                        Quantity: obj[0].pcs_coin_new_05,
                        Amount: obj[0].coin_new_05
                      })
                    }
                    if (obj[0].coin_new_025 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '0.25',
                        QualityMoneyType: 'New',
                        PackageMoneyType: obj[0].unit_coin_new_025,
                        Quantity: obj[0].pcs_coin_new_025,
                        Amount: obj[0].coin_new_025
                      })
                    }
                    if (obj[0].coin_fit_10 > 0) {
                      //--coin fit
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '10',
                        QualityMoneyType: 'Fit',
                        PackageMoneyType: obj[0].unit_coin_fit_10,
                        Quantity: obj[0].pcs_coin_fit_10,
                        Amount: obj[0].coin_fit_10
                      })
                    }
                    //console.log('if (obj[0].coin_fit_5 > 0) {')
                    if (obj[0].coin_fit_5 > 0) {
                      //console.log('obj[0].coin_fit_5: ',obj[0].coin_fit_5)
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '5',
                        QualityMoneyType: 'Fit',
                        PackageMoneyType: obj[0].unit_coin_fit_5,
                        Quantity: obj[0].pcs_coin_fit_5,
                        Amount: obj[0].coin_fit_5
                      })
                    }
                    if (obj[0].coin_fit_2 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '2',
                        QualityMoneyType: 'Fit',
                        PackageMoneyType: obj[0].unit_coin_fit_2,
                        Quantity: obj[0].pcs_coin_fit_2,
                        Amount: obj[0].coin_fit_2
                      })
                    }
                    if (obj[0].coin_fit_1 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '1',
                        QualityMoneyType: 'Fit',
                        PackageMoneyType: obj[0].unit_coin_fit_1,
                        Quantity: obj[0].pcs_coin_fit_1,
                        Amount: obj[0].coin_fit_1
                      })
                    }
                    if (obj[0].note_fit_20 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '20',
                        QualityMoneyType: 'Fit',
                        PackageMoneyType: obj[0].unit_note_fit_20,
                        Quantity: obj[0].pcs_note_fit_20,
                        Amount: obj[0].note_fit_20
                      })
                    }
                    if (obj[0].coin_fit_05 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '0.5',
                        QualityMoneyType: 'Fit',
                        PackageMoneyType: obj[0].unit_coin_fit_05,
                        Quantity: obj[0].pcs_coin_fit_05,
                        Amount: obj[0].coin_fit_05
                      })
                    }
                    if (obj[0].coin_fit_025 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '0.25',
                        QualityMoneyType: 'Fit',
                        PackageMoneyType: obj[0].unit_coin_fit_025,
                        Quantity: obj[0].pcs_coin_fit_025,
                        Amount: obj[0].coin_fit_025
                      })
                    }
                    if (obj[0].coin_unfit_10 > 0) {
                      //--coin unfit
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '10',
                        QualityMoneyType: 'Unfit',
                        PackageMoneyType: obj[0].unit_coin_unfit_10,
                        Quantity: obj[0].pcs_coin_unfit_10,
                        Amount: obj[0].coin_unfit_10
                      })
                    }
                    if (obj[0].coin_unfit_5 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '5',
                        QualityMoneyType: 'Unfit',
                        PackageMoneyType: obj[0].unit_coin_unfit_5,
                        Quantity: obj[0].pcs_coin_unfit_5,
                        Amount: obj[0].coin_unfit_5
                      })
                    }
                    if (obj[0].coin_unfit_2 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '2',
                        QualityMoneyType: 'Unfit',
                        PackageMoneyType: obj[0].unit_coin_unfit_2,
                        Quantity: obj[0].pcs_coin_unfit_2,
                        Amount: obj[0].coin_unfit_2
                      })
                    }
                    if (obj[0].coin_unfit_1 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '1',
                        QualityMoneyType: 'Unfit',
                        PackageMoneyType: obj[0].unit_coin_unfit_1,
                        Quantity: obj[0].pcs_coin_unfit_1,
                        Amount: obj[0].coin_unfit_1
                      })
                    }
                    if (obj[0].note_unfit_20 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '20',
                        QualityMoneyType: 'Unfit',
                        PackageMoneyType: obj[0].unit_note_unfit_20,
                        Quantity: obj[0].pcs_note_unfit_20,
                        Amount: obj[0].note_unfit_20
                      })
                    }
                    if (obj[0].coin_unfit_05 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '0.5',
                        QualityMoneyType: 'Unfit',
                        PackageMoneyType: obj[0].unit_coin_unfit_05,
                        Quantity: obj[0].pcs_coin_unfit_05,
                        Amount: obj[0].coin_unfit_05
                      })
                    }
                    if (obj[0].coin_unfit_025 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '0.25',
                        QualityMoneyType: 'Unfit',
                        PackageMoneyType: obj[0].unit_coin_unfit_025,
                        Quantity: obj[0].pcs_coin_unfit_025,
                        Amount: obj[0].coin_unfit_025
                      })
                    }
                    if (obj[0].coin_uncount_10 > 0) {
                      //--coin uncount
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '10',
                        QualityMoneyType: 'Uncount',
                        PackageMoneyType: obj[0].unit_coin_uncount_10,
                        Quantity: obj[0].pcs_coin_uncount_10,
                        Amount: obj[0].coin_uncount_10
                      })
                    }
                    if (obj[0].coin_uncount_5 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '5',
                        QualityMoneyType: 'Uncount',
                        PackageMoneyType: obj[0].unit_coin_uncount_5,
                        Quantity: obj[0].pcs_coin_uncount_5,
                        Amount: obj[0].coin_uncount_5
                      })
                    }
                    if (obj[0].coin_uncount_2 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '2',
                        QualityMoneyType: 'Uncount',
                        PackageMoneyType: obj[0].unit_coin_uncount_2,
                        Quantity: obj[0].pcs_coin_uncount_2,
                        Amount: obj[0].coin_uncount_2
                      })
                    }
                    if (obj[0].coin_uncount_1 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '1',
                        QualityMoneyType: 'Uncount',
                        PackageMoneyType: obj[0].unit_coin_uncount_1,
                        Quantity: obj[0].pcs_coin_uncount_1,
                        Amount: obj[0].coin_uncount_1
                      })
                    }
                    if (obj[0].note_uncount_20 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '20',
                        QualityMoneyType: 'Uncount',
                        PackageMoneyType: obj[0].unit_note_uncount_20,
                        Quantity: obj[0].pcs_note_uncount_20,
                        Amount: obj[0].note_uncount_20
                      })
                    }
                    if (obj[0].coin_uncount_05 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '0.5',
                        QualityMoneyType: 'Uncount',
                        PackageMoneyType: obj[0].unit_coin_uncount_05,
                        Quantity: obj[0].pcs_coin_uncount_05,
                        Amount: obj[0].coin_uncount_05
                      })
                    }
                    if (obj[0].coin_uncount_025 > 0) {
                      OrderDataExisting.OrderDataDet.push({
                        MoneyType: '0.25',
                        QualityMoneyType: 'Uncount',
                        PackageMoneyType: obj[0].unit_coin_uncount_025,
                        Quantity: obj[0].pcs_coin_uncount_025,
                        Amount: obj[0].coin_uncount_025
                      })
                    }
                    // console.log(OrderDataExisting.OrderDataDet[1].MoneyType)
                    Id.value = OrderDataExisting.OrderDataDet.length
                    console.log(
                      'OrderDataExisting.OrderDataDet.length: ' +
                      OrderDataExisting.OrderDataDet.length
                    )
                    // addEditItem
                  },
                  (res) => {
                    // error callback
                    console.log(res.data)
                  }
                )
                .finally(() => {
                  //
                })
              // onMounted(getBranchAndCashEdit)
            } catch (err) {
              console.log(err)
            }
          })
        }
        // if (element.classList.contains("quick-btn")) {
        //   element.addEventListener("click", function (event) {
        //     event.stopPropagation(); // prevents further propagation of the current event in the capturing and bubbling phases.
        //     console.log(this.dataset.id + " quick-btn click!!");
        //   });
        // }
      })
    }
    // Get data on first rendering
    myRequest('').then((newData) => {
      data.rows = newData
    })
    const formatPrice = (value) => {
      let val = (value / 1).toFixed(2)
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    const dateTime = (value) => {
      return moment(value).format('DD-MM-YYYY')
    }
    const getBranchAndCashEdit = () => {
      OrderDataExisting.DataBranchToOrigin = []
      OrderDataExisting.DataBranchToDest = []
      if (OrderDataExisting.OrderType === 'Withdraw') {
        getBranchOrCashCenEdit('cashtobranch', 'BranchOrigin')
        getBranchOrCashCenEdit('branchtocash', 'BranchDest')
      }
      if (OrderDataExisting.OrderType === 'Deposit') {
        getBranchOrCashCenEdit('branchtocash', 'BranchOrigin')
        getBranchOrCashCenEdit('cashtobranch', 'BranchDest')
      }
    }
    const getBranchOrCashCenEdit = async (servicetype, ddltype) => {
      if (servicetype === 'branchtocash') {
        const params = {
          CustomerID: CustomerID.value
        }
        await axios.get('/getbranchdata', { params }).then(
          (res) => {
            // success callback
            ddltype === 'BranchOrigin'
              ? (OrderDataExisting.DataBranchToOrigin = res.data)
              : (OrderDataExisting.DataBranchToDest = res.data)
            // console.log(OrderDataExisting.DataBranchToOrigin)
            // console.log(OrderDataExisting.DataBranchToDest)
          },
          (res) => {
            // error callback
            console.log(res.data.message)
          }
        )
      }
      //--------------------------------------------
      if (servicetype === 'cashtobranch') {
        const params = {
          CustomerID: CustomerID.value
        }
        await axios.get('/getcashcenterdata', { params }).then(
          (res) => {
            // success callback
            ddltype === 'BranchOrigin'
              ? (OrderDataExisting.DataBranchToOrigin = res.data)
              : (OrderDataExisting.DataBranchToDest = res.data)
            // console.log(OrderDataExisting.DataBranchToOrigin)
            // console.log(OrderDataExisting.DataBranchToDest)
          },
          (res) => {
            // error callback
            console.log(res.data.message)
          }
        )
      }
    }
    const addManualOrder = async () => {
      const formData = new FormData()
      formData.append('OrderCategoryNew', NewOrder.OrderCategoryNew)
      formData.append('OrderTypeNew', NewOrder.OrderTypeNew)
      formData.append('BankTypeNew', NewOrder.BankTypeNew)
      formData.append('JobDateNew', NewOrder.JobDateNew)
      formData.append('RefNo', NewOrder.RefNo)
      formData.append('RemarkNew', NewOrder.RemarkNew)
      formData.append('BranchOrigin', NewOrder.BranchOrigin.branch_name)
      formData.append('BranchDest', NewOrder.BranchDest.branch_name)
      formData.append('BranchOrigin_code', NewOrder.BranchOrigin.branch_id)
      formData.append('BranchDest_code', NewOrder.BranchDest.branch_id)
      formData.append('AllRowsDet', Id.value)
      formData.append('gfc_cct_code', gfc_cct_code.value)
      formData.append('user_id', user_id.value)
      formData.append('CustomerID', CustomerID.value)
      for (var index = 0; index < Id.value; index++) {
        if (document.getElementById('ddlMoneyType' + (index + 1))) {
          formData.append(
            'ddlMoneyType' + (index + 1),
            document.getElementById('ddlMoneyType' + (index + 1)).value
          )
          formData.append(
            'ddlQualityMoneyType' + (index + 1),
            document.getElementById('ddlQualityMoneyType' + (index + 1)).value
          )
          formData.append(
            'ddlPackageMoneyType' + (index + 1),
            document.getElementById('ddlPackageMoneyType' + (index + 1)).value
          )
          formData.append(
            'tbQuantity' + (index + 1),
            document.getElementById('tbQuantity' + (index + 1)).value
          )
          formData.append(
            'tbAmount' + (index + 1),
            document.getElementById('tbAmount' + (index + 1)).value
          )
          // Id_++
        }
      }
      // this.showmyModalNew = true
      var object = {}
      formData.forEach((value, key) => (object[key] = value))
      var json = JSON.stringify(object)
      console.log('add data')
      console.log(json)
      try {
        await axios
          .post('/manual_add_order', json)
          .then(
            (res) => {
              // success callback
              console.log(res.data)
              // this.$refs.ClosemyModalNew.click();
              // document.getElementById('ClosemyModalNew').click();//************************** */
            },
            (res) => {
              // error callback
              console.log(res.data.message)
              message_addManual.value = res.data.message
            }
          )
          .finally(() => {
            // router.push('/listorder')
            location.reload()
          })
        error_addManual.value = false
      } catch (err) {
        console.log(err)
        message_addManual.value = 'Something went wrong: ' + err
        error_addManual.value = true
      }
    }
    const getBranchAndCash = () => {
      NewOrder.DataBranchToOrigin = []
      NewOrder.DataBranchToDest = []
      if (NewOrder.OrderTypeNew === 'Withdraw') {
        getBranchOrCashCen('cashtobranch', 'BranchOrigin')
        getBranchOrCashCen('branchtocash', 'BranchDest')
      }
      if (NewOrder.OrderTypeNew === 'Deposit') {
        getBranchOrCashCen('branchtocash', 'BranchOrigin')
        getBranchOrCashCen('cashtobranch', 'BranchDest')
      }
    }
    const getBranchOrCashCen = async (servicetype, ddltype) => {
      if (servicetype === 'branchtocash') {
        const params = {
          CustomerID: CustomerID.value
        }
        await axios.get('/getbranchdata', { params }).then(
          (res) => {
            // success callback
            ddltype === 'BranchOrigin'
              ? (NewOrder.DataBranchToOrigin = res.data)
              : (NewOrder.DataBranchToDest = res.data)
            console.log(NewOrder.DataBranchToOrigin)
            console.log(NewOrder.DataBranchToDest)
          },
          (res) => {
            // error callback
            console.log(res.data.message)
          }
        )
      }
      //--------------------------------------------
      if (servicetype === 'cashtobranch') {
        const params = {
          CustomerID: CustomerID.value
        }
        await axios.get('/getcashcenterdata', { params }).then(
          (res) => {
            // success callback
            ddltype === 'BranchOrigin'
              ? (NewOrder.DataBranchToOrigin = res.data)
              : (NewOrder.DataBranchToDest = res.data)
            console.log(NewOrder.DataBranchToOrigin)
            console.log(NewOrder.DataBranchToDest)
          },
          (res) => {
            // error callback
            console.log(res.data.message)
          }
        )
      }
    }
    const calamount_orderEdit = (value) => {
      console.log(document.getElementById('ddlMoneyTypeEdit' + value).value)
      console.log(
        document.getElementById('ddlPackageMoneyTypeEdit' + value).value
      )
      console.log(document.getElementById('tbQuantityEdit' + value).value)
      console.log(document.getElementById('tbAmountEdit' + value).value)
      let ddlMoneyType = parseFloat(
        document.getElementById('ddlMoneyTypeEdit' + value).value,
        10
      )
      let tbQuantity = parseFloat(
        document
          .getElementById('tbQuantityEdit' + value)
          .value.replaceAll(',', ''),
        10
      )
      let ddlPackageMoneyType = document.getElementById(
        'ddlPackageMoneyTypeEdit' + value
      ).value
      // let ddlQualityMoneyType = document.getElementById("ddlQualityMoneyTypeEdit" + value).value
      if (ddlPackageMoneyType === 'Bundle') {
        !isNaN(ddlMoneyType * tbQuantity * 1000)
          ? (document.getElementById('tbAmountEdit' + value).value =
            formatPrice(ddlMoneyType * tbQuantity * 1000))
          : (document.getElementById('tbAmountEdit' + value).value = '')
      } else if (ddlPackageMoneyType === 'Pack') {
        !isNaN(ddlMoneyType * tbQuantity * 5000)
          ? (document.getElementById('tbAmountEdit' + value).value =
            formatPrice(ddlMoneyType * tbQuantity * 5000))
          : (document.getElementById('tbAmountEdit' + value).value = '')
      } else {
        !isNaN(ddlMoneyType * tbQuantity)
          ? (document.getElementById('tbAmountEdit' + value).value =
            formatPrice(ddlMoneyType * tbQuantity))
          : (document.getElementById('tbAmountEdit' + value).value = '')
      }
      //console.log(ddlMoneyType * tbQuantity * 5000)
      // let my_object = {
      //   Id: value,
      //   ddlMoneyType_: ddlMoneyType,
      //   ddlQualityMoneyType_: ddlQualityMoneyType,
      //   ddlPackageMoneyType_: ddlPackageMoneyType,
      //   tbQuantity_: tbQuantity,
      //   tbAmount_: document.getElementById("tbAmount" + value).value
      // };
      // NewOrderDet.push(my_object)
    }
    const calamount = (value) => {
      console.log(document.getElementById('ddlMoneyType' + value).value)
      console.log(document.getElementById('ddlPackageMoneyType' + value).value)
      console.log(document.getElementById('tbQuantity' + value).value)
      console.log(document.getElementById('tbAmount' + value).value)
      let ddlMoneyType = parseFloat(
        document.getElementById('ddlMoneyType' + value).value,
        10
      )
      let tbQuantity = parseFloat(
        document.getElementById('tbQuantity' + value).value.replaceAll(',', ''),
        10
      )
      let ddlPackageMoneyType = document.getElementById(
        'ddlPackageMoneyType' + value
      ).value
      let ddlQualityMoneyType = document.getElementById(
        'ddlQualityMoneyType' + value
      ).value
      if (ddlPackageMoneyType === 'Bundle') {
        !isNaN(ddlMoneyType * tbQuantity * 1000)
          ? (document.getElementById('tbAmount' + value).value = formatPrice(
            ddlMoneyType * tbQuantity * 1000
          ))
          : (document.getElementById('tbAmount' + value).value = '')
      } else if (ddlPackageMoneyType === 'Pack') {
        !isNaN(ddlMoneyType * tbQuantity * 5000)
          ? (document.getElementById('tbAmount' + value).value = formatPrice(
            ddlMoneyType * tbQuantity * 5000
          ))
          : (document.getElementById('tbAmount' + value).value = '')
      } else {
        !isNaN(ddlMoneyType * tbQuantity)
          ? (document.getElementById('tbAmount' + value).value = formatPrice(
            ddlMoneyType * tbQuantity
          ))
          : (document.getElementById('tbAmount' + value).value = '')
      }
      console.log(ddlMoneyType * tbQuantity * 5000)
      // let my_object = {
      //   Id: value,
      //   ddlMoneyType_: ddlMoneyType,
      //   ddlQualityMoneyType_: ddlQualityMoneyType,
      //   ddlPackageMoneyType_: ddlPackageMoneyType,
      //   tbQuantity_: tbQuantity,
      //   tbAmount_: document.getElementById("tbAmount" + value).value
      // };
      // NewOrderDet.push(my_object)
    }
    const addEditItem = () => {
      Id.value++
      let ddlMoneyTypeEdit = ''
      ddlMoneyTypeEdit =
        "<select class='form-select form-select-sm text-right' id='ddlMoneyTypeEdit" +
        Id.value +
        "'>"
      ddlMoneyTypeEdit += "<option value='1000'>1,000</option>"
      ddlMoneyTypeEdit += "<option value='500'>500</option>"
      ddlMoneyTypeEdit += "<option value='100'>100</option>"
      ddlMoneyTypeEdit += "<option value='20'>20</option>"
      ddlMoneyTypeEdit += "<option value='10'>10</option>"
      ddlMoneyTypeEdit += "<option value='5'>5</option>"
      ddlMoneyTypeEdit += "<option value='2'>2</option>"
      ddlMoneyTypeEdit += "<option value='1'>1</option>"
      ddlMoneyTypeEdit += "<option value='0.5'>0.50</option>"
      ddlMoneyTypeEdit += '</select>'
      let ddlQualityMoneyTypeEdit = ''
      ddlQualityMoneyTypeEdit =
        "<select class='form-select form-select-sm' id='ddlQualityMoneyTypeEdit" +
        Id.value +
        "'>"
      ddlQualityMoneyTypeEdit += "<option value='New'>ใหม่</option>"
      ddlQualityMoneyTypeEdit += "<option value='Fit'>ดี</option>"
      ddlQualityMoneyTypeEdit += "<option value='Unfit'>เสีย</option>"
      ddlQualityMoneyTypeEdit += "<option value='Uncount'>รอคัดนับ</option>"
      ddlQualityMoneyTypeEdit += '</select>'
      let ddlPackageMoneyTypeEdit = ''
      ddlPackageMoneyTypeEdit =
        "<select class='form-select form-select-sm' id='ddlPackageMoneyTypeEdit" +
        Id.value +
        "'>"
      ddlPackageMoneyTypeEdit += "<option value='Bundle'>มัด</option>"
      ddlPackageMoneyTypeEdit += "<option value='Piece'>ฉบับ</option>"
      ddlPackageMoneyTypeEdit += "<option value='Coin'>เหรียญ</option>"
      ddlPackageMoneyTypeEdit += "<option value='Pack'>แพ็ค</option>"
      ddlPackageMoneyTypeEdit += '</select>'
      let tbQuantityEdit = ''
      tbQuantityEdit =
        "<input type='text' id='tbQuantityEdit" +
        Id.value +
        "' class='form-control text-right' style='width:10rem;'>"
      let tbAmount = ''
      tbAmount =
        "<input type='text' id='tbAmount" +
        Id.value +
        "' class='form-control text-right' style='width:10rem;' readonly='readonly'>"
      let my_object = {
        Id: Id.value,
        ddlMoneyType_: ddlMoneyTypeEdit,
        ddlQualityMoneyType_: ddlQualityMoneyTypeEdit,
        ddlQualityMoneyType_: ddlQualityMoneyTypeEdit,
        ddlPackageMoneyType_: ddlPackageMoneyTypeEdit,
        tbQuantity_: tbQuantityEdit,
        tbAmount_: tbAmount
      }
      if (rowDataEdit.value.length > 1) {
        if (
          !isNaN(
            document.getElementById('tbQuantityEdit' + (Id.value - 1)).value
          ) &&
          document.getElementById('tbQuantityEdit' + (Id.value - 1)).value !=
          '' &&
          !!document.getElementById('tbQuantityEdit' + (Id.value - 1)).value
        ) {
          document.getElementById('tbQuantityEdit' + (Id.value - 1)).value =
            formatPrice_noFixed(
              parseFloat(
                document
                  .getElementById('tbQuantityEdit' + (Id.value - 1))
                  .value.replaceAll(',', '')
              )
            )
        }
      }
      // if (rowDataEdit.value.length > 1) {
      //   //document.getElementById("tbQuantityEdit" + (Id - 1)).value = this.formatPrice_noFixed(parseFloat(document.getElementById("tbQuantityEdit" + (Id - 1)).value))
      // }
      rowDataEdit.value.push(my_object)
      console.log(rowDataEdit)
    }
    const updateCheckedRows = (rowsKey) => {
      console.log('rowsKey: ', rowsKey)
    }
    const formatPrice_noFixed = (value) => {
      let val = value / 1
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    const addItem = () => {
      Id.value++
      let ddlMoneyType = ''
      ddlMoneyType =
        "<select class='form-select form-select-sm text-right' id='ddlMoneyType" +
        Id.value +
        "'>"
      ddlMoneyType += "<option value='1000'>1,000</option>"
      ddlMoneyType += "<option value='500'>500</option>"
      ddlMoneyType += "<option value='100'>100</option>"
      ddlMoneyType += "<option value='20'>20</option>"
      ddlMoneyType += "<option value='10'>10</option>"
      ddlMoneyType += "<option value='5'>5</option>"
      ddlMoneyType += "<option value='2'>2</option>"
      ddlMoneyType += "<option value='1'>1</option>"
      ddlMoneyType += "<option value='0.5'>0.50</option>"
      ddlMoneyType += '</select>'
      let ddlQualityMoneyType = ''
      ddlQualityMoneyType =
        "<select class='form-select form-select-sm' id='ddlQualityMoneyType" +
        Id.value +
        "'>"
      ddlQualityMoneyType += "<option value='New'>ใหม่</option>"
      ddlQualityMoneyType += "<option value='Fit'>ดี</option>"
      ddlQualityMoneyType += "<option value='Unfit'>เสีย</option>"
      ddlQualityMoneyType += "<option value='Uncount'>รอคัดนับ</option>"
      ddlQualityMoneyType += '</select>'
      let ddlPackageMoneyType = ''
      ddlPackageMoneyType =
        "<select class='form-select form-select-sm' id='ddlPackageMoneyType" +
        Id.value +
        "'>"
      ddlPackageMoneyType += "<option value='Bundle'>มัด</option>"
      ddlPackageMoneyType += "<option value='Piece'>ฉบับ</option>"
      ddlPackageMoneyType += "<option value='Coin'>เหรียญ</option>"
      ddlPackageMoneyType += "<option value='Pack'>แพ็ค</option>"
      ddlPackageMoneyType += '</select>'
      let tbQuantity = ''
      tbQuantity =
        "<input type='text' id='tbQuantity" +
        Id.value +
        "' class='form-control text-right' style='width:10rem;'>"
      let tbAmount = ''
      tbAmount =
        "<input type='text' id='tbAmount" +
        Id.value +
        "' class='form-control text-right' style='width:10rem;' readonly='readonly'>"
      let my_object = {
        Id: Id.value,
        ddlMoneyType_: ddlMoneyType,
        ddlQualityMoneyType_: ddlQualityMoneyType,
        ddlQualityMoneyType_: ddlQualityMoneyType,
        ddlPackageMoneyType_: ddlPackageMoneyType,
        tbQuantity_: tbQuantity,
        tbAmount_: tbAmount
      }
      if (rowData.length > 1) {
        if (
          !isNaN(
            document.getElementById('tbQuantity' + (Id.value - 1)).value
          ) &&
          document.getElementById('tbQuantity' + (Id.value - 1)).value != '' &&
          !!document.getElementById('tbQuantity' + (Id.value - 1)).value
        ) {
          document.getElementById('tbQuantity' + (Id.value - 1)).value =
            formatPrice_noFixed(
              parseFloat(
                document
                  .getElementById('tbQuantity' + (Id.value - 1))
                  .value.replaceAll(',', '')
              )
            )
        }
      }
      rowData.push(my_object)
    }
    const deleteData = (index) => {
      console.log(index)
      rowData.splice(index, 1)
    }
    const editOrder = async () => {
      const formData = new FormData()
      formData.append('orderId', OrderDataExisting.orderId)
      formData.append('OrderCategory', OrderDataExisting.OrderCategory)
      formData.append('OrderType', OrderDataExisting.OrderType)
      formData.append('BankType', OrderDataExisting.BankType)
      formData.append('JobDate', OrderDataExisting.JobDate)
      formData.append('RefNo', OrderDataExisting.RefNo)
      formData.append('RemarkNew', OrderDataExisting.Remark)
      //formData.append('BranchOrigin', OrderDataExisting.BranchOrigin.branch_name)
      formData.append('BranchOrigin', OrderDataExisting.BranchOriginText)
      formData.append('BranchOrigin_code', OrderDataExisting.BranchOriginId)
      formData.append('BranchDest', OrderDataExisting.BranchDestText)
      formData.append('BranchDest_code', OrderDataExisting.BranchDestId)
      formData.append('AllRowsDet', Id.value)
      formData.append('user_id', user_id.value)
      formData.append('CustomerID', CustomerID.value)
      for (var index = 0; index < Id.value; index++) {
        if (document.getElementById('ddlMoneyTypeEdit' + (index + 1))) {
          formData.append(
            'ddlMoneyType' + (index + 1),
            document.getElementById('ddlMoneyTypeEdit' + (index + 1)).value
          )
          formData.append(
            'ddlQualityMoneyType' + (index + 1),
            document.getElementById('ddlQualityMoneyTypeEdit' + (index + 1))
              .value
          )
          formData.append(
            'ddlPackageMoneyType' + (index + 1),
            document.getElementById('ddlPackageMoneyTypeEdit' + (index + 1))
              .value
          )
          formData.append(
            'tbQuantity' + (index + 1),
            document.getElementById('tbQuantityEdit' + (index + 1)).value
          )
          formData.append(
            'tbAmount' + (index + 1),
            document.getElementById('tbAmountEdit' + (index + 1)).value
          )
          // Id_++
        }
      }
      // this.showmyModalNew = true
      var object = {}
      // console.log('edit data')
      formData.forEach((value, key) => (object[key] = value))
      var json = JSON.stringify(object)
      console.log(json)
      try {
        await axios
          .post('/edit_order', json)
          .then(
            (res) => {
              // success callback
              console.log(res.data)
              // this.$refs.ClosemyModalNew.click();
              document.getElementById('ClosemyModalEidt').click()
            },
            (res) => {
              // error callback
              error_editOrder.value = false
              console.log(res.message)
              message_editOrder.value = res.message
            }
          )
          .finally(() => {
            //router.push('/listorder')
            location.reload()
          })
        message_editOrder.value = 'Edit Done'
      } catch (err) {
        console.log(err)
        message_editOrder.value = 'Something went wrong: ' + err
        error_editOrder.value = true
      }
    }
    return {
      searchTerm,
      table,
      sidebarWidth,
      Data_,
      updateCheckedRows,
      tableLoadingFinish,
      OrderDataExisting,
      getBranchAndCashEdit,
      addEditItem,
      editOrder,
      formatPrice,
      router,
      format_date,
      sendFile,
      selectFile,
      file,
      error,
      error_addManual,
      message,
      message_addManual,
      message_editOrder,
      error_editOrder,
      OrderCategory,
      OrderType,
      BankType,
      JobDate,
      user_id,
      department_id,
      position_id,
      CustomerID,
      gfc_cct,
      formatdate_show,
      formatPrice_noFixed,
      addItem,
      deleteData,
      addManualOrder,
      NewOrder,
      getBranchAndCash,
      getBranchOrCashCen,
      calamount,
      rowData,
      Id,
      rowDataEdit,
      calamount_orderEdit,
      sendApprove,
      checkstatus_send_to_checker //,NewOrderDet
    }
  }
})
</script>
  
<style scoped lang="css">
@import '../assets/css/style.css';

::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  background-color: #5d6d7e;
  border-color: #eaeded;
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
  