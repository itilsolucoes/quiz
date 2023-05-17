import QuestaoModel from '../../../model/questao'
import questoes from '../bancoDeQuestoes'

export default (req,res) => {
    const idSelecionado = +req.query.id
console.log (idSelecionado)
    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

    if (unicaQuestaoOuNada.length ===1) {
        const questaoSelecionada = unicaQuestaoOuNada[0]
        res.status(200).json(questaoSelecionada.paraObjeto())
    } else {
    res.status(204).send()

    }
   
}