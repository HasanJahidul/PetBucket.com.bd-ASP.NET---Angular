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
            var config = new MapperConfiguration(cfg =>cfg.CreateMap<RequestTable, RequestTableModel>());
            var mapper = config.CreateMapper();
            var requestList = DataAccessFactory.RequestTableDataAccess().GetAllRequest();
            var result = mapper.Map<List<RequestTable>, List<RequestTableModel>>(requestList);
            return result;
        }
        //add new pet
        public static void AddRequest(RequestTableModel pet)
        {
            var config = new MapperConfiguration(c =>
            {
                c.CreateMap<RequestTableModel, RequestTable>();

            });
            var mapper = config.CreateMapper();
            var result = mapper.Map<RequestTableModel, RequestTable>(pet);
            DataAccessFactory.RequestTableDataAccess().AddRequest(result);
        }
        //get request by id
        public static RequestTableModel GetRequestById(int id)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<RequestTable, RequestTableModel>());
            var mapper = config.CreateMapper();
            var request = DataAccessFactory.RequestTableDataAccess().GetReqByCusId(id);
            var result = mapper.Map<RequestTable, RequestTableModel>(request);
            return result;
        }

    }
}
