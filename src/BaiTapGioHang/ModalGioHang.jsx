import React, { Component } from 'react'

export default class ModalGioHang extends Component {
    render() {
      const {gioHang,xoaGioHang,tangGiamSoLuong} = this.props;
        return (
            <div>
                {/* Modal Body */}
                {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
                <div
                    className="modal fade"
                    id="modalId"
                    tabIndex={-1}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    role="dialog"
                    aria-labelledby="modalTitleId"
                    aria-hidden="true"
                >
                    <div
                        className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
                        role="document"
                    >
                        <div className="modal-content" style={{minWidth:"800px"}}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalTitleId">
                                    Modal title
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                              <table className='table'>
                                <thead>
                                <tr>
                                  <td>Mã SP</td>
                                  <td>Hình Ảnh</td>
                                  <td>Tên SP</td>
                                  <td>Số lượng</td>
                                  <td>Đơn giá</td>
                                  <td>Thành Tiền</td>
                                  <td></td>
                                </tr>
                                </thead>
                                <tbody>
                                  {gioHang.map((spGH,index)=>{
                                    return (
                                      <tr key={index}>
                                        <td>{spGH.maSP}</td>
                                        <td><img src={spGH.hinhAnh} width={50} height={75}></img></td>
                                        <td>{spGH.tenSP}</td>
                                        <td>
                                        <button className='btn btn-primary' onClick={()=>tangGiamSoLuong(spGH.maSP,true)}>+</button>
                                        {spGH.soLuong}
                                        <button className='btn btn-primary' onClick={()=>tangGiamSoLuong(spGH.maSP,false)}>-</button>
                                        </td>
                                        <td>{spGH.giaBan.toLocaleString()}</td>
                                        <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                                        <td><button className='btn btn-danger' onClick={ () => xoaGioHang(spGH.maSP)}>Delete</button></td>
                                      </tr>
                                    )
                                  })}
                                </tbody>
                                <tfoot>
                                  <tr>
                                    <td colSpan="5"></td>
                                    <td>Total</td>
                                    <td>{this.props.gioHang.reduce((tongtien,spGioHang,index) =>{
                                        return tongtien += spGioHang.soLuong * spGioHang.giaBan;
                                    },0).toLocaleString()}</td>
                                  </tr>
                                </tfoot>
                              </table>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Optional: Place to the bottom of scripts */}
            </div>
        )
    }
}
