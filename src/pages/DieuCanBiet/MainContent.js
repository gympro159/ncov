import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class MainContent extends Component {
  render() {
    return (
      <main id="main-content" className="mb-40">
        <div className="b-container">
          <div id="site-content" className="site-content clearfix">
            <div id="inner-content" className="inner-content-wrap">
              <div className="b-spacer"></div>
                <div className="b-container">
                  <div className="row mr-0 ml-0">
                    <div className="col-4 mr-40">
                      <div className="b-content-box bg-accent ">
                        <div className="inner text-white ">
                          <h2 className="text-white font-size-title">ĐIỀU CẦN BIẾT</h2>
                          <div className="b-list bt-dcb  ">
                              <Link to="/can-biet" className="text">Chăm Sóc Sức Khỏe</Link>
                          </div>
                          <div className="b-list bt-dcb mt-20  ">
                              <Link to="/can-biet" className="text">Dinh dưỡng mùa dịch</Link>
                          </div>
                          <div className="b-list bt-dcb mt-20  ">
                              <Link to="/can-biet" className="text">Khẩu trang y tế</Link>
                          </div>
                          <div className="b-list bt-dcb mt-20  ">
                              <Link to="/can-biet" className="text">Rửa tay đúng cách</Link>
                          </div>
                          <div className="b-list bt-dcb mt-20  ">
                              <Link to="/can-biet" className="text">Chăm sóc trẻ ốm</Link>
                          </div>
                          <div className="b-list bt-dcb mt-20  ">
                              <Link to="/can-biet" className="text">Chính sách hỗ trợ</Link>
                          </div>
                  
                
                        </div>
                      </div>
                
                      <div className="b-content-box  bg-accent mt-20" >
                        <div className="inner text-white">
                          <h2 className=" text-white font-size-title">SỨC KHỎE</h2>
                          <div className="b-list bt-dcb  ">
                            <Link to="/can-biet" className="text">Bi hài mùa dịch</Link>
                          </div> 
                          <div className="b-list bt-dcb mt-20  ">
                          <Link to="/can-biet" className="text">Đi chợ online</Link>
                          </div>
                          <div className="b-list bt-dcb mt-20  ">
                          <Link to="/can-biet" className="text">Tăng đề kháng</Link>
                          </div>
                       
                        </div>
                      </div>

                    </div>

                    <div className="col-6 ">
                      <div className="row">
                          <div className="b-galleries ">
                            <div  className="youtube">  
                            <div className="wrap-youtube">
                             <iframe title="1" width="853" height="480" src="https://www.youtube.com/embed/wGoodWEtV8c" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>     
                              <h1 className="text-center ">Chống dịch như chống giặc   </h1>   
                              <h2 className="text-center ">Cố lên Việt Nam , Tôi Yêu <span className="vn"><i className="fas fa-star "></i></span> </h2> 
                                <div className="content-youtube">
                                    <blockquote>
                                      Hiện nay dịch bệnh do virus nCoV gây ra vẫn đang diễn biến phức tạp, vì vậy các cơ quan, đơn vị trong quân đội phải tiếp tục xem nhiệm vụ chống dịch như nhiệm vụ sẵn sàng chiến đấu, phải coi “chống dịch như chống giặc”, cần sự chung tay vào cuộc của tất cả các lực lượng.
                                    </blockquote> 
                                </div>  
                              </div>           
                            </div> 

                            <div className="sub-content mt-15">
                              <div className="wrap-youtube mr-10">
                                <iframe title="2" width="300" height="240" src="https://www.youtube.com/embed/O5N8hw_oPKs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                              
                                <div className="content-youtube">
                                      <h3 className="text-center">Đeo khẩu trang đúng cách</h3>
                                </div>
                              </div>
                              <div className="wrap-youtube mr-10">
                              <iframe title="3" width="300" height="240" src="https://www.youtube.com/embed/3OtYrLrIKus" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                              
                              <div className="content-youtube">
                                    <h3 className="text-center">Dinh dưỡng mùa dịch</h3>
                                </div>
                              </div>
                              <div className="wrap-youtube">
                              <iframe title="4" width="300" height="240" src="https://www.youtube.com/embed/3-vGgI6foOU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                              
                              <div className="content-youtube">
                                    <h3 className="text-center">Rửa tay đúng cách</h3>
                                </div>
                              </div>
                        
                            </div>
                          </div>  {/* /.wprt-galleries */}
                      </div>{/* /.row */}
                    </div>{/* /.col-md-9 */}
                
                  </div>{/* .row */}
                </div>{/* /.wprt-container */}                    
            </div>{/* /#inner-content */}
        </div>{/* /#site-content */}
      </div>{/* /#content-wrap */}
    </main> 
     
    )
  }
}
