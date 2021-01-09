// Extensions.cs

using System.Text;
//using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace MyBlazorApp
{
    public static class Extensions
    {
        public static async Task<IJSObjectReference> ComponentModule<T>(this IJSRuntime js)
        //where T : ComponentBase 
        {
            var type = typeof(T);
            var sb = new StringBuilder("./js/");

            sb.Append(type.FullName.Remove(0, type.Assembly.GetName().Name.Length + 1).Replace(".","/"));
            sb.Append(".razor.js");

            var result = await js.InvokeAsync<IJSObjectReference>("import", sb.ToString());
            return result;
        }
    }
}
