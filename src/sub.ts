export const setBodyInnerHtml = (message: string): void => {
  document.body.innerHTML = `${message}`;
  log(message);
}

const log = (message: string): void => {
  console.log(`${message}を出力しました`);
}
