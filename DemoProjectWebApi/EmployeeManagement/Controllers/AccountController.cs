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
        public async Task<ActionResult> Register([FromBody]RegisterViewModel employee)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var user = new IdentityUser { UserName = employee.Email, Email = employee.Email };
                    var result = await userManager.CreateAsync(user, employee.Password);

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
        public async Task<ActionResult> Login([FromBody]LoginViewModel login)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    //var result = await signInManager.PasswordSignInAsync(login.Email, login.Password, login.RememberMe, false);
                    var result = await signInManager.PasswordSignInAsync(login.Email, login.Password, true, false);

                    return Json(result);
                }
                else
                {
                    return Json(new ErrorResponseMessage { Message = "Invaid Login Attempt." });
                }
            }
            catch (Exception ex)
            {
                return Json(new ErrorResponseMessage { Message = "Invaid Login Attempt" });
            }
        }

        [HttpPost]
        public async Task<ActionResult> Logout()
        {
            try
            {
                await signInManager.SignOutAsync();
                return Json(new { succeeded = true });
            }
            catch (Exception ex)
            {
                return Json(new { succeeded = false });
            }

        }
    }
}