/*
    https://kimyhcj.tistory.com/263
    오픈 API 콜을 위함
*/
export default src => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.addEventListener("load", () => {
      resolve();
    });
    script.addEventListener("error", e => {
      reject(e);
    });
    document.head.appendChild(script);
  });
};
