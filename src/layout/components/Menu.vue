<template lang="">
	<div class="nav-container primary-menu">
		<div class="mobile-topbar-header">
			<div>
				<img src="../../assets/rocker/images/logo-icon.png" class="logo-icon" alt="logo icon">
			</div>
			<div>
				<h4 class="logo-text">Rukada</h4>
			</div>
			<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
			</div>
		</div>
		<nav class="navbar navbar-expand-xl w-100">
			<ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
				<!-- <li class="nav-item dropdown">
					<a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
						<div class="parent-icon">
							<i class='bx bx-home-circle'></i>
						</div>
						<div class="menu-title">Dashboard</div>
					</a>
					<ul class="dropdown-menu">
						<li> <a class="dropdown-item" href="index.html"><i class="bx bx-right-arrow-alt"></i>Default</a>
						</li>
					</ul>
				</li> -->
				<li class="nav-item">
					<router-link to="/admin/san-pham">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-brands fa-product-hunt"></i>
							</div>
							<div class="menu-title">Sản Phẩm</div>
						</a>
					</router-link>
				</li>
				<!-- <li class="nav-item">
					<router-link to="/admin/tai-khoan">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-lock"></i>
							</div>
							<div class="menu-title">Tài Khoản Admin</div>
						</a>
					</router-link>
				</li> -->
				<!-- <li class="nav-item">
					<router-link to="/admin/phan-quyen">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-person-circle-plus"></i>
							</div>
							<div class="menu-title">Phân Quyền</div>
						</a>
					</router-link>
				</li> -->
				<li class="nav-item">
					<router-link to="/admin/chuyen-muc">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-list"></i>
							</div>
							<div class="menu-title">Chuyên Mục</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/thuong-hieu">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-copyright"></i>
							</div>
							<div class="menu-title">Thương Hiệu</div>
						</a>
					</router-link>
				</li>
				<!-- <li class="nav-item">
					<router-link to="/admin/ma-giam-gia">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-brands fa-codepen"></i>
							</div>
							<div class="menu-title">Mã Giảm Giá</div>
						</a>
					</router-link>
				</li> -->
				
				<!-- <li class="nav-item">
					<router-link to="/admin/bai-viet">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-book"></i>
							</div>
							<div class="menu-title">Bài Viết</div>
						</a>
					</router-link>
				</li> -->
				<!-- <li class="nav-item">
					<router-link to="/admin/nhap-kho">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-warehouse"></i>
							</div>
							<div class="menu-title">Nhập Kho</div>
						</a>
					</router-link>
				</li> -->
				<!-- <li class="nav-item">
					<router-link to="/admin/nha-cung-cap">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-users-rectangle"></i>
							</div>
							<div class="menu-title">Nhà Cung Cấp</div>
						</a>
					</router-link>
				</li> -->
				<!-- <li class="nav-item">
					<router-link to="/admin/phieu-nhap-kho">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-users-rectangle"></i>
							</div>
							<div class="menu-title">Phiếu Nhập Kho</div>
						</a>
					</router-link>
				</li> -->
				
				<li class="nav-item">
					<router-link to="/benh-nhan">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-user"></i>
							</div>
							<div class="menu-title">Bệnh Nhân</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/loai-benh">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-user"></i>
							</div>
							<div class="menu-title">Loại Bệnh</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/bac-si">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-user"></i>
							</div>
							<div class="menu-title">Bác Sĩ</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/lieu-luong">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-user"></i>
							</div>
							<div class="menu-title">Liều Lượng</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/ke-don-thuoc">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-list"></i>
							</div>
							<div class="menu-title">Kê Đơn Thuốc</div>
						</a>
					</router-link>
				</li>
				
			</ul>
		</nav>
	</div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>