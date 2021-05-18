import Teste from '@/controllers/teste'

test('testa isso', () => {
  const tests = new Teste(2)

  tests.run()
})
