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

namespace ASP.NET_Backend.Controllers
{
    [EnableCors("*", "*", "*")]
    public class AuthController:ApiController
    {
        [Route("api/Register")]
        [HttpPost]
        public void post([FromBody] CustomerModel customer)
        {
            CustomerService.Add(customer);

            {/*string to = customer.email; //To address    
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
            } */}


        }
    }
}