using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace VibeCore.Pages.App;

[Authorize]
public class IndexModel : PageModel
{
    public void OnGet()
    {
    }
}
