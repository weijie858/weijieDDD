using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1.po
{
    public class New
    {
        public int NewId { get; set; }
        public string Title { get; set; }

        public int NewTypeId { get; set; }
        public virtual NewType NewType { get; set; }
    }
}
