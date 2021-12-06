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
    }
}
