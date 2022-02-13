export const jsonToString = (file: File): Promise<string> => {
  const fileReader = new FileReader();

  return new Promise((resolve) => {
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };

    fileReader.readAsText(file);
  });
};
