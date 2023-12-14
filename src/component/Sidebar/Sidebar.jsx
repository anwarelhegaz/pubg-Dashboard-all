import "./Sidebar.css"
import { Link } from "react-router-dom";
import  logo  from "../../assets/images/logo.png"
import PropTypes from 'prop-types';

const Sidebar = ({ isOpen, closeSidebar }) => {
    
    const sidebarStyle = {
        transform: isOpen ? 'translateX(0%)' : 'translateX(-150%)',
        // maxHeight: '100vh', // Add maxHeight here
    };

    return (
        <>
            {/* Start Sidebar *****/}
            <div className="sidebar-menu" style={sidebarStyle} >
            {/* Start Container Line Animation ****************************** */}
                <div className="container-line">
                    <div className="container-line-center">
                        <div className="line-item one"></div>
                        <div className="line-item two"></div>
                        <div className="line-item three"></div>
                        <div className="line-item four"></div>
                    </div>
                </div>
            {/* End Container Line Animation ****************************** */}
                {/* Start btn Close ****************************** */}
                <div className="close-sidbar" onClick={closeSidebar}>
                    <span className="circel-h"></span>
                    <span className="close-sidebar"></span>
                    <span>إغلاق</span>
                </div>
                {/* End btn Close ****************************** */}
                {/* Start sidebar Body  ****************************** */}
                <div className='content-siderbar' style={{overflowY:"auto", maxHeight: '100vh'}}>
                <div className="container">
                    <div className="row" >
                        <div className="col-xs-12">
                            <div className="logo-sidebar">
                                <div className="logo-h">
                                    <div className="img-22">
                                        <Link to="/home">
                                            <img src={logo} alt="logo-img" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-3">
                            <div className="side-nav scroll-scale" >
                                <ul>
                                    <li>
                                        <Link to="/home" onClick={closeSidebar}>الرئيسية</Link>
                                        <div className="hover-img">
                                            <img src={logo} alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/we-are" onClick={closeSidebar}>من نحن</Link>
                                        <div className="hover-img">
                                            <img src="https://thouqaldeera.com/wp-content/uploads/2020/01/٢٠٢٠٠١٠٩_٢٣٥٤٣٢-scaled.jpg " alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/list-food" onClick={closeSidebar}>قائمة الطعام</Link>
                                        <div className="hover-img">
                                            <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-retro-tattoo-price-list_23-2149159445.jpg?w=2000" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/branches" onClick={closeSidebar}>فروعنا</Link>
                                        <div className="hover-img">
                                            <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhu7kCaCBLmPzYcfObM9J9Cg0crgD0LWHkxTfmHQDwWG2RyoBV9bjuIpwaQyAPUSUfDp1N7raTCL-JY8f9-b8QOdSyXnU0NgU7tlCgVgmcSCyGdgWiiGF5g5amSdxd0Zkvx_5x1XfiZgCRK3GdBRnTwIRguZTGYH8mK6N2NpwRc07az8tYXRGxLPFY60A=w320-h320" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/gallery" onClick={closeSidebar}>معرض الصور</Link>
                                        <div className="hover-img">
                                            <img src="https://images01.nicepagecdn.com/page/78/63/web-design-preview-78639.jpg" alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/contact" onClick={closeSidebar}>اتصل بنا</Link>
                                        <div className="hover-img">
                                            <img src="https://thouqaldeera.com/wp-content/uploads/2020/01/client.png" alt="" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-1"></div>
                        <div className="col-xs-12 col-lg-4">
                            <div className="follow-us scroll-scale">
                                <div className="title-follow">
                                    <span>تواصل معنا</span>
                                </div>
                                <div className="follow-contact">
                                    <ul>
                                        <li>
                                            <span>Info@AhmedHosni.com</span>
                                        </li>
                                        <li>
                                            <span>الرقم الموحد 01122372060</span>
                                        </li>
                                    </ul>
                                    <p>بنى سويف كورنيش النيل</p>
                                </div>
                                <div className="social-sidbar">
                                    <ul>
                                        <li>
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="title-follow">
                                    <span>موقعنا</span>
                                </div>
                                <div className="map-sidebar">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.1179931256875!2d31.11697255978753!3d29.072658075529585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145a273438a9b0d7%3A0x1f07b7b1d69cdc5e!2z2YPYp9mB2YrZhyDYr9is2KfYrCDYqNio2KzZig!5e0!3m2!1sar!2seg!4v1702334142595!5m2!1sar!2seg" width="400" height="300" style={{ border: 0 }} loading="lazy" ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-4">
                            <div className="title-follow scroll-scale">
                                <span>تواصل معنا</span>
                            </div>
                            <div className="form-contact scroll-scale">
                                <p>تواصل معنا الان</p>
                                <div className="form">
                                    <div className="form-group">
                                        <span>
                                            <input className='form-controll' type="text" placeholder='الاسم الاول' />
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <span>
                                            <input className='form-controll' type="text" placeholder='اسم العائله' />
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <span>
                                            <input className='form-controll' type="email" placeholder='البريد الالكتروني' />
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <span>
                                            <input className='form-controll' type="email" placeholder='رقم الموبيل' />
                                        </span>
                                    </div>
                                    <div className="form-group">
                                    <button type="submit" className="btn-more">
                                        ارسال
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* End sidebar Body  ****************************** */}
            </div>
            {/* End Sidebar *****/}
        </>
    );
};

Sidebar.propTypes = {
    closeSidebar: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };
export default Sidebar;