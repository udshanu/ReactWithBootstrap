using EmployeeManagement.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EmployeeManagement.Service
{
    public interface IProjectService
    {
        List<Project> GetAllProjects();
        Project Add(Project project);
    }
    public class ProjectService : IProjectService
    {
        private readonly AppDbContext context;
        public ProjectService(AppDbContext context)
        {
            this.context = context;
        }
        public Project Add(Project project)
        {
            this.context.Projects.Add(project);
            this.context.SaveChanges();

            return project;
        }

        public List<Project> GetAllProjects()
        {
            var projects = this.context.Projects.ToList();
            return projects;
        }
    }
}
