using ConsoleApplication1.po;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    public class GMTDbContext : DbContext
    {
        public GMTDbContext() : base("name=GMTDbContext")
        {

            //Database.Log += WriteSql;
        }
        public DbSet<User> User { get; set; }
        public DbSet<NewType> NewTypes { get; set; }
    }
}
