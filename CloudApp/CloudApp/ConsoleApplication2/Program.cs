using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication2
{
    class Program
    {
        static void Main(string[] args)
        {
            // 1，获取数据源
            List<int> numbers = new List<int>() { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };

            // 2，创建查询
            var numQuery = from num in numbers
                           where num % 2 == 0
                           select num;

            // 3,执行查询
            foreach (var num in numQuery)
            {
                Console.WriteLine("{0,1}", num);
            }
            List<CustomerInfo> clist = new List<CustomerInfo> {
                                                       new CustomerInfo{ Name="欧阳晓晓", Age=35, Tel ="1330708****"},
                                                       new CustomerInfo{ Name="上官飘飘", Age=17, Tel ="1592842****"},
                                                       new CustomerInfo{ Name="欧阳锦鹏", Age=35, Tel ="1330708****"},
                                                       new CustomerInfo{ Name="上官无忌", Age=23, Tel ="1380524****"}
                                                       };

            //按照名字的前2个字进行分组
            var query = from customer in clist
                        group customer by customer.Name.Substring(0, 2);

            foreach (IGrouping<string, CustomerInfo> group in query)
            {
                Console.WriteLine("分组键：{0}", group.Key);
                foreach (var ci in group)
                {
                    Console.WriteLine("姓名：{0} 电话：{1}", ci.Name, ci.Tel);
                }
                Console.WriteLine("***************************************");
            }
            Console.ReadKey();
        }


        //private List<CustomerInfo> initEntity()
        //{
        //    List<CustomerInfo> clist = new List<CustomerInfo> {
        //                                           new CustomerInfo{ Name="欧阳晓晓", Age=35, Tel ="1330708****"},
        //                                           new CustomerInfo{ Name="上官飘飘", Age=17, Tel ="1592842****"},
        //                                           new CustomerInfo{ Name="欧阳锦鹏", Age=35, Tel ="1330708****"},
        //                                           new CustomerInfo{ Name="上官无忌", Age=23, Tel ="1380524****"}
        //                                           };
        //    return clist;
        //}
    }
    public class CustomerInfo
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Tel { get; set; }

        //private void formExpDemo2()
        //{
        //    //这里用了，对象和集合初始化器
        //    List<CustomerInfo> customers = new List<CustomerInfo> {
        //                                   new CustomerInfo{ Name="欧阳晓晓", Age=35, Tel ="1330708****"},
        //                                   new CustomerInfo{ Name="上官飘飘", Age=17, Tel ="1592842****"},
        //                                   new CustomerInfo{ Name="诸葛菲菲", Age=23, Tel ="1380524****"}
        //                                   };
        //    //查询年龄大于20的客户，注意这里的范围变量用了显示类型CustomerInfo
        //    var query = from CustomerInfo ci in customers
        //                where ci.Age > 20
        //                select ci;

        //    foreach (CustomerInfo ci in query)
        //    {
        //        Console.WriteLine("姓名：{0} 年龄：{1} 电话：{2}", ci.Name, ci.Age, ci.Tel);
        //    }
        //}
    }

}
