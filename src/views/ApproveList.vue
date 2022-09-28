<template>
    <Header />
    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidth }" class="row ps-4">
        <!-- <div class="container p-0" style="width: 200rem"> -->
        <div class="row p-1" style="width: 100%">
            <div class="col text-left">&nbsp;</div>
        </div>
        <div class="row p-1" style="width: 100%">
            <div class="col text-left">
                <h3>รายการอนุมัติ</h3>
            </div>
        </div>
        <div class="row p-1" style="width: 100%">
            <div class="col d-flex justify-content-end">
                <h4 data-bs-target="#myModalNew" data-bs-toggle="modal" class="text-decoration-none text-gray fs-5"
                    style="cursor: pointer">สร้างรายการ</h4>
            </div>
        </div>
        <div class="row p-0" style="width: 100%">
            <div class="col-12">
                <div style="text-align: right">
                    <label>SearchBy:</label><input v-model="searchTerm" />
                </div>
                <table-lite :is-static-mode="true" :has-checkbox="true" :is-loading="table.isLoading"
                    :columns="table.columns" :rows="table.rows" :total="table.totalRecordCount"
                    :sortable="table.sortable" @is-finished="tableLoadingFinish"
                    @return-checked-rows="updateCheckedRows" class="table table-striped table-hover">
                </table-lite>
            </div>
        </div>
        <!-- </div> -->
    </div>
    <div class="container py-2">
        <div class="py-2">
            <form @submit.prevent="addManualOrder" enctype="multipart/form-data" id="form1">
                <div class="modal fade" id="myModalNew">
                    <div class="modal-dialog  modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">รายการคำสั่ง</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="container">
                                    <div class="row p-2">
                                        <div class="col ps-4 d-flex">
                                            <h5 class="ps-1 text-gray">รายการใหม่</h5>
                                        </div>
                                    </div>
                                    <div class="row p-2" v-if="messageNew">
                                        <div class="col">
                                            <div :class="`alert ${errorNew ? 'alert-danger' : 'alert-success'}`">{{
                                            messageNew }}</div>
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col-sm-2">
                                            Process Name
                                        </div>
                                        <div class="col ps-4 d-flex">
                                            &nbsp; <input type="text" id="ProcessName" class="form-control"
                                                style="width:25rem;" v-model="NewOrder.RemarkNew">
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col-sm-2">
                                            Order Type
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col">
                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="CIT-tab" data-bs-toggle="tab"
                                                        data-bs-target="#CIT" type="button" role="tab"
                                                        aria-controls="CIT" aria-selected="true">CIT</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="ATM-tab" data-bs-toggle="tab"
                                                        data-bs-target="#ATM" type="button" role="tab"
                                                        aria-controls="ATM" aria-selected="false">ATM</button>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade show active d-flex justify-content-start"
                                                    id="CIT" role="tabpanel" aria-labelledby="CIT-tab">
                                                    <div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="inlineCheckbox1" value="option1">
                                                            <label class="form-check-label"
                                                                for="inlineCheckbox1">All</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="inlineCheckbox2" value="option2">
                                                            <label class="form-check-label"
                                                                for="inlineCheckbox2">2</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="inlineCheckbox3" value="option3">
                                                            <label class="form-check-label"
                                                                for="inlineCheckbox3">3</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="inlineCheckbox4" value="option4">
                                                            <label class="form-check-label"
                                                                for="inlineCheckbox3">4</label>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="inlineCheckbox1" value="option1">
                                                            <label class="form-check-label"
                                                                for="inlineCheckbox1">All</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="inlineCheckbox2" value="option2">
                                                            <label class="form-check-label"
                                                                for="inlineCheckbox2">2</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="inlineCheckbox3" value="option3">
                                                            <label class="form-check-label"
                                                                for="inlineCheckbox3">3</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="inlineCheckbox4" value="option4">
                                                            <label class="form-check-label"
                                                                for="inlineCheckbox3">4</label>
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                                <div class="tab-pane fade" id="ATM" role="tabpanel"
                                                    aria-labelledby="ATM-tab">...ATM</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col">
                                            เลขที่อ้างอิง
                                        </div>
                                        <div class="col">
                                            <input type="text" id="RefNo" class="form-control" style="width:15rem;"
                                                v-model="NewOrder.RefNo">
                                        </div>
                                        <div class="col">
                                            วันที่ปฎิบัติการ
                                        </div>
                                        <div class="col">
                                            <input type="date" id="JobDateNew" class="form-control" style="width:15rem;"
                                                v-model="NewOrder.JobDateNew">
                                            <!-- <date-pick :format="'YYYY.MM.DD'"></date-pick> -->
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col">
                                            ต้นทาง
                                        </div>
                                        <div class="col">
                                            <select class="form-select form-select-sm" name="BranchOrigin"
                                                style="width:15rem;" v-model="NewOrder.BranchOrigin">

                                                <option v-for="data in NewOrder.DataBranchToOrigin"
                                                    :key="data.branch_id"
                                                    v-bind:value="{ branch_id: data.branch_id, branch_name: data.branch_name }">
                                                    {{
                                                    data.branch_name }}
                                                </option>

                                            </select>
                                        </div>
                                        <div class="col">
                                            ปลายทาง
                                        </div>
                                        <div class="col">
                                            <select class="form-select form-select-sm" name="BranchDest"
                                                style="width:15rem;" v-model="NewOrder.BranchDest">
                                                <option v-for="data in NewOrder.DataBranchToDest" :key="data.branch_id"
                                                    v-bind:value="{ branch_id: data.branch_id, branch_name: data.branch_name }">
                                                    {{
                                                    data.branch_name }}
                                                </option>
                                                <!-- <option value="BankBranch">Bank Branch</option> -->
                                                <!-- <option value="ForexCounting">Forex Counting</option> -->
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col-sm-2">
                                            หมายเหตุ
                                        </div>
                                        <div class="col ps-4 d-flex">
                                            &nbsp;<input type="text" id="RemarkNew" class="form-control"
                                                style="width:15rem;" v-model="NewOrder.RemarkNew">
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col ps-4 d-flex">
                                            <h5 class="ps-1 text-gray">รายละเอียดคำสั่ง</h5>
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col"><span @click.prevent="addItem()"
                                                            class="text-decoration-none text-gray fs-7"
                                                            style="cursor: pointer"><i
                                                                class="fa fa-plus-circle align-middle" />
                                                        </span>
                                                    </th>
                                                    <th scope="col">ชนิดราคา</th>
                                                    <th scope="col">คุณภาพ</th>
                                                    <th scope="col">หน่วย</th>
                                                    <th scope="col">จำนวน</th>
                                                    <th scope="col">ยอดรวม</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="data, index in rowData" :key="data.Id">
                                                    <td scope="col"><span @click="deleteData(index)"
                                                            style="cursor: pointer"><i
                                                                class="fa fa-minus-square align-middle"
                                                                aria-hidden="true"></i></span>&nbsp;|&nbsp;<span
                                                            @click.prevent="addItem()"
                                                            class="text-decoration-none text-gray fs-7"
                                                            style="cursor: pointer"><i
                                                                class="fa fa-plus-circle align-middle" /></span></td>
                                                    <td scope="col" v-html="data.ddlMoneyType_"
                                                        @click="calamount(data.Id)" @keyup="calamount(data.Id)"></td>
                                                    <td scope="col" v-html="data.ddlQualityMoneyType_"></td>
                                                    <td scope="col" v-html="data.ddlPackageMoneyType_"
                                                        @click="calamount(data.Id)" @keyup="calamount(data.Id)"></td>
                                                    <td scope="col" v-html="data.tbQuantity_"
                                                        @change="calamount(data.Id)" @keyup="calamount(data.Id)"></td>
                                                    <td scope="col" v-html="data.tbAmount_"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer pt-0 justify-content-center">
                                <div class="align-top pt-1 d-flex justify-content-center">
                                    <button class="btn btn-primary"
                                        style="width:4rem; height:2rem;">บันทึก</button><button
                                        class="btn btn-secondary" data-bs-dismiss="modal" type="reset"
                                        ref="ClosemyModalNew" style="width:4rem; height:2rem;">ยกเลิก</button>
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
import { collapsed, toggleSidebar, sidebarWidth } from '../components/sidebar/state'
import Header from '../components/Header'
import axios from 'axios'
import moment from 'moment'
import { defineComponent, reactive, ref, computed, watch, onMounted } from "vue";
import TableLite from "../components/TableLite.vue";


export default defineComponent({
    name: 'ApproveList',
    components: { TableLite, Sidebar, Header, collapsed, toggleSidebar, sidebarWidth },
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth, }
    },
    data() {
        return {
            file: "",
            error: false,
            error2: false,
            message: "",
            messageNew: "",
            messageEdit: "",
            OrderCategory: "BankBranch",
            OrderType: "",
            BankType: "",
            JobDate: null,
            //Data_: [],
            rowData: [],
            NewOrder: {
                OrderCategoryNew: "BankBranch",
                OrderTypeNew: "",
                BankTypeNew: "",
                JobDateNew: null,
                RefNo: "",
                RemarkNew: "",
                DataBranchToOrigin: [],
                DataBranchToDest: [],
                BranchOrigin: "",
                BranchDest: "",
            },
            NewOrderDet: [],
            Id: 0,
            user_id: localStorage.getItem('user_id'),
            department_id: localStorage.getItem('department_id'),
            position_id: localStorage.getItem('position_id'),
            CustomerID: localStorage.getItem('CustomerID'),
            gfc_cct: localStorage.getItem('gfc_cct'),
            // time: null,
            // full: null,
            // selected: null,
            // from: null,
            // to: null,
            // yearSelected: null,
            // monthSelected: null,
            // disabledTime: [
            //   set(new Date(), { hours: 11, minutes: 12 }),
            //   set(new Date(), { hours: 12, minutes: 30 })
            // ],
        }
    },
    setup() {
        console.log("setup")
        const searchTerm = ref(""); // Search text
        // Fake data
        const data = reactive({
            rows: [],
        });
        let Data_ = ref([]);//[]
        onMounted(async () => {
            const res = await axios.get('/orderlist')
                .then((res) => {
                    Data_.value = JSON.parse(JSON.stringify(res.data))
                    console.log(Data_)
                    //Data_
                    // console.log(fakeData)
                }, (res) => {
                    // error callback
                    console.log(res.data)
                });
            // table.ajax.reload()
        })
        /**
         * Get server data request
         */
        const myRequest = async (keyword) => {
            const fakeData = [];
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
                                x.order_date.toLowerCase().includes(keyword.toLowerCase())
                        );
                        resolve(newData);
                    }, 200);
                } catch (error) {
                    console.log("Fetch error", error);
                    reject();
                }
            });
        };
        const formatPrice = (value) => {
            let val = (value / 1).toFixed(2)
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        const dateTime = (value) => {
            return moment(value).format("DD-MM-YYYY");
        }
        const getBranchAndCashEdit = () => {
            OrderDataExisting.DataBranchToOrigin = []
            OrderDataExisting.DataBranchToDest = []
            if (OrderDataExisting.OrderType === "Withdraw") {
                getBranchOrCashCenEdit('cashtobranch', 'BranchOrigin')
                getBranchOrCashCenEdit('branchtocash', 'BranchDest')
            }
            if (OrderDataExisting.OrderType === "Deposit") {
                getBranchOrCashCenEdit('branchtocash', 'BranchOrigin')
                getBranchOrCashCenEdit('cashtobranch', 'BranchDest')
            }
        }
        const getBranchOrCashCenEdit = async (servicetype, ddltype) => {

            if (servicetype === 'branchtocash') {
                await axios.get('/getbranchdata')
                    .then((res) => {
                        // success callback           
                        ddltype === 'BranchOrigin' ? OrderDataExisting.DataBranchToOrigin = res.data : OrderDataExisting.DataBranchToDest = res.data
                        // console.log(OrderDataExisting.DataBranchToOrigin)
                        // console.log(OrderDataExisting.DataBranchToDest)
                    }, (res) => {
                        // error callback
                        console.log(res.data.message)
                    });
            }
            //--------------------------------------------
            if (servicetype === 'cashtobranch') {
                await axios.get('/getcashcenterdata')
                    .then((res) => {
                        // success callback
                        ddltype === 'BranchOrigin' ? OrderDataExisting.DataBranchToOrigin = res.data : OrderDataExisting.DataBranchToDest = res.data
                        // console.log(OrderDataExisting.DataBranchToOrigin)
                        // console.log(OrderDataExisting.DataBranchToDest)
                    }, (res) => {
                        // error callback
                        console.log(res.data.message)
                    });
            }
        }
        const Id = ref(0)
        const rowDataEdit = ref([])
        const addEditItem = () => {
            Id.value++
            let ddlMoneyTypeEdit = ""
            ddlMoneyTypeEdit = "<select class='form-select form-select-sm text-right' id='ddlMoneyTypeEdit" + Id.value + "'>"
            ddlMoneyTypeEdit += "<option value='1000'>1,000</option>"
            ddlMoneyTypeEdit += "<option value='500'>500</option>"
            ddlMoneyTypeEdit += "<option value='100'>100</option>"
            ddlMoneyTypeEdit += "<option value='20'>20</option>"
            ddlMoneyTypeEdit += "<option value='10'>10</option>"
            ddlMoneyTypeEdit += "<option value='5'>5</option>"
            ddlMoneyTypeEdit += "<option value='2'>2</option>"
            ddlMoneyTypeEdit += "<option value='1'>1</option>"
            ddlMoneyTypeEdit += "<option value='0.5'>0.50</option>"
            ddlMoneyTypeEdit += "</select>"
            let ddlQualityMoneyTypeEdit = ""
            ddlQualityMoneyTypeEdit = "<select class='form-select form-select-sm' id='ddlQualityMoneyTypeEdit" + Id.value + "'>"
            ddlQualityMoneyTypeEdit += "<option value='New'>ใหม่</option>"
            ddlQualityMoneyTypeEdit += "<option value='Fit'>ดี</option>"
            ddlQualityMoneyTypeEdit += "<option value='Unfit'>เสีย</option>"
            ddlQualityMoneyTypeEdit += "<option value='Uncount'>รอคัดนับ</option>"
            ddlQualityMoneyTypeEdit += "</select>"
            let ddlPackageMoneyTypeEdit = ""
            ddlPackageMoneyTypeEdit = "<select class='form-select form-select-sm' id='ddlPackageMoneyTypeEdit" + Id.value + "'>"
            ddlPackageMoneyTypeEdit += "<option value='Bundle'>มัด</option>"
            ddlPackageMoneyTypeEdit += "<option value='Piece'>ฉบับ</option>"
            ddlPackageMoneyTypeEdit += "<option value='Coin'>เหรียญ</option>"
            ddlPackageMoneyTypeEdit += "<option value='Pack'>แพ็ค</option>"
            ddlPackageMoneyTypeEdit += "</select>"
            let tbQuantityEdit = ""
            tbQuantityEdit = "<input type='text' id='tbQuantityEdit" + Id.value + "' class='form-control text-right' style='width:10rem;'>"
            let tbAmount = ""
            tbAmount = "<input type='text' id='tbAmount" + Id.value + "' class='form-control text-right' style='width:10rem;' readonly='readonly'>"
            let my_object = {
                Id: Id.value,
                ddlMoneyType_: ddlMoneyTypeEdit,
                ddlQualityMoneyType_: ddlQualityMoneyTypeEdit,
                ddlQualityMoneyType_: ddlQualityMoneyTypeEdit,
                ddlPackageMoneyType_: ddlPackageMoneyTypeEdit,
                tbQuantity_: tbQuantityEdit,
                tbAmount_: tbAmount,
            };
            if (rowDataEdit.value.length > 1) {
                //document.getElementById("tbQuantityEdit" + (Id - 1)).value = this.formatPrice_noFixed(parseFloat(document.getElementById("tbQuantityEdit" + (Id - 1)).value))
            }
            rowDataEdit.value.push(my_object)
            console.log(rowDataEdit)
        }
        // Table config
        const table = reactive({
            isLoading: false,
            columns: [
                {
                    label: "Process Name",
                    //field: "AutoID",
                    width: "25%",
                    sortable: true,
                    isKey: true,
                },
                {
                    label: "Order Type",
                    //field: "servicetype",
                    width: "25%",
                    sortable: true,
                },
                {
                    label: "Process Setting",
                    //   field: "branchorigin_name",
                    width: "15%",
                    sortable: true,
                },
                {
                    label: "Operation",
                    //field: "branchdest_name",
                    width: "15%",
                    sortable: true,
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
        const OrderDataExisting = reactive({
            BankType: "",
            OrderCategory: "BankBranch",
            OrderType: "",
            RefNo: "",
            JobDate: null,
            BranchOriginText: "",
            BranchOriginId: "",
            BranchDestText: "",
            BranchDestId: "",
            DataBranchToOrigin: [],
            DataBranchToDest: [],
            Remark: "",
            OrderDataDet: [],
        });
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
                    element.addEventListener("click", async () => {
                        // console.log(this.dataset.id + " rejectorder!!");
                        if (confirm("คุณต้องการ Reject รายการคำสั่ง?")) {
                            const params = {
                                Id: this.dataset.id,
                                Type_: 'reject'
                            };
                            try {
                                await axios.get('/rejectorder', { params })
                                    .then((res) => {
                                        // success callback
                                        let obj = JSON.parse(JSON.stringify(res.data))
                                        console.log(obj[0])
                                        this.$router.push('/listorder')
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
                    element.addEventListener("click", async () => {
                        // console.log(this.dataset.id + " rejectorder!!");
                        if (confirm("คุณต้องการยกเลิกรายการคำสั่ง?")) {
                            const params = {
                                Id: this.dataset.id,
                                Type_: 'reject'
                            };
                            try {
                                await axios.get('/rejectorder', { params })
                                    .then((res) => {
                                        // success callback
                                        let obj = JSON.parse(JSON.stringify(res.data))
                                        console.log(obj[0])
                                        this.$router.push('/listorder')
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
                if (element.classList.contains("editorder")) {
                    element.addEventListener("click", async function () {
                        const params = {
                            Id: this.dataset.id
                        };
                        //console.log( params )
                        try {
                            await axios.get('/getcashorder', { params })
                                .then((res) => {
                                    // success callback
                                    let obj = JSON.parse(JSON.stringify(res.data))
                                    console.log(obj[0])
                                    OrderDataExisting.BankType = obj[0].customerID
                                    OrderDataExisting.OrderCategory = obj[0].order_category
                                    OrderDataExisting.OrderType = obj[0].servicetype
                                    OrderDataExisting.RefNo = obj[0].refno
                                    OrderDataExisting.JobDate = obj[0].order_date
                                    OrderDataExisting.BranchOriginText = obj[0].branchorigin_name
                                    OrderDataExisting.BranchOriginId = obj[0].branchorigin_code
                                    OrderDataExisting.BranchDestText = obj[0].branchdest_name
                                    OrderDataExisting.BranchDestId = obj[0].branchdest_code
                                    OrderDataExisting.Remark = obj[0].remark
                                    // console.log('OrderDataExisting.BranchOriginText: ',OrderDataExisting.BranchOriginText)
                                    // console.log('OrderDataExisting.BranchOriginId: ',OrderDataExisting.BranchOriginId)
                                    // console.log('OrderDataExisting.BranchDestText: ',OrderDataExisting.BranchDestText)
                                    // console.log('OrderDataExisting.BranchDestId: ',OrderDataExisting.BranchDestId) 
                                    console.log(OrderDataExisting);//OrderDataDet
                                    getBranchAndCashEdit()
                                    OrderDataExisting.OrderDataDet = []
                                    if (obj[0].note_new_1000 > 0)//--note new
                                    {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "1000",
                                            QualityMoneyType: "New",
                                            PackageMoneyType: obj[0].unit_note_new_1000,
                                            Quantity: obj[0].pcs_note_new_1000,
                                            Amount: obj[0].note_new_1000
                                        })
                                    } if (obj[0].note_new_500 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "500",
                                            QualityMoneyType: "New",
                                            PackageMoneyType: obj[0].unit_note_new_500,
                                            Quantity: obj[0].pcs_note_new_500,
                                            Amount: obj[0].note_new_500
                                        })
                                    } if (obj[0].note_new_100 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "100",
                                            QualityMoneyType: "New",
                                            PackageMoneyType: obj[0].unit_note_new_100,
                                            Quantity: obj[0].pcs_note_new_100,
                                            Amount: obj[0].note_new_100
                                        })
                                    } if (obj[0].note_new_50 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "50",
                                            QualityMoneyType: "New",
                                            PackageMoneyType: obj[0].unit_note_new_50,
                                            Quantity: obj[0].pcs_note_new_50,
                                            Amount: obj[0].note_new_50
                                        })
                                    } if (obj[0].note_new_20 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "20",
                                            QualityMoneyType: "New",
                                            PackageMoneyType: obj[0].unit_note_new_20,
                                            Quantity: obj[0].pcs_note_new_20,
                                            Amount: obj[0].note_new_20
                                        })
                                    } if (obj[0].note_new_10 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "10",
                                            QualityMoneyType: "New",
                                            PackageMoneyType: obj[0].unit_note_new_10,
                                            Quantity: obj[0].pcs_note_new_10,
                                            Amount: obj[0].note_new_10
                                        })
                                    } if (obj[0].note_fit_1000 > 0)//--note fit
                                    {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "1000",
                                            QualityMoneyType: "Fit",
                                            PackageMoneyType: obj[0].unit_note_fit_1000,
                                            Quantity: obj[0].pcs_note_fit_1000,
                                            Amount: obj[0].note_fit_1000
                                        })
                                    } if (obj[0].note_fit_500 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "500",
                                            QualityMoneyType: "Fit",
                                            PackageMoneyType: obj[0].unit_note_fit_500,
                                            Quantity: obj[0].pcs_note_fit_500,
                                            Amount: obj[0].note_fit_500
                                        })
                                    } if (obj[0].note_fit_100 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "100",
                                            QualityMoneyType: "Fit",
                                            PackageMoneyType: obj[0].unit_note_fit_100,
                                            Quantity: obj[0].pcs_note_fit_100,
                                            Amount: obj[0].note_fit_100
                                        })
                                    } if (obj[0].note_fit_50 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "50",
                                            QualityMoneyType: "Fit",
                                            PackageMoneyType: obj[0].unit_note_fit_50,
                                            Quantity: obj[0].pcs_note_fit_50,
                                            Amount: obj[0].note_fit_50
                                        })
                                    } if (obj[0].note_fit_20 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "20",
                                            QualityMoneyType: "Fit",
                                            PackageMoneyType: obj[0].unit_note_fit_20,
                                            Quantity: obj[0].pcs_note_fit_20,
                                            Amount: obj[0].note_fit_20
                                        })
                                    } if (obj[0].note_fit_10 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "10",
                                            QualityMoneyType: "Fit",
                                            PackageMoneyType: obj[0].unit_note_fit_10,
                                            Quantity: obj[0].pcs_note_fit_10,
                                            Amount: obj[0].note_fit_10
                                        })
                                    } if (obj[0].note_unfit_1000 > 0)//--note unfit
                                    {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "1000",
                                            QualityMoneyType: "Unfit",
                                            PackageMoneyType: obj[0].unit_note_unfit_1000,
                                            Quantity: obj[0].pcs_note_unfit_1000,
                                            Amount: obj[0].note_unfit_1000
                                        })
                                    } if (obj[0].note_unfit_500 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "500",
                                            QualityMoneyType: "Unfit",
                                            PackageMoneyType: obj[0].unit_note_unfit_500,
                                            Quantity: obj[0].pcs_note_unfit_500,
                                            Amount: obj[0].note_unfit_500
                                        })
                                    } if (obj[0].note_unfit_100 > 0) {
                                        console.log({
                                            MoneyType: "100",
                                            QualityMoneyType: "Unfit",
                                            PackageMoneyType: obj[0].unit_note_unfit_100,
                                            Quantity: obj[0].pcs_note_unfit_100,
                                            Amount: obj[0].note_unfit_100
                                        })
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "100",
                                            QualityMoneyType: "Unfit",
                                            PackageMoneyType: obj[0].unit_note_unfit_100,
                                            Quantity: obj[0].pcs_note_unfit_100,
                                            Amount: obj[0].note_unfit_100
                                        })
                                    } if (obj[0].note_unfit_50 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "50",
                                            QualityMoneyType: "Unfit",
                                            PackageMoneyType: obj[0].unit_note_unfit_50,
                                            Quantity: obj[0].pcs_note_unfit_50,
                                            Amount: obj[0].note_unfit_50
                                        })
                                    } if (obj[0].note_unfit_20 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "20",
                                            QualityMoneyType: "Unfit",
                                            PackageMoneyType: obj[0].unit_note_unfit_20,
                                            Quantity: obj[0].pcs_note_unfit_20,
                                            Amount: obj[0].note_unfit_20
                                        })
                                    } if (obj[0].note_unfit_10 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "10",
                                            QualityMoneyType: "Unfit",
                                            PackageMoneyType: obj[0].unit_note_unfit_10,
                                            Quantity: obj[0].pcs_note_unfit_10,
                                            Amount: obj[0].note_unfit_10
                                        })
                                    } if (obj[0].note_uncount_1000 > 0)//--note uncount
                                    {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "1000",
                                            QualityMoneyType: "Uncount",
                                            PackageMoneyType: obj[0].unit_note_uncount_1000,
                                            Quantity: obj[0].pcs_note_uncount_1000,
                                            Amount: obj[0].note_uncount_1000
                                        })
                                    } if (obj[0].note_uncount_500 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "500",
                                            QualityMoneyType: "Uncount",
                                            PackageMoneyType: obj[0].unit_note_uncount_500,
                                            Quantity: obj[0].pcs_note_uncount_500,
                                            Amount: obj[0].note_uncount_500
                                        })
                                    } if (obj[0].note_uncount_100 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "100",
                                            QualityMoneyType: "Uncount",
                                            PackageMoneyType: obj[0].unit_note_uncount_100,
                                            Quantity: obj[0].pcs_note_uncount_100,
                                            Amount: obj[0].note_uncount_100
                                        })
                                    } if (obj[0].note_uncount_50 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "50",
                                            QualityMoneyType: "Uncount",
                                            PackageMoneyType: obj[0].unit_note_uncount_50,
                                            Quantity: obj[0].pcs_note_uncount_50,
                                            Amount: obj[0].note_uncount_50
                                        })
                                    } if (obj[0].note_uncount_20 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "20",
                                            QualityMoneyType: "Uncount",
                                            PackageMoneyType: obj[0].unit_note_uncount_20,
                                            Quantity: obj[0].pcs_note_uncount_20,
                                            Amount: obj[0].note_uncount_20
                                        })
                                    } if (obj[0].note_uncount_10 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "10",
                                            QualityMoneyType: "Uncount",
                                            PackageMoneyType: obj[0].unit_note_uncount_10,
                                            Quantity: obj[0].pcs_note_uncount_10,
                                            Amount: obj[0].note_uncount_10
                                        })
                                    } if (obj[0].coin_new_10 > 0)//--coin new
                                    {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "10",
                                            QualityMoneyType: "New",
                                            PackageMoneyType: obj[0].unit_coin_new_10,
                                            Quantity: obj[0].pcs_coin_new_10,
                                            Amount: obj[0].coin_new_10
                                        })
                                    } if (obj[0].coin_new_5 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "5",
                                            QualityMoneyType: "New",
                                            PackageMoneyType: obj[0].unit_coin_new_5,
                                            Quantity: obj[0].pcs_coin_new_5,
                                            Amount: obj[0].note_coin_new_5
                                        })
                                    } if (obj[0].coin_new_2 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "2",
                                            QualityMoneyType: "New",
                                            PackageMoneyType: obj[0].unit_coin_new_2,
                                            Quantity: obj[0].pcs_coin_new_2,
                                            Amount: obj[0].coin_new_2
                                        })
                                    } if (obj[0].coin_new_1 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "1",
                                            QualityMoneyType: "New",
                                            PackageMoneyType: obj[0].unit_coin_new_1,
                                            Quantity: obj[0].pcs_coin_new_1,
                                            Amount: obj[0].coin_new_1
                                        })
                                    } if (obj[0].note_new_20 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "20",
                                            QualityMoneyType: "New",
                                            PackageMoneyType: obj[0].unit_note_new_20,
                                            Quantity: obj[0].pcs_note_new_20,
                                            Amount: obj[0].note_new_20
                                        })
                                    } if (obj[0].coin_new_05 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "0.5",
                                            QualityMoneyType: "New",
                                            PackageMoneyType: obj[0].unit_coin_new_05,
                                            Quantity: obj[0].pcs_coin_new_05,
                                            Amount: obj[0].coin_new_05
                                        })
                                    } if (obj[0].coin_new_025 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "0.25",
                                            QualityMoneyType: "New",
                                            PackageMoneyType: obj[0].unit_coin_new_025,
                                            Quantity: obj[0].pcs_coin_new_025,
                                            Amount: obj[0].coin_new_025
                                        })
                                    } if (obj[0].coin_fit_10 > 0)//--coin fit
                                    {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "10",
                                            QualityMoneyType: "Fit",
                                            PackageMoneyType: obj[0].unit_coin_fit_10,
                                            Quantity: obj[0].pcs_coin_fit_10,
                                            Amount: obj[0].coin_fit_10
                                        })
                                    } if (obj[0].coin_fit_5 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "5",
                                            QualityMoneyType: "Fit",
                                            PackageMoneyType: obj[0].unit_coin_fit_5,
                                            Quantity: obj[0].pcs_coin_fit_5,
                                            Amount: obj[0].note_coin_fit_5
                                        })
                                    } if (obj[0].coin_fit_2 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "2",
                                            QualityMoneyType: "Fit",
                                            PackageMoneyType: obj[0].unit_coin_fit_2,
                                            Quantity: obj[0].pcs_coin_fit_2,
                                            Amount: obj[0].coin_fit_2
                                        })
                                    } if (obj[0].coin_fit_1 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "1",
                                            QualityMoneyType: "Fit",
                                            PackageMoneyType: obj[0].unit_coin_fit_1,
                                            Quantity: obj[0].pcs_coin_fit_1,
                                            Amount: obj[0].coin_fit_1
                                        })
                                    } if (obj[0].note_fit_20 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "20",
                                            QualityMoneyType: "Fit",
                                            PackageMoneyType: obj[0].unit_note_fit_20,
                                            Quantity: obj[0].pcs_note_fit_20,
                                            Amount: obj[0].note_fit_20
                                        })
                                    } if (obj[0].coin_fit_05 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "0.5",
                                            QualityMoneyType: "Fit",
                                            PackageMoneyType: obj[0].unit_coin_fit_05,
                                            Quantity: obj[0].pcs_coin_fit_05,
                                            Amount: obj[0].coin_fit_05
                                        })
                                    } if (obj[0].coin_fit_025 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "0.25",
                                            QualityMoneyType: "Fit",
                                            PackageMoneyType: obj[0].unit_coin_fit_025,
                                            Quantity: obj[0].pcs_coin_fit_025,
                                            Amount: obj[0].coin_fit_025
                                        })
                                    } if (obj[0].coin_unfit_10 > 0)//--coin unfit
                                    {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "10",
                                            QualityMoneyType: "Unfit",
                                            PackageMoneyType: obj[0].unit_coin_unfit_10,
                                            Quantity: obj[0].pcs_coin_unfit_10,
                                            Amount: obj[0].coin_unfit_10
                                        })
                                    } if (obj[0].coin_unfit_5 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "5",
                                            QualityMoneyType: "Unfit",
                                            PackageMoneyType: obj[0].unit_coin_unfit_5,
                                            Quantity: obj[0].pcs_coin_unfit_5,
                                            Amount: obj[0].note_coin_unfit_5
                                        })
                                    } if (obj[0].coin_unfit_2 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "2",
                                            QualityMoneyType: "Unfit",
                                            PackageMoneyType: obj[0].unit_coin_unfit_2,
                                            Quantity: obj[0].pcs_coin_unfit_2,
                                            Amount: obj[0].coin_unfit_2
                                        })
                                    } if (obj[0].coin_unfit_1 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "1",
                                            QualityMoneyType: "Unfit",
                                            PackageMoneyType: obj[0].unit_coin_unfit_1,
                                            Quantity: obj[0].pcs_coin_unfit_1,
                                            Amount: obj[0].coin_unfit_1
                                        })
                                    } if (obj[0].note_unfit_20 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "20",
                                            QualityMoneyType: "Unfit",
                                            PackageMoneyType: obj[0].unit_note_unfit_20,
                                            Quantity: obj[0].pcs_note_unfit_20,
                                            Amount: obj[0].note_unfit_20
                                        })
                                    } if (obj[0].coin_unfit_05 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "0.5",
                                            QualityMoneyType: "Unfit",
                                            PackageMoneyType: obj[0].unit_coin_unfit_05,
                                            Quantity: obj[0].pcs_coin_unfit_05,
                                            Amount: obj[0].coin_unfit_05
                                        })
                                    } if (obj[0].coin_unfit_025 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "0.25",
                                            QualityMoneyType: "Unfit",
                                            PackageMoneyType: obj[0].unit_coin_unfit_025,
                                            Quantity: obj[0].pcs_coin_unfit_025,
                                            Amount: obj[0].coin_unfit_025
                                        })
                                    } if (obj[0].coin_uncount_10 > 0)//--coin uncount
                                    {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "10",
                                            QualityMoneyType: "Uncount",
                                            PackageMoneyType: obj[0].unit_coin_uncount_10,
                                            Quantity: obj[0].pcs_coin_uncount_10,
                                            Amount: obj[0].coin_uncount_10
                                        })
                                    } if (obj[0].coin_uncount_5 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "5",
                                            QualityMoneyType: "Uncount",
                                            PackageMoneyType: obj[0].unit_coin_uncount_5,
                                            Quantity: obj[0].pcs_coin_uncount_5,
                                            Amount: obj[0].note_coin_uncount_5
                                        })
                                    } if (obj[0].coin_uncount_2 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "2",
                                            QualityMoneyType: "Uncount",
                                            PackageMoneyType: obj[0].unit_coin_uncount_2,
                                            Quantity: obj[0].pcs_coin_uncount_2,
                                            Amount: obj[0].coin_uncount_2
                                        })
                                    } if (obj[0].coin_uncount_1 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "1",
                                            QualityMoneyType: "Uncount",
                                            PackageMoneyType: obj[0].unit_coin_uncount_1,
                                            Quantity: obj[0].pcs_coin_uncount_1,
                                            Amount: obj[0].coin_uncount_1
                                        })
                                    } if (obj[0].note_uncount_20 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "20",
                                            QualityMoneyType: "Uncount",
                                            PackageMoneyType: obj[0].unit_note_uncount_20,
                                            Quantity: obj[0].pcs_note_uncount_20,
                                            Amount: obj[0].note_uncount_20
                                        })
                                    } if (obj[0].coin_uncount_05 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "0.5",
                                            QualityMoneyType: "Uncount",
                                            PackageMoneyType: obj[0].unit_coin_uncount_05,
                                            Quantity: obj[0].pcs_coin_uncount_05,
                                            Amount: obj[0].coin_uncount_05
                                        })
                                    } if (obj[0].coin_uncount_025 > 0) {
                                        OrderDataExisting.OrderDataDet.push({
                                            MoneyType: "0.25",
                                            QualityMoneyType: "Uncount",
                                            PackageMoneyType: obj[0].unit_coin_uncount_025,
                                            Quantity: obj[0].pcs_coin_uncount_025,
                                            Amount: obj[0].coin_uncount_025
                                        })
                                    }
                                    console.log(OrderDataExisting.OrderDataDet[1].MoneyType)
                                    console.log(OrderDataExisting.OrderDataDet.length)
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
        const updateCheckedRows = (rowsKey) => {
            console.log(rowsKey);
        };
        const editOrder = async () => {
            const formData = new FormData()
            formData.append('OrderCategoryNew', this.NewOrder.OrderCategoryNew)
            formData.append('OrderTypeNew', this.NewOrder.OrderTypeNew)
            formData.append('BankTypeNew', this.NewOrder.BankTypeNew)
            formData.append('JobDateNew', this.NewOrder.JobDateNew)
            formData.append('RefNo', this.NewOrder.RefNo)
            formData.append('RemarkNew', this.NewOrder.RemarkNew)
            formData.append('BranchOrigin', this.NewOrder.BranchOrigin.branch_name)
            formData.append('BranchDest', this.NewOrder.BranchDest.branch_name)
            formData.append('BranchOrigin_code', this.NewOrder.BranchOrigin.branch_id)
            formData.append('BranchDest_code', this.NewOrder.BranchDest.branch_id)
            formData.append('AllRowsDet', this.Id)
            formData.append('user_id', this.user_id)
            for (var index = 0; index < this.Id; index++) {
                if (document.getElementById("ddlMoneyType" + (index + 1))) {
                    formData.append('ddlMoneyType' + (index + 1), document.getElementById("ddlMoneyType" + (index + 1)).value)
                    formData.append('ddlQualityMoneyType' + (index + 1), document.getElementById("ddlQualityMoneyType" + (index + 1)).value)
                    formData.append('ddlPackageMoneyType' + (index + 1), document.getElementById("ddlPackageMoneyType" + (index + 1)).value)
                    formData.append('tbQuantity' + (index + 1), document.getElementById("tbQuantity" + (index + 1)).value)
                    formData.append('tbAmount' + (index + 1), document.getElementById("tbAmount" + (index + 1)).value)
                    // Id_++
                }
            }
            this.showmyModalNew = true
            var object = {}
            formData.forEach((value, key) => object[key] = value)
            var json = JSON.stringify(object)
            console.log('add data')
            console.log(json)
        }
        return {
            searchTerm, table, sidebarWidth, Data_, updateCheckedRows, tableLoadingFinish,
            OrderDataExisting, getBranchAndCashEdit, addEditItem, rowDataEdit
            , editOrder, formatPrice
        };
    },
    // computed: {
    //   locale: () => enUS,
    // },
    // watch: {
    //   selected: (value) => console.log(value),
    // },
    methods: {
        deleteData(index) {
            console.log(index)
            this.rowData.splice(index, 1)
        },
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
            formData.append('gfc_cct', this.gfc_cct)
            formData.append('user_id', this.user_id)
            // formData.forEach(element => console.log(element))
            try {
                await axios.post('/upload', formData)
                    .then((res) => {
                        // success callback
                        console.log(res.data)
                        this.$refs.ClosemyModal.click();
                        this.$router.push('/listorder')
                    }, (res) => {
                        // error callback
                        console.log(res.data.message)
                    });
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
            let val = (value / 1).toFixed(2)
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        formatPrice_noFixed(value) {
            let val = (value / 1)
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        downloadItem() {
            // let url = "./templete_file.zip"
            //https://drive.google.com/file/d/1IjVGVw26xSPBWqO0v3RBAck89435eTT_/view?usp=sharing
            axios({
                url: 'http://localhost:4000/templete_file.zip',
                method: 'GET',
                responseType: 'blob',
            }).then((response) => {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fURL = document.createElement('a');

                fURL.href = fileURL;
                fURL.setAttribute('download', 'templete_file.zip');
                document.body.appendChild(fURL);

                fURL.click();
            });
        },
        getBranchAndCash() {
            this.NewOrder.DataBranchToOrigin = []
            this.NewOrder.DataBranchToDest = []
            if (this.NewOrder.OrderTypeNew === "Withdraw") {
                this.getBranchOrCashCen('cashtobranch', 'BranchOrigin')
                this.getBranchOrCashCen('branchtocash', 'BranchDest')
            }
            if (this.NewOrder.OrderTypeNew === "Deposit") {
                this.getBranchOrCashCen('branchtocash', 'BranchOrigin')
                this.getBranchOrCashCen('cashtobranch', 'BranchDest')
            }
        },
        async getBranchOrCashCen(servicetype, ddltype) {
            if (servicetype === 'branchtocash') {
                await axios.get('/getbranchdata')
                    .then((res) => {
                        // success callback           
                        ddltype === 'BranchOrigin' ? this.NewOrder.DataBranchToOrigin = res.data : this.NewOrder.DataBranchToDest = res.data
                        console.log(this.NewOrder.DataBranchToOrigin)
                        console.log(this.NewOrder.DataBranchToDest)
                    }, (res) => {
                        // error callback
                        console.log(res.data.message)
                    });
            }
            //--------------------------------------------
            if (servicetype === 'cashtobranch') {
                await axios.get('/getcashcenterdata')
                    .then((res) => {
                        // success callback
                        ddltype === 'BranchOrigin' ? this.NewOrder.DataBranchToOrigin = res.data : this.NewOrder.DataBranchToDest = res.data
                        console.log(this.NewOrder.DataBranchToOrigin)
                        console.log(this.NewOrder.DataBranchToDest)
                    }, (res) => {
                        // error callback
                        console.log(res.data.message)
                    });
            }
        },
        calamount(value) {
            console.log(document.getElementById("ddlMoneyType" + value).value)
            console.log(document.getElementById("ddlPackageMoneyType" + value).value)
            console.log(document.getElementById("tbQuantity" + value).value)
            console.log(document.getElementById("tbAmount" + value).value)
            let ddlMoneyType = parseFloat(document.getElementById("ddlMoneyType" + value).value, 10)
            let tbQuantity = parseFloat((document.getElementById("tbQuantity" + value).value).replaceAll(',', ''), 10)
            let ddlPackageMoneyType = document.getElementById("ddlPackageMoneyType" + value).value
            let ddlQualityMoneyType = document.getElementById("ddlQualityMoneyType" + value).value
            if (ddlPackageMoneyType === 'Bundle') {
                !isNaN(ddlMoneyType * tbQuantity * 1000) ? document.getElementById("tbAmount" + value).value = this.formatPrice(ddlMoneyType * tbQuantity * 1000) : document.getElementById("tbAmount" + value).value = ''
            }
            else if (ddlPackageMoneyType === 'Pack') {
                !isNaN(ddlMoneyType * tbQuantity * 5000) ? document.getElementById("tbAmount" + value).value = this.formatPrice(ddlMoneyType * tbQuantity * 5000) : document.getElementById("tbAmount" + value).value = ''
            }
            else {
                !isNaN(ddlMoneyType * tbQuantity) ? document.getElementById("tbAmount" + value).value = this.formatPrice(ddlMoneyType * tbQuantity) : document.getElementById("tbAmount" + value).value = ""
            }
            console.log(ddlMoneyType * tbQuantity * 5000)

            let my_object = {
                Id: value,
                ddlMoneyType_: ddlMoneyType,
                ddlQualityMoneyType_: ddlQualityMoneyType,
                ddlPackageMoneyType_: ddlPackageMoneyType,
                tbQuantity_: tbQuantity,
                tbAmount_: document.getElementById("tbAmount" + value).value
            };
            this.NewOrderDet.push(my_object)
        },
        addItem() {
            this.Id++
            let ddlMoneyType = ""
            ddlMoneyType = "<select class='form-select form-select-sm text-right' id='ddlMoneyType" + this.Id + "'>"
            ddlMoneyType += "<option value='1000'>1,000</option>"
            ddlMoneyType += "<option value='500'>500</option>"
            ddlMoneyType += "<option value='100'>100</option>"
            ddlMoneyType += "<option value='20'>20</option>"
            ddlMoneyType += "<option value='10'>10</option>"
            ddlMoneyType += "<option value='5'>5</option>"
            ddlMoneyType += "<option value='2'>2</option>"
            ddlMoneyType += "<option value='1'>1</option>"
            ddlMoneyType += "<option value='0.5'>0.50</option>"
            ddlMoneyType += "</select>"
            let ddlQualityMoneyType = ""
            ddlQualityMoneyType = "<select class='form-select form-select-sm' id='ddlQualityMoneyType" + this.Id + "'>"
            ddlQualityMoneyType += "<option value='New'>ใหม่</option>"
            ddlQualityMoneyType += "<option value='Fit'>ดี</option>"
            ddlQualityMoneyType += "<option value='Unfit'>เสีย</option>"
            ddlQualityMoneyType += "<option value='Uncount'>รอคัดนับ</option>"
            ddlQualityMoneyType += "</select>"
            let ddlPackageMoneyType = ""
            ddlPackageMoneyType = "<select class='form-select form-select-sm' id='ddlPackageMoneyType" + this.Id + "'>"
            ddlPackageMoneyType += "<option value='Bundle'>มัด</option>"
            ddlPackageMoneyType += "<option value='Piece'>ฉบับ</option>"
            ddlPackageMoneyType += "<option value='Coin'>เหรียญ</option>"
            ddlPackageMoneyType += "<option value='Pack'>แพ็ค</option>"
            ddlPackageMoneyType += "</select>"
            let tbQuantity = ""
            tbQuantity = "<input type='text' id='tbQuantity" + this.Id + "' class='form-control text-right' style='width:10rem;'>"
            let tbAmount = ""
            tbAmount = "<input type='text' id='tbAmount" + this.Id + "' class='form-control text-right' style='width:10rem;' readonly='readonly'>"
            let my_object = {
                Id: this.Id,
                ddlMoneyType_: ddlMoneyType,
                ddlQualityMoneyType_: ddlQualityMoneyType,
                ddlQualityMoneyType_: ddlQualityMoneyType,
                ddlPackageMoneyType_: ddlPackageMoneyType,
                tbQuantity_: tbQuantity,
                tbAmount_: tbAmount,
            };
            if (this.rowData.length > 1) {
                document.getElementById("tbQuantity" + (this.Id - 1)).value = this.formatPrice_noFixed(parseFloat(document.getElementById("tbQuantity" + (this.Id - 1)).value))
            }
            this.rowData.push(my_object)
        },
        async addManualOrder() {
            const formData = new FormData()
            formData.append('OrderCategoryNew', this.NewOrder.OrderCategoryNew)
            formData.append('OrderTypeNew', this.NewOrder.OrderTypeNew)
            formData.append('BankTypeNew', this.NewOrder.BankTypeNew)
            formData.append('JobDateNew', this.NewOrder.JobDateNew)
            formData.append('RefNo', this.NewOrder.RefNo)
            formData.append('RemarkNew', this.NewOrder.RemarkNew)
            formData.append('BranchOrigin', this.NewOrder.BranchOrigin.branch_name)
            formData.append('BranchDest', this.NewOrder.BranchDest.branch_name)
            formData.append('BranchOrigin_code', this.NewOrder.BranchOrigin.branch_id)
            formData.append('BranchDest_code', this.NewOrder.BranchDest.branch_id)
            formData.append('AllRowsDet', this.Id)
            formData.append('user_id', this.user_id)
            for (var index = 0; index < this.Id; index++) {
                if (document.getElementById("ddlMoneyType" + (index + 1))) {
                    formData.append('ddlMoneyType' + (index + 1), document.getElementById("ddlMoneyType" + (index + 1)).value)
                    formData.append('ddlQualityMoneyType' + (index + 1), document.getElementById("ddlQualityMoneyType" + (index + 1)).value)
                    formData.append('ddlPackageMoneyType' + (index + 1), document.getElementById("ddlPackageMoneyType" + (index + 1)).value)
                    formData.append('tbQuantity' + (index + 1), document.getElementById("tbQuantity" + (index + 1)).value)
                    formData.append('tbAmount' + (index + 1), document.getElementById("tbAmount" + (index + 1)).value)
                    // Id_++
                }
            }
            this.showmyModalNew = true
            var object = {}
            formData.forEach((value, key) => object[key] = value)
            var json = JSON.stringify(object)
            console.log('add data')
            console.log(json)
            try {
                await axios.post('/manual_add_order', json)
                    .then((res) => {
                        // success callback
                        console.log(res.data)
                        this.$refs.ClosemyModalNew.click();

                    }, (res) => {
                        // error callback
                        console.log(res.data.message)
                    }).finally(() => {
                        this.$router.push('/listorder')
                    });
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
        // isToday (date) {
        // 	return isSameDay(date, new Date())
        // },
        // isMorning(date) {
        //   const newDate = set(new Date(date.getTime()), { hours: 11, minutes: 0 })
        //   return date < newDate;
        // },
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
