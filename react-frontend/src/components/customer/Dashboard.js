import CustomerSidebar from '../layouts/sidebar/CustomerSidebar'
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [reqList, setReqList] = useState([]);
//   useEffect(() => {
//     fetch(`https://localhost:44398/api/PetService/GetAll`).then(
//       (response) => {
//         response.json().then((result) => {
//             setReqList(result);
//         });
//       }
//     );
//   }, []);
// fetch json data from api
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

        <section id="stats-subtitle">
                <div class="row">
                    <div class="col-12 mt-3 mb-1">
                        <h4 class="text-uppercase">History</h4>
                        <p>Taken Service Details.</p>
                        
                    </div>
                </div>

                <div class="row">
                     <input className="btn-primary btn-simple input-group" type="text"
                                placeholder="searching"
                                onChange={e => {setSearch(e.target.value)}}
                            />
                    <div class="limiter">
                        <div class="container-table100">
                            <div class="wrap-table100">
                                <div class="table100 ver1">
                                    <div class="wrap-table100-nextcols js-pscroll">
                                        <div class="table100">
                                            <table>
                                                <thead>
                                                    <tr class="row100 head">
                                                        <th class=" danger cell100 column2">Name</th>
                                                        <th class=" danger cell100 column3">Date</th>
                                                        <th class="danger cell100 column4">Duration</th>
                                                        <th class=" danger cell100 column5">Amount</th>
                                                        <th class="danger cell100 column6">Phone</th>
                                                        <th class=" danger cell100 column7">Pet Details</th>
                                                        <th class="danger cell100 column8">Request  Details</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {reqList.filter((val) => {
                                                if (search == "") {
                                                    return val
                                                }
                                            else if (val.name.toLowerCase().includes(search.toLowerCase()))
                                            {
                                                return val
                                            }else if (val.date.toLowerCase().includes(search.toLowerCase()))
                                            {
                                                return val
                                            }
                                            
                                            else if (val.phone.includes(search.toLowerCase()))
                                            {
                                                return val
                                            }

                                            }).map((u) => {
                                                    return (
                                                        
                                                        <tr class="row100 body">
                                                            <td class="cell100 column2"> {u.name}</td>
                                                            <td class="cell100 column3"> {u.date}</td>
                                                            <td class="cell100 column4"> {u.duration}</td>
                                                            <td class="cell100 column5"> {u.amount}</td>
                                                            <td class="cell100 column6"> {u.phone}</td>
                                                            <td class="cell100 column7"> {u.petdetails}</td>
                                                            <td class="cell100 column8"> {u.requestdetails}</td>
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
                    </div>
                </div>
            </section>
    </div>
</div>
</div>
            
        </>
    )
}

export default Dashboard
