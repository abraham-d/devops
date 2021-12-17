using API.Dtos;
using AutoMapper;
using Core.Entities;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                    .ForMember(r => r.ProductBrand, o => o.MapFrom(s => s.ProductBrand.Name))
                    .ForMember(r => r.ProductType, o => o.MapFrom(s => s.ProductType.Name))
                    .ForMember(r => r.PictureUrl, o => o.MapFrom<ProductUrlResolver>());
        }
    }
}