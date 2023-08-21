
// Importa a classe Router do módulo 'router.js'
import { Router } from './router.js'

// Cria uma nova instância da classe Router
const router = new Router()

// Adiciona rotas e suas páginas correspondentes ao objeto router
router.add('/', '/pages/home.html')
router.add('/about', '/pages/about.html')
router.add('/contact', '/pages/contact.html')
router.add(404, '/pages/404.html')

// Inicializa o tratamento do roteamento para a rota atual
router.handle()

// Configuração do evento de popstate (quando a navegação do histórico é alterada)
window.onpopstate = () => router.handle()

// Define uma função global 'route' que chama o método 'route' do objeto router
window.route = () => router.route()