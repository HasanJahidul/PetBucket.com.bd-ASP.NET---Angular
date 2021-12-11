using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class RequestTableRepo : IReqRepo<RequestTable, int>
    {
        PetBucketEntities db;
        public RequestTableRepo(PetBucketEntities db)
        {
            this.db = db;
        }
        public void AddRequest(RequestTable p)
        {
            db.RequestTables.Add(p);
            db.SaveChanges();
        }

        public void EditRequest(RequestTable p)
        {
            var req = db.RequestTables.FirstOrDefault(x => x.id == p.id);
            db.Entry(req).CurrentValues.SetValues(p);
            db.SaveChanges();
        }

        public List<RequestTable> GetAllRequest()
        {
            return db.RequestTables.ToList();
        }

        public RequestTable GetReqByCusId(int id)
        {
            return db.RequestTables.FirstOrDefault(x => x.customer_id == id);
        }
    }
}
