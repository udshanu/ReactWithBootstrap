using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EmployeeManagement.DataAccess.Common
{
    public class Entity
    {
        public bool IsDeleted { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }
        [Required]
        public string CreatedBy { get; set; }

        public DateTime? DateLastUpdated { get; set; }
        public string UpdatedBy { get; set; }
    }
}
