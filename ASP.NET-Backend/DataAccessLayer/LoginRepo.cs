using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class LoginRepo : ILogRepository<Login>
    {
        PetBucketEntities db;
        public LoginRepo(PetBucketEntities db)
        {
            this.db = db;
        }
        public void AddToLogin(Login p)
        {
            db.Logins.Add(p);
            db.SaveChanges();
        }
    }
}
