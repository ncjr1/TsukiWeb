using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Web;

namespace TsukiWeb.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }

        //[WebMethod]
        //public static string Iniciar()
        //{
        //    try
        //    {
        //        var db = new DatabaseUtil();

        //    }
        //    catch (Exception ex)
        //    {
        //        return "[Erro] " + ex.Message;
        //    }
        //}

    }
}