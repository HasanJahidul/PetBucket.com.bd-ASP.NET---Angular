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
    public class AdminService
    {
        public static AdminModel GetById(int id)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Admin, AdminModel>());
            var mapper = config.CreateMapper();
            var admin = DataAccessFactory.AdminDataAccess().GetById(id);
            var result = mapper.Map<Admin, AdminModel>(admin);
            return result;
        }

        public static void Edit(AdminModel admin)
        {
            var config = new MapperConfiguration(c => c.CreateMap<AdminModel, Admin>());
            var mapper = new Mapper(config);
            var result = mapper.Map<AdminModel, Admin>(admin);
            DataAccessFactory.AdminDataAccess().Edit(result);
        }
    }
}
