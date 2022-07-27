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
        <div class="col text-right">
          <h4 data-bs-target="#myModal" data-bs-toggle="modal" style="cursor: pointer">
            <i class="fas fa-file-upload"></i>
            upload
          </h4>
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
                <tr>
                  <td scope="col">1</td>
                  <td scope="col">เชียงของ</td>
                  <td scope="col">-</td>
                  <td scope="col">9,940,000.00</td>
                  <td scope="col">30/06/2564</td>
                  <td scope="col">-</td>
                  <td scope="col">-</td>
                  <td scope="col">-</td>
                </tr>
                <tr>
                  <td scope="col">2</td>
                  <td scope="col">แม่สรวย</td>
                  <td scope="col">-</td>
                  <td scope="col">9,960,000.00</td>
                  <td scope="col">30/06/2564</td>
                  <td scope="col">-</td>
                  <td scope="col">-</td>
                  <td scope="col">-</td>
                </tr>
                <tr>
                  <td scope="col">3</td>
                  <td scope="col">ป่าแดด</td>
                  <td scope="col">-</td>
                  <td scope="col">5,740,000.00</td>
                  <td scope="col">30/06/2564</td>
                  <td scope="col">-</td>
                  <td scope="col">-</td>
                  <td scope="col">-</td>
                </tr>
                <tr>
                  <td scope="col">4</td>
                  <td scope="col">ม่วงคำ</td>
                  <td scope="col">-</td>
                  <td scope="col">4,100,000.00
                  </td>
                  <td scope="col">30/06/2564</td>
                  <td scope="col">-</td>
                  <td scope="col">-</td>
                  <td scope="col">-</td>
                </tr>
                <tr>
                  <td scope="col">5</td>
                  <td scope="col">เจดีย์หลวง</td>
                  <td scope="col">-</td>
                  <td scope="col">3,000,000.00
                  </td>
                  <td scope="col">30/06/2564</td>
                  <td scope="col">-</td>
                  <td scope="col">-</td>
                  <td scope="col">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  </div>


  <div class="container py-2">
    <div class="py-2">

      <div class="modal" id="myModal">
        <div class="modal-dialog  modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Import</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <div class="container">
                <div class="row p-2">
                  <div class="col">
                    Order Category
                  </div>
                  <div class="col">
                    <select class="form-select form-select-sm" id="OrderCategory" style="width:15rem;">
                      <option value="Bank Branch">Bank Branch</option>
                      <option value="Forex Counting">Forex Counting</option>
                    </select>
                  </div>
                </div>
                <div class="row p-2">
                  <div class="col">
                    Order Type
                  </div>
                  <div class="col">
                    <select class="form-select form-select-sm" id="OrderType" style="width:15rem;">
                      <option>Please Select One Type</option>
                      <option value="1">Withdraw</option>
                      <option value="2">Deposit</option>
                      <option value="3">Exchange</option>
                    </select>
                  </div>
                </div>
                <div class="row p-2">
                  <div class="col">
                    Select Bank
                  </div>
                  <div class="col">
                    <select id="SelectBankTypeId" class="form-select form-select-sm" style="width:15rem;">
                      <option selected="selected" value="">Please Select One Bank</option>
                      <option value="5b5480c6-6460-4377-89b6-9ff1062d65f2">AEON</option>
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
                      <option value="40bde8fc-8a97-45e7-9907-524167975791">TTB</option>
                      <option value="38bfc1b0-e86e-48b8-9a28-afbeb01770ef">UOB</option>
                      <option value="836a2c05-0f18-4077-98f0-881c1bff365e">ธ.แบงก์ออฟอเมริกา</option>
                      <option value="80cb96dd-ea99-401a-9615-bba6db501acd">ธนาคารเจพีมอร์แกนเชส</option>
                      <option value="00399a06-5496-478b-885d-7c008a106505">ธนาคารไทยพาณิชย์</option>
                    </select>
                  </div>
                </div>
                <div class="row p-2">
                  <div class="col">
                    Job Date
                  </div>
                  <div class="col">
                    <input type="date" id="JobDate" class="form-control" style="width:15rem;">
                    <!-- <date-pick :format="'YYYY.MM.DD'"></date-pick> -->
                  </div>
                </div>
                <div class="row p-2">
                  <div class="col">
                    Attached File
                  </div>
                  <div class="col">
                    <input class="form-control form-control-sm" style="width:15rem;" type="file" id="formFile" />
                  </div>
                </div>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar/Sidebar'
import { collapsed, toggleSidebar, sidebarWidth } from './sidebar/state'
import Header from './Header'
// import moment from 'moment'
export default {
  name: 'ListOrder',
  components: { Sidebar, Header, collapsed, toggleSidebar, sidebarWidth },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  },
  // data() {
  //   return {
  //     theDate: moment().format('YYYY-MM-DD')
  //   }
  // },
  // data: () => ({
  //       date: '2019-01-01'
  //   })
  // methods: {
  //   format(value, event) {
  //     return moment(value).format('DD/MM/YYYY')
  //   }
  // },
}

</script>

<style scoped lang="css">
@import '../assets/css/style.css';
</style>
