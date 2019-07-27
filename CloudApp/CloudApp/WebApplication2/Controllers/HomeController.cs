using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult Myindex()
        {
            return View();
        }

        public ActionResult BatchUpload(string id, string name, string type, string lastModifiedDate, int size, HttpPostedFileBase file, string MaterialType)
        {
            return Json(new { jsonrpc = 2.0, error = new { code = 102, message = "图片：" + name + "命名不符合规则" }, id = "id" });
            //  MaterialType = MaterialType.Trim().ToUpper();
            //try
            //{
            //    if (Request.Files.Count == 0)
            //    {
            //        return Json(new { jsonrpc = 2.0, error = new { code = 102, message = "保存失败" }, id = "id" });
            //    }
            //    if (string.IsNullOrEmpty(name))
            //    {
            //        return Json(new { jsonrpc = 2.0, error = new { code = 102, message = "图片名称不能为空" }, id = "id" });
            //    }
            //    string[] splitName = name.Split('_');
            //    if (splitName.Length == 2)
            //    {
            //        string MaterialId = splitName[0];
            //        Object obj = new Object();
            //        if (MaterialType == "A")
            //        {
            //            obj = service.Get(CurrentUser.VendorId, MaterialId);
            //        }
            //        //if (MaterialType == "E") {
            //        //    obj = eService.Get(CurrentUser.VendorId, MaterialId);
            //        //}
            //        //if (MaterialType == "M") {
            //        //    obj = mService.Get(CurrentUser.VendorId, MaterialId);
            //        //}
            //        if (obj != null)
            //        {
            //            string filePath = string.Empty;
            //            if (MaterialType == "A")
            //            {
            //                filePath = UpPictureLoad.Process(file, "amaterial", "80");
            //            }
            //            if (MaterialType == "E")
            //            {
            //                filePath = UpPictureLoad.Process(file, "ematerial", "80");
            //            }

            //            string filePathName = filePath.Substring(filePath.LastIndexOf("/") + 1);
            //            string urlPath = filePath.Substring(0, filePath.LastIndexOf("/") + 1);
            //            JsonResult result = (JsonResult)SaveListImg(MaterialId, filePath);
            //            if (((JsonResultModel)result.Data).IsSuccess)
            //            {
            //                return Json(new { jsonrpc = 2.0, error = new { code = 102, message = "图片：" + name + "上传成功" }, id = "id" });
            //            }
            //            else
            //            {
            //                return Json(new { jsonrpc = 2.0, error = new { code = 102, message = "图片：" + name + "上传失败" }, id = "id" });
            //            }
            //        }
            //        else
            //        {
            //            return Json(new { jsonrpc = 2.0, error = new { code = 102, message = "图片：" + name + "的物料号" + MaterialId + "不存在" }, id = "id" });
            //        }
            //    }
            //    else
            //    {
            //        return Json(new { jsonrpc = 2.0, error = new { code = 102, message = "图片：" + name + "命名不符合规则" }, id = "id" });
            //    }

            //}
            //catch (Exception)
            //{
            //    return Json(new { jsonrpc = 2.0, error = new { code = 102, message = "保存失败" }, id = "id" });
            //}
        }
    }
}
