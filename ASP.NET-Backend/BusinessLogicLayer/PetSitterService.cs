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
    public class PetSitterService
    {
        public static List<PetSitterModel> GetAll()
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Petsitter, PetSitterModel>());
            var mapper = config.CreateMapper();
            var petsitters = DataAccessFactory.PetSitterDataAccess().GetAll();
            var result = mapper.Map<List<Petsitter>, List<PetSitterModel>>(petsitters);
            return result;
        }
        public static PetSitterModel GetById(int id)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Petsitter, PetSitterModel>());
            var mapper = config.CreateMapper();
            var petsitter = DataAccessFactory.PetSitterDataAccess().GetById(id);
            var result = mapper.Map<Petsitter, PetSitterModel>(petsitter);
            return result;
        }
        public static void Add(PetSitterModel petsitter)
        {
            var config = new MapperConfiguration(c => c.CreateMap<PetSitterModel, Petsitter>());
            var mapper = new Mapper(config);
            var result = mapper.Map<PetSitterModel, Petsitter>(petsitter);
            DataAccessFactory.PetSitterDataAccess().Add(result);


        }
        public static void Edit(PetSitterModel petsitter)
        {
            var config = new MapperConfiguration(c => c.CreateMap<PetSitterModel, Petsitter>());
            var mapper = new Mapper(config);
            var result = mapper.Map<PetSitterModel, Petsitter>(petsitter);
            DataAccessFactory.PetSitterDataAccess().Edit(result);
        }
        public static void Delete(int id)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Petsitter, PetSitterModel>());
            var mapper = config.CreateMapper();
            var petsitter = DataAccessFactory.PetSitterDataAccess().GetById(id);
            var result = mapper.Map<Petsitter, PetSitterModel>(petsitter);


        }
    }
}
