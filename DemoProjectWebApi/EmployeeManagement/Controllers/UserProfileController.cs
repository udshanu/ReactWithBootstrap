using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.Controllers
{
    public class UserProfileController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;

        public UserProfileController(UserManager<IdentityUser> userManager)
        {
            this._userManager = userManager;
        }

        [HttpGet]
        [Authorize]
        public async Task<object> GetUserProfile()
        {
            string userId = User.Claims.FirstOrDefault(x => x.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);

            return new
            {
                user.UserName,
                user.Email
            };
        }
    }
}