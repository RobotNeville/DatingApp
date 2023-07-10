

using API.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [ApiController]
   [Route("api/[controller]")] // GET /api/Users
    public class BaseApiController: ControllerBase
    {
        
    }
}