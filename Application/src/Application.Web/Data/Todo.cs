﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Web.Data
{
    public class Todo
    {

        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public List List { get; set; }
        public int ListId { get; set; }

        //public ApplicationUser Owner { get; set; }

        


    }
}
