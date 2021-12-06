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
    public class PetService
    {
         public static List<RequestTableModel> GetAllRequests()
        {
            var config = new MapperConfiguration(c =>
            {
                c.CreateMap<RequestTable, RequestTableModel>();

            });
            var mapper = new Mapper(config);
            var result = mapper.Map<List<RequestTableModel>>(RequestTableRepo.GetAllRequests());
            return result;
        }
        //add new pet
        public static void Add(RequestTableModel pet)
        {
            var config = new MapperConfiguration(c =>
            {
                c.CreateMap<RequestTableModel, RequestTable>();

            });
            var mapper = config.CreateMapper();
            var result = mapper.Map<RequestTableModel, RequestTable>(pet);
            RequestTableRepo.Add(result);
        }
        public static List<RequestTableModel> Get(int id)
        {
            var config = new MapperConfiguration(c =>
            {
                c.CreateMap<RequestTable, RequestTableModel>();

            });
            var mapper = new Mapper(config);
            var result = mapper.Map<List<RequestTableModel>>(RequestTableRepo.Get(id));
            return result;
        }

    }
}
