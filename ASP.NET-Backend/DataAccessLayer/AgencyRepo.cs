using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class AgencyRepo : IRepository<Agency, int>
    {
        PetBucketEntities db;
        public AgencyRepo(PetBucketEntities db)
        {
            this.db = db;
        }
        public void Add(Agency p)
        {
            db.Agencies.Add(p);
            db.SaveChanges();
        }

        public void Delete(int id)
        {
            var req = db.Agencies.FirstOrDefault(x => x.id == id);
            db.Agencies.Remove(req);
            db.SaveChanges();
        }

        public void Edit(Agency p)
        {
            var req = db.Agencies.FirstOrDefault(x => x.id == p.id);
            db.Entry(req).CurrentValues.SetValues(p);
            db.SaveChanges();
        }

        public List<Agency> GetAll()
        {
            return db.Agencies.ToList();
        }

        public Agency GetById(int id)
        {
            return db.Agencies.FirstOrDefault(x => x.id == id);
        }
    }
}
