using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CreateJSExperimentsWeb.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        //
        // GET: /Home/Experiment1/

        public ActionResult Experiment1()
        {
            return View();
        }

        //
        // GET: /Home/Experiment1/

        public ActionResult Experiment2()
        {
            return View();
        }

        //
        // GET: /Home/Experiment1/

        public ActionResult Experiment3()
        {
            return View();
        }
    }
}
