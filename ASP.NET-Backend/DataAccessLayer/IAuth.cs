using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public interface IAuth
    {
        Token Authenticate(Login login);
        bool IsAuthenticated(string token);
        bool Logout(string token);
    }
}
