using BusinessEntityLayer;
using BusinessLogicLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.IO;
using System.Collections.Specialized;
using System.Web;
using System.Web.Http.Cors;

namespace ASP.NET_Backend.Controllers
{
    [EnableCors("*", "*", "*")]
    public class PetServiceController : ApiController
    {
        [Route("api/PetService/GetAll")]
        [HttpGet]
        public List<RequestTableModel> GetAll()
        {
            return PetService.GetAllRequests();
        }
        [Route("api/PetService/Get/{id}")]
        [HttpGet]
        public RequestTableModel Get(int id)
        {
            return PetService.GetRequestById(id);
        }
        //route to add a new request
        [Route("api/PetService/Add")]
        [HttpPost]
        public void Add(RequestTableModel request)
        {
            PetService.AddRequest(request);
        }
        /*[Route("api/sms")]
        [HttpGet]
        public string SMS()
         {
             string apikey = "NmI2MjM3NzY0OTZkNjM2ZTM0NzAzNTc2NGQzNTRhNTc=";

             string SenderName = "PETBUCKET ";
             string Number = "+8801631137535";
             string Message = "This is an API message";
             string URL = "https://api.txtlocal.com/send/?";
             string PostData = "apikey=" + apikey + "&sender=" + SenderName + "&numbers=" + Number + "&message=" + Message;
             HttpWebRequest req = (HttpWebRequest)WebRequest.Create(URL);
           
                HttpWebResponse resp = (HttpWebResponse)req.GetResponse();
                StreamReader sr = new StreamReader(resp.GetResponseStream());
                string results = sr.ReadToEnd();
            return results;
            
         }*/
        

    }
}
