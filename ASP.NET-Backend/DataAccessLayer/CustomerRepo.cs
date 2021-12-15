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
        public void Add(Customer p)
        {
            db.Customers.Add(p);
            db.SaveChanges();
        }

        public void Edit(Customer p)
        {
            var req = db.Customers.FirstOrDefault(x => x.id == p.id);
            db.Entry(req).CurrentValues.SetValues(p);
            db.SaveChanges();
        }

        public List<Customer> GetAll()
        {
            return db.Customers.ToList();
        }

        public Customer GetById(int id)
        {
            return db.Customers.FirstOrDefault(x => x.id == id);
        }
        public void Delete(int id)
        {
            var req = db.Customers.FirstOrDefault(x => x.id == id);
            db.Customers.Remove(req);
            db.SaveChanges();
        }
    }
}
