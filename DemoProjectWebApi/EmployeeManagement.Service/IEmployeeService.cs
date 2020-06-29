using EmployeeManagement.DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeeManagement.Service
{
    public interface IEmployeeService
    {
        Employee GetEmployee(int Id);
        IEnumerable<Employee> GetAllEmployee();
        Employee Add(Employee employee);
        Employee Update(Employee employeeChanges);
        Employee Delete(int Id);
    }

    public class EmployeeService : IEmployeeService
    {
        private readonly AppDbContext context;

        public EmployeeService(AppDbContext context)
        {
            this.context = context;
        }
        public Employee Add(Employee employee)
        {
            this.context.Employees.Add(employee);
            this.context.SaveChanges();

            return employee;

            //throw new NotImplementedException();
        }

        public Employee Delete(int Id)
        {
            Employee employee = this.context.Employees.Find(Id);

            if (employee != null)
            {
                this.context.Employees.Remove(employee);
                this.context.SaveChanges();
            }

            return employee;
            //throw new NotImplementedException();
        }

        public IEnumerable<Employee> GetAllEmployee()
        {
            return this.context.Employees;
            //throw new NotImplementedException();
        }

        public Employee GetEmployee(int Id)
        {
            return this.context.Employees.Find(Id);
            //throw new NotImplementedException();
        }

        public Employee Update(Employee employeeChanges)
        {
            var employee = this.context.Employees.Attach(employeeChanges);
            employee.State = EntityState.Modified;
            this.context.SaveChanges();

            return employeeChanges;

            //throw new NotImplementedException();
        }
    }
}
