document.write(`
    <aside class="app-sidebar toggle-sidebar">
    <div class="app-sidebar__user">
        <div class="user-body">
            <img src="../assets/images/users/2.jpg" alt="profile-img" class="rounded-circle w-25">
        </div>
        <div class="user-info">
            <a href="#" class=""><span class="app-sidebar__user-name font-weight-semibold">admin name</span><br>
                <span class="text-muted app-sidebar__user-designation text-sm">admin role</span>
            </a>
        </div>
    </div>
    <ul class="side-menu toggle-menu">
    <li class="slide">
            <a class="side-menu__item"  data-toggle="slide" href="#"><span class="icon-menu-img"><img src="../assets/images/svgs/testing.svg" class="side_menu_img svg-1" alt="image"></span><span class="side-menu__label">Dashboard</span><i class="angle fa fa-angle-right"></i></a>
            <ul class="slide-menu">
                <li><a class="slide-item" href="main_dashboard.html"><span>Main Dashboard</span></a></li>
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item"  data-toggle="slide" href="#"><span class="icon-menu-img"><img src="../assets/images/svgs/search.svg" class="side_menu_img svg-1" alt="image"></span><span class="side-menu__label">Create Accounts</span><i class="angle fa fa-angle-right"></i></a>
            <ul class="slide-menu">
                <li><a class="slide-item" href="Create_Branch.html"><span>Create Branch account</span></a></li>
                <li><a class="slide-item" href="create_user_account.html"><span>Create Clients Account</span></a></li>
                <li><a class="slide-item" href="create_Employee.html"><span>Create Technical Account</span></a></li>
                <li><a class="slide-item" href="create_Sales_Employee.html"><span>Create Sales Account</span></a></li>
                <li><a class="slide-item" href="upload_sales_files.html"><span>Upload Sales Contracts</span></a></li>    
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item"  data-toggle="slide" href="#"><span class="icon-menu-img"><img src="../assets/images/svgs/layers.svg" class="side_menu_img svg-1" alt="image"></span><span class="side-menu__label">Users</span><i class="angle fa fa-angle-right"></i></a>
            <ul class="slide-menu">
                <li><a class="slide-item" href="User_clients_view.html"><span>Clients</span></a></li>
                <li><a class="slide-item" href="Techniacals_view.html"><span>Technical</span></a></li>
                <li><a class="slide-item" href="Sales_view.html"><span>Sales</span></a></li>
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item"  data-toggle="slide" href="#"><span class="icon-menu-img"><img src="../assets/images/svgs/writing.svg" class="side_menu_img svg-1" alt="image"></span><span class="side-menu__label">Adds</span><i class="angle fa fa-angle-right"></i></a>
            <ul class="slide-menu">
                <li><a class="slide-item" href="clients_sending_tasks.html"><span>Technical Tasks</span></a></li>
                <li><a class="slide-item" href="add_elevator.html"><span>Add Elevator</span></a></li>
                <li><a class="slide-item" href="add_spare_parts.html"><span>Add Spare Parts</span></a></li>
                <li><a class="slide-item" href="add_ADDS.html"><span>Add Ads</span></a></li>
                <li><a class="slide-item" href="Client_Maluficaions.html"><span>Client Malfunctions </span></a></li>
                <li><a class="slide-item" href="Technical Malfunctions.html"><span>Technical Malfunctions </span></a></li>
                <li><a class="slide-item" href="About_Us.html"><span>About Us </span></a></li>
                <li><a class="slide-item" href="Terms_Conditions.html"><span>Tearms And Conditions</span></a></li>
                <li><a class="slide-item" href="contact_us.html"><span>Contact Us</span></a></li>
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item"  data-toggle="slide" href="#"><span class="icon-menu-img"><img src="../assets/images/svgs/homepage.svg" class="side_menu_img svg-1" alt="image"></span><span class="side-menu__label">App Adds</span><i class="angle fa fa-angle-right"></i></a>
            <ul class="slide-menu">
                <li><a class="slide-item" href="Elevator_data.html"><span>Elevator</span></a></li>
                <li><a class="slide-item" href="spare_data.html"><span>Spare Parts</span></a></li>
                <li><a class="slide-item" href="adds_view.html"><span>Advertising</span></a></li>
            </ul>
        </li>
    </ul>
    </aside>
`)