using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "John",
                    Email = "john.doe@test.com",
                    UserName = "John.doe@test.com",
                    Address = new Address
                    {
                        FirstName = "John",
                        LastName = "Doe",
                        Street = "10th Street",
                        City = "New York",
                        State = "NY",
                        ZipCode = "11004"
                    }
                };
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}