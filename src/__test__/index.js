import { Selector } from 'testcafe'

fixture`Address search`.page`http://localhost:3000/`

const formSearchMaps = Selector('form')
const inputSearchMaps = formSearchMaps.find('input')
const submitSearchMaps = formSearchMaps.find('button')
const errorSearchMaps = formSearchMaps.find('.error-message')

test('check if there is an address entered and validate if there is a post', async t => {
  await t
    .typeText(inputSearchMaps, 'Rua Américo Brasiliense, São Paulo')
    .click(submitSearchMaps)
    .expect(Selector('select'))
    .ok()
})

test('performs an address validation, seeking an error return if not found.', async t => {
  await t
    .typeText(inputSearchMaps, '123456')
    .click(submitSearchMaps)
    .expect(Selector(errorSearchMaps).innerText)
    .eql('ENDEREÇO NÃO ENCONTRADO')
})
