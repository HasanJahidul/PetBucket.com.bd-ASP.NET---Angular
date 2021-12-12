using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public interface IReqRepo<T,ID>
    {
        List<T> GetAllRequest();
        void AddRequest(T p);
        void EditRequest(T p);
        T GetReqByCusId(ID id);
    }
}
