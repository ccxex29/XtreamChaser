## About the Hierarchy

Let's call this directory's child `custom/` as the custom stylesheet root directory. 
It's unlikely we need to call any custom stylesheet library, so I broke stylesheets child directories 
into libraries and custom. Now, let's take a look into custom directory!

In this root, we can see the files that will be interfaced directly to Sass interpreter.
If we open the child directory named `essentials`, we will find things that may contain shared elements,
including variables, mixins, and classes. This directory is targeted by using `@use` on the Sass parent file.

## How to compile the SASS files into CSS

1. Install the latest version of Dart SASS (dart-sass) **This is the most updated official version of Sass**
2. Open the terminal and cd into this directory's child `custom/`
3. Execute `sass index.sass:index.css gallery.sass:gallery.css characters.sass:characters.css lore.sass:lore.css 
preregister.sass:preregister.css --watch` or `sass index.sass:index.css gallery.sass:gallery.css characters.sass:characters.css lore.sass:lore.css 
preregister.sass:preregister.css --watch --sourcemap` for browser live editing capability


