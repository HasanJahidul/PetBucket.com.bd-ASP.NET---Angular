using BusinessEntityLayer;
using BusinessLogicLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ASP.NET_Backend.Controllers
{
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
        public List<RequestTableModel> Get(int id)
        {
            return PetService.Get(id);
        }

    }
}
