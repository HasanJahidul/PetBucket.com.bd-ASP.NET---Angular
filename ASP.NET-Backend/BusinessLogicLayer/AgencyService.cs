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
    public class AgencyService
    {
        public static List<AgencyModel> GetAll()
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Agency, AgencyModel>());
            var mapper = config.CreateMapper();
            var agencys = DataAccessFactory.AgencyDataAccess().GetAll();
            var result = mapper.Map<List<Agency>, List<AgencyModel>>(agencys);
            return result;
        }
        public static AgencyModel GetById(int id)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Agency, AgencyModel>());
            var mapper = config.CreateMapper();
            var agency = DataAccessFactory.AgencyDataAccess().GetById(id);
            var result = mapper.Map<Agency, AgencyModel>(agency);
            return result;
        }
        public static void Add(AgencyModel agency)
        {
            var config = new MapperConfiguration(c => c.CreateMap<AgencyModel, Agency>());
            var mapper = new Mapper(config);
            var result = mapper.Map<AgencyModel, Agency>(agency);
            DataAccessFactory.AgencyDataAccess().Add(result);


        }
        public static void Edit(AgencyModel agency)
        {
            var config = new MapperConfiguration(c => c.CreateMap<AgencyModel, Agency>());
            var mapper = new Mapper(config);
            var result = mapper.Map<AgencyModel, Agency>(agency);
            DataAccessFactory.AgencyDataAccess().Edit(result);
        }
        public static void Delete(int id)
        {
            
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Customer, CustomerModel>());
            var mapper = config.CreateMapper();
            var agency = DataAccessFactory.AgencyDataAccess().GetById(id);
            var result = mapper.Map<Agency, AgencyModel>(agency);

        }
    }
}
