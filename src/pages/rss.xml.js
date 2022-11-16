import rss from '@astrojs/rss';

export const get = () => rss ({
    title: 'Antigua Recon | Blog',
    description: "Antigua Recon's Journey into Cyber Security",
    site: 'https://antiguarecon.netlify.app/',
    items: import.meta.glob('./**/*.md'),
    customData: `<language>en-us</language>`,
});