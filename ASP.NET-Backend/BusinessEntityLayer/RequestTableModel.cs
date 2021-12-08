using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntityLayer
{
    public class RequestTableModel
    {
        public int id { get; set; }
        public int customer_id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string nid { get; set; }
        public string address { get; set; }
        public System.DateTime date { get; set; }
        public string petdetails { get; set; }
        public int duration { get; set; }
        public string phone { get; set; }
        public string requestdetails { get; set; }
        public decimal amount { get; set; }
    
        //public virtual CustomerModel Customer { get; set; }
    }
}
