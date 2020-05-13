<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Home</title>
        <!-- Font Awesome -->
        <link href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet">
        <!-- Bootstrap core CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <!-- Style interface -->
        <link href="css/common-css.css" rel="stylesheet">
    </head>
    <!-- alert -->
    <div class="nw-alert"></div>
    <!-- /alert -->
    <header>
        <div id="nw-header2" class="bg-shadow-img d-flex justify-content-between align-items-center gl-header black-op">
            <div class="mrg-l2">
                <a href="#" class="text-white text-decoration-none">LOGO</a>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="nw-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item nw-title-header"><a class="nav-link" href="#">Home</a></li>
                        <li class="nav-item nw-title-header"><a class="nav-link" href="#">About</a></li>
                        <li class="nav-item nw-title-header"><a class="nav-link" href="#">Portfolio</a></li>
                        <li class="nav-item nw-title-header"><a class="nav-link" href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>

    <body>
        <!-- main loading web site -->
        <div id="load" class="main-loading">
            <div class="h-100 d-flex justify-content-center align-items-center">
                <div class="circle"></div>
            </div>
        </div>
        <!-- main loading web site -->

        <!-- img + name + features -->
        <div class="container-fluid border-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="pd-t5 pd-b4">
                            <div class="row">
                                <div class="col-md-6 pd-l4 pd-t2 pd-b2">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <div class="border nw-bg-light rounded-circle d-flex justify-content-center align-items-center main-img">
                                            <i class="fas fa-user size30 nw-text-grey"></i>
                                        </div>
                                        <div class="text-left">
                                            <div class="col-lg-12 size30">
                                                <span class="Roboto-medium">Ilyass</span> <span class="Roboto-medium text-uppercase">mabrouk</span>
                                            </div>
                                            <div class="col-lg-12">
                                                country
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="offset-md-1 col-md-5 pd-t2 pd-b2">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="text-center">
                                            <div>1</div>
                                            <div>Avis</div>
                                        </div>
                                        <div class="text-center">
                                            <div>2</div>
                                            <div>Lectures</div>
                                        </div>
                                        <div class="text-center">
                                            <div>3</div>
                                            <div>Utiles</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END : img + name + features -->

        <!-- reviews -->
        <!-- <div class="container mrg-t4 pd-l4 pd-r4">
            <div class="row">
                <div class="col-12 mrg-b1">
                    Avis sur <a href="#" class="nw-text-primary">Veriphone</a>
                </div>
                <div class="col-md-8 ">
                    <div class="row mrg-b3">
                        <div class="col-lg-12">
                            <div class="bg-shadow-border pd2">
                                <div class="d-flex align-items-center pd-t1 pd-b1 border-bottom">
                                    <div class="border nw-bg-light rounded-circle d-flex justify-content-center align-items-center img-access">
                                        <i class="fas fa-user size20 nw-text-grey"></i>
                                    </div>
                                    <div class="text-left">
                                        <div class="col-lg-12">
                                            <span class="Roboto-regular">Ilyass</span> <span class="Roboto-regular text-uppercase">mabrouk</span>
                                        </div>
                                        <div class="col-lg-12">
                                            <a href="" class="size13 text-decoration-none nw-text-grey"><i class="size11 fas fa-pen mrg-r0"></i>1 avis</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-bottom pd-t1 pd-b1">
                                    <div class="d-flex justify-content-between align-items-center mrg-b2">
                                        <div class="rating">
                                            <span><i class="fas fa-star c-dyn size12"></i></span>
                                            <span><i class="fas fa-star c-dyn size12"></i></span>
                                            <span><i class="fas fa-star c-dyn size12"></i></span>
                                            <span><i class="fas fa-star-half-alt c-dyn size12"></i></span>
                                            <span><i class="far fa-star c-dyn size12"></i></span>
                                        </div>
                                        <div class="">
                                            <span class="nw-text-grey size12">1 hour ago</span>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div class="size13 nw-text-grey mrg-b0">my comment</div>
                                        <span>I like this plateform it's easy to use and support all features for this years, I love it, I hope they make more update in the future. Good luck guys !</span>
                                    </div>
                                </div>
                                <div class="mrg-t1 d-flex align-items-center">
                                    <a href="#" class="mrg-r3 text-decoration-none">
                                        <span><i class="size11 nw-text-primary fas fa-pen mrg-r0"></i></span>
                                        <span class="nw-text-primary">update</span>
                                    </a>
                                    <a href="#" class="mrg-r3 text-decoration-none">
                                        <span><i class="size11 nw-text-primary far fa-trash-alt mrg-r0"></i></span>
                                        <span class="nw-text-primary">delete</span>
                                    </a>
                                    <a href="#" class="mrg-r3 text-decoration-none">
                                        <span><i class="size11 nw-text-primary fas fa-share-alt mrg-r0"></i></span>
                                        <span class="nw-text-primary">share</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mrg-b4">
                        <div class="col-lg-12">
                            <div class="bg-shadow-border pd2">
                                <div class="d-flex align-items-center pd-t1 pd-b1 border-bottom">
                                    <div class="border nw-bg-light rounded-circle d-flex justify-content-center align-items-center img-access">
                                        <i class="fas fa-user size20 nw-text-grey"></i>
                                    </div>
                                    <div class="text-left">
                                        <div class="col-lg-12">
                                            <span class="Roboto-regular">Ilyass</span> <span class="Roboto-regular text-uppercase">mabrouk</span>
                                        </div>
                                        <div class="col-lg-12">
                                            <a href="" class="size13 text-decoration-none nw-text-grey"><i class="size11 fas fa-pen mrg-r0"></i>1 avis</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-bottom pd-t1 pd-b1">
                                    <div class="d-flex justify-content-between align-items-center mrg-b2">
                                        <div class="rating">
                                            <span><i class="fas fa-star c-dyn size12"></i></span>
                                            <span><i class="fas fa-star c-dyn size12"></i></span>
                                            <span><i class="fas fa-star c-dyn size12"></i></span>
                                            <span><i class="fas fa-star-half-alt c-dyn size12"></i></span>
                                            <span><i class="far fa-star c-dyn size12"></i></span>
                                        </div>
                                        <div class="">
                                            <span class="nw-text-grey size12">1 hour ago</span>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div class="size13 nw-text-grey mrg-b0">my comment</div>
                                        <span>I like this plateform it's easy to use and support all features for this years, I love it, I hope they make more update in the future. Good luck guys !</span>
                                    </div>
                                </div>
                                <div class="mrg-t1 d-flex align-items-center">
                                    <a href="#" class="mrg-r3 text-decoration-none">
                                        <span><i class="size11 nw-text-primary fas fa-pen mrg-r0"></i></span>
                                        <span class="nw-text-primary">update</span>
                                    </a>
                                    <a href="#" class="mrg-r3 text-decoration-none">
                                        <span><i class="size11 nw-text-primary far fa-trash-alt mrg-r0"></i></span>
                                        <span class="nw-text-primary">delete</span>
                                    </a>
                                    <a href="#" class="mrg-r3 text-decoration-none">
                                        <span><i class="size11 nw-text-primary fas fa-share-alt mrg-r0"></i></span>
                                        <span class="nw-text-primary">share</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ">
                    ici
                </div>
            </div>
        </div> -->
        <!-- END : reviews -->

        <!-- carousel multiple item -->
        <div class="container-fluid mrg-t5 mrg-b5">
            <div class="w-100 text-center mrg-b3">
                <button class="phone mrg-l2 mrg-r2 border-none bg-transparent nw-text-dark p-0 cursor-pointer"><i class="fas fa-mobile-alt size35"></i></button>
                <button class="tablet mrg-l2 mrg-r2 border-none bg-transparent nw-text-dark p-0 cursor-pointer"><i class="fas fa-tablet-alt size35"></i></button>
            </div>
            <div id="myCarousel" class="nw-carousel slide pd-l3 pd-r3 posR">
                <div class="adapt-carousel carousel-inner row w-100 mx-auto">

                    <div class="carousel-item col-md-4 active">
                        <div class="border pd2 h-100" style="background-color: gainsboro;">
                            <div class="d-flex justify-content-between align-items-center mrg-b2">
                                <div class="rating">
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star-half-alt c-dyn size12"></i></span>
                                    <span><i class="far fa-star c-dyn size12"></i></span>
                                </div>
                                <div class="">
                                    <span class="nw-text-grey size12">1 hour ago</span>
                                </div>
                            </div>
                            <div class="mrg-b2">
                                <div class="size20 Roboto-medium nw-text-grey mrg-b0">Title of my comment</div>
                                <span>I like this plateform it's easy to use and support all features for this years, I love it, I hope they make more update in the future. Good luck guys !</span>
                            </div>
                            <div class="">
                                <div class="size13 nw-text-grey mrg-b0">ilyass MABROUK</div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="carousel-item col-md-4">
                        <div class="border pd2 h-100">
                            <div class="d-flex justify-content-between align-items-center mrg-b2">
                                <div class="rating">
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star-half-alt c-dyn size12"></i></span>
                                    <span><i class="far fa-star c-dyn size12"></i></span>
                                </div>
                                <div class="">
                                    <span class="nw-text-grey size12">1 hour ago</span>
                                </div>
                            </div>
                            <div class="mrg-b2">
                                <div class="size20 Roboto-medium nw-text-grey mrg-b0">Title of my comment</div>
                                <span>I like this plateform it's easy to use and support all features for this years.</span>
                            </div>
                            <div class="">
                                <div class="size13 nw-text-grey mrg-b0">mohammed amine MABROUK</div>
                            </div>
                        </div>
                    </div>                    
                    
                    <div class="carousel-item col-md-4">
                        <div class="border pd2 h-100" style="background-color: gainsboro;">
                            <div class="d-flex justify-content-between align-items-center mrg-b2">
                                <div class="rating">
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star-half-alt c-dyn size12"></i></span>
                                    <span><i class="far fa-star c-dyn size12"></i></span>
                                </div>
                                <div class="">
                                    <span class="nw-text-grey size12">1 hour ago</span>
                                </div>
                            </div>
                            <div class="mrg-b2">
                                <div class="size20 Roboto-medium nw-text-grey mrg-b0">Title of my comment</div>
                                <span>I like this plateform it's easy to use and support all features for this years, I love it, I hope they make more update in the future.</span>
                            </div>
                            <div class="">
                                <div class="size13 nw-text-grey mrg-b0">hicham MABROUK</div>
                            </div>
                        </div>
                    </div>                    
                    
                    <div class="carousel-item col-md-4">
                        <div class="border pd2 h-100">
                            <div class="d-flex justify-content-between align-items-center mrg-b2">
                                <div class="rating">
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star-half-alt c-dyn size12"></i></span>
                                    <span><i class="far fa-star c-dyn size12"></i></span>
                                </div>
                                <div class="">
                                    <span class="nw-text-grey size12">1 hour ago</span>
                                </div>
                            </div>
                            <div class="mrg-b2">
                                <div class="size20 Roboto-medium nw-text-grey mrg-b0">Title of my comment</div>
                                <span>I like it !</span>
                            </div>
                            <div class="">
                                <div class="size13 nw-text-grey mrg-b0">ayoub MABROUK</div>
                            </div>
                        </div>
                    </div>                    
                    
                    <div class="carousel-item col-md-4">
                        <div class="border pd2 h-100" style="background-color: gainsboro;">
                            <div class="d-flex justify-content-between align-items-center mrg-b2">
                                <div class="rating">
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star-half-alt c-dyn size12"></i></span>
                                    <span><i class="far fa-star c-dyn size12"></i></span>
                                </div>
                                <div class="">
                                    <span class="nw-text-grey size12">1 hour ago</span>
                                </div>
                            </div>
                            <div class="mrg-b2">
                                <div class="size20 Roboto-medium nw-text-grey mrg-b0">Title of my comment</div>
                                <span>
                                    I like this plateform it's easy to use and support all features for this years, I love it, I hope they make more update in the future. Good luck guys !
                                    I like this plateform it's easy to use and support all features for this years, I love it, I hope they make more update in the future. Good luck guys !
                                </span>
                            </div>
                            <div class="">
                                <div class="size13 nw-text-grey mrg-b0">zouhir BELGHAZI</div>
                            </div>
                        </div>
                    </div>                    
                    
                    <div class="carousel-item col-md-4">
                        <div class="border pd2 h-100">
                            <div class="d-flex justify-content-between align-items-center mrg-b2">
                                <div class="rating">
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star-half-alt c-dyn size12"></i></span>
                                    <span><i class="far fa-star c-dyn size12"></i></span>
                                </div>
                                <div class="">
                                    <span class="nw-text-grey size12">1 hour ago</span>
                                </div>
                            </div>
                            <div class="mrg-b2">
                                <div class="size20 Roboto-medium nw-text-grey mrg-b0">Title of my comment</div>
                                <span>I like this plateform it's easy to use and support all features for this years, I love it, I hope they make more update in the future. Good luck guys !</span>
                            </div>
                            <div class="">
                                <div class="size13 nw-text-grey mrg-b0">haytam BELGHAZI</div>
                            </div>
                        </div>
                    </div>                    
                    
                    <div class="carousel-item col-md-4">
                        <div class="border pd2 h-100" style="background-color: gainsboro;">
                            <div class="d-flex justify-content-between align-items-center mrg-b2">
                                <div class="rating">
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star c-dyn size12"></i></span>
                                    <span><i class="fas fa-star-half-alt c-dyn size12"></i></span>
                                    <span><i class="far fa-star c-dyn size12"></i></span>
                                </div>
                                <div class="">
                                    <span class="nw-text-grey size12">1 hour ago</span>
                                </div>
                            </div>
                            <div class="mrg-b2">
                                <div class="size20 Roboto-medium nw-text-grey mrg-b0">Title of my comment</div>
                                <span>I like this plateform it's easy to use and support all features for this years, I love it, I hope they make more update in the future. Good luck guys !</span>
                            </div>
                            <div class="">
                                <div class="size13 nw-text-grey mrg-b0">firstName LASTNAME</div>
                            </div>
                        </div>
                    </div>

                </div> 
                <button class="bg-transparent border-none cursor-pointer rounded-circle nw-carousel-control-prev">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="bg-transparent border-none cursor-pointer rounded-circle nw-carousel-control-next">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
        <!-- END : carousel multiple item -->


        <!-- carousel multiple item -->
        <div class="mrg-t4 mrg-b4">
            
        </div>
        <!-- END : carousel multiple item -->

    </body> 

    <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-firestore.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-functions.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js"></script>
    
    <!-- JQuery -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <!-- Bootstrap core JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <!-- common js -->
    <script type="text/javascript" src="js/common-js.js"></script>
    <!-- review js -->
    <script type="text/javascript" src="js/review.js"></script>
</html>