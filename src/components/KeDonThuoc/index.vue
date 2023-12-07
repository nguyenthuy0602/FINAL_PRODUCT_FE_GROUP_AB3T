<template >
    <div class="container">
        <div class="row">
            <div class="col-3">
                <div class="card">
                    <div class="card-header">
                        <h3>Kê Đơn Thuốc</h3>
                    </div>
                    <div class="card-body">
                        <div>
                            <label class=" mt-2">Tên Bệnh Nhân</label>
                            <select v-model="ke_don_thuoc_add.ten_benh_nhan" class="form-select" id="">
                                <option value="0">Bùi Thì Ngọc</option>
                                <option value="1">Nguyễn Văn Minh</option>
                                <option value="2">Trần Văn Sỹ</option>
                                <option value="3">Lê Thị Gái</option>
                            </select>
                        </div>

                        <div>
                            <label class=" mt-2">Giới Tính</label>
                            <select v-model="ke_don_thuoc_add.gioi_tinh" class="form-select" id="">
                                <option value="0">Nam</option>
                                <option value="1">Nữ</option>
                                <option value="2">Khác</option>
                            </select>
                        </div>
                        <div>
                            <label class=" mt-2">Tên Bác Sĩ</label>
                            <select v-model="ke_don_thuoc_add.ten_bac_si" class="form-select" id="">
                                <option value="0">Nguyễn Hoàng</option>
                                <option value="1">Trần Thị Như Hà</option>
                                <option value="2">Lê Văn Tuấn Tú</option>
                            </select>
                        </div>
                        <div>
                            <label class=" mt-2">Chuyên Môn</label>
                            <select v-model="ke_don_thuoc_add.chuyen_mon" class="form-select" id="">
                                <option value="0">Bác sĩ trưởng khoa-Nội chỉnh hình</option>
                                <option value="1">Bác sĩ chuyên khoa-Khoa mắt</option>
                                <option value="2">Bác sĩ chính-Ngoại khoa tim mạch</option>
                            </select>
                        </div>
                        <div>
                            <label class=" mt-2">Số Điện Thoại</label>
                            <select v-model="ke_don_thuoc_add.so_dien_thoai" class="form-select" id="">
                                <option value="0">0345287649</option>
                                <option value="1">0956218937</option>
                                <option value="2">0472981495</option>
                            </select>
                        </div>
                        <div>
                            <label class=" mt-2">Chẩn Đoán Bệnh</label>
                            <select v-model="ke_don_thuoc_add.chan_doan" class="form-select" id="">
                                <option value="0">Cảm lạnh</option>
                                <option value="1">Cảm lạnh nhẹ</option>
                                <option value="2">Tiêu chảy</option>
                                <option value="3">Huyết áp cao</option>
                                <option value="4">Tăng huyết áp</option>
                            </select>
                        </div>
                        <div>
                            <label class=" mt-2">Tên Thuốc</label>
                            <select v-model="ke_don_thuoc_add.ten_thuoc" class="form-select" id="">
                                <option value="0">Paracetamol-Thuốc giảm đau hạ sốt</option>
                                <option value="1">Amoxicillin-Kháng sinh</option>
                                <option value="2">Lisinopril-Thuốc điều trị huyết áp</option>
                                <option value="3">Ibuprofen-Thuốc chống viêm</option>
                            </select>
                        </div>
                        <div>
                            <label class=" mt-2">Số Lượng</label>
                            <select v-model="ke_don_thuoc_add.so_luong" class="form-select" id="">
                                <option value="0">Paracetamol-Thuốc giảm đau hạ sốt</option>
                                <option value="1">Amoxicillin-Kháng sinh</option>
                                <option value="2">Lisinopril-Thuốc điều trị huyết áp</option>
                                <option value="3">Ibuprofen-Thuốc chống viêm</option>
                            </select>
                        </div>
                        <div class="card-footer  mt-3">
                            <button v-on:click="themmoi()" class="btn btn-primary form-control">Thêm Đơn Thuốc</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-9">
                <div class="card">
                    <div class="card-header">
                        <h3>Danh Sách Kê Đơn Thuốc</h3>
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
                                        <th class="align-middle ;">Tên Bệnh Nhân</th>
                                        <th class="align-middle ;">Giới Tính</th>
                                        <th class="align-middle ;">Tên Bác Sĩ</th>
                                        <th class="align-middle ;">Chuyên Môn</th>
                                        <th class="align-middle ;">Số Điện Thoại</th>
                                        <th class="align-middle ;">Chẩn Đoán</th>
                                        <th class="align-middle ;">Tên Thuốc</th>
                                        <th class="align-middle ;">Số Lượng</th>
                                        <th class="align-middle ;">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(v,k) in list_ke_don_thuoc">
                                   <td>{{ k+1 }}</td>
                                   <td>{{v.ten_benh_nhan}}</td>
                                   <td>{{v.gioi_tinh}}</td>
                                   <td>{{v.ten_bac_si}}</td>
                                   <td>{{v.chuyen_mon}}</td>
                                   <td>{{v.so_dien_thoai}}</td>
                                   <td>{{v.chan_doan}}</td>
                                   <td>{{v.ten_thuoc}}</td>
                                   <td>{{v.so_luong}}</td>
                                   <td class="text-center align-middle text-nowrap">
                                        <button @:click="ke_don_thuoc_update = Object.assign({}, v)" class="btn btn-info me-1" data-bs-toggle="modal" data-bs-target="#capNhatModal">Cập Nhật</button>
                                        <button @:click="ke_don_thuoc_del = Object.assign({}, v)" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaModal">Xóa</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
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
                        <div>
                            <label class=" mt-2">Tên Bệnh Nhân</label>
                            <select v-model="ke_don_thuoc_update.ten_benh_nhan" class="form-select" id="">
                                <option value="0">Bùi Thì Ngọc</option>
                                <option value="1">Nguyễn Văn Minh</option>
                                <option value="2">Trần Văn Sỹ</option>
                                <option value="3">Lê Thị Gái</option>
                            </select>
                        </div>

                        <div>
                            <label class=" mt-2">Giới Tính</label>
                            <select v-model="ke_don_thuoc_update.gioi_tinh" class="form-select" id="">
                                <option value="0">Nam</option>
                                <option value="1">Nữ</option>
                                <option value="2">Khác</option>
                            </select>
                        </div>
                        <div>
                            <label class=" mt-2">Tên Bác Sĩ</label>
                            <select v-model="ke_don_thuoc_update.ten_bac_si" class="form-select" id="">
                                <option value="0">Nguyễn Hoàng</option>
                                <option value="1">Trần Thị Như Hà</option>
                                <option value="2">Lê Văn Tuấn Tú</option>
                            </select>
                        </div>
                        <div>
                            <label class=" mt-2">Chuyên Môn</label>
                            <select v-model="ke_don_thuoc_update.chuyen_mon" class="form-select" id="">
                                <option value="0">Bác sĩ trưởng khoa-Nội chỉnh hình</option>
                                <option value="1">Bác sĩ chuyên khoa-Khoa mắt</option>
                                <option value="2">Bác sĩ chính-Ngoại khoa tim mạch</option>
                            </select>
                        </div>
                        <div>
                            <label class=" mt-2">Số Điện Thoại</label>
                            <select v-model="ke_don_thuoc_update.so_dien_thoai" class="form-select" id="">
                                <option value="0">0345287649</option>
                                <option value="1">0956218937</option>
                                <option value="2">0472981495</option>
                            </select>
                        </div>
                        <div>
                            <label class=" mt-2">Chẩn Đoán Bệnh</label>
                            <select v-model="ke_don_thuoc_update.chan_doan" class="form-select" id="">
                                <option value="0">Cảm lạnh</option>
                                <option value="1">Cảm lạnh nhẹ</option>
                                <option value="2">Tiêu chảy</option>
                                <option value="3">Huyết áp cao</option>
                                <option value="4">Tăng huyết áp</option>
                            </select>
                        </div>
                        <div>
                            <label class=" mt-2">Tên Thuốc</label>
                            <select v-model="ke_don_thuoc_update.ten_thuoc" class="form-select" id="">
                                <option value="0">Paracetamol-Thuốc giảm đau hạ sốt</option>
                                <option value="1">Amoxicillin-Kháng sinh</option>
                                <option value="2">Lisinopril-Thuốc điều trị huyết áp</option>
                                <option value="3">Ibuprofen-Thuốc chống viêm</option>
                            </select>
                        </div>
                        <div>
                            <label class=" mt-2">Số Lượng</label>
                            <select v-model="ke_don_thuoc_update.so_luong" class="form-select" id="">
                                <option value="0">Paracetamol-Thuốc giảm đau hạ sốt</option>
                                <option value="1">Amoxicillin-Kháng sinh</option>
                                <option value="2">Lisinopril-Thuốc điều trị huyết áp</option>
                                <option value="3">Ibuprofen-Thuốc chống viêm</option>
                            </select>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button @:click="cap_nhat()" type="button" data-bs-dismiss="modal" class="btn btn-primary">Cập
                                Nhật</button>
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
                                        <div class="text-dark text-wrap">Bạn có chắc chắn muốn xóa đơn thuốc<b
                                                class="text-danger">{{ ke_don_thuoc_del.ten_bac_si }}</b> này không!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button @:click="huy_bo()" type="button" data-bs-dismiss="modal"
                                class="btn btn-danger">Xóa</button>
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
            ke_don_thuoc_add: {},
            ke_don_thuoc_del: {},
            ke_don_thuoc_update: {},
            list_ke_don_thuoc: [],
        }
    },
    mounted() {
        this.loadKeDonThuoc();
    },
    methods: {
        themmoi() {
            baseRequest
                .post("admin/ke-don-thuoc/create", this.ke_don_thuoc_add)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    console.log(res);
                });
        },
        loadBacSi() {
            baseRequest
                .get("admin/ke-don-thuoc/data")
                .then((res) => {
                    this.list_ke_don_thuoc = res.data.data;
                });
        },
        huy_bo() {
            baseRequest
                .post("admin/ke-don-thuoc/delete", this.ke_don_thuoc_del)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadKeDonThuoc();

                });
        },
        cap_nhat() {
            baseRequest
                .post("admin/ke-don-thuoc/update", this.ke_don_thuoc_update)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadKeDonThuoc();

                });
        },
        trang_thai(value) {
            baseRequest
                .post("admin/ke-don-thuoc/status", value)
                .then((res) => {
                    functionBasic.displaySuccess(res);
                    this.loadKeDonThuoc();

                });
        },
    },
}

</script>
<style></style>