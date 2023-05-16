import { createElement } from "../helpers/createElement";
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('.pre');

buttonEl.addEventListener('click', handleClick);

async function handleClick() {
  const cep = inputEl.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();

    console.log(data);
    const {logradouro, bairro, localidade, uf} = data;
    const infos = {logradouro, bairro, localidade, uf};
    preEl.appendChild(createElement('p', 'info', infos.logradouro));
    preEl.appendChild(createElement('p', 'info', infos.bairro));
    preEl.appendChild(createElement('p', 'info', infos.localidade));
    preEl.appendChild(createElement('p', 'info', infos.uf));
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
}
