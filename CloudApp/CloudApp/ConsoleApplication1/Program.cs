using ConsoleApplication1.po;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        //https://www.cnblogs.com/xishuai/p/3632304.html
        static void Main(string[] args)
        {
            using (var db = new CPSDbContext())
            {
                Console.Write("输入新闻类型标题: ");
                var name = Console.ReadLine();

                var type_Model = new NewType { Name = name };
                db.NewTypes.Add(type_Model);
                db.SaveChanges();

                Console.WriteLine("查询新闻类型标题:");
                var search_type = Console.ReadLine();
                var query = from b in db.NewTypes
                            where b.Name == search_type
                            select b;

                Console.WriteLine("查询结果:");
                foreach (var item in query)
                {
                    Console.WriteLine(item.Name);
                }

                Console.ReadKey();
            }
        }
    }
}
