using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class RequestTableRepo : IRepository<RequestTable, int>, IAdminRepository<RequestTable, int>
    {
        PetBucketEntities db;
        public RequestTableRepo(PetBucketEntities db)
        {
            this.db = db;
        }
        public void Add(RequestTable p)
        {
            db.RequestTables.Add(p);
            db.SaveChanges();
        }

        public void Edit(RequestTable p)
        {
            var req = db.RequestTables.FirstOrDefault(x => x.id == p.id);
            db.Entry(req).CurrentValues.SetValues(p);
            db.SaveChanges();
        }

        public List<RequestTable> GetAll()
        {
            return db.RequestTables.ToList();
        }

        public RequestTable GetById(int id)
        {
            return db.RequestTables.FirstOrDefault(x => x.customer_id == id);
        }

        public void Delete(int id)
        {
            var req = db.RequestTables.FirstOrDefault(x => x.id == id);
            db.RequestTables.Remove(req);
            db.SaveChanges();
        }
    }
}
