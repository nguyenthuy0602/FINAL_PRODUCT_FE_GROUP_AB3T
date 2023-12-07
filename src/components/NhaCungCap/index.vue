<template>
    <div class="row" id="app">
            
        <div class="modal fade" id="themmoiModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header ">
                        <h1 class="modal-title fs-5 " id="exampleModalLabel">Thêm Mới Nhà Cung Cấp</h1>
                        <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6 mb-2">
                                <label class="form-label">Mã số thuế</label>
                                <input v-model="add.ma_so_thue" type="text" class="form-control">
                            </div>
                            <div class="col-md-6 mb-2">
                                <label class="form-label">Tên công ty</label>
                                <input v-model="add.ten_cong_ty" type="text" class="form-control">
                            </div>
                            <div class="col-md-4 mb-2">
                                <label class="form-label">Tên người đại diện</label>
                                <input v-model="add.ten_nguoi_dai_dien" type="text" class="form-control">
                            </div>
                            <div class="col-md-4 mb-2">
                                <label class="form-label">Số điện thoại</label>
                                <input v-model="add.so_dien_thoai" type="number" class="form-control">
                            </div>
                            <div class="col-md-4 mb-2">
                                <label class="form-label">Email</label>
                                <input v-model="add.email" type="email" class="form-control">
                            </div>
                            <div class="col-md-6 mb-2">
                                <label class="form-label">Tên gợi nhớ</label>
                                <input v-model="add.ten_goi_nho" type="text" class="form-control">
                            </div>
                            <div class="col-md-6 mb-2">
                                <label class="form-label">Tình Trang</label>
                                <select class="form-control" v-model="add.tinh_trang">
                                    <option value="1">Còn Hoạt Động</option>
                                    <option value="0">Đừng Hoạt Động</option>
                                </select>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label class="form-label">Địa chỉ</label>
                                <textarea class="form-control" v-model="add.dia_chi" cols="30" rows="3"></textarea>
                            </div>
                        </div>
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary btn-sm radius-30 px-4"
                            data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-primary btn-sm radius-30 px-4"
                            v-on:click="addNhaCungCap()" data-bs-dismiss="modal">Xác nhận</button>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="col-md-12">
            <div class="card border-dark border-bottom border-3 border-0">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6> Danh Sách Nhà Cung Cấp</h6>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themmoiModal">Thêm Mới</button>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="align-middle text-center text-nowrap">Tìm kiếm</th>
                                    <th colspan="4">
                                        <div class="input-group">
                                            <input v-model="key_search" v-on:keyup.enter="search()" type="text"
                                                class="form-control">
                                            <button class="btn btn-primary btn-sm radius-30 px-4" v-on:click="search()">Tìm
                                                Kiếm</button>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="table-light">
                                    <th class="text-center">#</th>
                                    <th class="text-center">Thông Tin Công Ty</th>
                                    <th class="text-center">Thông Tin Liên Hệ</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, key) in list">
                                    <tr>
                                        <th class="text-center align-middle">{{ key + 1 }}</th>
                                        <td class="align-middle">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <th class="align-middle">Mã số thuế</th>
                                                        <td class="text-wrap" style="width: 15rem">{{ value.ma_so_thue }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="align-middle">Địa chỉ</th>
                                                        <td class="text-wrap" style="width: 15rem">{{ value.dia_chi }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="align-middle">Tên công ty</th>
                                                        <td class="text-wrap" style="width: 15rem">{{ value.ten_cong_ty }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td class="align-middle">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <th class="align-middle">Người Đại Diện</th>
                                                        <td class="text-wrap" style="width: 15rem">{{ value.ten_nguoi_dai_dien }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="align-middle">Số điện thoại</th>
                                                        <td class="text-wrap" style="width: 15rem">{{ value.so_dien_thoai }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="align-middle">Email</th>
                                                        <td class="text-wrap" style="width: 15rem">{{ value.email }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="align-middle">Tên gợi nhớ</th>
                                                        <td class="text-wrap" style="width: 15rem">{{ value.ten_goi_nho }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td class="align-middle text-center text-nowrap">
                                            <button v-on:click="changeStatus(value)" v-if="value.tinh_trang == 1"
                                                class="btn btn-primary btn btn-sm radius-30 px-4">Còn Hoạt Động</button>
                                            <button v-on:click="changeStatus(value)" v-else
                                                class="btn btn-danger btn-sm radius-30 px-4">Dừng Hoạt Động</button>
                                        </td>
                                        <td class="text-center text-nowrap align-middle">
                                            <button class="btn btn-primary" style="margin-right: 5px;"
                                                v-on:click="edit = value" data-bs-toggle="modal"
                                                data-bs-target="#updateModal">Cập Nhật</button>
                                            <button class="btn btn-danger" v-on:click="destroy = value"
                                                data-bs-toggle="modal" data-bs-target="#deleteModal">Xóa</button>
                                        </td>
                                    </tr>

                                </template>
                            </tbody>
                        </table>
                    </div>
                    
                </div>

                <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header ">
                                <h1 class="modal-title fs-5 " id="exampleModalLabel">Cập Nhật Nhà Cung Cấp</h1>
                                <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-6 mb-2">
                                        <label class="form-label">Mã số thuế</label>
                                        <input v-model="edit.ma_so_thue" type="text" class="form-control">
                                    </div>
                                    <div class="col-md-6 mb-2">
                                        <label class="form-label">Tên công ty</label>
                                        <input v-model="edit.ten_cong_ty" type="text" class="form-control">
                                    </div>
                                    <div class="col-md-4 mb-2">
                                        <label class="form-label">Tên người đại diện</label>
                                        <input v-model="edit.ten_nguoi_dai_dien" type="text" class="form-control">
                                    </div>
                                    <div class="col-md-4 mb-2">
                                        <label class="form-label">Số điện thoại</label>
                                        <input v-model="edit.so_dien_thoai" type="number" class="form-control">
                                    </div>
                                    <div class="col-md-4 mb-2">
                                        <label class="form-label">Email</label>
                                        <input v-model="edit.email" type="email" class="form-control">
                                    </div>
                                    <div class="col-md-6 mb-2">
                                        <label class="form-label">Tên gợi nhớ</label>
                                        <input v-model="edit.ten_goi_nho" type="text" class="form-control">
                                    </div>
                                    <div class="col-md-6 mb-2">
                                        <label class="form-label">Tình Trang</label>
                                        <select class="form-control" v-model="edit.tinh_trang">
                                            <option value="1">Còn Hoạt Động</option>
                                            <option value="0">Đừng Hoạt Động</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12 mb-2">
                                        <label class="form-label">Địa chỉ</label>
                                        <textarea class="form-control" v-model="edit.dia_chi" cols="30" rows="3"></textarea>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary btn-sm radius-30 px-4"
                                    data-bs-dismiss="modal">Đóng</button>
                                <button type="button" class="btn btn-primary btn-sm radius-30 px-4"
                                    v-on:click="UpdateNhaCungCap()" data-bs-dismiss="modal">Xác nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header ">
                                <h1 class="modal-title fs-5 " id="exampleModalLabel">Xóa </h1>
                                <button type="button" class="btn-close " data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Bạn có chắc chắn xóa nhà cung cấp <b>{{ destroy.ten_cong_ty }}</b> không!!
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary btn-sm radius-30 px-4"
                                    data-bs-dismiss="modal">Đóng</button>
                                <button v-on:click="DeleteNhaCungCap()" type="button"
                                    class="btn btn-primary btn-sm radius-30 px-4" data-bs-dismiss="modal">Xác nhận</button>
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
            add: {'tinh_trang' : 1},
            edit: {},
            destroy: {},
            list: []
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        search() {
            var payload = {
                'key_search': this.key_search
            }
            baseRequest
                .post('nha-cung-cap/search', payload)
                .then((res) => {
                    this.list = res.data.list;
                })
        },
        addNhaCungCap() {
            baseRequest
                .post('nha-cung-cap/create', this.add)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadData();
                    this.add = {};
                })
        },
        loadData() {
            baseRequest
                .get('nha-cung-cap/data')
                .then((res) => {
                    this.list = res.data.data;
                });
        },
        UpdateNhaCungCap() {
            baseRequest
                .post('nha-cung-cap/update', this.edit)
                .then((res) => {
                    this.loadData();
                    functionBasic.displaySuccess(res);

                })
        },
        DeleteNhaCungCap() {
            baseRequest
                .post('nha-cung-cap/delete', this.destroy)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadData();
                })
        },
        changeStatus(v) {
            baseRequest
                .post('nha-cung-cap/doi-trang-thai', v)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadData();
                });
        },
    },
}
</script>
<style></style>