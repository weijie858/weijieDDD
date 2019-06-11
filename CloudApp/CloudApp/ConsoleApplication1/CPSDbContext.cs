using ConsoleApplication1.po;
using System;
using System.Collections.Generic;
using System.Data.Entity;  //DbContext
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    public partial class CPSDbContext : DbContext
    {
        public CPSDbContext() : base("name=CPSDbContext")
        {

            //Database.Log += WriteSql;
        }
        public DbSet<New> News { get; set; }
        public DbSet<NewType> NewTypes { get; set; }
    }
}
