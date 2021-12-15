using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class DataAccessFactory
    {
        static PetBucketEntities db;
        static DataAccessFactory()
        {
            db = new PetBucketEntities();
        }
        public static IRepository<Customer, int> CustomerDataAccess()
        {
            return new CustomerRepo(db);
        }

        public static IAdminRepository<Admin, int> AdminDataAccess()
        {
            return new AdminRepo(db);
        }

        public static IRepository<Agency, int> AgencyDataAccess()
        {
            return new AgencyRepo(db);
        }
        public static IRepository<Petsitter, int> PetSitterDataAccess()
        {
            return new PetSitterRepo(db);
        }

        public static IRepository<RequestTable, int> RequestTableDataAccess()
        {
            return new RequestTableRepo(db);
        }
    }
}
