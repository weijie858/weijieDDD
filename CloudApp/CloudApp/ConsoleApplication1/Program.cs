using ConsoleApplication1.po;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;
using System.Data.Entity;
using System.Linq.Expressions;

namespace ConsoleApplication1
{
    class Program
    {
        //https://www.cnblogs.com/xishuai/p/3632304.html
        static void Main(string[] args)
        {

            using (var db = new CPSDbContext())
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    var naame = "weijie3";
                    var type_Model = new NewType { Name = naame };
                    db.NewTypes.Add(type_Model);
                    var tt = db.SaveChanges();
                    using (var gmt = new GMTDbContext())
                    {
                        using (TransactionScope gt = new TransactionScope())
                        {
                            User dd = new User();
                            dd.Id = "weijie3";
                            dd.Name = "测试";
                            dd.Pwd = "123456";
                            dd.CreateDate = DateTime.Now;
                            dd.Creator = "admin";
                            dd.UpdatePswDate = DateTime.Now;
                            gmt.User.Add(dd);
                            if (gmt.SaveChanges() > 0)
                                gt.Complete();
                            //  Expression<Func<User, bool>> where = PredicateBuilder.True<User>();
                            //  where.And(x => x.Name == "sa");
                            //var user=  gmt.User.Find(where);
                          
                            //  gt.Complete();

                        }


                    }
                    ts.Complete();
                }
                //Console.Write("输入新闻类型标题: ");
                //    var name = Console.ReadLine();

                //    var type_Model = new NewType { Name = name };
                //    db.NewTypes.Add(type_Model);
                //    db.SaveChanges();

                //    Console.WriteLine("查询新闻类型标题:");
                //    var search_type = Console.ReadLine();
                //    var query = from b in db.NewTypes
                //                where b.Name == search_type
                //                select b;

                //    Console.WriteLine("查询结果:");
                //    foreach (var item in query)
                //    {
                //        Console.WriteLine(item.Name);
                //    }


                Console.ReadKey();
            }




        }
    }
}
