<template>
<div class="row">
    <div class="col-5">
        <div class="card">
            <div class="card-header">
                <div class="input-group mb-3">
                    <input v-on:keyup.enter="timKiem()" v-model="search.ten_san_pham" type="text" class="form-control" placeholder="Nhập vào tên sản phẩm cần tìm">
                    <button v-on:click="timKiem()" class="btn btn-primary">Tìm Kiếm!</button>
                </div>
            </div>    
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class="text-center">#</th>
                            <th class="text-center">Tên Sản Phẩm</th>
                            <th class="text-center">Hình Ảnh</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(v, k) in list_san_pham">
                            <tr class="align-middle">
                                <th class="text-center">{{ k + 1 }}</th>
                                <td>{{ v.ten_san_pham }}</td>
                                <td class="text-nowrap">
                                    <img v-bind:src="v.hinh_anh" style="width: 100px;">
                                </td>
                                <td class="text-nowrap text-center">
                                    <button v-on:click="addNhapKho(v)" class="btn btn-primary btn-sm">Add</button>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>            
        </div>
    </div>
    <div class="col-7">
        <div class="card">
            <div class="card-header">
                <b class="text-primary">Danh Sách Sản Phẩm Nhập Kho</b>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class="text-center">#</th>
                            <th class="text-center">Tên Sản Phẩm</th>
                            <th class="text-center">Số Lượng</th>
                            <th class="text-center">Giá Nhập</th>
                            <th class="text-center">Thành Tiền</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(v, k) in list_nhap_kho">
                            <tr class="align-middle">
                                <th class="text-center">{{ k + 1 }}</th>
                                <td>{{ v.ten_san_pham }}</td>
                                <td>
                                    <input v-on:change="updateNhapKho(v)" v-model="v.so_luong_nhap" type="number" class="form-control">
                                </td>
                                <td>
                                    <input v-on:change="updateNhapKho(v)" v-model="v.don_gia_nhap" type="number" class="form-control">
                                </td>
                                <td>{{ v.thanh_tien_nhap }}</td>
                                <td class="text-center">
                                    <i v-on:click="deleteTmpNhapKho(v)" class="fa-2x fa-solid fa-trash text-danger"></i>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
            <div class="card-footer text-end">
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#nhapkhomodal">Tạo Phiếu Nhập Kho</button>
            </div>
            <div class="modal fade" id="nhapkhomodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Tạo Phiếu Nhập Kho
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="card">
                                <div class="card-body">
                                    <label class="mb-2">Chọn Nhà Cung Cấp</label>
                                    <select v-model="don_nhap_kho.id_nha_cung_cap" class="mb-2 form-control">
                                        <template v-for="(value, key) in list_nha_cung_cap">
                                            <option v-if="value.tinh_trang == 1" v-bind:value="value.id">{{ value.ten_cong_ty }}</option>
                                        </template>
                                    </select>
                                    <label class="mb-2">Mã Phiếu Nhập Kho</label>
                                    <input v-model="don_nhap_kho.ma_phieu_nhap_kho"  type="text" class="mb-2 form-control">
                                    <label class="mb-2">Ghi Chú</label>
                                    <textarea v-model="don_nhap_kho.ghi_chu"  class="mb-2 form-control" cols="30" rows="5"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button v-on:click="taoDonNhapKho()" data-bs-dismiss="modal" type="button" class="btn btn-danger">Xác Nhận</button>
                        </div>
                    </div>
                </div>
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
            list_san_pham       :   [],
            list_nhap_kho       :   [],
            search              :   {},
            don_nhap_kho        :   {},
            list_nha_cung_cap   :   [],
        }
    },
    mounted() {
        this.loadData();
        this.loadNhapKho();
        this.loadNhaCungCap();
    },
    methods: {
        loadData() {
            baseRequest
                .get('san-pham/data')
                .then((res) => {
                    this.list_san_pham = res.data.data;
                })
        },
        loadNhaCungCap() {
            baseRequest
                .get('nha-cung-cap/data')
                .then((res) => {
                    this.list_nha_cung_cap = res.data.data;
                    console.log();
                })
        },
        loadNhapKho() {
            baseRequest
                .get('tmp-nhap-kho/data')
                .then((res) => {
                    this.list_nhap_kho = res.data.data;
                })
        },
        timKiem() {
            baseRequest
                .post('san-pham/search', this.search)
                .then((res) => {
                    this.list_san_pham = res.data.data;
                })
        },
        addNhapKho(value) {
            value.id_san_pham   = value.id;
            baseRequest
                .post('tmp-nhap-kho/create', value)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadNhapKho();
                })
        }, 
        updateNhapKho(value) {
            baseRequest
                .post('tmp-nhap-kho/update', value)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadNhapKho();
                })
        },
        deleteTmpNhapKho(v) {
            baseRequest
                .post('tmp-nhap-kho/delete', v)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadNhapKho();
                })
        },  
        taoDonNhapKho() {
            baseRequest
                .post('don-nhap-kho/create', this.don_nhap_kho)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadNhapKho();
                })
        }
    },
}
</script>
<style lang="">
    
</style>