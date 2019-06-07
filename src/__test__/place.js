import { Selector } from 'testcafe'

fixture`Places list`.page`http://localhost:3000/`

const formSearchMaps = Selector('form')
const inputSearchMaps = formSearchMaps.find('input')
const buttonSubmit = Selector('button')
const selectPlaces = Selector('#place')
const optionsPlaces = selectPlaces.find('option')

test('performs a search for an address and verifies that there is a proper post in that region.', async t => {
  await t
    .typeText(inputSearchMaps, 'Rua Américo Brasiliense, São Paulo')
    .click(buttonSubmit)
    .click(selectPlaces)
    .click(optionsPlaces.withText('PIT STOP JOÃO DIAS'))
})
