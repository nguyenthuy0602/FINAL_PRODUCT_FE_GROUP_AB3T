<template >
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h3>Thêm Bác Sĩ</h3>
                    </div>
                    <div class="card-body">
                        <label for="" class="mt-2">Tên Bác Sĩ</label>
                        <input v-model="bac_si_add.ten_bac_si" type="text" class="form-control mt-2" id=""
                            placeholder="Nhập tên bác sĩ">

                        <label for="" class="mt-2">Chuyên Môn</label>
                        <input v-model="bac_si_add.chuyen_mon" type="text" class="form-control mt-2" id=""
                            placeholder="Nhập chuyên môn">

                            <label for="" class="mt-2">Số Điện Thoại</label>
                        <input v-model="bac_si_add.so_dien_thoai" type="text" class="form-control mt-2" id=""
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
                        <h3>Danh Sách Bác Sĩ</h3>
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
                                        <th class="align-middle ;">STT</th>
                                        <th class="align-middle ;">Tên Bác Sĩ</th>
                                        <th class="align-middle ;">Chuyên Môn</th>
                                        <th class="align-middle ;">Số Điện Thoại</th>
                                        <th class="align-middle ;">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(v, k) in list_bac_si">
                                        <th class="align-middle ;">{{ k + 1 }}</th>
                                        <td class="align-middle ;">{{ v.ten_bac_si }}</td>
                                        <td class="align-middle ;">{{ v.chuyen_mon }}</td>
                                        <td class="align-middle ;">{{ v.so_dien_thoai }}</td>
                                        <td class="text-center">
                                            <button @click="loai_benh_update = Object.assign({}, v)"
                                                class="btn btn-primary me-1" data-bs-toggle="modal"
                                                data-bs-target="#capNhatModal">Cập nhật</button>
                                            <button @click="bac_si_del = v" class="btn btn-danger" data-bs-toggle="modal"
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
                                    <label class="form-label">Tên Bệnh</label>
                                    <input v-model="bac_si_update.ten_benh" type="text" class="form-control" placeholder="Nhập tên bệnh">
                                   
                                    <label class="form-label mt-3">Ghi Chú</label>
                                    <input v-model="bac_si_update.ghi_chu" type="date" class="form-control" placeholder="Nhập ghi chú">
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
                                            <div class="text-dark text-wrap">Bạn có chắc chắn muốn xóa thương hiệu <b class="text-danger">{{ bac_si_del.ten_bac_si }}</b> này không!</div>
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
            bac_si_add: {},
            bac_si_del: {},
            bac_si_update: {},
            list_bac_si: [],
        }
    },
    mounted() {
        this.loadBacSi();
    },
    methods: {
        themmoi() {
            baseRequest
                .post("admin/bac-si/create", this.bac_si_add)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    console.log(res);
                });
        },
        loadBacSi() {
            baseRequest
                .get("admin/bac-si/data")
                .then((res) => {
                    this.list_bac_si = res.data.data;
                });
        },
        huy_bo() {
            baseRequest
                .post("admin/bac-si/delete", this.bac_si_del)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadBacSi();

                });
        },
        cap_nhat() {
            baseRequest
                .post("admin/bac-si/update", this.bac_si_update)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadBacSi();

                });
        },
        trang_thai(value) {
            baseRequest
                .post("admin/bac-si/status", value)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadBacSi();

                });
        },
    },
    }

</script>
<style></style>