document.addEventListener("DOMContentLoaded", function () {
    const htmlInput = document.getElementById("htmlInput");
    const convertButton = document.getElementById("convertButton");
    const resultDiv = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const inputHtml = htmlInput.value;
        const convertedHtml = convertAliases(inputHtml);
        resultDiv.innerText = convertedHtml;
    });

    function convertAliases(inputHtml) {
        // Use regular expressions to replace spaces, hyphens, and special characters with underscores
        const convertedHtml = inputHtml.replace(/alias="([^"]+)"/g, function (match, alias) {
            const convertedAlias = alias.replace(/[\s\-._]+/g, "_");
            return `alias="${convertedAlias}"`;
        });

        return convertedHtml;
    }
});
