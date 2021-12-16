using AutoMapper;
using BusinessEntityLayer;
using DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer
{
    public class LoginService
    {
        public static void Add(LoginModel login)
        {
            var config= new MapperConfiguration(c=>c.CreateMap<LoginModel, Login>());
            var mapper =new Mapper(config);
            var result = mapper.Map<LoginModel,Login>(login);
            DataAccessFactory.LoginDataAccess().AddToLogin(result);

        }
    }
}
