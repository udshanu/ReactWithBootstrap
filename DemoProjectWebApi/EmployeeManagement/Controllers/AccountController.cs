using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using EmployeeManagement.DataAccess.Models;
using EmployeeManagement.Models;
using EmployeeManagement.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.Options;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace EmployeeManagement.Controllers
{

    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ApplicationSettings _appSettings;

        public AccountController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IOptions<ApplicationSettings> appSettings)
        {
            this._userManager = userManager;
            this._signInManager = signInManager;
            this._appSettings = appSettings.Value;
        }

        [HttpGet]
        public ActionResult Register()
        {
            return Json(new SuccessResponseMessage { Message = "Products saved successfully" });
        }

        [HttpPost]
        public async Task<ActionResult> Register([FromBody]RegisterViewModel employee)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    employee.Role = "Employee";
                    var user = new ApplicationUser
                    {
                        UserName = employee.Email,
                        Email = employee.Email,
                        FirstName = employee.FirstName,
                        LastName = employee.LastName
                    };
                    var result = await _userManager.CreateAsync(user, employee.Password);
                    await _userManager.AddToRoleAsync(user, employee.Role);

                    if (result.Succeeded)
                    {
                        return Json(new SuccessResponseMessage { Message = "Employee saved successfully." });
                    }
                    else
                    {
                        foreach (var error in result.Errors)
                        {
                            ModelState.AddModelError("", error.Description);
                        }
                        return Json(new ErrorResponseMessage { Message = "Error on employee crating functionality." });
                    }
                }
                else
                {
                    return Json(new ErrorResponseMessage { Message = "Error on employee crating functionality." });
                }
            }
            catch (Exception ex)
            {
                return Json(new ErrorResponseMessage { Message = "Error on employee crating functionality." });
            }


        }

        [HttpPost]
        public async Task<ActionResult> Login([FromBody]LoginViewModel model)
        {
            try
            {
                var user = await this._userManager.FindByNameAsync(model.Email);
                if (user != null && await this._userManager.CheckPasswordAsync(user, model.Password))
                {
                    //Get role assigned to the user
                    var role = await _userManager.GetRolesAsync(user);
                    IdentityOptions _options = new IdentityOptions();

                    var tokenDescriptor = new SecurityTokenDescriptor
                    {
                        Subject = new ClaimsIdentity(new Claim[] {
                            new Claim("UserID",user.Id.ToString()),
                            new Claim(_options.ClaimsIdentity.RoleClaimType, role.FirstOrDefault()),
                            new Claim("UserName", user.UserName.ToString())
                        }),
                        Expires = DateTime.UtcNow.AddMinutes(5),
                        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this._appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                    };
                    var tokenHandler = new JwtSecurityTokenHandler();
                    var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                    var token = tokenHandler.WriteToken(securityToken);

                    return Ok(new { token });
                }
                else
                {
                    return BadRequest(new { message = "Username or password is incorrect." });
                }
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        [HttpPost]
        public async Task<ActionResult> Logout()
        {
            try
            {
                await _signInManager.SignOutAsync();
                return Json(new { succeeded = true });
            }
            catch (Exception ex)
            {
                return Json(new { succeeded = false });
            }

        }
    }
}