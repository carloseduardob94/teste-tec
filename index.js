import { ciclos } from './Students.js'

export class Aluno {
  constructor(name, workTogheter = []) {
    this.name = name
    this.workTogheter = workTogheter.filter(student => student !== name)
  }

  checkWorkTogheter(name) {
    return this.workTogheter.includes(name)
  }

  addWorkTeamMate(name) {
    name !== this.name &&
      !this.workTogheter.includes(name) &&
      this.workTogheter.push(name)
  }
}

let alunosCadastrados = []

for (const ciclo of Object.values(ciclos)) {
  for (const group of ciclo) {
    for (const student of group) {
      const studentAlReadyExist = alunosCadastrados.find(
        ({ name }) => name == student
      )
      if (!studentAlReadyExist) {
        const aluno = new Aluno(student, group)
        alunosCadastrados.push(aluno)
      }
      if (studentAlReadyExist) {
        for (let std of group) {
          studentAlReadyExist.addWorkTeamMate(std)
        }
      }
    }
  }
}

const studeents = alunosCadastrados

let newTeam = []
let ciclo3 = []

// function createNewTeam() {
//   let hits = 0
//   while (newTeam.length < 10) {
//     const raffle = Math.floor(Math.random() * alunosCadastrados.length)
//     const raffle2 = Math.floor(Math.random() * alunosCadastrados.length)

//     const aluno1 = alunosCadastrados[raffle]
//     const aluno2 = alunosCadastrados[raffle2]

//     if (hits == 20) {
//       newTeam = []
//       alunosCadastrados = studeents
//       hits = 0
//     }
//     if (raffle == raffle2) {
//       hits++
//     } else {
//       const workTogheter = aluno1.checkWorkTogheter(aluno2.name)
//       if (!workTogheter) {
//         alunosCadastrados = alunosCadastrados.filter(
//           aluno => aluno.name !== aluno1.name && aluno.name !== aluno2.name
//         )
//         const dupla = [aluno1.name, aluno2.name]
//         newTeam.push(dupla)
//       }
//     }
//   }
// }

class createHTML {
  constructor(root) {
    this.root = document.querySelector(root)
    this.section = this.root.querySelector('#new')

    this.update()
  }

  update() {
    this.removeAllP()
    this.buttonEvent()
  }

  buttonEvent() {
    const createBtn = this.root.querySelector('button')
    createBtn.addEventListener('click', () => {
      this.removeAllP()
      this.createNewTeam()
      this.createDiv()

      const teste = this.createDiv()
      this.section.append(teste)
      console.log(ciclo3)
    })
  }

  removeAllP() {
    const teams = this.root.querySelector('#new')
    teams.querySelectorAll('div').forEach(div => {
      div.remove()
    })
  }

  createDiv() {
    const div = document.createElement('div')

    const content = `
      <div class="div2">
        <p>${ciclo3[0][0]}</p>
        <p>${ciclo3[0][1]}</p>
      </div>
      <div class="div2">
        <p>${ciclo3[1][0]}</p>
        <p>${ciclo3[1][1]}</p>
      </div>
      <div class="div2">
        <p>${ciclo3[2][0]}</p>
        <p>${ciclo3[2][1]}</p>
      </div>
      <div class="div2">
        <p>${ciclo3[3][0]}</p>
        <p>${ciclo3[3][1]}</p>
      </div>
      <div class="div2">
        <p>${ciclo3[4][0]}</p>
        <p>${ciclo3[4][1]}</p>
      </div>
      <div class="div2">
        <p>${ciclo3[5][0]}</p>
        <p>${ciclo3[5][1]}</p>
      </div>
      <div class="div2">
        <p>${ciclo3[6][0]}</p>
        <p>${ciclo3[6][1]}</p>
      </div>
      <div class="div2">
        <p>${ciclo3[7][0]}</p>
        <p>${ciclo3[7][1]}</p>
      </div>
      <div class="div2">
        <p>${ciclo3[8][0]}</p>
        <p>${ciclo3[8][1]}</p>
      </div>
      <div class="div2">
        <p>${ciclo3[9][0]}</p>
        <p>${ciclo3[9][1]}</p>
      </div>
      `
    div.innerHTML = content
    return div
  }

  createNewTeam() {
    let hits = 0
    while (newTeam.length < 10) {
      const raffle = Math.floor(Math.random() * alunosCadastrados.length)
      const raffle2 = Math.floor(Math.random() * alunosCadastrados.length)

      const aluno1 = alunosCadastrados[raffle]
      const aluno2 = alunosCadastrados[raffle2]

      if (hits == 20) {
        newTeam = []
        alunosCadastrados = studeents
        hits = 0
      }
      if (raffle == raffle2) {
        hits++
      } else {
        const workTogheter = aluno1.checkWorkTogheter(aluno2.name)
        if (!workTogheter) {
          alunosCadastrados = alunosCadastrados.filter(
            aluno => aluno.name !== aluno1.name && aluno.name !== aluno2.name
          )
          const dupla = [aluno1.name, aluno2.name]
          newTeam.push(dupla)
        }
      }
    }
    ciclo3 = newTeam
    newTeam = []
  }
}
new createHTML('main')
