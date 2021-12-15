using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public interface IRepository<T,ID>
    {
        List<T> GetAll();
        void Add(T p);
        void Edit(T p);
        T GetById(ID id);
        void Delete(ID id);

    }
}
