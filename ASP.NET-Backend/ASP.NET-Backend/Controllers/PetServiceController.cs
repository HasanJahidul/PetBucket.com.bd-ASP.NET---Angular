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
using System.Data;
using Newtonsoft.Json;

namespace ASP.NET_Backend.Controllers
{
     [EnableCors("*", "*", "*")]
    //enable cors
    
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
        public HttpResponseMessage Add(RequestTableModel request)
        {
            PetService.AddRequest(request);
            var res = new
            {
                status = "200",
                message = "Service booked successfully",
                test ="test"
            };
            string response = JsonConvert.SerializeObject(res);
            return Request.CreateResponse(HttpStatusCode.OK,response);
        }
    
        

    }
}
