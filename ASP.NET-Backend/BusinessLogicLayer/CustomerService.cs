﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using BusinessEntityLayer;
using DataAccessLayer;

namespace BusinessLogicLayer
{
    public class CustomerService
    {
        
        public static List<CustomerModel> GetAllCustomers()
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Customer, CustomerModel>());
            var mapper = config.CreateMapper();
            var customers = DataAccessFactory.CustomerDataAccess().GetAllCustomers();
            var result = mapper.Map<List<Customer>, List<CustomerModel>>(customers);
            return result;
        }
        public static CustomerModel GetCustomerById(int id)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Customer, CustomerModel>());
            var mapper = config.CreateMapper();
            var customer = DataAccessFactory.CustomerDataAccess().GetCustomerById(id);
            var result = mapper.Map<Customer, CustomerModel>(customer);
            return result;
        }
       public static void AddCustomer(CustomerModel customer)
        {
            var config= new MapperConfiguration(c=>c.CreateMap<CustomerModel, Customer>());
            var mapper =new Mapper(config);
            var result = mapper.Map<CustomerModel,Customer>(customer);
            DataAccessFactory.CustomerDataAccess().AddCustomer(result);
                
           
        }
        public static void EditCustomer(CustomerModel customer)
        {
            var config = new MapperConfiguration(c => c.CreateMap<CustomerModel, Customer>());
            var mapper = new Mapper(config);
            var result = mapper.Map<CustomerModel, Customer>(customer);
            DataAccessFactory.CustomerDataAccess().EditCustomer(result);
        }
        public static void DeleteCustomer(int id)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Customer, CustomerModel>());
            var mapper = config.CreateMapper();
            var customer = DataAccessFactory.CustomerDataAccess().GetCustomerById(id);
            var result = mapper.Map<Customer, CustomerModel>(customer);
           
        }
        
    }
}
