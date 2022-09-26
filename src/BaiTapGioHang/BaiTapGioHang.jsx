import React, { Component } from 'react'
import ModalGioHang from './ModalGioHang'
import DanhSachGioHang from './DanhSachGioHang'
import SanPhamGioHang from './SanPhamGioHang'

const phoneData = [
    {
        maSP: 1,
        tenSP: 'VinSmart Live',
        manHinh: 'AMOLED, 6.2, Full HD+',
        heDieuHanh: 'Android 9.0 (Pie)',
        cameraTruoc: '20 MP',
        cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
        ram: '4 GB',
        rom: '64 GB',
        giaBan: 5700000,
        hinhAnh: './img/vsphone.jpg',
    },
    {
        maSP: 2,
        tenSP: 'Meizu 16Xs',
        manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
        heDieuHanh: 'Android 9.0 (Pie); Flyme',
        cameraTruoc: '20 MP',
        cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
        ram: '4 GB',
        rom: '64 GB',
        giaBan: 7600000,
        hinhAnh: './img/meizuphone.jpg',
    },
    {
        maSP: 3,
        tenSP: 'Iphone XS Max',
        manHinh: 'OLED, 6.5, 1242 x 2688 Pixels',
        heDieuHanh: 'iOS 12',
        cameraSau: 'Chính 12MP & Phụ 12 MP',
        cameraTruoc: '7 MP',
        ram: '4 GB',
        rom: '64 GB',
        giaBan: 27000000,
        hinhAnh: './img/applephone.jpg',
    },
]

export default class BaiTapGioHang extends Component {
    state = {
        gioHang: [],
    }


    themGioHang = (sanPhamChon) =>{
        let spGioHang = {
            maSP: sanPhamChon.maSP,
            tenSP: sanPhamChon.tenSP,
            giaBan: sanPhamChon.giaBan,
            hinhAnh: sanPhamChon.hinhAnh,
            soLuong: 1,
        }
        // Kiểm tra sản phẩm được chọn có trong giỏ hàng chưa
        var gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(sp => sp.maSP == spGioHang.maSP);
        if(index!=-1){
            //Sản phầm được chọn đã có trong giỏ hàng
            gioHangCapNhat[index].soLuong+=1;
        }
        else{
            //Sản phầm được click chưa có trong giỏ hàng
            gioHangCapNhat.push(spGioHang);
        }
        this.setState({
            gioHang:gioHangCapNhat
        })
    }

    xoaGioHang = (maSP) =>{
        // var gioHangCapNhat = [...this.state.gioHang];
        // let index = gioHangCapNhat.findIndex(sp=>sp.maSP===maSP);
        // if(index !== -1){
        //     gioHangCapNhat.splice(index,1);
        // }

        var gioHangCapNhat = this.state.gioHang.filter(sp =>sp.maSP !== maSP);
        this.setState({
            gioHang:gioHangCapNhat
        })
    }

    tangGiamSoLuong = (maSP,tangGiam) =>{ // tangGiam = true: tăng, false: giảm
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp=>sp.maSP == maSP)
        if(tangGiam){
            gioHangCapNhat[index].soLuong +=1;
        }else if(gioHangCapNhat[index].soLuong >1){
            gioHangCapNhat[index].soLuong -=1;
        }

        this.setState({
            gioHang:gioHangCapNhat
        })
    }
    render() {

      let tongSoLuong = this.state.gioHang.reduce((tsl,spGH,index) =>{
        return tsl += spGH.soLuong;
      },0)

        return (
            <div className="container">
                <h3 className="text-center text-success">Bài Tập Giỏ Hàng</h3>
                <ModalGioHang tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
                <div style={{ textAlign: 'right' }}>
                    <span
                        className="text-danger bold"
                        style={{ cursor: 'pointer', fontSize: '17px', fontWeight: 'bold' }}
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                    >
                        Giỏ Hàng ({tongSoLuong})
                    </span>
                </div>
                <DanhSachGioHang themGioHang={this.themGioHang} mangSanPham={phoneData} />
            </div>
        )
    }
}
