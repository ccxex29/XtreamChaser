# XtreamChaser Project Repository


### Project Outline
- [About XtreamChaser](#about-xtreamchaser)
- [Requirements Summar](#requirements-summary)
- [Project Hierarchy](#project-hierarchy)
- [Project Milestones](#project-milestones)
- [Other Documentations](#other-documentations)
- [Relevant Links](#relevant-links)
- [Project Team](#project-team)


## About XtreamChaser
XtreamChaser is a project given by Binus SLC for Human and Computer Interaction subject. This project has the maximum
of four team members. In the project, XtreamChaser is the name of a fighting game. Our task is to create a website for it
with several requirements.


## Requirements Summary
- A logo that represents a **game with *fighting* genre**.  
  The logo is created using **Adobe Photoshop CS3**, **ENSURE NO LAYER IS MERGED**
- Design the **blueprint** using **Adobe Photoshop CS3**.  
  The **homepage in the blueprint** contains **header, navigation, content, and footer** as its structure.
- The website provides **game information, game characters, game lores, and a gallery**.  
  New players are allowed to **pre-register beta-test**. 
- Website is **responsive** and **attractive, appealing, and fully functioning**.  
  Must use **5 kinds of CSS properties** and **jQuery**.  
  Must be **accessible** by using screen **800px width** (probably), with the help of **meta viewport** and 
  **media screen**
- Website consist of five main pages. **Home, gallery, characters, lore, and pre-registration**.  
  Navigateable using **drop-down navigation menu** using **CSS**.  
  - Home
    Contains **game information, image slideshow (game overview) using jQuery**.
  - Gallery
    Contains **gameplay images, game events (with descriptions)**.
  - Characters
    Contains **information detail, image, and name of the characters with background story**.
  - Lore
    Contains **lore information, images, and story**.
  - Pre-registration
    Contains **registration form that contains email, username, password, gender, date of birth, nation, and
    user terms agreement (5 validations using Javascript without Regex)**.
    
- Added from *guidelines*:
  - Design with the principles of Human and Computer Interaction. Be as **creative** but still **consistent**
  - Consider the **color, font, image, size, and layout** of the **logo and website**.
  - **All pages** should be created with the **same design**.
  - Use only **external CSS**. Inline CSS will not be scored.
  - Use **CSS box positioning**, instead of **table** for the **layout**.
  - Choose only **one language**, either **Indonesian** or **English**. 
  - Must be compatible with **Mozilla Firefox 22 and above** (latest stable version is 76).
  - Make it **available for desktop, tablet, and mobile phone**.
  - **Organize** the files
  - Include **references** (e.g. from website or book).

- Files that must be submitted:
  - Logo (\*.psd).
  - Web template for **homepage** (\*.psd).
  - Website (\*.html/\*.htm, \*.css, \*.js).
  - Other files in the project (including image, audio, video).
  - Documentation file **\*.DOC file** that contains references of additional files (image, audio, video, etc.).  
    Mention hidden creativities in the documentation.
    
    
## Project Hierarchy 
XtreamChaser is the root directory and the name of the project repository.  
XtreamChaser contains 3 sub-directories, some html files, and this README file.  
  

'images' subdirectory contains another 2 sub-directories that differentiates between images that are self made
and images that are obtained from external sources.  

'scripts' subdirectory contains another 2 subdirectories that differentiates between scripts that are made by the team
and scripts that are obtained from the internet as a library. Inside the 'custom', self-made script directory, there is 
another subdirectory named 'essentials' that is reserved for another scripts that can be shared among pages.  

'stylesheets' subdirectory contains another 2 subdirectories that differentiates between stylesheets that are made 
by the team and stylesheets that are obtained from the internet as a library. Inside the 'custom', self-made stylesheet 
directory, there is another subdirectory named 'essentials' that is reserved for another scripts that can be shared 
among pages. The 'essentials' subdirectory is *@use*d using Sass to the parent sass files that then compiled into css
files.


## Project Milestones
### First Stage
- [x] Create a repo and hierarchy for website files
- [x] Create the \.psd web template for the homepage
- [x] Design the \.psd and \.jpg website logo and obtain images for character images, stat icons, banner, and others
### Second Stage
- [x] Build up the skeleton (class, mixin, variable, function presets in JS and Sass)
- [x] Build up the header (menu contents, outline feature), footer (other links and website name)
### Third Stage
- [x] Build up the contents (incl. images) on each page (home, gallery, characters, lore, pre-registration)
- [x] Build up the specific styling and scripts for each element without animation
- [x] Add additional CSS3 and Javascript animations
### Final Stage
- [x] Fix bugs and work on optional plans
- [x] Work on the \.DOC documentation
- [x] Code cleanup


## Other Documentations
- [About Stylesheet Directory Hierarchy](stylesheets/README.md)


## Relevant Links
### Website Deployment
- `master` branch : [Github Pages](https://xchaser.femmund.com/)
### References
- [Bootstrap](https://getbootstrap.com/docs/)
- [SassLang](https://sass-lang.com/documentation/)
- [jQuery](https://api.jquery.com/)
- [Modernizr](https://modernizr.com/docs/)
- [Material Design](https://material.io/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [Favicon.io](https://favicon.io/favicon-converter/)
### Website Resources
#### Third Party Fonts
- [Google Fonts](https://fonts.google.com/)
- [Eurostile](https://www.cufonfonts.com/font/eurostile)
- [FontAwesome](https://fontawesome.com/)

#### Third Party Libraries
- [JQuery](https://api.jquery.com/)

#### Images
- [Tekken 7 Wallpaper (getwallpapers.com)](http://getwallpapers.com/wallpaper/full/7/4/f/1036686-tekken-7-wallpapers-1920x1080-samsung-galaxy.jpg)
- [Tekken 7 Jin Kazama vs Arcade Mode (YouTube)](https://www.youtube.com/watch?v=PjZpkQqc7fI)
- [Tekken 7 Akuma Wallpaper (myplaystationwallpapers.net)](https://www.myplaystationwallpapers.net/1920x1080/tekken-7-akuma-wallpaper/)
- [BBC World Service - The Why Factor, Dystopias (BBC)](https://www.bbc.co.uk/programmes/w3csyv0r)
- [Tekken Kazuya CG Work (videogamesblogger.com)](https://www.videogamesblogger.com/2014/08/21/tekken-7-characters-list.htm/tekken-7-kazuya-cg-artwork)
- [Tekken Tag Tournament 2 (trucoteca.com)](https://www.trucoteca.com/juegos/tekken-tag-tournament-2)
- [Revenge Comes Back Around in Tekken7's Opening (hardcoregamer.com)](https://hardcoregamer.com/2017/05/23/revenge-comes-back-around-in-tekken-7s-opening/258446/)
- [Tekken 7 Tier List (tierlytics.com)](https://www.tierlytics.com/tier-lists/tekken-7)
- [Tekken 7 Character Art (eventhubs.com)](https://www.eventhubs.com/imagegallery/2017/jun/03/tekken-7-character-art)
- [New Tekken 7 Characters Confirmed (cbsistatic.com)](https://www.gamespot.com/articles/new-tekken-7-characters-confirmed-see-them-in-acti/1100-6441873/)
- [The 15 Greatest Tekken Characters (cdkeys.com)](https://blog.cdkeys.com/15-greatest-tekken-characters/)
#### Icons
- [Stars](https://material.io)
- [Character Stats](https://www.flaticon.com/authors/freepik)
- [FontAwesome](https://fontawesome.com/)

## Project Team

<div align="center">
	<table>
		<tr>
			<td align="center">
				<a href="https://github.com/learnDD">
					<img src="https://avatars2.githubusercontent.com/u/42337500?s=460&v=4" alt="" width="100px">
					<br/>
					<p style="font-weight: 600; line-height: 1.2;"><b>Devin Djappy</b></p>
					<p style="font-weight: 600; line-height: 1.2;">2201747893</p>
				</a>
			</td>
			<td align="center">
				<a href="https://github.com/ccxex29">
					<img src="https://avatars2.githubusercontent.com/u/7277103?s=460&v=4" alt="" width="100px">
					<br/>
					<p style="font-weight: 600; line-height: 1.2;"><b>Louis Raymond</b></p>
					<p style="font-weight: 600; line-height: 1.2;">2201849535</p>
				</a>
			</td>
		</tr>
	</table>
</div>

***

__Note: What's written on this may not be up to date. Please check the last commit date to take the versions into account__

