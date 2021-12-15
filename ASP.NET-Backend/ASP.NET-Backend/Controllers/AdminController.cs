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
    public class AdminController : ApiController
    {
        //route for editing a admin by id
        [Route("api/AdminService/Admin/{id}")]
        [HttpGet]
        public AdminModel Get(int id)
        {
            return AdminService.GetById(id);
        }

        //route for editing a admin by id
        [Route("api/AdminService/EditAdmin")]
        [HttpPut]
        public void Put([FromBody] AdminModel admin)
        {
            AdminService.Edit(admin);
        }
    }
}
