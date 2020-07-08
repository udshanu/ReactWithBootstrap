using EmployeeManagement.DataAccess.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeeManagement.DataAccess.Models
{
    public class Project : Entity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
    }
}
