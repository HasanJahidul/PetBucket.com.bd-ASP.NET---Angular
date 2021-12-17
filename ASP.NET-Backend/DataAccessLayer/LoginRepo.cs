using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class LoginRepo : ILogRepository<Login,string>, IAuth
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
        public Login GetByEmail(string email)
        {
            return db.Logins.FirstOrDefault(x => x.email == email);
        }

        public Token Authenticate(Login login)
        {
            var u = db.Logins.FirstOrDefault(en => en.email.Equals(login.email) && en.password.Equals(login.password));
            Token t = null;
            if (u != null) //authenticated
            {
                string token = Guid.NewGuid().ToString();
                t = new Token();
                t.login_id = u.login_id;
                t.AccessToken = token;
                t.CreatedAt = DateTime.Now;
                db.Tokens.Add(t);
                db.SaveChanges();

            }
            return t;
        }

       

        public bool IsAuthenticated(string token)
        {
            var rs = db.Tokens.Any(e => e.AccessToken.Equals(token) && e.ExpiredAt == null);
            return rs;
        }

        public bool Logout(string token)
        {
            var t = db.Tokens.FirstOrDefault(e => e.AccessToken.Equals(token));
            if (t != null)
            {
                t.ExpiredAt = DateTime.Now;
                db.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
