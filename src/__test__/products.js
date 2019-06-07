import { Selector } from 'testcafe'

fixture`Full Flow`.page`http://localhost:3000/`

const formSearchMaps = Selector('form')
const inputSearchMaps = formSearchMaps.find('input')
const buttonSubmit = Selector('button')
const selectPlaces = Selector('#place')
const optionsPlaces = selectPlaces.find('option')

test('Performs full flow', async t => {
  await t
    .typeText(inputSearchMaps, 'Rua Américo Brasiliense, São Paulo')
    .click(buttonSubmit)
    .click(selectPlaces)
    .click(optionsPlaces.withText('PIT STOP JOÃO DIAS'))
    .click(buttonSubmit)
    .expect(Selector('.cards').exists)
    .ok()
})
