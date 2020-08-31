using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace React.Sample.Webpack.CoreMvc.Controllers
{
	public class ContactController : Controller
	{
		public ContactController() { }

		public ActionResult Index()
		{
			return View("~/Views/Contact/Index.cshtml", new IndexViewModel {
                Counter = 4
            });
		}

		public class IndexViewModel {
            public int Counter { get; set; }
        }
	}
}
