using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntityLayer
{
    public class LoginModel
    {
        public int login_id { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string type { get; set; }
        public int cus_id { get; set; }
        public int adm_id { get; set; }
        public virtual ICollection<TokenModel> Tokens { get; set; }
    }
}
