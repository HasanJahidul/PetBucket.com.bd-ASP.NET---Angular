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
    public class PetSitterController : ApiController
    {
        
        [Route("api/PetSitterService/AllPetSitter")]
        [HttpGet]
        public List<PetSitterModel> GetAll()
        {
            return PetSitterService.GetAll();
        }
        //route for getting a petsitter by id
        [Route("api/AgencyService/PetSitter/{id}")]
        [HttpGet]
        public PetSitterModel Get(int id)
        {
            return PetSitterService.GetById(id);
        }
        //route for adding a petsitter
        [Route("api/PetSitterService/AddPetSitter")]
        [HttpPost]
        public void Post([FromBody] PetSitterModel agency)
        {
            PetSitterService.Add(agency);
        }
        //route for editing a petsitter by id
        [Route("api/PetSitterService/EditPetSitter")]
        [HttpPut]
        public void Put([FromBody] PetSitterModel agency)
        {
            PetSitterService.Edit(agency);
        }
        //route for deleting a petsitter by id
        [Route("api/PetSitterService/DeletePetSitter/{id}")]
        [HttpDelete]
        public void Delete(int id)
        {
            PetSitterService.Delete(id);
        }
    }
}
