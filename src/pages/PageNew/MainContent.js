import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MainContent extends Component {
  render() {
    return (
         <>
         {/* Main Content */}
            <main id="main-content">
            <div  className="b-container">
              <div id="site-content">
                <div id="inner-content" className="inner-content-wrap clearfix">
                  <article className="box-news-wrap">
                    <div className="post-content-single-wrap">
                      <div className="post-media clearfix">
                        <Link className="post-img" to="/news">
                          <img src="http://giadinh.mediacdn.vn/thumb_w/640/2020/4/2/164d3142345t97205l0-15858346543511015564676.jpg" alt="/" />
                        </Link>{/* /.post image */}
                        <div className="post-day">
                          <p className="day">30</p>
                          <p className="monthh">Tháng 4</p>
                        </div>{/* /.post day */}
                      </div>
                      <div className="post-content-wrap">
                        <h2 className="post-title">Tin tức Covid-19 tại Việt Nam: Tối 29/4 vẫn không có ca mới</h2>{/* .post-title */}
                        <div className="post-content">
                        <p>Bản tin của Ban Chỉ đạo Quốc gia Phòng chống dịch COVID-19 lúc 18h00 ngày 29/4 cho biết, không có ca mắc mới COVID-19 nào được ghi nhận. Như vậy đã 5,5 ngày trôi qua, lần đầu tiên Việt Nam không có ca mắc mới COVID-19 nào.
                        </p>
                        <p>Tổng số ca mắc vẫn là 268, trong đó 160 người từ nước ngoài (chiếm 59,7%), 108 người lây nhiễm trong cộng đồng chiếm 40,3%.</p> 

                        <p>Cũng theo thống kê hiện có 75.799 người tiếp xúc gần và nhập cảnh từ vùng dịch đang được theo dõi sức khỏe; trong đó, cách ly tập trung tại bệnh viện 268; cách ly tập trung tại cơ sở khác 15.368; cách ly tại nhà, nơi lưu trú: 60.163.</p>

                        <blockquote>Hiện còn 54 bệnh nhân đang được cách ly, điều trị tại 9 cơ sở y tế; Trong đó, 14 ca xét nghiệm 1 lần âm tính với SARS-CoV-2 và 7 ca có kết quả xét nghiệm 2 lần âm tính với SARS-CoV-2. </blockquote>

                        </div>{/* /.post-content */}
                        <div className="post-meta clearfix">
                          <div className="post-meta-tag">
                            <Link to="/news">Virus corona </Link>
                            <Link to="/news">Kháng sinh</Link>
                            <Link to="/news">Cách ly xã hội</Link>
                          </div>
                          <div className="post-meta-share-icon">
                            <Link to="/news" title="Share on Twitter"><i className="fa fa-twitter" /></Link>
                            <Link to="/news" title="Share on Facebook"><i className="fa fa-facebook" /></Link>
                            <Link to="/news" title="Share on LinkedIn"><i className="fa fa-linkedin" /></Link>
                            <Link to="/news" title="Share on Google Plus"><i className="fa fa-google-plus" /></Link>
                          </div>
                        </div>{/* /.post-meta */}
                      </div>{/* /.entry-content-wrap */}
                    </div>{/* /.post-content-single-wrap */}
                  </article>
                </div>{/* /#inner-content */}
              </div>{/* /#site-content */}

              {/* Sidebar */}
              <div id="sidebar">
                <div id="inner-sidebar" className="inner-content-wrap">
                  <div className="widget widget_search">
                    <form role="search"  className="search-form">
                      <input type="search" className="search-field" placeholder="Search" name="s" title="Tìm kiếm cho:" />
                      <button type="submit" className="search-submit" title="Search">SEARCH</button>
                    </form>
                  </div>
                  <div className="widget widget_categories mt-10">
                    <h2 className="widget-title"><span>Danh Mục</span></h2>
                    <ul>
                      <li className="cat-item"><Link to="/news">Bộ y tế và người dân</Link></li>
                      <li className="cat-item"><Link to="/news">Công đoàn bộ y Tế</Link></li>
                      <li className="cat-item"><Link to="/news">Hỏi đáp y Tế</Link></li>
                      <li className="cat-item"><Link to="/news">Thống kê y Tế </Link></li>
                      <li className="cat-item"><Link to="/news">Hỗ trợ người dân</Link></li>                         
                    </ul>
                  </div>
                  <div className="widget widget_recent_news">
                    <h2 className="widget-title"><span>Bài Viết Gần Đây</span></h2>
                    <ul className="recent-news clearfix">
                      <li className="clearfix">
                        <div className="thumb">
                          <img src="https://ncov.moh.gov.vn/image/journal/article?img_id=6847924&t=1587810040300" alt="" width="90" />
                        </div>
                        <div className="texts">
                          <h3><Link to="/news">Người cao tuổi là đối tượng dễ tổn thương nhất trong dịch bệnh </Link></h3> 
                          <span className="post-date">
                            <span className="entry-date">20 Tháng 4, 2020</span>
                          </span>
                        </div>
                      </li>
                      <li className="clearfix">
                        <div className="thumb">
                          <img src="https://media.laodong.vn/Storage/NewsPortal/2020/2/1/781551/0E2FAF90-0A20-4E84-B.jpeg?w=888&h=592&crop=auto&scale=both" alt="" width="90" />         
                        </div>
                        <div className="texts">
                          <h3><Link to="/news">Thủ tướng công bố Hà Nội sẽ nới lỏng giãn cách xã hội vào đầu tháng năm</Link></h3> 
                          <span className="post-date">
                            <span className="entry-date">21 Tháng 4, 2020</span>
                          </span>
                        </div>
                      </li>
                      <li className="clearfix">
                        <div className="thumb">
                          <img src="https://ncov.moh.gov.vn/image/journal/article?img_id=6848422&t=1587810040008" alt=""  width="90"/>            
                        </div>
                        <div className="texts">
                          <h3><Link to="/news">Người dân được lệnh hạn chế tụ tập không quá 10 người nơi công cộng </Link></h3> 
                          <span className="post-date">
                            <span className="entry-date">25 Tháng 4, 2020</span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget_tag_cloud">
                    <h2 className="widget-title"><span>thẻ phổ biến</span></h2>
                    <div className="tagcloud">
                      <Link to="/news" className="tag-cloud-link">Vacxin </Link>
                      <Link to="/news" className="tag-cloud-link">Cách ly</Link>
                      <Link to="/news" className="tag-cloud-link">Bác Sĩ online</Link>
                      <Link to="/news" className="tag-cloud-link">Hỗ trợ 3000 tỷ</Link>
                      <Link to="/news" className="tag-cloud-link">Khai báo y tế</Link>
                      <Link to="/news" className="tag-cloud-link">Lịch thi THPTQG</Link>
                      <Link to="/news" className="tag-cloud-link">Vắc-xin 5 in 1</Link>
                    </div>
                  </div>                
                </div>
              </div>{/* /#sidebar */}
            </div>{/* /#content-wrap */}
            </main>{/* /#main-content */}

         </>
    )
  }
}
