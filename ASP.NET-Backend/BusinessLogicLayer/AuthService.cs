using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using BusinessEntityLayer;
using DataAccessLayer;

namespace BusinessLogicLayer
{
     public class AuthService
    {
        public static TokenModel Authenticate(LoginModel login)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<LoginModel, Login>());
            var mapper = new Mapper(config);
            var result = mapper.Map<LoginModel, Login>(login);
            var token = DataAccessFactory.AuthDataAccess().Authenticate(result);
            //var t= mapper.Map<Token, TokenModel>(token);
            //return t;
            var tokenModel= new TokenModel();
            if (token != null)
            {
                tokenModel.AccessToken = token.AccessToken;
                tokenModel.ExpiredAt = token.ExpiredAt;
                tokenModel.login_id = token.login_id;
            }
            return tokenModel;
           

        }
        public static bool IsAuthenticated(string token)
        {
            var rs = DataAccessFactory.AuthDataAccess().IsAuthenticated(token);
            return rs;

        }
        public static bool Logout(string token)
        {
            return DataAccessFactory.AuthDataAccess().Logout(token);
        }
    }
}
