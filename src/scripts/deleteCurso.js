const btn = document.querySelector("#deletar");

btn.addEventListener("click", () => {
  // capturar os dados
  const curso = getDadosForm();
  // enviar os dados para API
  deleteDadosForm(curso);
});

function getDadosForm() {
  const inputId = document.querySelector("#id").value;
  return inputId;
}

const deleteDadosForm = async () => {
  const metodo = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  // const resposta =
  await fetch('http://localhost:8080/cursos/' + inputId, metodo)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}