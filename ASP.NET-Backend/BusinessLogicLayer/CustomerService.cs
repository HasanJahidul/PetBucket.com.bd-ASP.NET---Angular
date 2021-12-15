using System;
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
        
        public static List<CustomerModel> GetAll()
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Customer, CustomerModel>());
            var mapper = config.CreateMapper();
            var customers = DataAccessFactory.CustomerDataAccess().GetAll();
            var result = mapper.Map<List<Customer>, List<CustomerModel>>(customers);
            return result;
        }
        public static CustomerModel GetById(int id)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Customer, CustomerModel>());
            var mapper = config.CreateMapper();
            var customer = DataAccessFactory.CustomerDataAccess().GetById(id);
            var result = mapper.Map<Customer, CustomerModel>(customer);
            return result;
        }
       public static void Add(CustomerModel customer)
        {
            var config= new MapperConfiguration(c=>c.CreateMap<CustomerModel, Customer>());
            var mapper =new Mapper(config);
            var result = mapper.Map<CustomerModel,Customer>(customer);
            DataAccessFactory.CustomerDataAccess().Add(result);
                
           
        }
        public static void Edit(CustomerModel customer)
        {
            var config = new MapperConfiguration(c => c.CreateMap<CustomerModel, Customer>());
            var mapper = new Mapper(config);
            var result = mapper.Map<CustomerModel, Customer>(customer);
            DataAccessFactory.CustomerDataAccess().Edit(result);
        }
        public static void Delete(int id)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Customer, CustomerModel>());
            var mapper = config.CreateMapper();
            var customer = DataAccessFactory.CustomerDataAccess().GetById(id);
            var result = mapper.Map<Customer, CustomerModel>(customer);
           
        }
        
    }
}
