<template lang="">
   <div class="container">
        <div class="row">
            <div class="card">
                <div class="card-header">
                    <h4>Danh Sách Hóa Đơn Nhập Kho</h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                    <thead>
                     <tr>
                       <th class="text-center" scope="col">#</th>
                       <th class="text-center" scope="col">Mã Phiếu</th>
                       <th class="text-center" scope="col">Tổng Tiền</th>
                       <th class="text-center" scope="col">Ghi Chú</th>
                       <th class="text-center" scope="col">Nhà Cung Cấp</th>
                       <th class="text-center" scope="col">Action</th>
                     </tr>
                    </thead>
                    <tbody>
                    <template v-for="(v,k) in list_don_hang">
                        <tr>
                        <th class="text-center" >{{k+1}}</th>
                        <td class="text-center" >{{v.ma_phieu_nhap_kho}}</td>
                        <td class="text-center" >{{v.tong_tien}}</td>
                        <td class="text-center" >{{v.ghi_chu}}</td>
                        <td class="text-center" >{{v.id_nha_cung_cap}}</td>
                        <td class="text-center" >
                            <i v-on:click="loadChiTietNhapKho(v)"  data-bs-toggle="modal" data-bs-target="#chitietmodal" class="fa-solid fa-circle-info fa-2xl" style="color: #005eff;"></i>
                        </td>
                     </tr>
                    </template>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="chitietmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Chi Tiết Đơn Hàng
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="card">
                              <div class="card-body">
                                 <table class="table table-bordered">
                                 <thead>
                                  <tr>
                                    <th class="text-center" scope="col">#</th>
                                    <th class="text-center" scope="col">Tên Sản Phẩm</th>
                                    <th class="text-center" scope="col">Số Lượng</th>
                                    <th class="text-center" scope="col">Đơn Giá</th>
                                    <th class="text-center" scope="col">Thành Tiền</th>
                                  </tr>
                                 </thead>
                                 <tbody>
                                 <template v-for="(v, k) in list_chi_tiet_nhap_kho">
                                  <tr>
                                     <th class="text-center" >{{k+1}}</th>
                                     <td class="text-center" >{{v.ten_san_pham}}</td>
                                     <td class="text-center" >{{v.so_luong_nhap}}</td>
                                     <td class="text-center" >{{v.don_gia_nhap}}</td>
                                     <td class="text-center" >{{v.thanh_tien_nhap}}</td>
                                  </tr>
                                 </template>
                                 </tbody>
                                 </table>
                                      </div>
                                         </div>
                                           </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button data-bs-dismiss="modal" type="button" class="btn btn-danger">Xác Nhận</button>
                        </div>
                    </div>
                </div>
            </div>
</template>
<script>
import baseRequest from '../../core/baseRequest';
import functionBasic from '../../core/functionBasic';
export default {
    data() {
        return {
            list_don_hang: [],
            list_chi_tiet_nhap_kho: [],
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            baseRequest
                .get('don-nhap-kho/data')
                .then((res) => {
                    this.list_don_hang = res.data.data;
                })
        },
        loadChiTietNhapKho(v) {
            baseRequest
                .post('chi-tiet-nhap-kho/data', v)
                .then((res) => {
                    this.list_chi_tiet_nhap_kho = res.data.data;
                    console.log(this.list_chi_tiet_nhap_kho);
                })
        },
    },
}
</script>
<style lang="">
    
</style>