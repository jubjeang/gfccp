<template>
    <Header />
    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidth }" class="row ps-4">
        <div class="row p-1" style="width: 100%">
            <div class="col text-left">&nbsp;</div>
        </div>
        <div class="row p-1" style="width: 100%">
            <div class="col text-left">
                <h3>ติดตามคำสั่ง</h3>
            </div>
        </div>
        <div class="row p-1" style="width: 100%">
            <div class="col text-center">
                <iframe title="Order tracking detail" width="1300" height="800"
                    src="https://app.powerbi.com/view?r=eyJrIjoiODUxMTNjYmYtZGNhMi00YWQyLWJmMGEtMWViNjdiMjUyOGNmIiwidCI6IjE5NjkwZWQwLTQzODctNDhkMi1iMmM5LWUzZGM2Y2EzOGNkZiIsImMiOjEwfQ%3D%3D&pageName=ReportSection"
                    frameborder="0" allowFullScreen="true"></iframe>
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
            Data_: [],
            datatrackinglist: {
                CL_name: '',
                CD_name: '',
                rows: 0,
                branch_name: ''
            }
        }
    },
    // data: () => ({
    //       date: '2019-01-01'
    //   })
    methods: {

    },
    created() {
        try {
            axios.get('/ordertrackinglist')
                .then((res) => {
                    // success callback
                    this.Data_ = res.data
                    if (this.Data_.length > 0) {
                        let iloop = 1
                        this.Data_.forEach((value, key) => {
                            //console.log( this.Data_[key].CL_name )
                            if (iloop === 1) {
                                this.datatrackinglist.CL_name = this.Data_[key].CL_name
                                this.datatrackinglist.CD_name = this.Data_[key].CD_name
                                this.datatrackinglist.branch_name = this.Data_[key].branch_name
                                iloop++
                            }
                        })
                        let allrow = 0
                        if (this.Data_.length >= 3) {
                            allrow = this.Data_.length
                            //console.log( allrow )
                            this.datatrackinglist.rows = allrow / 3

                        }
                        else {
                            allrow = this.Data_.length
                            console.log(allrow)
                            this.datatrackinglist.rows = 1
                        }
                    }
                    else {
                        //...
                    }
                    console.log(this.datatrackinglist.rows)

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
