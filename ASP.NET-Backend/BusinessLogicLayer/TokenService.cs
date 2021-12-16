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
    public class TokenService
    {
        public static List<TokenModel> GetAll()
        {
            //AutoMapper.Mapper
           var config = new MapperConfiguration(cfg => cfg.CreateMap<Token, TokenModel>());
            var mapper = config.CreateMapper();
            var tokens = DataAccessFactory.TokenDataAccess().GetAll();
            var result = mapper.Map<List<Token>, List<TokenModel>>(tokens);
            return result;
        }
        public static TokenModel GetById(string token)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Token, TokenModel>());
            var mapper = config.CreateMapper();
            var token1 = DataAccessFactory.TokenDataAccess().GetById(token);
            var result = mapper.Map<Token, TokenModel>(token1);
            return result;
        }
        public static void Create(TokenModel token)
        {
            var config = new MapperConfiguration(c => c.CreateMap<TokenModel, Token>());
            var mapper = new Mapper(config);
            var result = mapper.Map<TokenModel, Token>(token);
            DataAccessFactory.TokenDataAccess().Add(result);

        }
        public static void Edit(TokenModel token)
        {
            var config = new MapperConfiguration(c => c.CreateMap<TokenModel, Token>());
            var mapper = new Mapper(config);
            var result = mapper.Map<TokenModel, Token>(token);
            DataAccessFactory.TokenDataAccess().Edit(result);
            

        }
        public static void Delete(string token)
        {
            DataAccessFactory.TokenDataAccess().Delete(token);
        }
    }
}
