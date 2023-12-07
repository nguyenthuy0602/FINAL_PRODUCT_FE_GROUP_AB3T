<template >
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h3>Thêm Bệnh Nhân</h3>
                    </div>
                    <div class="card-body">
                        <label for="" class="mt-2">Họ và Tên</label>
                        <input v-model="benh_nhan_add.ten_benh_nhan" type="text" class="form-control mt-2" id=""
                            placeholder="Nhập họ và tên">

                        <label for="" class="mt-2">Ngày Sinh</label>
                        <input v-model="benh_nhan_add.ngay_sinh" type="date" class="form-control mt-2" id=""
                            placeholder="Nhập Ngày Sinh">

                        <label class=" mt-2">Giới tính</label>
                        <select v-model="benh_nhan_add.gioi_tinh" class="form-select" id="">
                            <option value="0">Nam</option>
                            <option value="1">Nữ</option>
                            <option value="2">Khác</option>
                        </select>
                        <label for="" class="mt-2">Địa Chỉ</label>
                        <input v-model="benh_nhan_add.dia_chi" type="text" class="form-control mt-2" id=""
                            placeholder="Nhập địa chỉ">
                    </div>
                    <div class="card-footer text-end">
                        <button v-on:click="themmoi()" class="btn btn-primary">Thêm Bệnh Nhân</button>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-header">
                        <h3>Danh Sách Bệnh Nhân</h3>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-2 mt-1">
                                <b>Tìm Kiếm</b>
                            </div>
                            <div class="col-4">
                                <input style="margin-right:150px;" class="form-control" type="text"
                                    placeholder="Nhập tìm kiếm tại đây">
                            </div>
                            <div class="col-2">
                                <button class="btn btn-info">Tìm Kiếm</button>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <table class="table table-bordered">
                                <thead class="text-center">
                                    <tr>
                                        <th class="align-middle ;">ID</th>
                                        <th class="align-middle ;">Họ Và Tên</th>
                                        <th class="align-middle ;">Giới Tính</th>
                                        <th class="align-middle ;">Địa Chỉ</th>
                                        <th class="align-middle ;">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(v, k) in list_benh_nhan">
                                        <th class="align-middle ;">{{ k + 1 }}</th>
                                        <td class="align-middle ;">{{ v.ten_benh_nhan }}</td>
                                        <td class="align-middle ;">{{ v.gioi_tinh }}
                                         <td class="text-center">
                                            <span v-if="v.gioi_tinh == 1">Nữ</span>
                                            <span v-if="v.gioi_tinh == 0">Nam</span>
                                            <span v-if="v.gioi_tinh == 2">Khác</span>
                                        </td></td>
                                        <td class="align-middle ;">{{ v.dia_chi }}</td>
                                        
                                           
                                        <td class="text-center">
                                            <button @click="benh_nhan_update = Object.assign({}, v)"
                                                class="btn btn-primary me-1" data-bs-toggle="modal"
                                                data-bs-target="#capNhatModal">Cập nhật</button>
                                            <button @click="benh_nhan_del = v" class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#xoaModal">Xóa</button>
                                        </td>
                                    </tr>
                                 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <label class="form-label">Tên Bệnh Nhân</label>
                                    <input v-model="benh_nhan_update.ten_benh_nhan" type="text" class="form-control" placeholder="Nhập tên thương hiệu">
                                    <label class="form-label mt-3">Ngày Sinh</label>
                                    <input v-model="benh_nhan_update.ngay_sinh" type="date" class="form-control" placeholder="Nhập url thương hiệu">
                                    <label class="form-label mt-3">Giới Tính</label>
                                    <select v-model="benh_nhan_update.gioi_tinh" name="" class="form-select" id="">
                                        <option value="0">Nam</option>
                                        <option value="1">Nữ</option>
                                        <option value="2">Khác</option>
                                    </select>
                                    <label class="form-label mt-3">Địa Chỉ</label>
                                    <input v-model="benh_nhan_update.dia_chi" type="date" class="form-control" placeholder="Nhập url thương hiệu">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button @:click="cap_nhat()" type="button" data-bs-dismiss="modal" class="btn btn-primary">Cập Nhật</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="alert alert-warning border-0 bg-warning fade show py-2">
                                    <div class="d-flex align-items-center">
                                        <div class="font-35 text-dark"><i class='bx bx-info-circle'></i>
                                        </div>
                                        <div class="ms-3">
                                            <h6 class="mb-0 text-dark">Warning</h6>
                                            <div class="text-dark text-wrap">Bạn có chắc chắn muốn xóa bệnh nhân <b class="text-danger">{{ benh_nhan_del.ten_benh_nhan }}</b> này không!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button @:click="huy_bo()" type="button" data-bs-dismiss="modal" class="btn btn-danger">Xóa</button>
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
            benh_nhan_add: {},
            benh_nhan_del: {},
            benh_nhan_update: {},
            list_benh_nhan: [],
        }
    },
    mounted() {
        this.loadBenhNhan();
    },
    methods: {
        themmoi() {
            baseRequest
                .post("admin/benh-nhan/create", this.benh_nhan_add)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    console.log(res);
                });
        },
        loadBenhNhan() {
            baseRequest
                .get("admin/benh-nhan/data")
                .then((res) => {
                    this.list_benh_nhan = res.data.data;
                });
        },
        huy_bo() {
            baseRequest
                .post("admin/benh-nhan/delete", this.benh_nhan_del)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadBenhNhan();

                });
        },
        cap_nhat() {
            baseRequest
                .post("admin/benh-nhan/update", this.benh_nhan_update)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadBenhNhan();

                });
        },
        trang_thai(value) {
            baseRequest
                .post("admin/benh-nhan/status", value)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadBenhNhan();

                });
        },
    },
    }

</script>
<style></style>