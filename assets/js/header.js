document.write(`
    <div class="header-main header sticky">
        <div class="app-header header top-header navbar-collapse ">
            <div class="container-fluid">
                <div class="d-flex">
                    <a class="header-brand" href="index.html">
                        <img src="../assets/images/logo/logo.png" class="header-brand-img desktop-logo " alt="Dashlot logo">
                        <img src="../assets/images/logo/logo.png" class="header-brand-img desktop-logo-1 " alt="Dashlot logo">
                        <img src="../assets/images/logo/logo.png" class="mobile-logo" alt="Dashlot logo">
                        <img src="../assets/images/logo/logo.png" class="mobile-logo-1" alt="Dashlot logo">
                    </a>
                    <a href="#" data-toggle="sidebar" class="nav-link icon toggle"><i class="fe fe-align-justify fs-20"></i></a>
                    <div class="d-flex header-left left-header">
                        <div class="d-none d-lg-block horizontal">
                            <ul class="nav">
                                <li class="">
                                    <div class="dropdown d-none d-md-flex">
                                        <a href="#" class="d-flex nav-link pr-0  pt-2 mt-3 country-flag1" data-toggle="dropdown">
                                            <span class="d-flex"><img src="../assets/images/us_flag.jpg" alt="img" class="avatar country-Flag mr-2 align-self-center"></span>
                                            <div>
                                                <span class="d-flex fs-14 mr-3 mt-0">English<span><i class="mdi mdi-chevron-down"></i></span></span>
                                            </div>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-left dropdown-menu-arrow">
                                            <a href="#" class="dropdown-item d-flex align-items-center mt-2">
                                                <img src="../assets/images/french_flag.jpg" alt="flag-img" class="w-6 flag-sm mr-3 align-self-center">
                                                <div>
                                                    <span>French</span>
                                                </div>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="../assets/images/germany_flag.jpg" alt="flag-img" class="w-6 flag-sm mr-3 align-self-center">
                                                <div>
                                                    <span>Germany</span>
                                                </div>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="../assets/images/italy_flag.jpg" alt="flag-img" class="w-6 flag-sm  mr-3 align-self-center">
                                                <div>
                                                    <span>Italy</span>
                                                </div>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="../assets/images/russia_flag.jpg" alt="flag-img" class="w-6 flag-sm mr-3 align-self-center">
                                                <div>
                                                    <span>Russia</span>
                                                </div>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center mb-2">
                                                <img src="../assets/images/spain_flag.jpg" alt="flag-img" class="w-6 flag-sm mr-3 align-self-center">
                                                <div>
                                                    <span>Spain</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-flex header-right ml-auto">
                        <!-- Search -->
                        <div class="dropdown header-notify">
                            <a class="nav-link icon text-center" data-toggle="dropdown">
                                <i class="typcn typcn-bell bell-animations"></i>
                                <span class="pulse bg-success"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right animated bounceInDown dropdown-menu-arrow w-250">
                                <div class="dropdown-header p-4 mb-2 bg-header-image p-5 text-white">
                                    <h5 class="dropdown-title mb-1 font-weight-semibold text-drak">Notifications</h5>
                                    <p class="dropdown-title-text subtext mb-0 pb-0 fs-13">You have 4 new notifications</p>
                                </div>
                                <div class="drop-notify">
                                    <a href="message.html" class="dropdown-item d-flex pb-3 pl-4 pr-2 border-bottom">
                                        <div class="notifyimg bg-success-transparent text-success-shadow"><i class="fa fa-calendar fs-18 text-success"></i></div>
                                        <div><strong>Completed One task</strong>
                                            <div class="small fs-14 text-muted">3 min ago</div>
                                        </div>
                                    </a>
                                    <a href="message.html" class="dropdown-item d-flex pb-3 pl-4  pr-2 border-bottom">
                                        <div class="notifyimg bg-secondary-transparent text-secondary-shadow"><i class="fa fa-cogs fs-18 text-secondary"></i></div>
                                        <div><strong>Server Rebooted.</strong>
                                            <div class="small fs-14 text-muted">5 days ago</div>
                                        </div>
                                    </a>
                                    <a href="message.html" class="dropdown-item d-flex pb-3 pl-4 pr-2 border-bottom">
                                        <div class="notifyimg bg-info-transparent text-info-shadow"><i class="fa fa-envelope-o fs-18 text-info"></i></div>
                                        <div><strong> 3 new Comments</strong>
                                            <div class="small fs-14 text-muted">5 days ago</div>
                                        </div>
                                    </a>
                                    <a href="message.html" class="dropdown-item d-flex pb-3 pl-4 pr-2 border-bottom">
                                        <div class="notifyimg bg-primary-transparent text-primary-shadow"><i class="fa fa-thumbs-o-up fs-18 text-primary"></i></div>
                                        <div><strong>Anna likes our posts.</strong>
                                            <div class="small fs-14 text-muted">5 days ago</div>
                                        </div>
                                    </a>
                                    <a href="message.html" class="dropdown-item d-flex pb-3 pl-4 pr-2">
                                        <div class="notifyimg bg-secondary-transparent text-secondary-shadow"><i class="fa fa-exclamation-triangle fs-18 text-secondary"></i></div>
                                        <div><strong> Application Error</strong>
                                            <div class="small fs-14 text-muted">5 days ago</div>
                                        </div>
                                    </a>
                                </div>
                                <div class="dropdown-divider mb-0"></div>
                                <a href="all_messages.html" class="dropdown-item text-center br-br-6 br-bl-6">See all Messages</a>
                            </div>
                        </div>
                        <!-- Notification -->
                        <div class="dropdown d-md-flex message">
                            <a class="nav-link icon" data-toggle="dropdown">
                                <i class="typcn typcn-messages"></i>
                                <span class="badge badge-secondary pulse-secondary">5</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right animated bounceInDown dropdown-menu-arrow">
                                <div class="dropdown-header bg-header-image text-white w-300 p-5 mb-2">
                                    <h5 class="dropdown-title mb-1 font-weight-semibold text-drak">Messages</h5>
                                    <p class="dropdown-title-text subtext mb-0 pb-0 fs-13 ">You have 4 unread messages</p>
                                </div>
                                <div class="drop-scroll">
                                    <a href="message.html" class="p-3 d-flex border-bottom">
                                        <div class="avatar avatar-md  mr-3 d-block cover-image brround default-shadow" data-image-src="../assets/images/users/6.jpg">
                                            <span class="avatar-status bg-success"></span>
                                        </div>
                                        <div class="w-80">
                                            <div class="d-flex">
                                                <h5 class="mb-2">Madeleine</h5>
                                                <i class="fa fa-circle-thin text-right ml-auto fs-10 text-success float-right"></i>
                                            </div>
                                            <p class="mb-1">I'm sorry but i'm not sure how to help you with that...</p>
                                            <span class="font-weight-normal fs-13 text-muted">Mar15 3:55 PM</span>
                                        </div>
                                    </a>
                                    <a href="message.html" class="p-3 d-flex border-bottom">
                                        <div class="avatar avatar-md  mr-3 d-block cover-image brround default-shadow" data-image-src="../assets/images/users/7.jpg">
                                            <span class="avatar-status bg-danger"></span>
                                        </div>
                                        <div class="w-80">
                                            <div class="d-flex">
                                                <h5 class="mb-2">Nargis Hawa</h5>
                                                <i class="fa fa-circle-thin text-right ml-auto fs-10 text-danger float-right"></i>
                                            </div>
                                            <p class="mb-1">All set! Now, time to get to you now...</p>
                                            <span class="font-weight-normal fs-13 text-muted">Mar15 3:55 PM</span>
                                        </div>
                                    </a>
                                    <a href="message.html" class="p-3 d-flex border-bottom">
                                        <div class="avatar avatar-md  mr-3 d-block cover-image brround default-shadow" data-image-src="../assets/images/users/10.jpg">
                                            <span class="avatar-status bg-info"></span>
                                        </div>
                                        <div class="w-80">
                                            <div class="d-flex">
                                                <h5 class="mb-2">Sahar Darya</h5>
                                                <i class="fa fa-circle-thin text-right ml-auto fs-10 text-info float-right"></i>
                                            </div>
                                            <p class="mb-1">Here are some products i found for you form database...</p>
                                            <span class="font-weight-normal fs-13 text-muted">Mar15 3:55 PM</span>
                                        </div>
                                    </a>
                                    <a href="message.html" class="p-3 d-flex border-bottom">
                                        <div class="avatar avatar-md  mr-3 d-block cover-image brround default-shadow" data-image-src="../assets/images/users/11.jpg">
                                            <span class="avatar-status bg-warning"></span>
                                        </div>
                                        <div class="w-80">
                                            <div class="d-flex">
                                                <h5 class="mb-2">Khadija Mehr</h5>
                                                <i class="fa fa-circle-thin text-right ml-auto fs-10 text-warning float-right"></i>
                                            </div>
                                            <p class="mb-1">Are you ready to pickup your Delivery...</p>
                                            <span class="font-weight-normal fs-13 text-muted">Mar15 3:55 PM</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="dropdown-divider mb-0 mt-0"></div>
                                <a href="all_messages.html" class="dropdown-item text-center p-3">See all Messages</a>
                            </div>
                        </div>
                        <!-- Message-box -->
                        <div class="dropdown drop-profile">
                            <a class="nav-link pr-0 leading-none" href="#" data-toggle="dropdown" aria-expanded="false">
                                <div class="profile-details mt-1">
                                    <span class="mr-3 mb-0  fs-15 font-weight-semibold">admin name</span>
                                    <small class="text-muted mr-3">admin role</small>
                                </div>
                                <img class="avatar avatar-md brround" src="../assets/images/users/2.jpg" alt="image">
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow animated bounceInDown w-250">
                                <div class="user-profile bg-header-image border-bottom p-3">
                                    <div class="user-image text-center">
                                        <img class="user-images" src="../assets/images/users/2.jpg" alt="image">
                                    </div>
                                    <div class="user-details text-center">
                                        <h4 class="mb-0">admin name</h4>
                                        <p class="mb-1 fs-13 text-white-50">admin@gmail.com</p>
                                    </div>
                                </div>
                                <a class="dropdown-item" href="#">
                                    <i class="dropdown-icon mdi mdi-account-outline "></i> Profile
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="dropdown-icon  mdi mdi-settings"></i> Settings
                                </a>
                                <a class="dropdown-item" href="#">
                                    <span class="float-right"><span class="badge badge-success">6</span></span>
                                    <i class="dropdown-icon mdi  mdi-message-outline"></i> Inbox
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="dropdown-icon mdi mdi-comment-check-outline"></i> Message
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">
                                    <i class="dropdown-icon mdi mdi-compass"></i> Need help?
                                </a>
                                <a class="dropdown-item mb-1" href="login.html">
                                    <i class="dropdown-icon mdi  mdi-logout-variant"></i> Sign out
                                </a>
                            </div>
                        </div>
                        <!-- Profile -->
                        <div class="d-flex align-items-center">
                            <span class="ml-2 mr-2">Branch 1</span>
                        </div>
                        <!-- Right-side-toggle -->
                    </div>
                </div>
            </div>
        </div>
    </div>
`)