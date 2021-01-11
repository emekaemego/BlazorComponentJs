# Blazor JavaScript Isolation; Side by Side .js with Component

This repository is a part of a blog post that demostrates how to organize component's JavaScript isolation file in the same folder.

[See the complete post here](https://www.emekaemego.com/posts/blazor-component-js/)

Blazor JavaScript isolation was introduced in .NET 5 Release Candidate 1. Enabling developer to load and invoke ES modules. Unlike CSS isolation where you would create a component style as `ComponentName.razor.css` in the same location as the component, JavaScript isolation in Blazor works differently. At the time of writing, Blazor requires that all `.js` files be placed inside the `wwwroot` of your application. This limits the ability to better organize JavaScript files for components, making it more difficult to manage in large projects.

Let's dig into how to workaround some of these limitations and manage our JavaScript file side-by-side with its component in the same directory structure.

