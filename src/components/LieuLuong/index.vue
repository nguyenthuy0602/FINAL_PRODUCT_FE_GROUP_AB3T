<template >
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h3>Thêm Liều Lượng Thuốc</h3>
                    </div>
                    <div class="card-body">
                        <label for="" class="mt-2">Tên Thuốc</label>
                        <input v-model="lieu_luong_add.ten_thuoc" type="text" class="form-control mt-2" id=""
                            placeholder="Nhập tên bác sĩ">

                        <label for="" class="mt-2">Số Lượng</label>
                        <input v-model="lieu_luong_add.so_luong" type="text" class="form-control mt-2" id=""
                            placeholder="Nhập chuyên môn">

                            <label for="" class="mt-2">Tần Suất Dùng</label>
                        <input v-model="lieu_luong_add.tan_suat_dung" type="text" class="form-control mt-2" id=""
                            placeholder="Nhập số điện thoại">
                            
                            <label for="" class="mt-2">Số Ngày Dùng</label>
                        <input v-model="lieu_luong_add.so_ngay_dung" type="text" class="form-control mt-2" id=""
                            placeholder="Nhập số điện thoại">
                    </div>
                    <div class="card-footer text-end">
                        <button v-on:click="themmoi()" class="btn btn-primary">Thêm Loại Bệnh</button>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="card">
                    <div class="card-header">
                        <h3>Danh Sách Liều Lượng Thuốc</h3>
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
                                        <th class="align-middle ;">Tên Thuốc</th>
                                        <th class="align-middle ;">Số Lượng</th>
                                        <th class="align-middle ;">Tần Suất Dùng</th>
                                        <th class="align-middle ;">Số Ngày Dùng</th>
                                        <th class="align-middle ;">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(v, k) in list_lieu_luong">
                                        <th class="align-middle ;">{{ k + 1 }}</th>
                                        <td class="align-middle ;">{{ v.ten_thuoc }}</td>
                                        <td class="align-middle ;">{{ v.so_luong }}</td>
                                        <td class="align-middle ;">{{ v.tan_suat_dung }}</td>
                                        <td class="align-middle ;">{{ v.so_ngay_dung }}</td>
                                        <td class="text-center">
                                            <button @click="lieu_luong_update = Object.assign({}, v)"
                                                class="btn btn-primary me-1" data-bs-toggle="modal"
                                                data-bs-target="#capNhatModal">Cập nhật</button>
                                            <button @click="lieu_luong_del = v" class="btn btn-danger" data-bs-toggle="modal"
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
                                    <label class="form-label">Tên Thuốc</label>
                                    <input v-model="lieu_luong_update.ten_thuoc" type="text" class="form-control" placeholder="Nhập tên bệnh">
                                   
                                    <label class="form-label mt-3">Số Lượng</label>
                                    <input v-model="lieu_luong_update.so_luong" type="date" class="form-control" placeholder="Nhập ghi chú">

                                    <label class="form-label mt-3">Tần Suất Dùng</label>
                                    <input v-model="lieu_luong_update.tan_suat_dung" type="date" class="form-control" placeholder="Nhập ghi chú">

                                    <label class="form-label mt-3">Số Ngày Dùng</label>
                                    <input v-model="lieu_luong_update.so_ngay_dung" type="date" class="form-control" placeholder="Nhập ghi chú">
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
                                            <div class="text-dark text-wrap">Bạn có chắc chắn muốn xóa thương hiệu <b class="text-danger">{{lieu_luong_del.ten_thuoc }}</b> này không!</div>
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
           lieu_luong_add: {},
           lieu_luong_del: {},
           lieu_luong_update: {},
            list_lieu_luong: [],
        }
    },
    mounted() {
        this.loadLieuLuong();
    },
    methods: {
        themmoi() {
            baseRequest
                .post("admin/lieu-luong/create", this.lieu_luong_add)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    console.log(res);
                });
        },
        loadLieuLuong() {
            baseRequest
                .get("admin/lieu-luong/data")
                .then((res) => {
                    this.list_lieu_luong = res.data.data;
                });
        },
        huy_bo() {
            baseRequest
                .post("admin/lieu-luong/delete", this.lieu_luong_del)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadLieuLuong();

                });
        },
        cap_nhat() {
            baseRequest
                .post("admin/lieu-luong/update", this.lieu_luong_update)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadLieuLuong();

                });
        },
        trang_thai(value) {
            baseRequest
                .post("admin/lieu-luong/status", value)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadLieuLuong();

                });
        },
    },
    }

</script>
<style></style>