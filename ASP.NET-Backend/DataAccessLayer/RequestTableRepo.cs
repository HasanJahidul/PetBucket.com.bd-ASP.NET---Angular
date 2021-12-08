using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class RequestTableRepo
    {
        static PetBucketEntities db;

        static RequestTableRepo()
        {
            db = new PetBucketEntities();
        }
        public static List<RequestTable> GetAllRequests()
        {
            return db.RequestTables.ToList();
        }
        public static RequestTable GetRequestById(int id)
        {
            return db.RequestTables.Where(r => r.id == id).FirstOrDefault();
        }
        public static RequestTable Get(int id)
        {
            return db.RequestTables.FirstOrDefault(x => x.id == id);
        }
        public static void Add(RequestTable request)
        {
            db.RequestTables.Add(request);
            db.SaveChanges();
        }
        public static void Update(RequestTable request)
        {
            var req = db.RequestTables.FirstOrDefault(x => x.id == request.id);
            db.Entry(req).CurrentValues.SetValues(request);
            db.SaveChanges();
        }
        public static void Delete(int id)
        {
            RequestTable request = db.RequestTables.FirstOrDefault(x => x.id == id);
            db.RequestTables.Remove(request);
            db.SaveChanges();
        }
    }
}
