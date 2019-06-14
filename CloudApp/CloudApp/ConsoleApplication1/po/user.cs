using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1.po
{
    public class User
    {
        /// <summary>
        /// 主键
        /// </summary>
        [Key]
        [Column("id", TypeName = "varchar")]
        public string Id { get; set; }
        [Column("name", TypeName = "varchar")]
        public string Name { get; set; }
        [Column("pwd", TypeName = "varchar")]
        public string Pwd { get; set; }
        [Column("create_date")]
        public DateTime CreateDate { get; set; }
        [Column("creator", TypeName = "varchar")]
        public string Creator { get; set; }
        [Column("is_valid")]
        public bool IsValid { get; set; }
        [Column("update_psw_date")]
        public DateTime UpdatePswDate { get; set; }
    }
}
