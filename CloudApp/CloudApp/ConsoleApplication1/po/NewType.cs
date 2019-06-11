using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1.po
{
    public class NewType
   {
       public int NewTypeId { get; set; }
       public string Name { get; set; }

       public int BlogId { get; set; }
       public virtual List<New> New { get; set; }
   }
}
