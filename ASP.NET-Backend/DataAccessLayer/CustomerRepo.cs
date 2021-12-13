using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class CustomerRepo : IRepository<Customer, int>
    {
        PetBucketEntities db;
        public CustomerRepo(PetBucketEntities db)
        {
            this.db = db;
        }
        public void AddCustomer(Customer p)
        {
            db.Customers.Add(p);
            //db.Database.ExecuteSqlCommand("SET IDENTITY_INSERT PetBucket.Customers ON;");
            var v = db.SaveChanges();
        }

        public void EditCustomer(Customer p)
        {
            var req = db.Customers.FirstOrDefault(x => x.id == p.id);
            db.Entry(req).CurrentValues.SetValues(p);
            db.SaveChanges();
        }

        public List<Customer> GetAllCustomers()
        {
            return db.Customers.ToList();
        }

        public Customer GetCustomerById(int id)
        {
            
            return db.Customers.FirstOrDefault(x => x.id == id);
        }
        public void DeleteCustomer(int id)
        {
            var req = db.Customers.FirstOrDefault(x => x.id == id);
            db.Customers.Remove(req);
            db.SaveChanges();
        }
    }
}
