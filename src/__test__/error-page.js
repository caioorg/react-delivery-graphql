import { Selector } from 'testcafe'

fixture`Page without session`.page`http://localhost:3000/posto`

const errorSearchMaps = Selector('.error-message')

test('It does not access a page that does not have an active session yet and check if there is an error message on return.', async t => {
  await t.expect(Selector(errorSearchMaps)).ok()
})
