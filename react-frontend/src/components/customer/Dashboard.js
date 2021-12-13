import CustomerSidebar from '../layouts/sidebar/CustomerSidebar'
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [search, setSearch] = useState('');
  const [reqList, setReqList] = useState([]);
    useEffect(() => {
        fetch(`https://localhost:44398/api/PetService/GetAll`).then(
            (response) => {
                response.json().then((result) => {
                    setReqList(result);
                });
            }
        );
    }, []);
            
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
            <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2>Customer <b>Details</b></h2></div>
                    <div class="col-sm-4">
                        <div class="search-box">
                            <i class="material-icons">&#xE8B6;</i>
                            <input type="text" class="form-control" placeholder="Search&hellip;" onChange={e => {setSearch(e.target.value)}}/>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name </th>
                        <th>Date</th>
                        <th>Duration </th>
                        <th>Amount</th>
                        <th>Phone </th>
                        <th>Pet Details</th>
                        <th>Request Details</th>
                    </tr>
                </thead>
                <tbody>
                {reqList.filter((val) => {
                                                if (search === "") {
                                                    return val
                                                }
                                            else if (val.name.toLowerCase().includes(search.toLowerCase()))
                                            {
                                                return val
                                            }else if (val.phone.includes(search))
                                            {
                                                return val
                                            }
                                            else if (val.amount.toString().includes(search))
                                            {
                                                return val
                                            }
                                            else if (val.duration.toString().includes(search))
                                            {
                                                return val
                                            }
                                            else if (val.date.toString().includes(search))
                                            {
                                                return val
                                            }else if (val.petdetails.toLowerCase().includes(search.toLowerCase()))
                                            {
                                                return val
                                            }
                                            else if (val.requestdetails.toLowerCase().includes(search.toLowerCase()))
                                            {
                                                return val
                                            }

                                            }).map((u,id) => {
                                               
                                                
                return (
                    <tr>
                        <td>{++id}</td>
                        <td>{u.name}</td>
                        <td>{u.date}</td>
                        <td>{u.duration}</td>
                        <td>{u.amount}</td>
                        <td>{u.phone}</td>
                        <td>{u.petdetails}</td>
                        <td>{u.requestdetails}</td>
                        {/* <td>
                            <a href="#" class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                            <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td> */}
                
                </tr>
                   
                      );
                     
                    })
                }
       
                </tbody>
            </table>
        </div>
    </div>  
            
    </div>
</div>
</div>
            
        </>
    )
}

export default Dashboard
