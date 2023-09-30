document.addEventListener("DOMContentLoaded", function () {
    const htmlInput = document.getElementById("htmlInput");
    const convertButton = document.getElementById("convertButton");
    const output = document.getElementById("output");

    convertButton.addEventListener("click", function () {
        const inputHtml = htmlInput.value;
        const convertedHtml = convertAliases(inputHtml);
        output.value = convertedHtml; // Set the value of the textarea
    });

    function convertAliases(inputHtml) {
        const lines = inputHtml.split('\n');
        const convertedLines = lines.map(line => {
            const match = line.match(/alias="(.*?)"/);
            if (match) {
                const alias = match[1];
                const convertedAlias = alias.trim().replace(/[ -./\\]/g, '_');
                return line.replace(alias, convertedAlias);
            }
            return line;
        });
        return convertedLines.join('\n');
    }
});
