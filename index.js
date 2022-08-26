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

function createNewTeam() {
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
}

createNewTeam()
ciclo3 = newTeam
console.log(ciclo3)
