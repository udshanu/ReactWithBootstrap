using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManagement.Models;
using EmployeeManagement.ViewModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly SignInManager<IdentityUser> signInManager;

        public AccountController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        [HttpGet]
        public ActionResult Register()
        {
            return Json(new SuccessResponseMessage { Message = "Products saved successfully" });
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var user = new IdentityUser { UserName = model.Email, Email = model.Email };
                    var result = await userManager.CreateAsync(user, model.Password);

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
    }
}