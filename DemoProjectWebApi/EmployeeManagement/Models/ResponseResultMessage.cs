using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace EmployeeManagement.Models
{
    public class SuccessResponseMessage
    {
        public SuccessResponseMessage()
        {
            this.ResponseCode = (int)HttpStatusCode.OK;
        }

        public int ResponseCode { get; set; }
        public string Message { get; set; }
        public dynamic Data { get; set; }

    }

    public class ErrorResponseMessage
    {
        /// <summary>
        /// Http error code
        /// </summary>
        public int ResponseCode { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int ErrorCode { get; set; }
        public string Message { get; set; }
        public dynamic Data { get; set; }

        public ErrorResponseMessage()
        {
            ResponseCode = 500;
        }
    }
}
