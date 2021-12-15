using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{ 
    public class AdminRepo : IAdminRepository<Admin, int>
    {
        PetBucketEntities db;
        public AdminRepo(PetBucketEntities db)
        {
            this.db = db;
        }

        public void Edit(Admin p)
        {
            var req = db.Admins.FirstOrDefault(x => x.id == p.id);
            db.Entry(req).CurrentValues.SetValues(p);
            db.SaveChanges();
        }

        public Admin GetById(int id)
        {
            return db.Admins.FirstOrDefault(x => x.id == id);
        }
    }
}
