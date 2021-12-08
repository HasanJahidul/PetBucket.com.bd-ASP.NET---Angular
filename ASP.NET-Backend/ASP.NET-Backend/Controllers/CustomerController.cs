using BusinessEntityLayer;
using BusinessLogicLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ASP.NET_Backend.Controllers
{
    public class CustomerController:ApiController
    {
        [Route("api/CustomerService/AllCustomers")]
        [HttpGet]
        public List<CustomerModel> GetAll()
        {
            return CustomerService.GetAllCustomers();
        }
        //route for getting a customer by id
        [Route("api/CustomerService/Customer/{id}")]
        [HttpGet]
        public CustomerModel Get(int id)
        {
            return CustomerService.GetCustomerById(id);
        }
        //route for adding a customer
        [Route("api/CustomerService/AddCustomer")]
        [HttpPost]
        public void Post([FromBody]CustomerModel customer)
        {
            CustomerService.AddCustomer(customer);
        }
        //route for editing a customer by id
        [Route("api/CustomerService/EditCustomer")]
        [HttpPut]
        public void Put([FromBody]CustomerModel customer)
        {
            CustomerService.EditCustomer(customer);
        }
    }
}