using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NPOI.HSSF.UserModel;
using System.IO;
using NPOI.SS.UserModel;
using NPOI.HPSF;
using NPOI.SS.Util;

namespace ConsoleNPOI
{
    class Program
    {
        static HSSFWorkbook hssfworkbook;
        //static void Main(string[] args)
        //{
        //    //HSSFWorkbook wb = new HSSFWorkbook();
        //    //ISheet sht = wb.CreateSheet("销售订单");
        //    //IRow row = sht.CreateRow(0);
        //    //IColumn col;
        //    //for (int i = 0; i < regulation.Columns.Count; i++)
        //    //{
        //    //    col = regulation.Columns[i];
        //    //    row.CreateCell(i).SetCellValue(col.ColumnName);
        //    //}
        //    HSSFWorkbook hssfworkbook = new HSSFWorkbook();
        //    // HSSFSheet sheet = hssfworkbook.CreateSheet("new sheet");
        //    ISheet sheet1 = hssfworkbook.CreateSheet("Sheet01");
        //    hssfworkbook.CreateSheet("Sheet02");
        //    hssfworkbook.CreateSheet("Sheet03");
        //    //  然后创建DocumentSummaryInformation
        //    DocumentSummaryInformation dsi = PropertySetFactory.CreateDocumentSummaryInformation();
        //    dsi.Company = "NPOI Team";
        //    //   再创建SummaryInformation
        //    SummaryInformation si = PropertySetFactory.CreateSummaryInformation();
        //    si.Subject = "NPOI SDK Example";
        //    //   因为是范例，这里仅各设置了一个属性，其他都没有设置。现在我们把创建好的对象赋给Workbook，这样才能保证这些信息被写入文件。
        //    hssfworkbook.DocumentSummaryInformation = dsi;
        //    hssfworkbook.SummaryInformation = si;

        //    // 要创建单元格首先要创建单元格所在的行，比如，下面的代码创建了第0行：
        //    // HSSFSheet sheet1 = hssfworkbook.CreateSheet("Sheet1");
        //    //  HSSFRow row1 = sheet1.CreateRow(0);
        //    IRow row1 = sheet1.CreateRow(0);
        //    //这里要说明一下，SetCellValue有好几种重载，你可以设置单元格为bool、double、DateTime、string和HSSFRichTextString类型。
        //    //其中对于string类型的重载调用的就是HSSFRichTextString类型的重载，所以是一样的，HSSFRichTextString可用于有字体或者Unicode的文本。
        //    row1.CreateCell(0).SetCellValue(1);
        //    // 如果你觉得每一行要声明一个HSSFRow很麻烦，可以用下面的方式：
        //    //sheet1.CreateRow(0).CreateCell(0).SetCellValue("This is a Sample");
        //    //这么用有个前提，那就是第0行还没创建过，否则得这么用：
        //    //sheet1.GetRow(0).CreateCell(0).SetCellValue("This is a Sample");
        //    // 如果你要获得某一个已经创建的单元格对象，可以用下面的代码：
        //    ICell val=sheet1.GetRow(0).GetCell(0);
        //    FileStream file = new FileStream(@"test.xls", FileMode.Create);

        //    hssfworkbook.Write(file);
        //    file.Close();
        //}

        ////3.1 基于.xls模板生成Excel文件
        //static void Main(string[] args)
        //{
        //    FileStream file = new FileStream(@"template/book1.xls", FileMode.Open, FileAccess.Read);

        //    HSSFWorkbook hssfworkbook = new HSSFWorkbook(file);
        //    ISheet sheet1 = hssfworkbook.GetSheet("Sheet1");
        //    sheet1.GetRow(1).GetCell(1).SetCellValue(200200);
        //    sheet1.GetRow(2).GetCell(1).SetCellValue(300);
        //    sheet1.GetRow(3).GetCell(1).SetCellValue(500050);
        //    sheet1.GetRow(4).GetCell(1).SetCellValue(8000);
        //    sheet1.GetRow(5).GetCell(1).SetCellValue(110);
        //    sheet1.GetRow(6).GetCell(1).SetCellValue(100);
        //    sheet1.GetRow(7).GetCell(1).SetCellValue(200);
        //    sheet1.GetRow(8).GetCell(1).SetCellValue(210);
        //    sheet1.GetRow(9).GetCell(1).SetCellValue(2300);
        //    sheet1.GetRow(10).GetCell(1).SetCellValue(240);
        //    sheet1.GetRow(11).GetCell(1).SetCellValue(180123);
        //    sheet1.GetRow(12).GetCell(1).SetCellValue(150);

        //    //Force excel to recalculate all the formulawhile open
        //   // 这里的ForceFormulaRecalculation是强制要求Excel在打开时重新计算的属性，在拥有公式的xls文件中十分有用，大家使用时可别忘了设。
        //    sheet1.ForceFormulaRecalculation = true;

        //    FileStream file2 = new FileStream(@"test.xls", FileMode.Create);
        //    hssfworkbook.Write(file);
        //    file2.Close();
        //    file.Close();
        //}


        //
        //static void Main(string[] args)
        //{
        //    InitializeWorkbook();
        //    //  HSSFWorkbook hssfworkbook = new HSSFWorkbook(file);
        //    ISheet sheet1 = hssfworkbook.CreateSheet("Sheet1");
        //    IRow row; //  HSSFRow row;
        //    ICell cell ;// HSSFCell cell;
        //    for (int rowIndex = 0; rowIndex < 9; rowIndex++)
        //    {
        //        row = sheet1.CreateRow(rowIndex);
        //        for (int colIndex = 0; colIndex <= rowIndex; colIndex++)
        //        {
        //            cell = row.CreateCell(colIndex);
        //            cell.SetCellValue(String.Format("{0}*{1}={2}", rowIndex + 1, colIndex + 1, (rowIndex + 1) * (colIndex + 1)));
        //        }
        //    }
        //    WriteToFile();

        //}


        //3.3用NPOI操作EXCEL－－生成一张工资单
        static void Main(string[] args)
        {
         InitializeWorkbook();
            ISheet sheet1 = hssfworkbook.CreateSheet("Sheet1");
            ICell cellTitle = sheet1.CreateRow(0).CreateCell(0);
            cellTitle.SetCellValue("XXX公司2009年10月工资单");
            // / 设置标题行样式
         //   ICellStyle style = hssfworkbook.CreateCellStyle(); //HSSFCellStyle style = hssfworkbook.CreateCellStyle();
                                                               // style.Alignment = HSSFCellStyle.;// ICellStyle.Alignment;   // style.Alignment = HSSFCellStyle.ALIGN_CENTER;
              ICellStyle style = getCellStyle();                                                 //设置style

            style.VerticalAlignment = VerticalAlignment.Center;
            style.Alignment = HorizontalAlignment.Center;
            IFont font = hssfworkbook.CreateFont();  //  HSSFFont font = hssfworkbook.CreateFont();
            font.FontHeight = 20 * 20;
            style.SetFont(font);
            ////合并操作
            sheet1.AddMergedRegion(new CellRangeAddress(0, 0,0, 7));//起始行，结束行，起始列，结束列

            ////设置合并后style
            var cell = sheet1.GetRow(0).GetCell(0);
            cell.CellStyle = style;

         //  getCellStyle();
           // cellTitle.CellStyle = style;
             WriteToFile();
        }
        private static void WriteToFile()
        {
            FileStream file = new FileStream(@"test.xls", FileMode.Create);
            hssfworkbook.Write(file);
            file.Close();
        }

        static void InitializeWorkbook()
        {
            hssfworkbook = new HSSFWorkbook();

            //create a entry of DocumentSummaryInformation
            DocumentSummaryInformation dsi = PropertySetFactory.CreateDocumentSummaryInformation();
            dsi.Company = "NPOI Team";
            hssfworkbook.DocumentSummaryInformation = dsi;

            //create a entry of SummaryInformation
            SummaryInformation si = PropertySetFactory.CreateSummaryInformation();
            si.Subject = "NPOI SDK Example";
            hssfworkbook.SummaryInformation = si;
        }


      //  static HSSFCellStyle getCellStyle()
      static ICellStyle getCellStyle()
        {
            ICellStyle cellStyle = hssfworkbook.CreateCellStyle();
            cellStyle.BorderBottom = NPOI.SS.UserModel.BorderStyle.Thick;
            cellStyle.BorderLeft = BorderStyle.Thick;
            cellStyle.BorderRight = BorderStyle.Thick;
           // cellStyle.BorderTop = BorderStyle.Thick;
            return cellStyle;
        }




        /// <summary>
        /// 填充列样式https://blog.csdn.net/chlung/article/details/83089015
        /// </summary>
        /// <param name="ws">ISheet实例</param>
        /// <param name="col">列索引</param>
        /// <param name="style">样式</param>
        public void FillWholeColStyle(ISheet ws, int col, ICellStyle style)
        {
            int firstRowNum = ws.FirstRowNum;
            int lastRowNum = ws.LastRowNum;
            int rowstart = firstRowNum;
            int rowend = lastRowNum;
            int colstart = col;
            int colend = col;
            ICellRange<ICell> cellRange = GetCellRange(ws, new CellRangeAddress(rowstart, rowend, colstart, colend));
            foreach (ICell c in cellRange)
            {
                c.CellStyle = style;
            }
            ws.SetDefaultColumnStyle(col, style);
        }

        public ICellRange<ICell> GetCellRange(ISheet ws, CellRangeAddress range)
        {
            int firstRow = range.FirstRow;
            int firstColumn = range.FirstColumn;
            int lastRow = range.LastRow;
            int lastColumn = range.LastColumn;
            int height = lastRow - firstRow + 1;
            int width = lastColumn - firstColumn + 1;
            List<ICell> temp = new List<ICell>(height * width);
            for (int rowIn = firstRow; rowIn <= lastRow; rowIn++)
            {
                for (int colIn = firstColumn; colIn <= lastColumn; colIn++)
                {
                    IRow row = ws.GetRow(rowIn);
                    if (row == null)
                    {
                        row = ws.CreateRow(rowIn);
                    }
                    ICell cell = row.GetCell(colIn);
                    if (cell == null)
                    {
                        cell = row.CreateCell(colIn);
                    }
                    temp.Add(cell);
                }
            }
            return SSCellRange<ICell>.Create(firstRow, firstColumn, height, width, temp, typeof(HSSFCell));
        }
 

    }
}
