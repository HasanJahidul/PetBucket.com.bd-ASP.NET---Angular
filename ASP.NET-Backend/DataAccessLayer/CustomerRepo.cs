using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public static class CustomerRepo
    {
        static PetBucketEntities db;
        static CustomerRepo()
        {
            db = new PetBucketEntities();
        }
        public static List<Customer> GetAllCustomers()
        {
            return db.Customers.ToList();
        }
        public static void AddCustomer(Customer customer)
        {
            db.Customers.Add(customer);
            db.SaveChanges();
        }
        public static void EditCustomer(Customer customer)
        {
           var cus= db.Customers.FirstOrDefault(c =>c.id==customer.id);
            db.Entry(cus).CurrentValues.SetValues(customer);
            db.SaveChanges();
        }
        //get customer by id
        public static Customer GetCustomerById(int id)
        {
            return db.Customers.FirstOrDefault(c => c.id == id);
        }

    }
}
