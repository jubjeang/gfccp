<template>
    <Header />
    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidth }">
        <div class="container p-0" style="width: 100%;">
            <div class="row p-1" style="width: 100%">
                <div class="col text-left">&nbsp;</div>
            </div>
            <div class="row p-1" style="width: 100%">
                <div class="col text-left">
                    <h3>ติดตามคำสั่ง</h3>
                </div>
            </div>

            <div class="row p-1" style="width: 100%">
                <div class="col text-left">
                    <input type="radio" id="Retail_Customer" value="RetailCustomer" v-model="picked" />&nbsp;
                    <label for="one">Retail Customer</label>&nbsp;
                    <input type="radio" id="Bank_Customer" value="BankCustomer" v-model="picked" />&nbsp;
                    <label for="two">Bank Customer</label>&nbsp;
                    <input type="radio" id="ATM_Replenishment" value="ATMReplenishment" v-model="picked" />&nbsp;
                    <label for="two">ATM Replenishment</label>
                </div>
            </div>
            <div class="row p-1">
                <div class="col" style="padding-bottom: 1rem;">
                    <div style="border-radius: 5px; border:1px solid black;">
                        <div class="d-flex justify-content-start px-3">Bangkok-CIT-012</div>
                        <div>
                            <div class="d-flex justify-content-start px-3" style="border-style: dashed;">CL : XXXXX (CIT name)</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Sidebar from '../components/sidebar/Sidebar'
import { collapsed, toggleSidebar, sidebarWidth } from '../components/sidebar/state'
import Header from '../components/Header'
import axios from 'axios'
// import moment from 'moment'
export default {
    name: 'OrderTracking',
    components: { Sidebar, Header, collapsed, toggleSidebar, sidebarWidth },
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth }
    },
    data() {
        return {
            file: "",
            error: false,
            message: "",
            OrderCategory: "BankBranch",
            OrderType: "",
            BankType: "",
            JobDate: null,
            picked: "RetailCustomer"
        }
    },
    // data: () => ({
    //       date: '2019-01-01'
    //   })
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
        }
        // format(value, event) {
        //   return moment(value).format('DD/MM/YYYY')
        // }
    },
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
