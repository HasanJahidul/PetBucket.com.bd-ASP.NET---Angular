using BusinessEntityLayer;
using BusinessLogicLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ASP.NET_Backend.Controllers
{
    [EnableCors("*", "*", "*")]
    public class AgencyController : ApiController
    {
        
        [Route("api/AgencyService/AllAgency")]
        [HttpGet]
        public List<AgencyModel> GetAll()
        {
            return AgencyService.GetAll();
        }
        //route for getting a agency by id
        [Route("api/AgencyService/Agency/{id}")]
        [HttpGet]
        public AgencyModel Get(int id)
        {
            return AgencyService.GetById(id);
        }
        //route for adding a agency
        [Route("api/AgencyService/AddAgency")]
        [HttpPost]
        public void Post([FromBody] AgencyModel agency)
        {
            AgencyService.Add(agency);
        }
        //route for editing a agency by id
        [Route("api/AgencyService/EditAgency")]
        [HttpPut]
        public void Put([FromBody] AgencyModel agency)
        {
            AgencyService.Edit(agency);
        }
        //route for deleting a agency by id
        [Route("api/AgencyService/DeleteAgency/{id}")]
        [HttpDelete]
        public void Delete(int id)
        {
            AgencyService.Delete(id);
        }
    }
}
