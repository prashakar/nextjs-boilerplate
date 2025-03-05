const currentYear = new Date().getFullYear();
const data = {
    sitename: "Sandip Baikare Blog",
    sitetagline: "Something great is on the way! ✨ 🔥",
    siteurl: "https://github.com/baikaresandip",
    sitelogo: "public/My Girl Beauty Bar Square Logo (no BG).png",
    title: "Coming Soon!",
    description: "",
    newsletterheading: "Stay tuned for our live updates!",
    copyrightText: `Copyright © ${currentYear} | Design and Developed By &nbsp;<a target="_blank" class="no-underline md:underline" href="https://github.com/baikaresandip">Baikare Sandip</a>`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: false, // make true to disable subscription form
    socialIcons: [
        {
            icon: "facebook",
            link: "https://www.facebook.com/61573879460172",
        },
        {
            icon: "instagram",
            link: "https://www.instagram.com/mygirlbeautybar/",
        },
    ],
    hide :{
        subscribeForm: false, // make true to disable subscription form
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
