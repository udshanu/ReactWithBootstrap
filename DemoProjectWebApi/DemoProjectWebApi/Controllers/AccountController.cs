﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DemoProjectWebApi.Controllers
{
    //[ApiController]
    //[Route("[controller]/[action]")]
    public class AccountController : Controller
    {
        [HttpGet]
        //public IActionResult Register()
        public String Register()
        {
            return "abc";
        }
    }
}