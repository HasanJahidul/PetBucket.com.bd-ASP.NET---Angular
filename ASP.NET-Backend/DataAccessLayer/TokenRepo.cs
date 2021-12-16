using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class TokenRepo : IRepository<Token, string>
    {
        PetBucketEntities db;
        public TokenRepo(PetBucketEntities db)
        {
            this.db = db;
        }
        public void Add(Token p)
        {
            db.Tokens.Add(p);
            db.SaveChanges();
        }

        public void Delete(string token)
        {
            db.Tokens.Remove(db.Tokens.FirstOrDefault(e => e.AccessToken.Equals(token)));
            db.SaveChanges();
        }

        public void Edit(Token p)
        {
            var token = db.Tokens.FirstOrDefault(en => en.AccessToken.Equals(p.AccessToken));
            db.Entry(token).CurrentValues.SetValues(p);
            db.SaveChanges();
        }

        public List<Token> GetAll()
        {
            return db.Tokens.ToList();
        }

        public Token GetById(string token)
        {
            return db.Tokens.FirstOrDefault(e => e.AccessToken.Equals(token));
        }
    }
}
