import showdown from "showdown";

// Function to convert Markdown to HTML
const markdownToHtml = (markdown: string): string => {
    const classMap = {
        img: 'md-image'
    }

    const bindings = Object.keys(classMap)
        .map(key => ({
            type: 'output',
            regex: new RegExp(`<${key}(.*)>`, 'g'),
            // @ts-ignore
            replace: `<${key} class="${classMap[key]}" $1>`
        }));

    const converter = new showdown.Converter({
        tables: true,
        extensions: [...bindings]
    });

    return converter.makeHtml(markdown);
};

export {markdownToHtml}
