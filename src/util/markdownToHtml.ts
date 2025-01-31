import showdown from "showdown";

// Function to convert Markdown to HTML
const markdownToHtml = (markdown: string): string => {
    const converter = new showdown.Converter({tables: true});

    return converter.makeHtml(markdown);
};

export {markdownToHtml}
