using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManagement.DataAccess.Models;
using EmployeeManagement.Models;
using EmployeeManagement.Service;
using EmployeeManagement.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.Controllers
{
    public class ProjectController : Controller
    {
        private readonly IProjectService _projectService;
        public ProjectController(IProjectService projectService)
        {
            this._projectService = projectService;
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        public ActionResult GetAllProjects()
        {
            var projects = this._projectService.GetAllProjects();

            return Json(projects);
        }

        [HttpPost]
        [Authorize(Roles = "Employee")]
        public ActionResult CreateProject([FromBody]ProjectViewModel modelProject)
        {
            try
            {
                Project project = new Project
                {
                    Title = modelProject.Title,
                    Content = modelProject.Content,
                    CreatedBy = "Roshan",
                    DateCreated = DateTime.Now
                };

                this._projectService.Add(project);
                return Json(new SuccessResponseMessage { Message = "Project created successfully" });
            }
            catch (Exception ex)
            {
                return Json(new ErrorResponseMessage { Message = ex.Message });
            }

        }
    }
}