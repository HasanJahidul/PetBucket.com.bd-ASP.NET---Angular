import React from 'react'
import { Link } from "react-router-dom";
import CustomerSidebar from '../layouts/sidebar/CustomerSidebar'

const Dashboard = () => {
    return (
        <>
        <CustomerSidebar/>  
        <div class="content-container">

<div class="container-fluid">

    <div class="grey-bg container-fluid">
        <section id="minimal-statistics">
            <div class="row">
                <div class="col-12 mt-3 mb-1">
                    <h4 class="text-uppercase">Pet Services</h4>
                    
                </div>
            </div>
          

            <div class="row">
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card-box">


                    
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body" style={{height:"100px"}}>
                                        <div class="media d-flex">
                                            <div class="media-body text-left">
                                                <h5>Pet Day Care</h5>

                                            </div>
                                            <div class="align-self-center">
                                                <i class="las la-dog danger font-large-2 float-right"></i>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                 
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body" style={{height:"100px"}}>
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h5 class="success">Dog Walking</h5>
                                    </div>
                                    <div class="align-self-center">
                                        <img src="https://storage.googleapis.com/petbacker/images/cms/icons/service-type/dog-walking.png" alt="dog walking near me" width="40"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body" style={{height:"100px"}}>
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h4 class="warning">Pet Taxi</h4>
                                    </div>
                                    <div class="align-self-center">
                                        <img src="https://storage.googleapis.com/petbacker/images/cms/icons/service-type/pet-taxi.png" alt="pet taxi near me" width="40"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body" style={{height:"100px"}}>
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h4 class="primary">Pet Sitting</h4>
                                       
                                    </div>
                                    <div class="align-self-center">
                                        <img src="https://storage.googleapis.com/petbacker/images/cms/icons/service-type/cat-boarding.png" alt="cat boarding near me" width="40"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body" style={{height:"100px"}}>
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h4 class="primary">Pet Gromming</h4>

                                    </div>
                                    <div class="align-self-center">
                                        <img src="https://storage.googleapis.com/petbacker/images/cms/icons/service-type/pet-grooming-1.png" alt="pet grooming near me" width="40"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body" style={{height:"100px"}}>
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h4 class="primary">Pet Training</h4>

                                    </div>
                                    <div class="align-self-center">
                                        <img src="https://web.petbacker.com/statics/images/service-icons/pet-training.png" alt="pet grooming near me" width="40"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body" style={{height:"100px"}}>
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h4 class="primary">Coming soon</h4>

                                    </div>
                                    <div class="align-self-center">
                                        <i class="las la-spinner danger font-large-2 float-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body" style={{height:"100px"}}>
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h4 class="primary">Coming soon</h4>

                                    </div>
                                    <div class="align-self-center">
                                        <i class="las la-spinner danger font-large-2 float-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="stats-subtitle">
            <div class="row">
                <div class="col-12 mt-3 mb-1">
                    <h4 class="text-uppercase">History</h4>
                    <p>Taken Service Details.</p>
                    @Session["type"]
                </div>
            </div>

            <div class="row">
                <div class="limiter">
                    <div class="container-table100">
                        <div class="wrap-table100">
                            <div class="table100 ver1">
                                <div class="table100-firstcol">
                                    <table>
                                        <thead>
                                            <tr class="row100 head">
                                                <th class="cell100 column1">Employees</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="row100 body">
                                                <td class="cell100 column1">Brandon Green</td>
                                            </tr>

                                            <tr class="row100 body">
                                                <td class="cell100 column1">Kathy Daniels</td>
                                            </tr>

                                            <tr class="row100 body">
                                                <td class="cell100 column1">Elizabeth Alvarado</td>
                                            </tr>

                                            <tr class="row100 body">
                                                <td class="cell100 column1">Michael Coleman</td>
                                            </tr>

                                            <tr class="row100 body">
                                                <td class="cell100 column1">Jason Cox</td>
                                            </tr>

                                            <tr class="row100 body">
                                                <td class="cell100 column1">Christian Perkins</td>
                                            </tr>

                                            <tr class="row100 body">
                                                <td class="cell100 column1">Emily Wheeler</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="wrap-table100-nextcols js-pscroll">
                                    <div class="table100-nextcols">
                                        <table>
                                            <thead>
                                                <tr class="row100 head">
                                                    <th class="cell100 column2">Position</th>
                                                    <th class="cell100 column3">Start date</th>
                                                    <th class="cell100 column4">Last Activity</th>
                                                    <th class="cell100 column5">Contacts</th>
                                                    <th class="cell100 column6">Age</th>
                                                    <th class="cell100 column7">Address</th>
                                                    <th class="cell100 column8">Card No</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="row100 body">
                                                    <td class="cell100 column2">CMO</td>
                                                    <td class="cell100 column3">16 Nov 2012</td>
                                                    <td class="cell100 column4">16 Nov 2017</td>
                                                    <td class="cell100 column5">brandon94@example.com</td>
                                                    <td class="cell100 column6">30</td>
                                                    <td class="cell100 column7">New York City, NY</td>
                                                    <td class="cell100 column8">424242xxxxxx6262</td>
                                                </tr>

                                                <tr class="row100 body">
                                                    <td class="cell100 column2">Marketing</td>
                                                    <td class="cell100 column3">16 Nov 2015</td>
                                                    <td class="cell100 column4">30 Nov 2017</td>
                                                    <td class="cell100 column5">kathy_82@example.com</td>
                                                    <td class="cell100 column6">26</td>
                                                    <td class="cell100 column7">New York City, NY</td>
                                                    <td class="cell100 column8">424242xxxxxx1616</td>
                                                </tr>

                                                <tr class="row100 body">
                                                    <td class="cell100 column2">CFO</td>
                                                    <td class="cell100 column3">16 Nov 2013</td>
                                                    <td class="cell100 column4">30 Nov 2017</td>
                                                    <td class="cell100 column5">elizabeth82@example.com</td>
                                                    <td class="cell100 column6">32</td>
                                                    <td class="cell100 column7">New York City, NY</td>
                                                    <td class="cell100 column8">424242xxxxxx5326</td>
                                                </tr>

                                                <tr class="row100 body">
                                                    <td class="cell100 column2">Designer</td>
                                                    <td class="cell100 column3">16 Nov 2013</td>
                                                    <td class="cell100 column4">30 Nov 2017</td>
                                                    <td class="cell100 column5">michael94@example.com</td>
                                                    <td class="cell100 column6">22</td>
                                                    <td class="cell100 column7">New York City, NY</td>
                                                    <td class="cell100 column8">424242xxxxxx6328</td>
                                                </tr>

                                                <tr class="row100 body">
                                                    <td class="cell100 column2">Developer</td>
                                                    <td class="cell100 column3">16 Nov 2017</td>
                                                    <td class="cell100 column4">30 Nov 2017</td>
                                                    <td class="cell100 column5">jasoncox@example.com</td>
                                                    <td class="cell100 column6">25</td>
                                                    <td class="cell100 column7">New York City, NY</td>
                                                    <td class="cell100 column8">424242xxxxxx7648</td>
                                                </tr>

                                                <tr class="row100 body">
                                                    <td class="cell100 column2">Sale</td>
                                                    <td class="cell100 column3">16 Nov 2016</td>
                                                    <td class="cell100 column4">30 Nov 2017</td>
                                                    <td class="cell100 column5">christian_83@example.com</td>
                                                    <td class="cell100 column6">28</td>
                                                    <td class="cell100 column7">New York City, NY</td>
                                                    <td class="cell100 column8">424242xxxxxx4152</td>
                                                </tr>

                                                <tr class="row100 body">
                                                    <td class="cell100 column2">Support</td>
                                                    <td class="cell100 column3">16 Nov 2013</td>
                                                    <td class="cell100 column4">30 Nov 2017</td>
                                                    <td class="cell100 column5">emily90@example.com</td>
                                                    <td class="cell100 column6">24</td>
                                                    <td class="cell100 column7">New York City, NY</td>
                                                    <td class="cell100 column8">424242xxxxxx6668</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div class="row">
                <div class="col-xl-6 col-md-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body cleartfix">
                                <div class="media align-items-stretch">
                                    <div class="align-self-center">
                                        <h1 class="mr-2">$76,456.00</h1>
                                    </div>
                                    <div class="media-body">
                                        <h4>Total Sales</h4>
                                        <span>Monthly Sales Amount</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="icon-heart danger font-large-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-6 col-md-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body cleartfix">
                                <div class="media align-items-stretch">
                                    <div class="align-self-center">
                                        <h1 class="mr-2">$36,000.00</h1>
                                    </div>
                                    <div class="media-body">
                                        <h4>Total Cost</h4>
                                        <span>Monthly Cost</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="icon-wallet success font-large-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
        </section>
    </div>
</div>
</div>
            
        </>
    )
}

export default Dashboard
