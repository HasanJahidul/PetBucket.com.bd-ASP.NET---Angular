using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class PetSitterRepo : IRepository<Petsitter, int>
    {
        PetBucketEntities db;
        public PetSitterRepo(PetBucketEntities db)
        {
            this.db = db;
        }

        public void Add(Petsitter p)
        {
            db.Petsitters.Add(p);
            db.SaveChanges();
        }

        public void Delete(int id)
        {
            var req = db.Petsitters.FirstOrDefault(x => x.id == id);
            db.Petsitters.Remove(req);
            db.SaveChanges();
        }

        public void Edit(Petsitter p)
        {
            var req = db.Petsitters.FirstOrDefault(x => x.id == p.id);
            db.Entry(req).CurrentValues.SetValues(p);
            db.SaveChanges();
        }

        public List<Petsitter> GetAll()
        {
            return db.Petsitters.ToList();
        }

        public Petsitter GetById(int id)
        {
            return db.Petsitters.FirstOrDefault(x => x.id == id);
        }
    }
}
