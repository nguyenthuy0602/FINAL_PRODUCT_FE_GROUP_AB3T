<template lang="">
      <div class="row">
        <div class="col-4">
            <div class="card">
                <div class="card-header mt-1">
                    <h6>Thêm Mới Chuyên Mục</h6>
                </div>
                <div class="card-body">
                    <div class="mt-2">
                        <label>Tên Chuyên Mục</label>
                        <input v-model="chuyen_muc.ten_chuyen_muc" type="text" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Icon Chuyên Mục</label>
                        <input v-model="chuyen_muc.icon_chuyen_muc" type="text" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>URL Chuyên Mục</label>
                        <input v-model="chuyen_muc.url_chuyen_muc" type="text" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Tình Trạng</label>
                        <select v-model="chuyen_muc.tinh_trang" class="form-control mt-1">
                            <option value="1">Hiển Thị</option>
                            <option value="0">Tạm Tắt</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="them_moi()" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="card border-top border-0 border-4 border-primary">
                <div class="card-header">
                    <h5>Danh Sách Chuyên Mục</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">
                                        #
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Tên Chuyên Mục
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Icon Chuyên Mục
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        URL Chuyên Mục
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Tình Trạng
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(v, k) in list_chuyen_muc">
                                    <tr>
                                        <th class="text-center align-middle text-nowrap">
                                            {{k + 1}}
                                        </th>
                                        <td class="align-middle text-nowrap">
                                            {{v.ten_chuyen_muc}}
                                        </td>
                                        <td class="align-middle text-nowrap text-center fa-2x">
                                            <span v-html="v.icon_chuyen_muc"></span>
                                        </td>
                                        <td class="align-middle text-nowrap">
                                            {{v.url_chuyen_muc}}
                                        </td>
                                        <td v-if="v.tinh_trang == 1"
                                            class="text-center align-middle text-nowrap">
                                            <button @:click="trang_thai(v)" class="btn btn-success" style="width: 100px;">Hiển
                                                Thị</button>
                                        </td>
                                        <td v-else class="text-center align-middle text-nowrap">
                                            <button @:click="trang_thai(v)" class="btn btn-danger" style="width: 100px;">Tạm
                                                Tắt</button>
                                        </td>
                                        <td class="text-center align-middle text-nowrap">
                                            <button @:click="chuyen_muc_update = Object.assign({}, v)" class="btn btn-info m-1" style="width: 100px;"
                                                data-bs-toggle="modal" data-bs-target="#capNhatModal">Cập
                                                Nhật</button>
                                            <button @:click="chuyen_muc_del = Object.assign({}, v)" class="btn btn-danger" style="width: 100px;"
                                                data-bs-toggle="modal"
                                                data-bs-target="#xoaModal">Xóa</button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="capNhatModal" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Chuyên Mục
                                    </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-12">
                                            <label class="form-label">Tên chuyên Mục</label>
                                            <input v-model="chuyen_muc_update.ten_chuyen_muc" type="text" class="form-control"
                                                placeholder="Nhập tên chuyên mục">
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label mt-3">Icon chuyên Mục</label>
                                            <input v-model="chuyen_muc_update.icon_chuyen_muc" type="text" class="form-control"
                                                placeholder="Nhập slug chuyên mục">
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label mt-3">URL chuyên Mục</label>
                                            <input v-model="chuyen_muc_update.url_chuyen_muc" type="text" class="form-control"
                                                placeholder="Nhập slug chuyên mục">
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label mt-3">Tình Trạng</label>
                                            <select v-model="chuyen_muc_update.tinh_trang" class="form-control">
                                                <option value="1">Hiển Thị</option>
                                                <option value="0">Tạm Tắt</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button @:click="cap_nhat()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Cập Nhật</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Chuyên Mục</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div
                                        class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                        <div class="d-flex align-items-center">
                                            <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                            </div>
                                            <div class="ms-3">
                                                <h6 class="mb-0 text-dark">Warning</h6>
                                                <div class="text-dark">
                                                    <p>Bạn có muốn xóa Chuyên mục 
                                                        <b class="text-danger">{{ chuyen_muc_del.ten_chuyen_muc }}</b>
                                                        này không?
                                                    </p>
                                                    <p>
                                                        <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button @:click="huy_bo()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Xác Nhận Xóa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Toaster from '@meforma/vue-toaster';
import baseRequest from '../../core/baseRequest';
import functionBasic from '../../core/functionBasic';
export default {
    data() {
        return {
            list_chuyen_muc    :   [],
            chuyen_muc         :   {
                'ten_chuyen_muc '  : '',
                'icon_chuyen_muc ' : '',
                'url_chuyen_muc '  : '',
                'tinh_trang'    : 1,
            },
            chuyen_muc_del     :    {
                'ten_chuyen_muc'   : 'ABC-XYZ'  
            },
            chuyen_muc_update  :    {},
        }
    },
    mounted() {
        this.loadListChuyenMuc();
    },
    methods: {
        them_moi() {
            baseRequest
                .post("admin/chuyen-muc/create", this.chuyen_muc)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadListChuyenMuc();
                    this.chuyen_muc = {};
                });
        },
        loadListChuyenMuc() {
            baseRequest
                .get("admin/chuyen-muc/data")
                .then((res) => {
                    this.list_chuyen_muc = res.data.data;
                });
        },
        huy_bo() {
            baseRequest
                .post("admin/chuyen-muc/delete", this.chuyen_muc_del)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadListChuyenMuc();
                });
        },
        cap_nhat() {
            baseRequest
                .post("admin/chuyen-muc/update", this.chuyen_muc_update)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadListChuyenMuc();
                });
        },
        trang_thai(value) {
            baseRequest
                .post("admin/chuyen-muc/status", value)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadListChuyenMuc();
                });
        }, 
    },
}
</script>
<style lang="">
    
</style>