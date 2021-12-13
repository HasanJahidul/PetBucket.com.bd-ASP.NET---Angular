import React from 'react'
import './landing.css';

const LandingPage = () => {
    return (
        <>
        
<nav class="navbar navbar-light bg-light static-top">
    <div class="container">
        <a class="navbar-brand" href="#!">Pet Bucket</a>
        <a class="btn btn-primary" href="/login">Log in</a>
        <a class="btn btn-primary" href="/register">Sign Up</a>

    </div>
</nav>
{/* <!-- Masthead--> */}
<header class="masthead">
    <div class="container position-relative">
        <div class="row justify-content-center">
            <div class="col-xl-6">
                <div class="text-center text-white">
                    {/* <!-- Page heading--> */}
                    <h1 class="mb-5">
                        Get Pet Sitters for
                        Cat & Dog Boarding in Bangladesh
                    </h1>
                </div>
            </div>
        </div>
    </div>
</header>
{/* <!-- Icons Grid--> */}
<section class="features-icons bg-light text-center">
    <div class="container">
        <div class="row">
            <div class="row" style={{overflow:"hidden"}}>
                <div class="col-12 col-md-6" id="openBusinessImg"><img src="https://storage.googleapis.com/petbacker/images/cms/petbacker-open-business.png" class="img-fluid" alt="Petbacker Pet Boarding for dog and cat"/></div>
                
                
                <div class="col-12 col-md-6" style={{"justify-content": "space-around", "padding-top": "10%","padding-bottom":"10%"}}>

                    <div class="section-title-big" style={{"font-family": 'Heebo'}}>
                        Open for business.
                    </div>
                    <p>Whatever pet service you provide, we'll find the pet sitter, groomer or dog walker jobs you need.</p>

                    <div class="item_buttons"><a href="/../pet-sitter-job" target="_blank"><input id="btn_besitter" class="btn" type="button" value="Become a pet sitter" style={{ width:"auto !important;"}}/></a></div>
                    <div class="item_buttons"><a href="/../dog-walker-job" target="_blank"><input id="btn_besitter" class="btn" type="button" value="Become a dog walker" style={{ width:"auto !important;"}}/></a></div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Image Showcases--> */}
<section class="showcase">
    <div class="container-fluid p-0">
        <div class="row g-0">
            <div class="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url('https://storage.googleapis.com/petbacker/images/cms/servicecovers/pet-taxi.jpg')"}}></div>
            <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Pet Taxi</h2>
                <p class="lead mb-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
        </div>
        <div class="row g-0">

        <div class="col-lg-6  text-white showcase-img" style={{backgroundImage: "url('https://storage.googleapis.com/petbacker/images/cms/servicecovers/cat-grooming.jpg')"}}></div>
             <div class="col-lg-6 my-auto showcase-text">
                <h2>Pet Grooming</h2>
                <p class="lead mb-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>    
            </div>
        </div>
        <div class="row g-0">
            <div class="col-md-6 order-md-2 text-white showcase-img" style={{backgroundImage: "url('https://storage.googleapis.com/petbacker/images/cms/servicecovers/dog-walking.jpg')"}}></div>
            <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Dog Walking</h2>
                <p class="lead mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
        </div>
    </div>
</section>
{/* <!-- Testimonials--> */}
<section class="testimonials text-center bg-light">

    <div class="container">
    
        <h2 class="mb-5" style={{color:"black"}}>Credits</h2>
        <div class="row">
            <div class="col-lg-0">
                <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img class="img-fluid rounded-circle mb-3" src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.6435-9/135852902_230919685141176_5025532275775365595_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeH3-eFi3UXLLBKF3AbG9wrdXlAIyvm0UmheUAjK-bRSaFEQFuExPt-xG3SEE5FWVJ4ZFAYAFOHkxGYu0g-hvYz4&_nc_ohc=8Vu1PuTqLDQAX8s7-3o&_nc_ht=scontent.fdac135-1.fna&oh=0b9c16997f22ded57dcfa24dc0ae081e&oe=61DAD57E" alt="..." />
                    <h5><a href="https://www.hasanjahidul.com">Jahidul Hasan</a></h5>
                    <p class="font-weight-light mb-0">"Cheif developer of this project."</p>
                </div>
            </div>
            <div class="col-lg-0">
                <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img class="img-fluid rounded-circle mb-3" src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/217773341_3078188699069775_7808402771534848014_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGADbFk0DTN_zI50xV-QBWWTuZByDypkKpO5kHIPKmQqv1k66Z5yT-s4o59GE9hr5iR2PTDYucvWDduPI8nLWLh&_nc_ohc=G1ruFChbnusAX975a7c&_nc_ht=scontent.fdac135-1.fna&oh=f2b48f99ed5ed9993da65e2b4a57401c&oe=61BB3F3E" alt="..." />
                    <h5>Sabbir Hossain Borno</h5>
                    <p class="centerdiv font-weight-light mb-0">"Assistant developer"</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!-- Footer--> */}
<footer class="footer bg-light">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
                <ul class="list-inline mb-2">
                    <li class="list-inline-item"><a href="#!">About</a></li>
                    <li class="list-inline-item">⋅</li>
                    <li class="list-inline-item"><a href="#!">Contact</a></li>
                    <li class="list-inline-item">⋅</li>
                    <li class="list-inline-item"><a href="#!">Terms of Use</a></li>
                    <li class="list-inline-item">⋅</li>
                    <li class="list-inline-item"><a href="#!">Privacy Policy</a></li>
                </ul>
                <p class="text-muted small mb-4 mb-lg-0">&copy; Your Website 2021. All Rights Reserved to <a href="https://www.hasanjahidul.com">Jahidul Hasan</a></p>
            </div>
            <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item me-4">
                        <a href="#!"><i class="bi-facebook fs-3"></i></a>
                    </li>
                    <li class="list-inline-item me-4">
                        <a href="#!"><i class="bi-twitter fs-3"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#!"><i class="bi-instagram fs-3"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
   </>
    )
}

export default LandingPage
