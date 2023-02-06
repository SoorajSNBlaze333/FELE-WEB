export const downloadFile = (filePath) => {
    return fetch(filePath)
      .then(response => response.blob())
      .then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting property values
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = filePath;
        alink.click();
      })
}