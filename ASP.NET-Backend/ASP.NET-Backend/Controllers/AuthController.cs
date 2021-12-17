using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using BusinessLogicLayer;
using BusinessEntityLayer;
using System.IO;
using System.Net.Mail;
using System.Text;
using System.Web.UI.WebControls;

namespace ASP.NET_Backend.Controllers
{
    [EnableCors("*", "*", "*")]
    public class AuthController:ApiController
    {
        [Route("api/Register")]
        [HttpPost]
        public HttpResponseMessage Post([FromBody] CustomerModel customer)
        {
            if (LoginService.GetByEmail(customer.email)!=null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, "Email is Already Registered");
            }
            else
            {
                CustomerService.Add(customer);
                LoginService.Add(new LoginModel { email = customer.email, password = customer.password, type = "Customer" });
                {/* string to = customer.email; //To address    
                string from = "jahidul0hasan@gmail.com"; //From address    
                MailMessage message = new MailMessage(from, to);

                string mailbody = "Welcome" + customer.name + "<br/> Welcome to Pet Bucket";
                message.Subject = "SIGN UP SUCCESSFULL IN PETBUCKET";
                message.Body = mailbody;
                message.BodyEncoding = Encoding.UTF8;
                message.IsBodyHtml = true;
                SmtpClient client = new SmtpClient("smtp.gmail.com", 587); //Gmail smtp    
                System.Net.NetworkCredential basicCredential1 = new
                System.Net.NetworkCredential("jahidul0hasan@gmail.com", "OfficialPassword");
                client.EnableSsl = true;
                client.UseDefaultCredentials = false;
                client.Credentials = basicCredential1;
                try
                {
                    client.Send(message);
                }

                catch (Exception ex)
                {
                    throw ex;
                } */
                }
                return Request.CreateResponse(HttpStatusCode.NoContent, "Registered");

            }
            
        }
        [Route("api/logout")]
        [HttpGet]
        public HttpResponseMessage Logout()
        {
            var token = Request.Headers.Authorization.ToString();
            if (token != null)
            {
                var rs = AuthService.Logout(token);
                if (rs)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, "Sucess fully logged out");
                }

            }
            return Request.CreateResponse(HttpStatusCode.BadRequest, "Invalid token to logout");
        }
        [Route("api/Login")]
        [HttpPost]
        public HttpResponseMessage Login(LoginModel login)
        {
            //call to service
            var token = AuthService.Authenticate(login);
            if (token != null)
            {

                return Request.CreateResponse(HttpStatusCode.OK, token);
            }
            return Request.CreateResponse(HttpStatusCode.NotFound, "User not found");
        }
    }
}