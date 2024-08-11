# Assignment (Framna Hub listing page)

## General Information.
- Link to the page (HubSpot sandbox environment): [Framna Hub Listing](https://25686499.hs-sites-eu1.com/insights-hub)
- I managed to complete it **within 8 hours**, but I took a little extra time to write the README and upload the theme to GitHub.
### Vide Presentation
- [Main video](https://youtu.be/JJWNudQYMBA) ~12 minutes explains the integration with huspot and the process of creating a page.
- [Forgotten CSS explanation video](https://youtu.be/9RC3-vaj7V0) ~ 3 minutes to cover something I forgot to mention in Main Vide above.

*PS: I have not demonstrated the Responsivness of the page, but you can always visit page through phone or using Responsive design mode in Inspect tool.*

## Encountered Chalanges.
I've encountered a challenge with the Framna Sans font family. For some reason, I couldn't upload or configure it through the conventional method in the theme settings. To work around this, I uploaded the font files via the design manager into a newly created fonts folder. I then created a CSS file that defined the font faces and included that file in the main CSS file. This allowed me to use those font families in the development process.

Another challenge I encountered was that the provided designs lacked mobile versions of the layouts. This meant I had to do some guesswork, particularly with font sizes, padding and margins for mobile devices. I tested the page on my phone, and it seems to look okay, but of course, these kinds of things can always be refined further.

## Navigation module

[Navigation Module (link)](the-theme/modules/navigation.module)

The navigation is straightforward. I've used the conventional navigation setup available in HubSpot, and I also configured the logo through HubSpot’s branding section. This setup allows for flexibility—you can easily override the logo if you'd like a different version, perhaps a darker one, or a variation on another page. The company I’m working part-time has different logo variations depending on the product, so this flexibility is quite useful. For mobile, I've implemented a very simple classic burger menu that slides in from the right when clicked.

## The Hub Listing module

[Hub Listing Module (link)](the-theme/modules/the-hub-listing.module)

The Hub listing module consists of several components. At the top, there's the headline, followed by filters for topics and formats. Currently, I've only implemented the formats filter. When you click on the formats, different options appear, allowing you to filter the content. Clicking on one or more of these formats will update the tiles based on the tags associated with it.

As for the tiles themselves, when the page loads for the first time, it initially displays only the first four tiles. As you scroll down and reach the middle of the last tile, two more tiles will load, and this continues indefinitely, effectively creating an infinite scroll. The same behavior applies when filtering by formats—if you have more than four tiles filtered, additional tiles will load as you reach the middle of the last one, again creating an infinite scroll effect, even with filtered items.

## The Footer module

[Footer Module (link)](the-theme/modules/footer.module)

The footer is composed of two sections: the main footer at the bottom, which is black, and a footer banner above it, which is a green section displaying the "Crafting Products That Matter" message. This footer setup can be applied to any template, with the option to toggle the green banner section on or off depending on the page. The text, color, and background image of the banner can also be customized.

The bottom part of the footer allows for additional customization as well. For example, you can change the logo, overriding the default logo with an alternative if needed. Social links such as LinkedIn, Instagram, and Facebook can be added or removed as desired. The text in the footer is fully editable, except for the privacy policy section, where only the text and the destination link can be modified. Additionally, the two icons included in the footer can be added, removed, or changed as needed.
