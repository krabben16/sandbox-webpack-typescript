export const hello = (message: string): void => {
  document.body.innerHTML = `${message}`;
  log(message);
};

function log(message: string): void {
  console.log(`${message}を出力しました`);
}

export function piyo() {}
