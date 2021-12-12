using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public interface IRepository<T,ID>
    {
        List<T> GetAllCustomers();
        void AddCustomer(T p);
        void EditCustomer(T p);
        T GetCustomerById(ID id);

    }
}
