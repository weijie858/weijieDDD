using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebNOPOTest.Startup))]
namespace WebNOPOTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
