const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });

  return await res.json(); // возвращаем промис для отработки через цепочку then и трансформируем в json / await нужен для того, чтобы если json объект большой, мы предоставили время для компиляции
};

async function getResource(url) {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
}

export { postData };
export { getResource };
