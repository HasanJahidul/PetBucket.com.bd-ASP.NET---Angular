using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntityLayer
{
    public class TokenModel
    {
        public int id { get; set; }
        public int login_id { get; set; }
        public string AccessToken { get; set; }
        public System.DateTime CreatedAt { get; set; }
        public Nullable<System.DateTime> ExpiredAt { get; set; }
        public virtual LoginModel login { get; set; }
    }
}
