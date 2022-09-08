<template>
  <section class="vh-100 vw-100">
    <div class="
        d-flex
        flex-column flex-md-row
        justify-content-start
        py-4
        px-4 px-xl-5
        bg-secondary
        vw-100
      ">
      <div>
        <img src="@/assets/images/sl_logo.png" />
      </div>
    </div>
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-7 col-lg-7 col-xl-7">
          <img src="@/assets/images/gfcth_content.jpg" class="img-fluid" alt="Sample image"
            style="width:100rem; height:23rem" />
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3 offset-xl-1">
          <form>
            <div class="divider d-flex align-items-center my-4">
              <p class="fw-bold mx-3 mb-0">เข้าสู่ระบบ</p>
            </div>
            <!-- Email input -->
            <div class="form-outline mb-4 text-center">
              <input type="text" id="jobid" ref="jobid" v-model="jobid" class="form-control form-control-lg"
                placeholder="กรอกชื่อผู้ใช้" style="width: 20rem; display:inline;" />
              <!-- <label class="form-label" for="jobid">User Name</label> -->
            </div>
            <!-- Password input -->
            <div class="form-outline mb-3  text-center">
              <input type="password" id="password" ref="password" v-model="password"
                class="form-control form-control-lg" placeholder="กรอกรหัสผ่าน" style="width: 20rem; display:inline;" />
              <!-- <label class="form-label" for="password">Password</label> -->
            </div>
            <!-- <div class="d-flex justify-content-between align-items-center">
             Checkbox 
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div> -->
            <div class="text-center mt-4 pt-2">
              <button type="button" class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem;  padding-top: 0.2rem; display:inline;"
                @click="login">
                เข้าสู่ระบบ
              </button>
              <!-- <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p> -->
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="
        d-flex
        flex-column flex-md-row
        py-4
        px-4 px-xl-5
        bg-secondary 
        justify-content-end
      ">
      <!-- Copyright -->
      <div class="text-white mb-3 mb-md-0 justify-content-end">
        Copyright by Guardforce Cash Solutions Security (Thailand) Co., Ltd. © 2022. All rights reserved.
      </div>
      <!-- Copyright -->
    </div>
  </section>
</template>
<script>
// import * as site from '../assets/js/site.js';
// import * as bundle from '../assets/js/bootstrap.bundle.min.js';
import { ref } from "vue";
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      jobid: '',
      password: '',
      jobid_: '15133',
      password_: '111111'
    }
  },
  methods: {
    async login(e) {
      e.preventDefault()
      if (this.jobid !== "" && this.password === "") {
        alert('กรุณากรอกชื่อผู้ใช้')
        this.$refs.password.focus();
        // localStorage.setItem('user_id', this.jobid_)
        // localStorage.setItem('user_name', 'UserDemo')
        // this.$router.push('/main')
      }
      else if (this.jobid === "" && this.password !== "") {
        alert('กรุณากรอกรหัสผ่าน');
        this.$refs.jobid.focus();
      }
      else if (this.jobid === "" && this.password === "") {
        alert('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
        this.$refs.jobid.focus();
      }
      else if (this.jobid !== "" && this.password !== "") {
        const formData = new FormData()
        formData.append('jobid', this.jobid)
        formData.append('password', this.password)
        var object = {}
        formData.forEach((value, key) => object[key] = value)
        var json = JSON.stringify(object)
        console.log(json)
        try {
          await axios.post('/checkUser', json)
            .then((res) => {
              // success callback
              // let userdata = JSON.stringify( res.data )
              let userdata = res.data
              console.log(userdata)
              console.log(userdata[0].name)
              localStorage.setItem('user_id', userdata[0].username)
              localStorage.setItem('user_name', userdata[0].name)
              localStorage.setItem('department_id', userdata[0].department_id)
              localStorage.setItem('position_id', userdata[0].position_id)
              localStorage.setItem('CustomerID', userdata[0].CustomerID)
              localStorage.setItem('RoleId', userdata[0].RoleId)
              localStorage.setItem('branchbaseid', userdata[0].branchbaseid)
              localStorage.setItem('gfc_cct', userdata[0].gfc_cct)
              localStorage.setItem('ApproveID', userdata[0].ApproveID)
              this.$router.push('/main')
            }, (res) => {
              // error callback
              console.log( JSON.stringify( res.data ) )
              alert( res.data )
            });
          //this.message = "File has been upload"
          //this.file = ""
          //this.error = false
        }
        catch (err) {
          console.log(err)
          alert("มีข้อผิดพลาด: " + err )
          //this.message = "Something went wrong"
          //this.error = true
        }
      }
      else {
        alert('กรอกชื่อผู้ใช้/รหัสผ่าน ผิดพลาด')
      }
      // if (this.jobid === this.jobid_ && this.password === this.password_) {
      //   localStorage.setItem('user_id', this.jobid_)
      //   localStorage.setItem('user_name', 'UserDemo')
      //   this.$router.push('/main')
      // } else {
      //   alert('Invalid Job Id or Password')
      // }
    },
    async addManualOrder() {
      const formData = new FormData()
      formData.append('OrderCategoryNew', this.NewOrder.OrderCategoryNew)
      formData.append('OrderTypeNew', this.NewOrder.OrderTypeNew)
      formData.append('BankTypeNew', this.NewOrder.BankTypeNew)
      formData.append('JobDateNew', this.NewOrder.JobDateNew)
      formData.append('RefNo', this.NewOrder.RefNo)
      formData.append('RemarkNew', this.NewOrder.RemarkNew)
      formData.append('BranchOrigin', this.NewOrder.BranchOrigin)
      formData.append('BranchDest', this.NewOrder.BranchDest)
      formData.append('AllRowsDet', this.Id)
      formData.append('user_id', this.user_id)
      for (var index = 0; index < this.Id; index++) {
        formData.append('ddlMoneyType' + (index + 1), document.getElementById("ddlMoneyType" + (index + 1)).value)
        formData.append('ddlQualityMoneyType' + (index + 1), document.getElementById("ddlQualityMoneyType" + (index + 1)).value)
        formData.append('ddlPackageMoneyType' + (index + 1), document.getElementById("ddlPackageMoneyType" + (index + 1)).value)
        formData.append('tbQuantity' + (index + 1), document.getElementById("tbQuantity" + (index + 1)).value)
        formData.append('tbAmount' + (index + 1), document.getElementById("tbAmount" + (index + 1)).value)
      }
      //formData.forEach((element, index) => console.log(index, element))
      var object = {}
      formData.forEach((value, key) => object[key] = value)
      var json = JSON.stringify(object)
      console.log(json)

      try {
        await axios.post('/manual_add_order', json)
          .then((res) => {
            // success callback
            console.log(res.data.message)
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
    }
  },
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute(
      'src',
      'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js'
    )
    document.head.appendChild(externalScript)
  },
  created() {
    try {
      localStorage.setItem('user_id', null)
      localStorage.setItem('user_name', null)
    }
    catch (err) {
      console.log(err)
      this.message = "Something went wrong"
      this.error = true
    }
  }
}
</script>

<style scoped>
.divider:after,
.divider:before {
  content: '';
  flex: 1;
  height: 1px;
  background: #eee;
}

.h-custom {
  height: calc(90% - 73px);
  /* 
  background-image: url("../assets/images/gfcth_backgroud.jpg");
  background-size: 100%; */
}

@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>
