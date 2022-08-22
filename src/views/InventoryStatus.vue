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
                    <h3>สถานะคลังปัจจุบัน</h3>
                </div>
            </div>
            <div class="row p-1">
                <div class="col">
                    <div class="p-0" style="width: 100%; border-radius: 5px; border:1px solid black;">
                        <canvas id="myChart_doughnut" width="200" height="200"></canvas>
                    </div>
                </div>
                <div class="col">
                    <div class="p-0" style="width: 100%; border-radius: 5px; border:1px solid black;">
                        <canvas id="myChart_bar" width="200" height="200"></canvas>
                    </div>
                </div>
            </div>
            <div class="row p-1">
                <div class="col">
                    <div class="card  p-0" style="width: 100%">
                        <div class="card-header">
                            &nbsp;
                        </div>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ชนิดราคา</th>
                                    <th scope="col">ใหม่</th>
                                    <th scope="col">ดี</th>
                                    <th scope="col">เสีย</th>
                                    <th scope="col">รอคัดนับ</th>
                                    <th scope="col">รวม</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="col" class="text-right">1,000</td>
                                    <td scope="col" class="text-right">10,000,000.00</td>
                                    <td scope="col" class="text-right">20,000,000.00</td>
                                    <td scope="col" class="text-right">10,000,000.00</td>
                                    <td scope="col" class="text-right">20,000,000.00</td>
                                    <td scope="col" class="text-right">60,000,000.00</td>
                                </tr>
                                <tr>
                                    <td scope="col" class="text-right">500</td>
                                    <td scope="col" class="text-right">5,000,000.00</td>
                                    <td scope="col" class="text-right">5,000,000.00</td>
                                    <td scope="col" class="text-right">5,000,000.00</td>
                                    <td scope="col" class="text-right">5,000,000.00</td>
                                    <td scope="col" class="text-right">20,000,000.00</td>
                                </tr>
                                <tr>
                                    <td scope="col" class="text-right">500</td>
                                    <td scope="col" class="text-right">5,000,000.00</td>
                                    <td scope="col" class="text-right">5,000,000</td>
                                    <td scope="col" class="text-right">5,000,000</td>
                                    <td scope="col" class="text-right">5,000,000</td>
                                    <td scope="col" class="text-right">20,000,000</td>
                                </tr>
                                <tr>
                                    <td scope="col" class="text-right">100</td>
                                    <td scope="col" class="text-right">10,000,000.00</td>
                                    <td scope="col" class="text-right">10,000,000.00</td>
                                    <td scope="col" class="text-right">10,000,000.00</td>
                                    <td scope="col" class="text-right">10,000,000.00</td>
                                    <td scope="col" class="text-right">40,000,000.00</td>
                                </tr>
                                <tr>
                                    <td scope="col" class="text-right">50</td>
                                    <td scope="col" class="text-right">5,000,000.00</td>
                                    <td scope="col" class="text-right">5,000,000.00</td>
                                    <td scope="col" class="text-right">5,000,000.00</td>
                                    <td scope="col" class="text-right">5,000,000.00</td>
                                    <td scope="col" class="text-right">20,000,000.00</td>
                                </tr>
                                <tr>
                                    <td scope="col" class="text-right">20</td>
                                    <td scope="col" class="text-right">10,000,000.00</td>
                                    <td scope="col" class="text-right">10,000,000.00</td>
                                    <td scope="col" class="text-right">10,000,000.00</td>
                                    <td scope="col" class="text-right">10,000,000.00</td>
                                    <td scope="col" class="text-right">40,000,000.00</td>
                                </tr>




                                <tr>
                                    <td scope="col" class="text-right">10</td>
                                    <td scope="col" class="text-right">50,000,000.00</td>
                                    <td scope="col" class="text-right">50,000,000.00</td>
                                    <td scope="col" class="text-right">50,000,000.00</td>
                                    <td scope="col" class="text-right">50,000,000.00</td>
                                    <td scope="col" class="text-right">200,000,000.00</td>
                                </tr>
                                <tr>
                                    <td scope="col" class="text-right">5</td>
                                    <td scope="col" class="text-right">20,000,000.00</td>
                                    <td scope="col" class="text-right">20,000,000.00</td>
                                    <td scope="col" class="text-right">20,000,000.00</td>
                                    <td scope="col" class="text-right">20,000,000.00</td>
                                    <td scope="col" class="text-right">80,000,000.00</td>
                                </tr>
                                <tr>
                                    <td scope="col" class="text-right">2</td>
                                    <td scope="col" class="text-right">5,000,000.00</td>
                                    <td scope="col" class="text-right">5,000,000.00</td>
                                    <td scope="col" class="text-right">5,000,000.00</td>
                                    <td scope="col" class="text-right">5,000,000.00</td>
                                    <td scope="col" class="text-right">80,000,000.00</td>
                                </tr>
                                <tr>
                                    <td scope="col" class="text-right">1</td>
                                    <td scope="col" class="text-right">20,000,000.00</td>
                                    <td scope="col" class="text-right">20,000,000.00</td>
                                    <td scope="col" class="text-right">20,000,000.00</td>
                                    <td scope="col" class="text-right">20,000,000.00</td>
                                    <td scope="col" class="text-right">80,000,000.00</td>
                                </tr>
                                <tr>
                                    <td scope="col" class="text-right">0.50</td>
                                    <td scope="col" class="text-right">2,000,000.00</td>
                                    <td scope="col" class="text-right">2,000,000.00</td>
                                    <td scope="col" class="text-right">2,000,000.00</td>
                                    <td scope="col" class="text-right">2,000,000.00</td>
                                    <td scope="col" class="text-right">8,000,000.00</td>
                                </tr>
                                <tr>
                                    <td scope="col" class="text-right">0.25</td>
                                    <td scope="col" class="text-right">2,000,000.00</td>
                                    <td scope="col" class="text-right">2,000,000.00</td>
                                    <td scope="col" class="text-right">2,000,000.00</td>
                                    <td scope="col" class="text-right">2,000,000.00</td>
                                    <td scope="col" class="text-right">8,000,000.00</td>
                                </tr>
<tr>
                                    <td scope="col" class="text-right">รวม</td>
                                    <td scope="col" class="text-right">180,000,000.00</td>
                                    <td scope="col" class="text-right">120,000,000.00</td>
                                    <td scope="col" class="text-right">150,000,000.00</td>
                                    <td scope="col" class="text-right">10,000,000.00</td>
                                    <td scope="col" class="text-right">10,000,000.00</td>
                                </tr>                                
                            </tbody>
                        </table>
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
import Chart from 'chart.js/auto';

export default {
    name: 'InventoryStatus',
    components: { Sidebar, Header, collapsed, toggleSidebar, sidebarWidth },
    setup() {

        return { collapsed, toggleSidebar, sidebarWidth, }
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
    mounted() {
        console.log('test')
        const ctx_doughnut = document.getElementById("myChart_doughnut")
        const ctx_bar = document.getElementById("myChart_bar")
        const data_doughnut = {
            labels: [
                'ศูนย์หลักสี่',
                'ศูนย์ชลบุรี',
                'ศูนย์ฉะเชิงเทรา',
                'ศูนย์เชียงใหม่',
                'ศูนย์หาดใหญ่'
            ],
            datasets: [{
                label: 'คงคลัง',
                data: [220, 100, 150, 180, 120],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 162, 235)',
                    'rgb(170, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        };
        const data_bar = {
            labels: ['ศูนย์หลักสี่',
                'ศูนย์ชลบุรี',
                'ศูนย์ฉะเชิงเทรา',
                'ศูนย์เชียงใหม่',
                'ศูนย์หาดใหญ่'],
            datasets: [{
                label: 'คงคลัง',
                data: [220, 100, 150, 180, 120],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 162, 235)',
                    'rgb(170, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        };
        const myChart_doughnut = new Chart(ctx_doughnut, {
            type: 'doughnut',
            data: data_doughnut,
        });
        const myChart_bar = new Chart(ctx_bar, {
            type: 'bar',
            data: data_bar,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        });
        myChart_doughnut;
        myChart_bar;
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
