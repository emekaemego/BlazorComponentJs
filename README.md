# Blazor JavaScript Isolation; Side by Side .js with Component

.NET 5 Release Candidate 1 introduced JavaScript isolation in Blazor. Enabling developer to load and invoke ES modules. Unlike CSS isolation where you would create a component style as `ComponentName.razor.css` in the same location as the component, JavaScript isolation in Blazor works differently. At the time of writing, Blazor requires that all `.js` files be placed inside the `wwwroot` of your application. This limits the ability to better organize JavaScript files for components and more difficult to manage in large projects.

Let's dig into how to workaround some these limitations and manage our JavaScript file side-by-side with its component in the same directory structure with [rollup.js](https://rollupjs.org/).

[See complete post](https://www.emekaemego.com/posts/blazor-component-js/)

